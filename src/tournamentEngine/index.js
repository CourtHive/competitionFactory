import { UUID } from '../utilities';
import { makeDeepCopy } from '../utilities';
import { drawEngine } from '../drawEngine';
import { auditEngine } from '../auditEngine';

import { findEvent } from './getters/eventGetter';
import eventGovernor from './governors/eventGovernor';
import queryGovernor from './governors/queryGovernor';
import venueGovernor from './governors/venueGovernor';
import scheduleGovernor from './governors/scheduleGovernor';
import tournamentGovernor from './governors/tournamentGovernor';
import participantGovernor from './governors/participantGovernor';
import definitionTemplate from './generators/tournamentRecordTemplate';

import { SUCCESS } from '../constants/resultConstants';

let devContext;
let errors = [];
let tournamentRecord;

function newTournamentRecord(props) {
  if (!props.tournamentId) Object.assign(props, { tournamentId: UUID() });
  const template = definitionTemplate(props);
  return Object.assign({}, template, props);
}

function flushErrors() {
  errors = [];
}

function setState(tournament) {
  if (typeof tournament !== 'object') return { error: 'Invalid Object' };
  const tournamentId =
    tournament.unifiedTournamentId?.tournamentId || tournament.tournamentId;
  if (!tournamentId) return { error: 'Missing tournamentId' };
  tournamentRecord = makeDeepCopy(tournament);
  return Object.assign({ tournamentId }, SUCCESS);
}

export const tournamentEngine = (function() {
  const fx = {
    getState: () => makeDeepCopy(tournamentRecord),
    getAudit: () => {
      const auditTrail = auditEngine.getState();
      auditEngine.reset();
      return auditTrail;
    },

    load: tournament => setState(tournament),

    newTournamentRecord: (props = {}) => {
      flushErrors();
      tournamentRecord = newTournamentRecord(props);
      const tournamentId = tournamentRecord.unifiedTournamentId?.tournamentId;
      return Object.assign({ tournamentId }, SUCCESS);
    },
  };

  fx.flushErrors = () => {
    flushErrors();
    return fx;
  };
  fx.setState = tournament => {
    const result = setState(tournament);
    if (result && result.error) errors.push(result.error);
    return fx;
  };
  fx.devContext = isDev => {
    devContext = isDev;
    drawEngine.devContext(isDev);
    auditEngine.devContext(isDev);
    return fx;
  };

  importGovernors([
    queryGovernor,
    eventGovernor,
    venueGovernor,
    scheduleGovernor,
    tournamentGovernor,
    participantGovernor,
  ]);

  return fx;

  // enable Middleware
  function engineInvoke(fx, params) {
    if (params) {
      const { drawId } = params || (params.matchUp && params.matchUp.drawId);

      if (drawId) {
        const { event, drawDefinition } = findEvent({
          tournamentRecord,
          drawId,
        });
        const { errors: drawEngineErrors } = drawEngine.setState(
          drawDefinition
        );
        if (drawEngineErrors) errors = errors.concat(drawEngineErrors);
        params = Object.assign({}, params, { drawDefinition, event });
      } else if (params.eventId && !params.event) {
        const { event } = findEvent({
          tournamentRecord,
          eventId: params.eventId,
        });
        if (event) {
          params = Object.assign({}, params, { event });
        }
      }
    }

    return fx({
      ...params,
      devContext,
      drawEngine,
      auditEngine,
      tournamentRecord,
    });
  }

  function importGovernors(governors) {
    governors.forEach(governor => {
      Object.keys(governor).forEach(key => {
        fx[key] = params => {
          if (devContext) {
            return engineInvoke(governor[key], params);
          } else {
            try {
              return engineInvoke(governor[key], params);
            } catch (err) {
              console.log('%c ERROR', 'color: orange', { err });
            }
          }
        };
      });
    });
  }
})();

export default tournamentEngine;
