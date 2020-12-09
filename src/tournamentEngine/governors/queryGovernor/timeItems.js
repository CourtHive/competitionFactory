import {
  MISSING_EVENT,
  MISSING_TOURNAMENT_RECORD,
  NOT_FOUND,
} from '../../../constants/errorConditionConstants';

export function getEventTimeItem({ event, itemAttributes }) {
  if (!event) return { error: MISSING_EVENT };
  if (!event.timeItems) return { message: NOT_FOUND };

  const { timeItem } = getTimeItem({ element: event, itemAttributes });
  return (timeItem && { timeItem }) || { message: NOT_FOUND };
}

export function getTournamentTimeItem({ tournamentRecord, itemAttributes }) {
  if (!tournamentRecord) return { error: MISSING_TOURNAMENT_RECORD };
  if (!tournamentRecord.timeItems) return { message: NOT_FOUND };

  const { timeItem } = getTimeItem({ element: event, itemAttributes });
  return (timeItem && { timeItem }) || { message: NOT_FOUND };
}

function getTimeItem({ element, itemAttributes }) {
  if (element && Array.isArray(element.timeItems)) {
    const timeItem = element.timeItems
      .filter(
        timeItem =>
          !itemAttributes.itemSubject ||
          timeItem.itemSubject === itemAttributes.itemSubject
      )
      .filter(
        timeItem =>
          !itemAttributes.itemType ||
          timeItem.itemType === itemAttributes.itemType
      )
      .filter(
        timeItem =>
          !itemAttributes.itemSubType ||
          timeItem.itemSubType === itemAttributes.itemSubType
      )
      .sort(
        (a, b) =>
          new Date(a.createdAt || undefined) -
          new Date(b.createdAt || undefined)
      )
      .reduce((scaleValue, candidate) => {
        return (candidate.itemName === itemAttributes.itemName &&
          (!itemAttributes.itemType ||
            candidate.itemType === itemAttributes.itemType) &&
          (!itemAttributes.itemClass ||
            candidate.itemSubType === itemAttributes.itemClass)) ||
          (candidate.itemId &&
            itemAttributes.itemId &&
            candidate.itemId === itemAttributes.itemId)
          ? candidate
          : scaleValue;
      }, undefined);

    if (timeItem) {
      return { timeItem };
    } else {
      return { error: NOT_FOUND };
    }
  }
}
