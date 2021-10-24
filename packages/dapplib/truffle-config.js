require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remember smile guess kiwi flock gather'; 
let testAccounts = [
"0xb8a52990afc42f173134c9279dc69a6d60ac7a964fa52ed1ea561443dfceecf9",
"0xd3133dfe88acf38dcdbf61c80aec67377b114cafdde45e26e4b0b08605cfb8be",
"0x5d6f2b8258f846500b10918049661b20e3a047cb4c0a5accb38683ff09c27e33",
"0x98e77743ada09803471389d4e29bf010a8fd13caf2d4351f0defa8fa0888be01",
"0x016de67cb1210446b66b8a3c6e0772eb689f06fafbc23fd4e56677d66992c093",
"0xb148fbdc8d252ef16c33b700f2ffd448df24f26ac54885852f37b4fcf6a63ac1",
"0x871012689c7c82d6198e12c4e65aefa2867e54dbc8e5afaaf9acea9d94b8507f",
"0x0b74f1afbbe0ad2b47d4933b0a1fbd450f3d6f69d9249bd107a2044ff9c9ae50",
"0x44b3effc7731a57f1246fcc4a24ca66a9cab0c12a4e5d3c15acca3afbcf3861f",
"0xb026f81d7f8b00d19a25d76b5f795b7e80e08ca9c88b239099f4a1b38487c986"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


