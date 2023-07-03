const { Web3 } = require('web3');
const HDWalletProvider = require("truffle-hdwallet-provider");
const SolnSquareVerifier = require("./eth-contracts/build/contracts/SolnSquareVerifier.json");

const fs = require('fs');
const homedir = require('os').homedir();

const proof_1 = require("./proofs/proof_1.json");
const proof_2 = require("./proofs/proof_2.json");
const proof_3 = require("./proofs/proof_3.json");
const proof_4 = require("./proofs/proof_4.json");
const proof_5 = require("./proofs/proof_5.json");
const proof_6 = require("./proofs/proof_6.json");
const proof_7 = require("./proofs/proof_7.json");
const proof_8 = require("./proofs/proof_8.json");
const proof_9 = require("./proofs/proof_9.json");
const proof_10 = require("./proofs/proof_10.json");
const proofs = [proof_1, proof_2, proof_3, proof_4, proof_5, proof_6, proof_7, proof_8, proof_9, proof_10];

const INFURA_KEY = fs.readFileSync(homedir + "/.dev/infura_key").toString().trim();
const MNEMONIC = fs.readFileSync(homedir + "/.dev/mnemonic").toString().trim();
const TESTNET = "sepolia";
//const TESTNET = "goerli";
// https://sepolia.etherscan.io/token/0x5f56367dbe3ef954f4e2782dd126121cdb3fe350
// https://testnets.opensea.io/collection/udacity-real-estate-2
const CONTRACT_ADDRESS = "0x5f56367DBe3eF954F4e2782Dd126121CdB3Fe350"; // sepolia
const CONTRACT_OWNER_ADDRESS = "0x713E714A8FCdD580f13C0B712d3808A30528d08A";


(() => {
    const web3 = new Web3(new HDWalletProvider(MNEMONIC, `https://${TESTNET}.infura.io/v3/${INFURA_KEY}`));
    const contract = new web3.eth.Contract(SolnSquareVerifier.abi, CONTRACT_ADDRESS, { gasLimit: "1000000" });

    proofs.forEach(async (p, i) => {
        const { proof, inputs } = p;
        const tokenId = i + 1;
        const result = await contract.methods.mintToken(proof, inputs, CONTRACT_OWNER_ADDRESS, tokenId).send({ from: CONTRACT_OWNER_ADDRESS, gas: 3000000 });
        console.log(`Token ID #${tokenId} Minted tx : ${result.transactionHash}`);
    });
}) ();
