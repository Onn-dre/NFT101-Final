
const { ethers } = require("hardhat");

async function main() {

  const SuperMarioWorld = await ethers.getContractFactory("SMW_ERC1155");
  const superMarioWorld = await SuperMarioWorld.deploy("SMW_ERC1155", "SPRME");

  await superMarioWorld.deployed();
  console.log("Success! Contract was deployed to: ", superMarioWorld.address);

  // The 10 below is the amount. The amount is necessary because with ERC115 you have the option to mint multiple copies of the same NFT, therefore the amount has to be specified even if it is 1.
  await superMarioWorld.mint(10, "https://ipfs.io/ipfs/QmPTkdnGHSTcjrUYhiXC49mLR1yKkybgDBAyFmvUgxe39a")

  console.log("NFT successfully minted");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
