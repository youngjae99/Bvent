const Web3 = require('web3')
const infuraKey = '172eff2ae22a4d4096cbbd73ddcf60ef'
const web3 = new Web3(`https://ropsten.infura.io/v3/${infuraKey}`)
const BN = require('bn.js')
const bodyParser = require('body-parser');


function initWeb3() {
  const privKey = '8ae5dc288a83f5710c67f91e47448b3ec678e5a2460d675966d94a043315db14' // 관리자키 (유출되면 안되는 주소)
  const account = web3.eth.accounts.privateKeyToAccount(privKey)
  web3.eth.accounts.wallet.add(account)
  web3.eth.defaultAccount = account.address
  return account.address
}

function getCmtTokenContract() {
  const abi = require('./abi')
  const cmtTokenContractAddress = '0xf227154fB762A67788BB320cf62E24e54527353d'
  const contract = new web3.eth.Contract(abi, cmtTokenContractAddress)
  return contract
}

async function transfer(contract, fromAddress, toAddress, amount) {
  const decimals = new BN(18, 10)
  const bigAmount = new BN(amount, 10)
  const value = bigAmount.mul((new BN(10, 10)).pow(decimals))
  return await contract.methods.transfer(toAddress, value).send({
    from: fromAddress,
    gasLimit: 200000,
  })
}

async function main() {
  const adminAddress = initWeb3()
  const cmtContract = getCmtTokenContract()
  const toAddress = '0xE1ee63a6670a1AbFE06fA78100b7956EE4d00BB1' // 보상 받는 사용자 주소
  const transferResult = await transfer(cmtContract, adminAddress, toAddress, 5)
  console.log(transferResult)
}

const function1 = require('@google-cloud/functions-framework');

// Register an HTTP function with the Functions Framework
//NOTE: Content-type has to be application/json!!!!!!! (NOT FORM!!!!) 
function1.http('transferCoins', async (req, res) => {
  if (req.method !== 'POST') {
    // Return a "method not allowed" error
    return res.status(405).end();
  }
  const adminAddress = initWeb3()
  const cmtContract = getCmtTokenContract()
  const reqBody = req.body
  //console.log ("fields", reqBody)
  console.log (reqBody["amount"])
  console.log (reqBody["toAddress"])
  const toAddress = reqBody["toAddress"]//'0xE1ee63a6670a1AbFE06fA78100b7956EE4d00BB1' // 보상 받는 사용자 주소
  const amount = reqBody["amount"]
  const transferResult = await transfer(cmtContract, adminAddress, toAddress, amount)
  res.status(200).send(transferResult);
  }
)
