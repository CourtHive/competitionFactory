import { getAllStructureMatchUps } from './getAllStructureMatchUps';
import { getMatchUp } from '../../accessors/matchUpAccessor/matchUps';
import { getDrawStructures } from '../findStructure';
import { makeDeepCopy } from '../../../utilities';
import {
  MISSING_DRAW_DEFINITION,
  MISSING_MATCHUP_ID,
} from '../../../constants/errorConditionConstants';

/*
  public version of findMatchUp
*/
export function publicFindMatchUp(props) {
  Object.assign(props, { inContext: true });
  return { matchUp: makeDeepCopy(findMatchUp(props).matchUp) };
}

/*
  function to find a matchUp within a draw
*/
export function findMatchUp({
  drawDefinition,
  tournamentParticipants,
  mappedMatchUps,
  matchUpId,
  inContext,
}) {
  if (!drawDefinition) return { error: MISSING_DRAW_DEFINITION };
  if (!matchUpId) return { error: MISSING_MATCHUP_ID };

  const { structures } = getDrawStructures({ drawDefinition });
  const { matchUp, structure } = structures.reduce((result, structure) => {
    const { matchUps } = getAllStructureMatchUps({
      tournamentParticipants,
      drawDefinition,
      mappedMatchUps,
      inContext,
      structure,
    });
    const { matchUp } = getMatchUp({ matchUps, matchUpId });
    return matchUp ? { matchUp, structure } : result;
  }, {});

  return { matchUp, structure };
}
