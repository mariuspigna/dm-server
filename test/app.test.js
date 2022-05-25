require('dotenv').config();
const assert = require('assert');
const app = require('../src/app');
describe('Test DB Connection', () => {
    it('should return DB_CONNECTION', () => {
       assert.equal(app.dbStore().options.uri,process.env.DB_CONNECTION)
    });
});
