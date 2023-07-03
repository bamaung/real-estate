# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Libraries and tools used

    nodejs v18.16.0
    npm 9.5.1
    Truffle v5.10.0 (core: 5.10.0)
    Solidity v0.5.5 (solc-js)
    web3js 4.0.2

## Install

This repository contains Smart Contract code in Solidity (using Truffle), tests (also using Truffle)

To install, download or clone the repo, then:

`npm install`

## To run truffle tests:

`cd eth-contracts`

`truffle develop`

`> compile`

`> test`

## Deploy (Sepolia testnet)

`truffle compile`

`truffle migrate --network sepolia`

## Mint tokens using mint.js

`node mint.js`

## Contract address and token tracker on etherscan.io (Sepolia testnet)

Contract Address: `0x5f56367dbe3ef954f4e2782dd126121cdb3fe350`

[Sepolia Etherscan](https://sepolia.etherscan.io/token/0x5f56367dbe3ef954f4e2782dd126121cdb3fe350)

## Contract ABI (SolnSquareVerifier.sol)

```js
[
  {
    constant: true,
    inputs: [ [Object] ],
    name: 'supportsInterface',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ [Object] ],
    name: 'getApproved',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [ [Object], [Object] ],
    name: 'approve',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'transferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [ [Object], [Object] ],
    name: '__callback',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ [Object], [Object] ],
    name: 'tokenOfOwnerByIndex',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [ [Object], [Object], [Object] ],
    name: '__callback',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'unpause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [ [Object], [Object] ],
    name: 'mint',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'safeTransferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ [Object] ],
    name: 'tokenByIndex',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ [Object] ],
    name: 'ownerOf',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ [Object] ],
    name: 'balanceOf',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'pause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getOwner',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [ [Object], [Object] ],
    name: 'setApprovalForAll',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [ [Object], [Object], [Object], [Object] ],
    name: 'safeTransferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ [Object] ],
    name: 'tokenURI',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'baseTokenURI',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ [Object], [Object] ],
    name: 'isApprovedForAll',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [ [Object] ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ [Object], [Object], [Object], [Object] ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [ [Object], [Object] ],
    name: 'SolutionAdded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [ [Object], [Object] ],
    name: 'TokenMinted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'Transfer',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'ApprovalForAll',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [ [Object] ],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [ [Object] ],
    name: 'Unpaused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [ [Object], [Object] ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    constant: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'addSolution',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [ [Object], [Object], [Object], [Object] ],
    name: 'mintToken',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
```

## OpenSea MarketPlace Storefront (Sepolia testnet)

[Udacity Real Estate Collection](https://testnets.opensea.io/collection/udacity-real-estate-2)

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
