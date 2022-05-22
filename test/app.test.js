require('dotenv').config();
const assert = require('assert');
describe('Test DB Connection', () => {
 it('should return true', () => {
        assert.equal(process.env.DB_CONNECTION, 'mongodb+srv://vue_node:7CJcyBrsNci6vH8v@cluster0.dr8ms.mongodb.net/Cluster0?retryWrites=true&w=majority');
    });
});