import { removeDirectedParticipants } from './removeDirectedParticipants';
import { attemptToSetMatchUpStatusBYE } from './attemptToSetMatchUpStatusBYE';
import { addNotice, getDevContext } from '../../../global/globalState';
import {
  isDirectingMatchUpStatus,
  isNonDirectingMatchUpStatus,
} from './checkStatusType';

import {
  BYE,
  DOUBLE_WALKOVER,
  TO_BE_PLAYED,
} from '../../../constants/matchUpStatusConstants';
import {
  INVALID_MATCHUP_STATUS,
  UNRECOGNIZED_MATCHUP_STATUS,
} from '../../../constants/errorConditionConstants';
import { SUCCESS } from '../../../constants/resultConstants';

export function attemptToSetMatchUpStatus(props) {
  const { matchUp, structure, matchUpStatus, matchUpStatusCodes } = props;

  if (matchUp.winningSide) {
    if (matchUpStatus === BYE) {
      return { error: INVALID_MATCHUP_STATUS, matchUpStatus };
    } else if (isDirectingMatchUpStatus({ matchUpStatus })) {
      matchUp.matchUpStatus = matchUpStatus;
      matchUp.matchUpStatusCodes = matchUpStatusCodes;
    } else if (isNonDirectingMatchUpStatus({ matchUpStatus })) {
      // only possible to remove winningSide if neither winner
      // nor loser has been directed further into target structures
      const { errors: participantDirectionErrors } = removeDirectedParticipants(
        props
      );

      if (participantDirectionErrors) {
        return { error: participantDirectionErrors };
      }
      matchUp.matchUpStatus = matchUpStatus || TO_BE_PLAYED;
      matchUp.matchUpStatusCodes = matchUpStatusCodes;
    } else {
      return { error: UNRECOGNIZED_MATCHUP_STATUS };
    }
  } else if (isNonDirectingMatchUpStatus({ matchUpStatus })) {
    matchUp.matchUpStatus = matchUpStatus || TO_BE_PLAYED;
    matchUp.matchUpStatusCodes = matchUpStatusCodes;
  } else if (matchUpStatus === BYE) {
    const result = attemptToSetMatchUpStatusBYE({ matchUp, structure });
    if (result.error) return result;
  } else {
    if (isDirectingMatchUpStatus({ matchUpStatus })) {
      if (matchUpStatus === DOUBLE_WALKOVER) {
        matchUp.matchUpStatus = matchUpStatus;
        matchUp.matchUpStatusCodes = matchUpStatusCodes;
        if (getDevContext()) {
          console.log('advance participants which encounter DOUBLE_WALKOVER');
        }
      } else {
        return { error: INVALID_MATCHUP_STATUS, matchUpStatus };
      }
    } else {
      return { error: UNRECOGNIZED_MATCHUP_STATUS };
    }
  }

  addNotice({ topic: 'modifyMatchUp', payload: { matchUp } });

  return SUCCESS;
}
