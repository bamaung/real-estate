// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
//var SquareVerifier = artifacts.require("./SquareVerifier.sol");
//var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC721Mintable, "Udacity Real Estate", "URE", "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/");
  //deployer.deploy(SquareVerifier);
  //deployer.deploy(SolnSquareVerifier);
};
