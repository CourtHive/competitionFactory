import { eventTemplate } from '../../../tournamentEngine/generators/eventTemplate';

import { EVENT_EXISTS } from '../../../constants/errorConditionConstants';
import { SUCCESS } from '../../../constants/resultConstants';
import { UUID } from '../../../utilities';

export function addEvent({ tournamentRecord, event }) {
  if (!tournamentRecord.events) tournamentRecord.events = [];

  // set default startDate, endDate based on tournamentRecord
  const { startDate, endDate } = tournamentRecord;

  const eventRecord = Object.assign(
    {},
    eventTemplate(),
    { startDate, endDate },
    event
  );
  if (!eventRecord.eventId) eventRecord.eventId = UUID();

  const eventExists = tournamentRecord.events.reduce((exists, event) => {
    return exists || event.eventId === eventRecord.eventId;
  }, undefined);

  if (!eventExists) {
    tournamentRecord.events.push(eventRecord);
    return Object.assign({}, { event: eventRecord }, SUCCESS);
  } else {
    return { error: EVENT_EXISTS };
  }
}
