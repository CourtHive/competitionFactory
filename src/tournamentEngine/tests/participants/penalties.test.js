import { tournamentEngine } from '../..';
import { tournamentRecordWithParticipants } from '../primitives/generateTournament';

import { penaltyConstants } from '../../../constants/penaltyConstants';
const { BALL_ABUSE } = penaltyConstants;

it('can add, remove, and edit penalties for participants', () => {
  const { tournamentRecord } = tournamentRecordWithParticipants({
    participantsCount: 100,
  });
  tournamentEngine.setState(tournamentRecord);

  const participants = tournamentRecord.participants;

  const { participantId } = participants[0];
  const { participant } = tournamentEngine.findParticipant({ participantId });
  expect(participant.participantId).toEqual(participantId);

  const createdAt = new Date().toISOString();

  const penaltyData = {
    refereeParticipantId: undefined,
    participantIds: [participantId],
    penaltyType: BALL_ABUSE,
    matchUpId: 'boo',
    createdAt,
    notes: 'Hit ball into sea',
  };
  let result = tournamentEngine.addPenalty(penaltyData);
  const { penaltyId } = result;
  expect(result.success).toEqual(true);

  let { penalties } = tournamentEngine.getTournamentPenalties();
  expect(penalties.length).toEqual(1);

  const notes = 'Hit ball into spectator';
  const modifications = { notes };
  result = tournamentEngine.modifyPenalty({ penaltyId, modifications });
  expect(result.penalty.notes).toEqual(notes);

  result = tournamentEngine.removePenalty({ penaltyId });
  expect(result.success).toEqual(true);

  ({ penalties } = tournamentEngine.getTournamentPenalties());
  expect(penalties.length).toEqual(0);
});