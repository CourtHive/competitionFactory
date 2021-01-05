import { findStructure } from './findStructure';
import { getPositionAssignments } from './positionsGetter';
import { getAllStructureMatchUps } from './getMatchUps/getAllStructureMatchUps';

import { countValues, numericSort } from '../../utilities';
import { CONTAINER } from '../../constants/drawDefinitionConstants';

// active drawPositions occur more than once in the matchUps of a structure,
// OR are paired with active drawPositions in the first round
export function structureActiveDrawPositions({ drawDefinition, structureId }) {
  const matchUpFilters = { isCollectionMatchUp: false };
  const { structure } = findStructure({ drawDefinition, structureId });
  const { matchUps } = getAllStructureMatchUps({
    drawDefinition,
    structure,
    matchUpFilters,
  });
  const { positionAssignments } = getPositionAssignments({
    structure,
    drawDefinition,
  });
  const drawPositions = []
    .concat(...matchUps.map((matchUp) => matchUp.drawPositions || []))
    .filter((f) => f)
    .sort(numericSort);
  const byeDrawPositions = positionAssignments
    .filter((assignment) => assignment.bye)
    .map((assignment) => assignment.drawPosition);
  const byePairedPositions = byeDrawPositions
    .map(getByePairedPosition)
    .flat(Infinity);

  if (structure.structureType === CONTAINER) {
    const relevantMatchUps = matchUps.filter(
      (matchUp) => matchUp.score?.sets?.length || matchUp.winningSide
    );
    const activeDrawPositions = []
      .concat(...relevantMatchUps.map((matchUp) => matchUp.drawPositions || []))
      .filter((f) => f)
      .sort(numericSort);

    const inactiveDrawPositions = drawPositions.filter(
      (drawPosition) => !activeDrawPositions.includes(drawPosition)
    );

    return {
      activeDrawPositions,
      inactiveDrawPositions,
      advancedDrawPositions: [],
      pairedDrawPositions: [],
      byeDrawPositions,
    };
  } else {
    // now remove ONE INSTANCE of byePairedPositions from drawPositions
    // so that BYE advanced participants are not seen as active
    const instancesToRemove = [].concat(
      ...byePairedPositions,
      ...byeDrawPositions
    );
    instancesToRemove.forEach((drawPosition) => {
      const index = drawPositions.indexOf(drawPosition);
      drawPositions.splice(index, 1);
    });

    const positionCounts = countValues(drawPositions);

    const advancedDrawPositions = Object.keys(positionCounts)
      .reduce((active, key) => {
        return +key > 1 ? active.concat(...positionCounts[key]) : active;
      }, [])
      .map((p) => parseInt(p));

    // pairedDrawPositions are those positions which are paired with a position which has advanced
    const pairedDrawPositions = [].concat(
      ...advancedDrawPositions.map(getPairedDrawPosition)
    );
    const activeDrawPositions = []
      .concat(
        ...advancedDrawPositions,
        ...pairedDrawPositions
        // ...activeByeDrawPositions
      )
      .filter((f) => f);

    const inactiveDrawPositions = drawPositions.filter(
      (drawPosition) => !activeDrawPositions.includes(drawPosition)
    );

    const activeByeDrawPositions = byeDrawPositions.filter((drawPosition) =>
      activeDrawPositions.includes(drawPosition)
    );

    return {
      activeDrawPositions,
      activeByeDrawPositions,
      inactiveDrawPositions,
      advancedDrawPositions,
      pairedDrawPositions,
      byeDrawPositions,
      structure,
    };
  }

  function getPairedDrawPosition(drawPosition) {
    return matchUps
      .filter(({ roundNumber }) => roundNumber === 1)
      .reduce((pairedDrawPosition, currentMatchup) => {
        return currentMatchup.drawPositions?.includes(drawPosition)
          ? currentMatchup.drawPositions.filter(
              (dp) => dp && dp !== drawPosition
            )
          : pairedDrawPosition;
      }, undefined);
  }

  function getByePairedPosition(drawPosition) {
    return matchUps
      .reduce((drawPositions, currentMatchup) => {
        return currentMatchup.drawPositions?.includes(drawPosition)
          ? drawPositions.concat(...currentMatchup.drawPositions)
          : drawPositions;
      }, [])
      .filter((dp) => dp && dp !== drawPosition);
  }
}
