const EIP20Abstraction = artifacts.require('EIP20');
let instance;

contract('EIP20', (accounts) => {
  beforeEach(async () => {
    instance = await EIP20Abstraction.new(10000, 'Training Bucks', 1, 'TBX', { from: accounts[0] });
  });

  it('creation: should create an initial balance of 10000 for the creator', async () => {
    const balance = await instance.balanceOf.call(accounts[0]);
    assert.strictEqual(balance.toNumber(), 10000);
  });

  // TRANSERS
  it('transfers: should transfer 10000 to accounts[1] with accounts[0] having 10000', async () => {
    await instance.transfer(accounts[1], 10000, { from: accounts[0] });
    const balance = await instance.balanceOf.call(accounts[1]);
    assert.strictEqual(balance.toNumber(), 10000);
  });
});
