import { getAvailablePlayoffRounds } from './getAvailablePlayoffRounds';
import { playoff } from '../../generators/playoffStructures';
import { getSourceRounds } from './getSourceRounds';

import { INVALID_VALUES } from '../../../constants/errorConditionConstants';
import { SUCCESS } from '../../../constants/resultConstants';
import {
  LOSER,
  PLAY_OFF,
  TOP_DOWN,
} from '../../../constants/drawDefinitionConstants';

/**
 *
 * @param {object} drawDefinition - passed in automatically by drawEngine
 * @param {string} structureId - id of structure to which playoff structures are to be added
 * @param {number[]} roundNumbers - source roundNumbers which will feed target structures
 * @param {number[]} playoffPositions - positions to be played off
 *
 */
export function addPlayoffStructures(props) {
  const {
    playoffRounds: availablePlayoffRounds,
    playoffRoundsRanges: availablePlayoffRoundsRanges,
    error: playoffRoundsError,
  } = getAvailablePlayoffRounds(props);
  if (playoffRoundsError) return { error: playoffRoundsError };

  const {
    playoffSourceRounds,
    playoffRoundsRanges,
    playoffPositionsReturned,
    error: sourceRoundsError,
  } = getSourceRounds(props);
  if (sourceRoundsError) return { error: sourceRoundsError };

  const {
    roundNumbers,
    drawDefinition,
    playoffPositions,
    structureId: sourceStructureId,
  } = props;

  if (roundNumbers) {
    if (!Array.isArray(roundNumbers))
      return { error: INVALID_VALUES, roundNumbers };
    roundNumbers.forEach((roundNumber) => {
      if (!availablePlayoffRounds.includes(roundNumber))
        return { error: INVALID_VALUES, roundNumber };
    });
  }

  if (playoffPositions) {
    playoffPositions.forEach((playoffPosition) => {
      if (!playoffPositionsReturned.includes(playoffPosition))
        return { error: INVALID_VALUES, playoffPosition };
    });
  }

  const sourceRounds = roundNumbers || playoffSourceRounds;
  const roundsRanges = roundNumbers
    ? availablePlayoffRoundsRanges
    : playoffRoundsRanges;

  let result;
  const newLinks = [];
  sourceRounds.forEach((roundNumber) => {
    const roundInfo = roundsRanges.find(
      (roundInfo) => roundInfo.roundNumber === roundNumber
    );
    const drawSize = roundInfo.finishingPositions.length;
    const finishingPositionOffset =
      Math.min(...roundInfo.finishingPositions) - 1;
    result = playoff({
      drawSize,
      stage: PLAY_OFF,
      roundOffset: 0,
      drawDefinition,
      stageSequence: 2,
      finishingPositionOffset,
    });

    const { structure: targetStructure, childStructures } = result;
    const structures = [
      targetStructure,
      ...(childStructures || []).map((structure) => structure.structure),
    ];

    const link = {
      linkType: LOSER,
      source: {
        roundNumber,
        structureId: sourceStructureId,
      },
      target: {
        roundNumber: 1,
        feedProfile: TOP_DOWN,
        structureId: targetStructure.structureId,
      },
    };

    newLinks.push(link);

    return structures;
  });

  drawDefinition.links = (drawDefinition.links || []).concat(...newLinks);

  return Object.assign({}, SUCCESS, { drawDefinition });
}