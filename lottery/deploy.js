const HdWalletProvider=require('truffle-hdwallet-provider');
const Web3 =require ('web3');
const { interface,bytecode}= require('./compile');


const provider=new HdWalletProvider(
  'push envelope modify hill usual stool measure surge spread panic blood sick',
  'https://rinkeby.infura.io/v3/90ebedc894ff4499bd36fe315ddd1c31'
);
const web3=new Web3(provider);

//const deploy=new web3(provider);
const deploy = async () => {
  const accounts=await web3.eth.getAccounts();

  console.log('attempting to deploy from account',accounts[0]);

const result=  await new web3.eth.Contract(JSON.parse(interface))
.deploy({data:bytecode ]})
.send({from:accounts[0] , gas:"1000000"});

console.log('contract deployed to ',result.options.address);
};
deploy();
