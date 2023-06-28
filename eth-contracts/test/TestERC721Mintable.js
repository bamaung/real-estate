var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', accounts => {

    const account_1 = accounts[0];
    const account_2 = accounts[1];
    const account_3 = accounts[2];
    const account_4 = accounts[3];
    const account_5 = accounts[4];

    const token_id_1 = 1;
    const token_id_2 = 2;
    const token_id_3 = 3;
    const token_id_4 = 4;
    const token_id_5 = 5;

    const tokenName = "Udacity Real Estate";
    const tokenSymbol = "URE";
    const baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new(tokenName, tokenSymbol, baseTokenURI, {from: account_1});

            // DONE: mint multiple tokens
            await this.contract.mint(account_1, token_id_1, {from: account_1});
            await this.contract.mint(account_2, token_id_2, {from: account_1});
            await this.contract.mint(account_3, token_id_3, {from: account_1});
            await this.contract.mint(account_4, token_id_4, {from: account_1});
            await this.contract.mint(account_5, token_id_5, {from: account_1});
        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply.toNumber(), 5, "Total supply incorrect")
        })

        it('should get token balance', async function () { 
            assert.equal((await this.contract.balanceOf(account_1)).toNumber(), 1, "account_1 should have 1 token minted");
            assert.equal((await this.contract.balanceOf(account_2)).toNumber(), 1, "account_2 should have 1 token minted");
            assert.equal((await this.contract.balanceOf(account_3)).toNumber(), 1, "account_3 should have 1 token minted");
            assert.equal((await this.contract.balanceOf(account_4)).toNumber(), 1, "account_4 should have 1 token minted");
            assert.equal((await this.contract.balanceOf(account_5)).toNumber(), 1, "account_5 should have 1 token minted");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            assert.equal((await this.contract.tokenURI(token_id_1)), `${baseTokenURI}${token_id_1}`, `Incorrect tokenURI. tokenID: ${token_id_1}`);
            assert.equal((await this.contract.tokenURI(token_id_2)), `${baseTokenURI}${token_id_2}`, `Incorrect tokenURI. tokenID: ${token_id_2}`);
            assert.equal((await this.contract.tokenURI(token_id_3)), `${baseTokenURI}${token_id_3}`, `Incorrect tokenURI. tokenID: ${token_id_3}`);
            assert.equal((await this.contract.tokenURI(token_id_4)), `${baseTokenURI}${token_id_4}`, `Incorrect tokenURI. tokenID: ${token_id_4}`);
            assert.equal((await this.contract.tokenURI(token_id_5)), `${baseTokenURI}${token_id_5}`, `Incorrect tokenURI. tokenID: ${token_id_5}`);
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.safeTransferFrom(account_5, account_1, token_id_5, {from: account_5});

            assert.equal((await this.contract.balanceOf(account_5)).toNumber(), 0, "account_5 should have 0 token");
            assert.equal((await this.contract.balanceOf(account_1)).toNumber(), 2, "account_5 should have 2 tokens");

            assert.equal(await this.contract.ownerOf(token_id_5), account_1, `${account_1} should be the owner of tokenID: ${token_id_5}`);
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new(tokenName, tokenSymbol, baseTokenURI, {from: account_1});
        })

        it('should fail when minting when address is not contract owner', async function () {
            try {
                await this.contract.mint(account_2, token_id_2, {from: account_5});
            }
            catch (e) {
                assert.include(e.message, "Caller is not the contract owner", "The error message should contain 'Caller is not the contract owner'");
            }
        })

        it('should return contract owner', async function () { 
            assert.equal(await this.contract.getOwner(), account_1, `${account_1} is not contract owner`)
        })

    });
})