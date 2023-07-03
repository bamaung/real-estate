var SquareVerifier = artifacts.require('SquareVerifier');
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const proof_1 = require("../../proofs/proof_1.json");
const proof_2 = require("../../proofs/proof_2.json");
const truffleAssert = require('truffle-assertions');

contract('SolnSquareVerifier', accounts => {

    const account_1 = accounts[0];
    const account_2 = accounts[1];

    const token_id_1 = 1;

    const tokenName = "Udacity Real Estate";
    const tokenSymbol = "URE";
    const baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

    before(async function () {
        this.squareVerifier = await SquareVerifier.new({from: account_1});
        this.solnSquareVerifier = await SolnSquareVerifier.new(this.squareVerifier.address, tokenName, tokenSymbol, baseTokenURI, {from: account_1});
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    describe('Test if a new solution can be added for contract', () => {
        it('should add a solution', async function () {
            let { proof, inputs } = proof_1;
            const result = await this.solnSquareVerifier.addSolution(proof, inputs, account_1, {from: account_1});
            truffleAssert.eventEmitted(result, 'SolutionAdded', ev => ev.solutionAddress === account_1);
        });
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    describe('Test if an ERC721 token can be minted for contract', () => {
        it('should mint ERC721 token', async function () {
            let { proof, inputs } = proof_2;
            const result = await this.solnSquareVerifier.mintToken(proof, inputs, account_2, token_id_1, {from: account_1});
            truffleAssert.eventEmitted(result, 'TokenMinted', ev => ev.to === account_2 && ev.tokenId.toNumber() === token_id_1);
        });
    });
});