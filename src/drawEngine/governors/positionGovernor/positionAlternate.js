import { conditionallyDisableLinkPositioning } from './conditionallyDisableLinkPositioning';
import { addPositionActionTelemetry } from './addPositionActionTelemetry';
import { getPositionAssignments } from '../../getters/positionsGetter';
import { findStructure } from '../../getters/findStructure';
import { assignDrawPosition } from './positionAssignment';
import { clearDrawPosition } from './positionClear';

import { SUCCESS } from '../../../constants/resultConstants';

export function alternateDrawPositionAssignment({
  alternateParticipantId,
  drawDefinition,
  drawPosition,
  structureId,
}) {
  const { positionAssignments } = getPositionAssignments({
    drawDefinition,
    structureId,
  });
  const positionAssignment = positionAssignments.find(
    (assignment) => assignment.drawPosition === drawPosition
  );

  if (positionAssignment.participantId) {
    let result = assignDrawPosition({
      drawDefinition,
      structureId,
      drawPosition,
      participantId: alternateParticipantId,
    });
    if (!result.success) {
      console.log({ result });
    }
    return successNotice({
      removedParticipantId: positionAssignment.participantId,
    });
  }
  let result = clearDrawPosition({
    drawDefinition,
    drawPosition,
    structureId,
  });
  if (result.error) return result;
  const removedParticipantId = result.participantId;

  result = assignDrawPosition({
    drawDefinition,
    structureId,
    drawPosition,
    participantId: alternateParticipantId,
  });
  if (!result.success) return result;

  return successNotice({ removedParticipantId });

  function successNotice({ removedParticipantId }) {
    const { structure } = findStructure({ drawDefinition, structureId });
    conditionallyDisableLinkPositioning({
      structure,
      drawPositions: [drawPosition],
    });
    const positionAction = {
      name: 'alternateDrawPositionAssignment',
      drawPosition,
      structureId,
      alternateParticipantId,
    };
    addPositionActionTelemetry({ drawDefinition, positionAction });

    return Object.assign({}, SUCCESS, { removedParticipantId });
  }
}
