import { keyValueMatchUpScore } from '../index';
import { stressTests } from './standardStress';
import { FORMAT_SHORT_SETS } from './formatConstants';
import { TIEBREAK_CLOSER, scoreMatchUp, enterValues } from './primitives';

/*
  NOTE:
    TIEBREAK_CLOSER must be used instead of { value: ')' }
    ...because value passed into keyValueMatchUpScore from HotDiv is { lowSide: 2, value: '0' }
*/

stressTests({ matchUpFormat: FORMAT_SHORT_SETS, setTo: 4 });

it('can enter a straight set win for side 1', () => {
  const matchUpFormat = FORMAT_SHORT_SETS;
  let matchUp = { score: undefined, sets: [], matchUpFormat };

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 2,
    value: 3,
    matchUp,
    matchUpFormat,
  }));

  expect(matchUp?.score.trim()).toEqual('5-3');
  expect(matchUp?.sets).toMatchObject([
    { side1Score: 5, side2Score: 3, winningSide: 1 },
  ]);
  expect(matchUp?.sets[0].winningSide).toEqual(1);

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 2,
    value: 2,
    matchUp,
    matchUpFormat,
  }));
  expect(matchUp?.score.trim()).toEqual('5-3 4-2');
  expect(matchUp?.sets.length).toEqual(2);
  expect(matchUp?.sets[1].winningSide).toEqual(1);
  expect(matchUp?.winningSide).toEqual(1);

  // entering a value after winningSide is determined does nothing
  const { message, updated } = keyValueMatchUpScore({
    lowSide: 2,
    value: 2,
    matchUp,
    matchUpFormat,
  });
  expect(updated).toEqual(false);
  expect(message).toEqual('matchUp is complete');
});

it('can enter a straight set win for side 2', () => {
  const matchUpFormat = FORMAT_SHORT_SETS;
  let matchUp = { score: undefined, sets: [], matchUpFormat };

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 1,
    value: 3,
    matchUp,
    matchUpFormat,
  }));

  expect(matchUp?.score.trim()).toEqual('3-5');
  expect(matchUp?.sets).toMatchObject([
    { side1Score: 3, side2Score: 5, winningSide: 2 },
  ]);
  expect(matchUp?.sets[0].winningSide).toEqual(2);

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 1,
    value: 2,
    matchUp,
    matchUpFormat,
  }));
  expect(matchUp?.score.trim()).toEqual('3-5 2-4');
  expect(matchUp?.sets.length).toEqual(2);
  expect(matchUp?.sets[1].winningSide).toEqual(2);
  expect(matchUp?.winningSide).toEqual(2);

  // entering a value after winningSide is determined does nothing
  const { message, updated } = keyValueMatchUpScore({
    lowSide: 1,
    value: 2,
    matchUp,
    matchUpFormat,
  });
  expect(updated).toEqual(false);
  expect(message).toEqual('matchUp is complete');
});

it('can enter a three set win for side 1', () => {
  const matchUpFormat = FORMAT_SHORT_SETS;
  let matchUp = { score: undefined, sets: [], matchUpFormat };

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 1,
    value: 2,
    matchUp,
    matchUpFormat,
  }));

  expect(matchUp?.score.trim()).toEqual('2-4');
  expect(matchUp?.sets).toMatchObject([
    { side1Score: 2, side2Score: 4, winningSide: 2 },
  ]);
  expect(matchUp?.sets[0].winningSide).toEqual(2);

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 2,
    value: 2,
    matchUp,
    matchUpFormat,
  }));
  expect(matchUp?.score.trim()).toEqual('2-4 4-2');
  expect(matchUp?.sets.length).toEqual(2);
  expect(matchUp?.sets[1].winningSide).toEqual(1);

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 1,
    value: 1,
    matchUp,
    matchUpFormat,
  }));
  expect(matchUp?.score.trim()).toEqual('2-4 4-2 1-4');
  expect(matchUp?.sets.length).toEqual(3);
  expect(matchUp?.sets[2].winningSide).toEqual(2);
  expect(matchUp?.winningSide).toEqual(2);

  const { updated } = keyValueMatchUpScore({
    lowSide: 1,
    value: 2,
    matchUp,
    matchUpFormat,
  });
  expect(updated).toEqual(false);
});

it('can enter a three set win for side 2', () => {
  const matchUpFormat = FORMAT_SHORT_SETS;
  let matchUp = { score: undefined, sets: [], matchUpFormat };

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 1,
    value: 2,
    matchUp,
    matchUpFormat,
  }));
  expect(matchUp?.score.trim()).toEqual('2-4');
  expect(matchUp?.sets).toMatchObject([
    { side1Score: 2, side2Score: 4, winningSide: 2 },
  ]);

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 2,
    value: 2,
    matchUp,
    matchUpFormat,
  }));
  expect(matchUp?.score.trim()).toEqual('2-4 4-2');
  expect(matchUp?.sets.length).toEqual(2);

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 2,
    value: 1,
    matchUp,
    matchUpFormat,
  }));
  expect(matchUp?.score.trim()).toEqual('2-4 4-2 4-1');
  expect(matchUp?.sets.length).toEqual(3);
  expect(matchUp?.winningSide).toEqual(1);

  const { updated } = keyValueMatchUpScore({
    lowSide: 1,
    value: 2,
    matchUp,
    matchUpFormat,
  });
  expect(updated).toEqual(false);
});

