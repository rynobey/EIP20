# EIP20

1. Clone the repository into ~/workspace: 
```
git clone https://github.com/rynobey/EIP20.git
```
2. Make sure testrpc is running
3. Migrate onto testrpc: 
```
truffle migrate --network development1
```
4. Run the tests:
```
truffle test --network development1
```
5. Connect to truffle console:
```
truffle console --network development1
```
6. Get the deployed instance of the contract:
```
let eip20; EIP20.deployed().then(function(instance) {eip20 = instance;});
```
