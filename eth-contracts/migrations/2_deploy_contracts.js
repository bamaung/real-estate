// migrating the appropriate contracts
var ERC721MintableComplete = artifacts.require("ERC721MintableComplete");
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC721MintableComplete, "Udacity Real Estate", "URE", "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/");
  deployer.deploy(SquareVerifier).then(() => {
    deployer.deploy(SolnSquareVerifier, SquareVerifier.address, "Udacity Real Estate", "URE", "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/");
  });
  
};
