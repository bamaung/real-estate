pragma solidity >=0.4.21 <0.6.0;

pragma experimental ABIEncoderV2;

import "./ERC721Mintable.sol";
import "./SquareVerifier.sol";

// DONE? define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
// DONE define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721MintableComplete, SquareVerifier {
    constructor(string memory name, string memory symbol, string memory baseTokenURI) 
        public 
        ERC721MintableComplete(name, symbol, baseTokenURI) 
    {}

    // DONE define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address solutionAddress;
    }

    // DONE? define an array of the above struct
    // Solution[] private solutions;

    // DONE define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private solutions;
    uint256 private solutionCount;

    // DONE Create an event to emit when a solution is added
    event SolutionAdded (uint256 index, address indexed solutionAddress);
    event TokenMinted(address to, uint256 tokenId);

    modifier requireUniqueSolution(uint256[2] memory inputs) {
        bytes32 key = keccak256(abi.encodePacked(inputs[0], inputs[1]));
        require(solutions[key].solutionAddress == address(0), "Solution already exists");
        _;
    }

    modifier requireVerifiedSolution(Proof memory proof, uint256[2] memory inputs) {
        require (verifyTx(proof, inputs), "Solution verification fail");
        _;
    }

    // DONE Create a function to add the solutions to the array and emit the event
    function addSolution(Proof memory proof, uint256[2] memory inputs) 
        public 
        requireUniqueSolution(inputs)
        requireVerifiedSolution(proof, inputs)
    {
        bytes32 key = keccak256(abi.encodePacked(inputs[0], inputs[1]));
        Solution memory solution = Solution({
            index: solutionCount,
            solutionAddress: msg.sender
        });
        solutions[key] = solution;
        solutionCount++;

        emit SolutionAdded(solution.index, solution.solutionAddress);
    }

    // DONE Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintToken (Proof memory proof, uint256[2] memory inputs, address to, uint256 tokenId) public {
        addSolution(proof, inputs);
        mint(to, tokenId);
        emit TokenMinted(to, tokenId);
    }


}


