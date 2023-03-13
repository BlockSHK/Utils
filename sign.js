const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/your-infura-project-id");

async function main() {
  const privateKey =
    "ad95481c54fbca4cec2f0787242c96f940cc622256fd3b2326c53cb0da2d64bc";
  const nonce = "b94b8ecf63410b7d0de8662c7d4be1e6";
  const message = web3.utils.sha3(nonce);
  const signature = await web3.eth.accounts.sign(message, privateKey);
  console.log("Signature", signature.signature);

  const address = "0x0c81414f8545522A0C97A39F83700De8230825b6";

  const hash = web3.utils.sha3(nonce);
  const signing_address = web3.eth.accounts.recover(hash, signature.signature);
  console.log("Recovered Address ", signing_address);
  console.log(signing_address.toLowerCase() === address.toLowerCase());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
