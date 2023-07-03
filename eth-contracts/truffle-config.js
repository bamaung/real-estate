const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const homedir = require('os').homedir();
const INFURA_KEY = fs.readFileSync(homedir + "/.dev/infura_key").toString().trim();
const MNEMONIC = fs.readFileSync(homedir + "/.dev/mnemonic").toString().trim();

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
        },
        goerli: {
            provider: function() {
                return new HDWalletProvider(MNEMONIC,`https://goerli.infura.io/v3/${INFURA_KEY}`)
            },
            network_id: "5"
        },
        sepolia: {
            provider: function() {
                return new HDWalletProvider(MNEMONIC,`https://sepolia.infura.io/v3/${INFURA_KEY}`)
            },
            network_id: "11155111"
        }
    },
    compilers: {
        solc: {
            version: "0.5.5"
        }
    }
};
