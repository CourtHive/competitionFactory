import { unique } from '../../../../utilities';
import { indices, subSort } from '../../../../utilities/arrays';

export function determineTeamOrder({
  participantResults,
  headToHeadPriority,
  disqualified,
}) {
  const participantIds = Object.keys(participantResults);
  const participantsCount = participantIds.length;

  // order is an array of objects formatted for processing by ties()
  const order = participantIds.reduce((arr, participantId, i) => {
    arr.push({ participantId, i, results: participantResults[participantId] });
    return arr;
  }, []);
  let complete = order.filter(
    (o) =>
      participantsCount - 1 ===
      o.results.matchUpsWon +
        o.results.matchUpsLost +
        o.results.matchUpsCancelled
  );

  // if not all opponents have completed their matchUps, no orders are assigned
  if (participantsCount !== complete.length) {
    return;
  }

  complete.forEach((p) => (p.orderHash = getOrderHash(p)));
  complete.forEach((p) => (p.GEMscore = getRatioHash(p)));

  // START ORDER HASH
  if (headToHeadPriority) {
    complete.sort(
      (a, b) => (b.results.matchUpsWon || 0) - (a.results.matchUpsWon || 0)
    );
    const wins = complete.map((p) => p.results.matchUpsWon);
    const counts = unique(wins);
    counts.forEach((count) => {
      const i = indices(count, wins);
      if (i.length && i.length > 1) {
        const start = Math.min(...i);
        const end = Math.max(...i);
        const n = end - start + 1;
        if (n === 2) {
          complete = subSort(complete, start, n, h2hOrder);
        } else {
          complete = subSort(complete, start, n, orderHashSort);
        }
      }
    });
  } else {
    complete.sort(orderHashSort);
  }

  const hashOrder = unique(complete.map((c) => c.orderHash));
  complete.forEach((p) => (p.hashOrder = hashOrder.indexOf(p.orderHash) + 1));

  // now account for equivalent hashOrder
  let rankOrder = 0;
  let rankHash = undefined;
  complete.forEach((p, i) => {
    if (p.orderHash !== rankHash) {
      rankOrder = i + 1;
      rankHash = p.orderHash;
    }
    p.rankOrder = rankOrder;
  });
  // END ORDER HASH

  // START RATIO HASH
  if (headToHeadPriority) {
    complete.sort(
      (a, b) => (b.results.matchUpsWon || 0) - (a.results.matchUpsWon || 0)
    );
    const wins = complete.map((p) => p.results.matchUpsWon);
    const counts = unique(wins);
    counts.forEach((count) => {
      const i = indices(count, wins);
      if (i.length && i.length > 1) {
        const start = Math.min(...i);
        const end = Math.max(...i);
        const n = end - start + 1;
        if (n === 2) {
          complete = subSort(complete, start, n, h2hRatio);
        } else {
          complete = subSort(complete, start, n, ratioHashSort);
        }
      }
    });
  } else {
    complete.sort(ratioHashSort);
  }

  const ratioOrder = unique(complete.map((c) => c.GEMscore));
  complete.forEach((p) => (p.ratioOrder = ratioOrder.indexOf(p.GEMscore) + 1));

  // pointsOrder is used for awarding points and may differ from
  // rankOrder if a player unable to advance due to walkover
  let pointsOrder = 0;
  let GEMscore = undefined;
  complete.forEach((p, i) => {
    if (p.GEMscore !== GEMscore) {
      pointsOrder = i + 1;
      GEMscore = p.GEMscore;
    }
    p.pointsOrder = pointsOrder;
  });
  // END RATIO HASH

  return complete;

  function ratioHashSort(a, b) {
    return b.GEMscore - a.GEMscore;
  }
  function orderHashSort(a, b) {
    return b.orderHash - a.orderHash;
  }
  function h2hRatio(a, b) {
    const side1Head2Head = a.results.victories.indexOf(b.participantId) >= 0;
    const side2Head2Head = b.results.victories.indexOf(a.participantId) >= 0;
    if (side1Head2Head || side2Head2Head) {
      return side2Head2Head ? 1 : -1;
    }
    return b.GEMscore - a.GEMscore;
  }

  function h2hOrder(a, b) {
    const side1Head2Head = a.results.victories.indexOf(b.participantId) >= 0;
    const side2Head2Head = b.results.victories.indexOf(a.participantId) >= 0;
    if (side1Head2Head || side2Head2Head) {
      return side2Head2Head ? 1 : -1;
    }
    return b.orderHash - a.orderHash;
  }

  function getOrderHash(p) {
    if (disqualified.indexOf(p.participantId) >= 0) return 0;
    return getRatioHash(p);
  }
  function getRatioHash(p) {
    let rh;
    if (headToHeadPriority) {
      rh =
        p.results.matchUpsRatio * Math.pow(10, 16) +
        p.results.setsRatio * Math.pow(10, 12) +
        p.results.gamesDifference * Math.pow(10, 8) +
        p.results.pointsRatio * Math.pow(10, 3);
    } else {
      rh =
        p.results.matchUpsRatio * Math.pow(10, 16) +
        p.results.setsRatio * Math.pow(10, 12) +
        p.results.gamesRatio * Math.pow(10, 8) +
        p.results.pointsRatio * Math.pow(10, 3);
    }
    return rh;
  }
}