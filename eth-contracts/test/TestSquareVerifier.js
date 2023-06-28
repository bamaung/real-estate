// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var SquareVerifier = artifacts.require('SquareVerifier');
const { proof, inputs } = require("../../zokrates/code/square/proof.json");

// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps
describe('Test verification with correct proof', function () {
    beforeEach(async function () {
        this.contract = await SquareVerifier.new();
     });

    it('should pass verification with correct proof', async function () {
        const result = await this.contract.verifyTx(proof, inputs);
        assert.equal(result, true, "Verification fail with correct proof");
    });

});
    
// Test verification with incorrect proof
describe('Test verification with incorrect proof', function () {
    beforeEach(async function () {
        this.contract = await SquareVerifier.new();
     });

    it('should fail verification with incorrect proof', async function () {
        // correct inputs is [
        //     "0x0000000000000000000000000000000000000000000000000000000000000009",
        //     "0x0000000000000000000000000000000000000000000000000000000000000001"
        // ]
        const _inputs = [ // incorrect inputs/proof for this test case.
            "0x0000000000000000000000000000000000000000000000000000000000000001",
            "0x0000000000000000000000000000000000000000000000000000000000000002"
        ];
        const result = await this.contract.verifyTx(proof, _inputs);
        assert.equal(result, false, "Verification pass with incorrect proof");
    });
});
