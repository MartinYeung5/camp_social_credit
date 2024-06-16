const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    //hardhat: {
    //  chainId: 325000,
    //},
    //campn_network: {
    //  url: 'https://rpc.camp-network-testnet.gelato.digital',
    //  accounts: [privateKey],
    //},
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
};
