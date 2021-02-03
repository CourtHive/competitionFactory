import {
  CONSOLATION,
  MAIN,
  PLAY_OFF,
  QUALIFYING,
} from '../../constants/drawDefinitionConstants';

/**
 * Sorting function to arrange matchUps by stage, stageSequence, roundNumber, roundPosition (where applicable)
 * - Useful for automatically scoring all matchUps in connected draw structures
 * - Useful for visualizing the progression of drawPositions through rounds
 *
 * @param {object} a - matchUp object
 * @param {object} b - matchUp object
 *
 */
export function matchUpSort(a, b) {
  return (
    stageDifference(a, b) ||
    (a.stageSequence || 0) - (b.stageSequence || 0) ||
    a.roundNumber - b.roundNumber ||
    (a.roundPosition || 0) - (b.roundPosition || 0)
  );
}

function stageDifference(a, b) {
  const stageOrder = {
    [QUALIFYING]: 1,
    [MAIN]: 2,
    [PLAY_OFF]: 3,
    [CONSOLATION]: 4,
  };
  return (stageOrder[a.stage] || 0) - (stageOrder[b.stage] || 0);
}