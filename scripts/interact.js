const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTACT_ADDRESS = process.env.CONTACT_ADDRESS;

const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

//provider
const alchemyProvider = new ethers.providers.AlchemyProvider(
  (network = "rinkeby"),
  API_KEY
);

//signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//contract instance
const helloWorldContract = new ethers.Contract(
  CONTACT_ADDRESS,
  contract.abi,
  signer
);

async function main() {
  const greeting = await helloWorldContract.greeting();
  console.log("The message is: " + greeting);

  console.log("Updating the greeting message...");
  const tx = await helloWorldContract.setGreeting("Hello World!");
  await tx.wait();

  const newGreeting = await helloWorldContract.greeting();
  console.log("The new message is: " + newGreeting);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
