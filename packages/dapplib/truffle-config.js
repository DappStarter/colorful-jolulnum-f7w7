require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remember evil hockey problem breeze twelve'; 
let testAccounts = [
"0x4132f2100a0f85ae0a5cf55cde51de75ec8276d0677f8252ec38e46140c61dd4",
"0x6480ebfeaf411079ca65211e78ffa22153515be5fd36d89bca4b40cd0b4a2484",
"0x87d87f479a196d554d7a587472ed34677f8be2be62e05db4fd8460e405fc4337",
"0xe1ce3e37479aebc9ec0ddd8e96b6953f2c23742c049ea54879840c03c8cd22a1",
"0x26a26fea9cf17c4d88ccb7410cff081c39ae412a0cd82ee90c584c6c0e15a460",
"0x58298d3f37a5e381827b6ce07112e02b95850bee423b79c287088eb5c36970d7",
"0xb03946240ce63e402756eae4405bfcdfcf6fe881b389d87cb441c85ac96b92fd",
"0x7f6c9e5f172b0ae975fa84dbe2f2616ceb4a6be7bbac351fd3c480f7b2a88aa7",
"0x342c8c58085ec6e1e49b9cac5a0d92b1e0ee8ece23f7775f329ef2effeea6e3c",
"0x242a1b38a24b59d8a2c6374e5f8fdc0d831aa5936971aab1687e693e901619ac"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

