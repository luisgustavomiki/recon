import alpha from '../fixtures/alpha.json';
import { summarize } from './summarize';

test('should generate summary for fixture alpha correctly', () => {
  const inputData = {
    left: alpha.left.entries,
    right: alpha.right.entries,
  }

  expect(summarize(inputData)).toStrictEqual({
    left: alpha.left.summary,
    right: alpha.right.summary,
  })
});
