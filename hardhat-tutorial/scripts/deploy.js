const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
// const { CRYPTO_DEV_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Crypto Dev NFT contract that you deployed in the previous module
  const cryptoDevNFTContract = "0xF8c473Cfb243Eb5Fa7c58E409d82FA106d8087ec";

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const cryptoDevTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );

  // deploy the contract
  const deployedCryptoDevTokenContract = await cryptoDevTokenContract.deploy(
    cryptoDevNFTContract
  );

  await deployedCryptoDevTokenContract.deployed();
  // print the address of the deployed contract
  console.log(
    "Crypto Dev Token Contract Address:",
    deployedCryptoDevTokenContract.address
  );
}
// Crypto Dev Token Contract Address: 0xA1a4E18738CD2940e3fbbf8E29205fC7372Fb859
// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
