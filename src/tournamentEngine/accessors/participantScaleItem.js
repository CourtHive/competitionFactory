import { SCALE } from '../../constants/participantConstants';

export function participantScaleItem({
  participant,
  scaleAttributes,
  requireTimeStamp,
}) {
  if (participant && Array.isArray(participant.timeItems)) {
    const timeItem = participant.timeItems
      .filter(timeItem => timeItem.itemSubject === SCALE)
      .filter(
        timeItem =>
          !scaleAttributes.scaleType ||
          timeItem.itemType === scaleAttributes.scaleType
      )
      .filter(
        timeItem =>
          !scaleAttributes.eventType ||
          timeItem.itemClass === scaleAttributes.eventType
      )
      .filter(timeItem => requireTimeStamp === false || timeItem.timeStamp)
      .sort(
        (a, b) =>
          new Date(a.timeStamp || undefined) -
          new Date(b.timeStamp || undefined)
      )
      .reduce((scaleValue, candidate) => {
        return (candidate.itemName === scaleAttributes.scaleName &&
          (!scaleAttributes.scaleType ||
            candidate.itemType === scaleAttributes.scaleType) &&
          (!scaleAttributes.scaleClass ||
            candidate.itemClass === scaleAttributes.scaleClass)) ||
          (candidate.itemId &&
            scaleAttributes.scaleId &&
            candidate.itemId === scaleAttributes.scaleId)
          ? candidate
          : scaleValue;
      }, undefined);

    console.log({
      timeItems: participant.timeItems,
      timeItem,
      scaleAttributes,
    });

    if (timeItem) {
      const scaleItem = {
        scaleDate: timeItem.itemDate,
        scaleName: timeItem.itemName,
        scaleType: timeItem.itemType,
        eventType: timeItem.itemClass,
        scaleValue: timeItem.itemValue,
      };
      return { scaleItem };
    } else {
      return { error: 'No Matching Scale Item Found' };
    }
  }

  return { error: 'Missing Participant' };
}
