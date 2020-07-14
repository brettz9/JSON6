'use strict';
const JSON6 = {
	parse (str) {
		return eval(`(${str})`);
	}
};

describe('JSON decoding', function () {
	it('Unicode escapes', function () {
		const result = JSON6.parse( '"\\u004D\\u004e\\u004F\\u0050"' );
		//console.log( "MNOP=", result );
		expect(result).to.equal('MNOP');
	});
});
