import {
  allTournamentMatchUps,
  tournamentMatchUps,
  allEventMatchUps,
  allDrawMatchUps,
  eventMatchUps,
  drawMatchUps,
} from '../../getters/matchUpsGetter';

import { getParticipantScaleItem } from './getParticipantScaleItem';
import { getEventProperties } from './getEventProperties';
import { getParticipantSignInStatus } from './signInStatus';
import { bulkUpdatePublishedEventIds } from './publishState';
import { matchUpActions } from '../../getters/matchUpActions';
import { getEvent, getEvents } from '../../getters/eventGetter';
import { getVenues, findVenue } from '../../getters/venueGetter';
import { getCourts, publicFindCourt } from '../../getters/courtGetter';
import { participantScaleItem } from '../../accessors/participantScaleItem';
import {
  findEventExtension,
  findTournamentExtension,
  findParticipantExtension,
  findDrawDefinitionExtension,
} from './extensionQueries';

import {
  getEventTimeItem,
  getTournamentTimeItem,
  getParticipantTimeItem,
  getDrawDefinitionTimeItem,
} from './timeItems';

import { publicFindMatchUp } from '../../getters/matchUpsGetter';
import { getPolicyDefinition } from './getPolicyDefinition';
import { makeDeepCopy } from '../../../utilities';
import { credits } from '../../../fixtures/credits';
import { positionActions } from './positionQueries';
import { getMatchUpFormat } from '../../getters/getMatchUpFormat';

import { getMatchUpScheduleDetails as drawEngineGetMatchUpScheduleDetails } from '../../../drawEngine/accessors/matchUpAccessor/matchUpScheduleDetails';
import { getPositionAssignments } from '../../getters/getPositionAssignments';

function getDrawDefinition({ drawDefinition }) {
  return { drawDefinition: makeDeepCopy(drawDefinition) };
}

const queryGovernor = {
  allTournamentMatchUps,
  tournamentMatchUps,
  allEventMatchUps,
  allDrawMatchUps,
  eventMatchUps,
  drawMatchUps,
  credits,

  getEvent,
  getEvents,

  findEventExtension,
  findTournamentExtension,
  findParticipantExtension,
  findDrawDefinitionExtension,

  getMatchUpFormat,
  getDrawDefinition,
  getEventProperties,
  getPositionAssignments,

  getVenues,
  findVenue,
  getCourts,
  findCourt: publicFindCourt,

  getEventTimeItem,
  getTournamentTimeItem,
  getParticipantTimeItem,
  getDrawDefinitionTimeItem,

  bulkUpdatePublishedEventIds,

  matchUpActions,
  positionActions,
  findMatchUp: publicFindMatchUp,

  participantScaleItem,
  getParticipantScaleItem,
  getParticipantSignInStatus,

  getPolicyDefinition,

  // pass through accessors
  getMatchUpScheduleDetails: drawEngineGetMatchUpScheduleDetails,
};

export default queryGovernor;
