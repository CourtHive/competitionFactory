import { generateTournamentWithParticipants } from '../../../mocksEngine/generators/generateTournamentWithParticipants';
import { structureAssignedDrawPositions } from '../../getters/positionsGetter';
import { getDrawStructures } from '../../getters/findStructure';
import tournamentEngine from '../../../tournamentEngine';
import { instanceCount } from '../../../utilities';
import drawEngine from '../../../drawEngine';

import {
  ELIMINATION,
  FIRST_ROUND_LOSER_CONSOLATION,
} from '../../../constants/drawDefinitionConstants';
import { SINGLES } from '../../../constants/eventConstants';
import { SUCCESS } from '../../../constants/resultConstants';
import { BYE } from '../../../constants/matchUpStatusConstants';

it('correctly assigns positions for Elimination structure', () => {
  const drawSize = 32;
  const participantsCount = 17;
  const { tournamentRecord } = generateTournamentWithParticipants({
    participantsCount,
  });
  const { participants } = tournamentRecord;
  tournamentEngine.setState(tournamentRecord);

  const event = {
    eventType: SINGLES,
  };

  let result = tournamentEngine.addEvent({ event });
  const { event: createdEvent } = result;
  const { eventId } = createdEvent;

  const participantIds = participants.map((p) => p.participantId);
  result = tournamentEngine.addEventEntries({ eventId, participantIds });

  const { drawDefinition } = tournamentEngine.generateDrawDefinition({
    eventId,
    drawSize,
    matchUpFormat: 'SET3-S:6/TB7',
    drawType: ELIMINATION,
  });
  result = tournamentEngine.addDrawDefinition({ eventId, drawDefinition });
  expect(result).toEqual(SUCCESS);

  drawEngine.setState(drawDefinition);

  const {
    structures: [structure],
  } = getDrawStructures({ drawDefinition });

  result = structureAssignedDrawPositions({ drawDefinition, structure });
  expect(result.assignedPositions.length).toEqual(32);
  expect(result.allPositionsAssigned).toEqual(true);
  expect(result.byePositions.length).toEqual(15);
});

it.only('correctly assigns BYE positions in consolation structure', () => {
  const drawSize = 32;
  const participantsCount = 17;
  const { tournamentRecord } = generateTournamentWithParticipants({
    participantsCount,
  });
  const { participants } = tournamentRecord;
  tournamentEngine.setState(tournamentRecord);

  const event = {
    eventName: 'First Round Loser Consolation',
    eventType: SINGLES,
  };

  let result = tournamentEngine.addEvent({ event });
  const { event: createdEvent } = result;
  const { eventId } = createdEvent;

  const participantIds = participants.map((p) => p.participantId);
  result = tournamentEngine.addEventEntries({ eventId, participantIds });

  const { drawDefinition } = tournamentEngine.generateDrawDefinition({
    eventId,
    drawSize,
    matchUpFormat: 'SET3-S:6/TB7',
    drawType: FIRST_ROUND_LOSER_CONSOLATION,
  });
  result = tournamentEngine.addDrawDefinition({ eventId, drawDefinition });
  expect(result).toEqual(SUCCESS);

  drawEngine.setState(drawDefinition);

  const {
    structures: [mainStructure, consolationStructure],
  } = getDrawStructures({ drawDefinition });

  result = structureAssignedDrawPositions({
    drawDefinition,
    structure: mainStructure,
  });
  expect(result.assignedPositions.length).toEqual(32);
  expect(result.allPositionsAssigned).toEqual(true);
  expect(result.byePositions.length).toEqual(15);

  result = structureAssignedDrawPositions({
    drawDefinition,
    structure: consolationStructure,
  });
  expect(result.assignedPositions.length).toEqual(15);
  expect(result.allPositionsAssigned).toEqual(false);
  expect(result.byePositions.length).toEqual(15);

  const { matchUps } = tournamentEngine.allTournamentMatchUps({
    matchUpFilters: { structureIds: [consolationStructure.structureId] },
  });
  const finalMatchUp = matchUps.find(
    ({ finishingRound }) => finishingRound === 1
  );
  console.log(finalMatchUp.drawPositions);
  expect(finalMatchUp.matchUpStatus).toEqual(BYE);

  let matchUpStatuses = matchUps.map(({ matchUpStatus }) => matchUpStatus);
  console.log(instanceCount(matchUpStatuses));
  // expect(instanceCount(matchUpStatuses)[BYE]).toEqual(3);
  // expect(matchUps.length).toEqual(3);
  /*
  const { roundMatchUps } = drawEngine.getRoundMatchUps(consolationStructure);

  // in this case there is only one participant going to the consolation structure
  // ... so all consolation matchUps have matchUpStatus: BYE
  Object.keys(roundMatchUps).forEach((roundNumber) => {
    const uniqueMatchUpStatuses = unique(
      roundMatchUps[roundNumber].map((matchUp) => matchUp.matchUpStatus)
    );
    expect(uniqueMatchUpStatuses.length).toEqual(1);
    expect(uniqueMatchUpStatuses[0]).toEqual(BYE);
  });
  */
});

it('correctly assigns BYE positions in consolation structure', () => {
  const drawSize = 8;
  const participantsCount = 5;
  const { tournamentRecord } = generateTournamentWithParticipants({
    participantsCount,
  });
  const { participants } = tournamentRecord;
  tournamentEngine.setState(tournamentRecord);

  const event = {
    eventName: 'First Round Loser Consolation',
    eventType: SINGLES,
  };

  let result = tournamentEngine.addEvent({ event });
  const { event: createdEvent } = result;
  const { eventId } = createdEvent;

  const participantIds = participants.map((p) => p.participantId);
  result = tournamentEngine.addEventEntries({ eventId, participantIds });

  const { drawDefinition } = tournamentEngine.generateDrawDefinition({
    eventId,
    drawSize,
    matchUpFormat: 'SET3-S:6/TB7',
    drawType: FIRST_ROUND_LOSER_CONSOLATION,
  });
  result = tournamentEngine.addDrawDefinition({ eventId, drawDefinition });
  expect(result).toEqual(SUCCESS);

  drawEngine.setState(drawDefinition);

  const {
    structures: [mainStructure, consolationStructure],
  } = getDrawStructures({ drawDefinition });

  result = structureAssignedDrawPositions({
    drawDefinition,
    structure: mainStructure,
  });
  expect(result.assignedPositions.length).toEqual(8);
  expect(result.allPositionsAssigned).toEqual(true);
  expect(result.byePositions.length).toEqual(3);

  const { matchUps } = tournamentEngine.allTournamentMatchUps({
    matchUpFilters: { structureIds: [consolationStructure.structureId] },
  });
  const finalMatchUp = matchUps.find(
    ({ finishingRound }) => finishingRound === 1
  );
  expect(finalMatchUp.matchUpStatus).toEqual(BYE);

  result = structureAssignedDrawPositions({
    drawDefinition,
    structure: consolationStructure,
  });
  expect(result.assignedPositions.length).toEqual(3);
  expect(result.allPositionsAssigned).toEqual(false);
  expect(result.byePositions.length).toEqual(3);

  let matchUpStatuses = matchUps.map(({ matchUpStatus }) => matchUpStatus);
  expect(instanceCount(matchUpStatuses)[BYE]).toEqual(3);
  expect(matchUps.length).toEqual(3);
});
