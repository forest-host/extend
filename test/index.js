
import { assert } from 'chai';
import extend from '../src';

describe('Extend', () => {
	it('Merges simple objects', () => {
		let a = { a: 0 };
		let b = { b: 1 };

		let result = { a: 0, b: 1 };

		assert.deepEqual(extend(a, b), result);
	});

	it('Replaces keys', () => {
		let a = { a: 0 };
		let b = { a: 1 };

		let result = { a: 1 };

		assert.deepEqual(extend(a, b), result);
	});

	it('Merges all objects passed', () => {
		let a = { a: 0 };
		let b = { b: 1 };
		let c = { c: 2 };

		let result = { a: 0, b: 1, c: 2 };

		assert.deepEqual(extend(a, b, c), result);
	});

	it('Concats arrays', () => {
		let a = { a: [0] };
		let b = { a: [1] };

		let result = { a: [0, 1] };

		assert.deepEqual(extend(a, b), result);
	});

	it('Merges nested objects', () => {
		let a = { a: { b: 1 } };
		let b = { a: { a: 0 } };

		let result = { a: { a: 0, b: 1 } };

		assert.deepEqual(extend(a, b), result);
	});
})
