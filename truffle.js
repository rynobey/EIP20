module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
networks: {
  development1: {
    host: "127.0.0.1",
    port: 8545,
    network_id: "*" // match any network
  },
  development2: {
    host: "",
    port: 20010,
    network_id: "*",
    gasPrice: 0
  }
}
// to customize your Truffle configuration!
};
