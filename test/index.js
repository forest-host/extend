
import { assert } from 'chai';
import extend from '../src';

describe('Extend', () => {
	it('merges simple objects', () => {
		let a = { a: 0 };
		let b = { b: 1 };

		let result = { a: 0, b: 1 };

		assert.deepEqual(extend(a, b), result);
	})
})
