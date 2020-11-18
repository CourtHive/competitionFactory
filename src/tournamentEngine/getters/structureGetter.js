import { PLAY_OFF } from '../../constants/drawDefinitionConstants';

export function getPlayoffStructures({ drawDefinition, structureId }) {
  const targetStructureIds = drawDefinition.links
    .filter(link => link.source?.structureId === structureId)
    .map(link => link.target?.structureId);

  const playoffStructures = drawDefinition.structures?.filter(
    structure =>
      targetStructureIds.includes(structure.structureId) &&
      structure.stage === PLAY_OFF
  );

  return playoffStructures;
}
