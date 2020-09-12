import { positionByes } from './positionByes';
import { positionSeedBlocks } from './positionSeeds';
import { positionQualifiers } from './positionQualifiers';
import { positionUnseededParticipants } from './positionParticipants';
import { findStructure } from '../../getters/findStructure';

import { WATERFALL } from '../../../constants/drawDefinitionConstants';

export function automatedPositioning({
  drawDefinition,
  policies,
  structureId,
}) {
  const { structure, error } = findStructure({ drawDefinition, structureId });
  if (error) return { errors: [error] };

  const { seedingProfile } = structure;

  let errors = [];
  let byePositionError, seedBlockErrors;

  if (seedingProfile === WATERFALL) {
    // since WATERFALL attempts to place ALL participants
    // BYEs must be placed first to insure lower seeds get BYEs
    ({ error: byePositionError } = positionByes({
      drawDefinition,
      policies,
      structure,
    }));
    ({ errors: seedBlockErrors } = positionSeedBlocks({
      policies,
      drawDefinition,
      structure,
    }));
  } else {
    // otherwise... seeds need to be placed first so that BYEs
    // can follow the seedValues of placed seeds
    ({ errors: seedBlockErrors } = positionSeedBlocks({
      policies,
      drawDefinition,
      structure,
    }));
    ({ error: byePositionError } = positionByes({
      drawDefinition,
      policies,
      structure,
    }));
  }

  const { error: unseededPositionError } = positionUnseededParticipants({
    drawDefinition,
    structure,
  });
  const { error: qualifierPositionError } = positionQualifiers({
    drawDefinition,
    structure,
  });

  if (seedBlockErrors) errors = errors.concat(...seedBlockErrors);
  if (byePositionError) errors.push(byePositionError);
  if (qualifierPositionError) errors.push(qualifierPositionError);
  if (unseededPositionError) errors.push(unseededPositionError);

  return { errors };
}