it('can enter a first set tiebreak score', () => {
  const matchUpFormat = FORMAT_SHORT_SETS;
  let matchUp = { score: undefined, sets: [], matchUpFormat };

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 2,
    value: 4,
    matchUp,
    matchUpFormat,
  }));
  expect(matchUp?.score.trim()).toEqual('5-4(');
  expect(matchUp?.sets).toMatchObject([
    { side1Score: 5, side2Score: 4, winningSide: undefined },
  ]);

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 2,
    value: 2,
    matchUp,
    matchUpFormat,
  }));
  expect(matchUp?.score.trim()).toEqual('5-4(2');
  expect(matchUp?.sets.length).toEqual(1);

  ({ matchUp } = keyValueMatchUpScore({
    lowSide: 2,
    value: 'space',
    matchUp,
    matchUpFormat,
  }));
  expect(matchUp?.score.trim()).toEqual('5-4(2)');
  expect(matchUp?.sets.length).toEqual(1);
  expect(matchUp?.sets[0].winningSide).toEqual(1);
  expect(matchUp?.winningSide).toEqual(undefined);
});

it('can enter a second set tiebreak score', () => {
  const matchUpFormat = FORMAT_SHORT_SETS;
  let matchUp = { score: undefined, sets: [], matchUpFormat };

  const values = [
    { lowSide: 2, value: 1 },
    { lowSide: 2, value: 4 },
    { lowSide: 2, value: 2 },
    TIEBREAK_CLOSER,
  ];

  ({ matchUp } = enterValues({ values, matchUp }));
  expect(matchUp.score.trim()).toEqual('4-1 5-4(2)');
  expect(matchUp?.sets[0].winningSide).toEqual(1);
  expect(matchUp?.sets[1].winningSide).toEqual(1);
  expect(matchUp.winningSide).toEqual(1);
});

it('supports space for completing tiebreak scores', () => {
  const matchUpFormat = FORMAT_SHORT_SETS;
  let matchUp = { score: undefined, sets: [], matchUpFormat };

  const values = [
    { lowSide: 2, value: 4 },
    { lowSide: 2, value: 2 },
    { value: 'space' },
    { lowSide: 2, value: 4 },
    { lowSide: 2, value: 2 },
    { value: 'space' },
  ];

  ({ matchUp } = enterValues({ values, matchUp }));
  expect(matchUp.score.trim()).toEqual('5-4(2) 5-4(2)');
  expect(matchUp?.sets[0].winningSide).toEqual(1);
  expect(matchUp?.sets[1].winningSide).toEqual(1);
  expect(matchUp.winningSide).toEqual(1);
});

it('supports three tiebreak sets', () => {
  const matchUpFormat = FORMAT_SHORT_SETS;
  let matchUp = { score: undefined, sets: [], matchUpFormat };

  const values = [
    { lowSide: 2, value: 4 },
    { lowSide: 2, value: 2 },
    { value: 'space' },
    { lowSide: 1, value: 4 },
    { lowSide: 1, value: 4 },
    TIEBREAK_CLOSER,
    { lowSide: 2, value: 4 },
    { lowSide: 2, value: 2 },
    { value: 'space' },
  ];

  ({ matchUp } = enterValues({ values, matchUp }));
  expect(matchUp.score.trim()).toEqual('5-4(2) 4-5(4) 5-4(2)');
  expect(matchUp?.sets[0].winningSide).toEqual(1);
  expect(matchUp?.sets[1].winningSide).toEqual(2);
  expect(matchUp?.sets[2].winningSide).toEqual(1);
  expect(matchUp.winningSide).toEqual(1);
});

it('can handle score deletions', () => {
  const matchUpFormat = FORMAT_SHORT_SETS;
  let matchUp = { score: undefined, sets: [], matchUpFormat };

  const values = [
    { lowSide: 2, value: 2 },
    { lowSide: 2, value: 4 },
    { lowSide: 2, value: 2 },
    { value: 'backspace' },
    { value: 'backspace' },
    { lowSide: 2, value: 3 },
  ];

  ({ matchUp } = enterValues({ values, matchUp }));
  // test that tiebreak can be converted into win by 2 with score = setTo + 1
  expect(matchUp.score.trim()).toEqual('4-2 5-3');
  expect(matchUp.winningSide).toEqual(1);
});

it('does not allow leading zero in tiebreak scores', () => {
  const matchUpFormat = FORMAT_SHORT_SETS;
  let matchUp = { score: undefined, sets: [], matchUpFormat };

  const values = [
    { lowSide: 2, value: 4 },
    { lowSide: 2, value: 0 },
  ];

  ({ matchUp } = enterValues({ values, matchUp }));
  expect(matchUp.score.trim()).toEqual('5-4(0');
  expect(matchUp?.sets?.length).toEqual(1);

  const { matchUp: scoredMatchUp, message } = scoreMatchUp({
    value: '1',
    lowSide: 1,
    matchUp,
  });
  expect(scoredMatchUp.score.trim()).toEqual('5-4(0');
  expect(message).toEqual('tiebreak begins with zero');
});

it('does not allow more than two digits for set tiebreaks', () => {
  const matchUpFormat = FORMAT_SHORT_SETS;
  let matchUp = { score: undefined, sets: [], matchUpFormat };

  const values = [
    { lowSide: 2, value: 4 },
    { lowSide: 2, value: 1 },
    { lowSide: 2, value: 1 },
  ];

  ({ matchUp } = enterValues({ values, matchUp }));
  expect(matchUp.score.trim()).toEqual('5-4(11');
  expect(matchUp?.sets?.length).toEqual(1);

  const { matchUp: scoredMatchUp, message } = scoreMatchUp({
    value: '1',
    lowSide: 1,
    matchUp,
  });
  expect(scoredMatchUp.score.trim()).toEqual('5-4(11');
  expect(message).toEqual('tiebreak digit limit');
});