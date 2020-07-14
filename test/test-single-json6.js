'use strict';
const JSON6 = {
	parse (str) {
		return eval(`(${str})`);
	}
};

describe('Single JSON6', function () {
	it('Single JSON6', function () {
		const obj = JSON6.parse( "{ asdf : 1234 } " );
		expect(obj).to.deep.equal({
			asdf: 1234
		});
	});
});
