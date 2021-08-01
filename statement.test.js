const statement = require ('./statement.js');
const {invoice, plays} = require('./data.js')

const result = `Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As you like it: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits`

// run tests in watch mode with 

describe('statement', () => {
    it('should return the correct result', () => {
        expect(statement(invoice,plays)).toContain(result)
    });
})
