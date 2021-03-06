import { findStructure } from '../../getters/findStructure';
import { getAllDrawMatchUps } from '../../getters/getMatchUps/drawMatchUps';
import { findMatchUp } from '../../getters/getMatchUps/findMatchUp';
import { positionTargets } from '../positionGovernor/positionTargets';

export function addGoesTo({
  drawDefinition,
  mappedMatchUps,
  inContextDrawMatchUps,
}) {
  const { matchUps: inContextMatchUps } = getAllDrawMatchUps({
    drawDefinition,
    inContext: true,
    mappedMatchUps,
    includeByeMatchUps: true,
  });

  inContextDrawMatchUps = inContextDrawMatchUps || inContextMatchUps || [];

  inContextDrawMatchUps.forEach((inContextMatchUp) => {
    const { matchUpId, structureId } = inContextMatchUp;
    const { structure } = findStructure({ drawDefinition, structureId });
    const targetData = positionTargets({
      matchUpId,
      structure,
      drawDefinition,
      inContextDrawMatchUps,
    });
    const { winnerMatchUp, loserMatchUp } = targetData.targetMatchUps;
    const winnerGoesTo = winnerMatchUp?.matchUpId;
    const loserGoesTo = loserMatchUp?.matchUpId;
    const { matchUp } = findMatchUp({
      drawDefinition,
      mappedMatchUps,
      matchUpId,
    });
    Object.assign(matchUp, { winnerGoesTo, loserGoesTo });
  });
}
