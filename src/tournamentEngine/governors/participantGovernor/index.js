import { rankByRatings } from './rankByRatings';
import { mergeParticipants } from './mergeParticipants';
import { deleteParticipants } from './deleteParticipants';
import { getPairedParticipant } from './getPairedParticipant';
import { addParticipant, addParticipants } from './addParticipants';
import { getParticipantIdFinishingPositions } from './finishingPositions';
import { getTournamentParticipants } from '../../getters/participants/getTournamentParticipants';
import { getParticipantEventDetails } from '../../getters/participants/getParticipantEventDetails';
import { modifyIndividualParticipantIds } from './groupings/modifyIndividualParticipantIds';
import { participantMembership } from '../../getters/participants/participantMembership';
import { generateTeamsFromParticipantAttribute } from '../../generators/teamsGenerator';
import { addIndividualParticipantIds } from './groupings/addIndividualParticipantIds';
import { publicFindParticipant } from '../../getters/participants/participantGetter';
import { modifyParticipantsSignInStatus } from './modifyParticipantsSignInStatus';
import { createGroupParticipant } from './groupings/createGroupParticipant';
import { modifyParticipantOtherName } from './modifyParticipantOtherName';
import { modifyParticipantName } from './modifyParticipantName';
import { setParticipantScaleItems } from './scaleItems';
import { setParticipantScaleItem } from './scaleItems';
import { modifyParticipant } from './modifyParticipant';
import {
  removeIndividualParticipantIds,
  removeParticipantIdsFromAllTeams,
} from './groupings/removeIndividualParticipantIds';
import {
  addPenalty,
  modifyPenalty,
  removePenalty,
  getTournamentPenalties,
} from './participantPenalties';

const participantGovernor = {
  addPenalty,
  modifyPenalty,
  removePenalty,
  getTournamentPenalties,

  addParticipant,
  addParticipants,
  deleteParticipants,
  createGroupParticipant,

  addIndividualParticipantIds,
  removeIndividualParticipantIds,
  modifyIndividualParticipantIds,
  removeParticipantIdsFromAllTeams,
  participantMembership,

  generateTeamsFromParticipantAttribute,

  rankByRatings,
  getParticipantIdFinishingPositions,

  modifyParticipant,
  modifyParticipantName,
  modifyParticipantOtherName,

  mergeParticipants,
  getPairedParticipant,
  setParticipantScaleItem,
  setParticipantScaleItems,
  modifyParticipantsSignInStatus,

  getParticipantEventDetails,
  findParticipant: publicFindParticipant,
  getTournamentParticipants,
};

export default participantGovernor;
