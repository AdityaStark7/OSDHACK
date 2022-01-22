require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/BJc6QTKlQw2X7XaOoQMphcxKjGkN6QL0',
      accounts: ['de9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0'],
    },
  },
};