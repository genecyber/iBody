var system, cell

contract('System', function (accounts) {
  it("should create cell named CellZero", function (done) {
    system = System.deployed()
    system.getCell.call(0).then(function (addr) {
      cell = Cell.at(addr)
      assert.isNotNull(cell)
    }).then(function () {
      cell.getName.call().then(function (name) {
        assert.equal("CellZero", web3.toAscii(name).replace(/\u0000/g, ''))
      }).then(done)
    })
  })  
})

contract('Cell', function (accounts) {
  it("should put 10000 CellZero in the first account", function (done) {
    cell.getBalance.call(accounts[0]).then(function (balance) {
      assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    }).then(done).catch(done);
  })
  it("should be named CellZero", function (done) {
    //cell.setName(accounts[0], "Cellcoin").then(
    cell.getName.call().then(function (name) {
      assert.equal(web3.toAscii(name).replace(/\u0000/g, ''), "CellZero", "CellZero wasn't the name " + name);
    }).then(done).catch(done)
    //)
  })
  it("Should be born with 20000 NRG", function (done) {
    var metaCoinBalance;
    var metaCoinEthBalance;

    cell.getBalance.call(accounts[0]).then(function (outCoinBalance) {
      metaCoinBalance = outCoinBalance.toNumber();
      return cell.getBalanceInNRG.call(accounts[0]);
    }).then(function (outCoinBalanceEth) {
      metaCoinEthBalance = outCoinBalanceEth.toNumber();

    }).then(function () {
      assert.equal(metaCoinEthBalance, 2 * metaCoinBalance, "Library function returned unexpeced function, linkage may be broken");

    }).then(done).catch(done);
  })
  it("Should be alive if not dead", function (done) {
    cell.isDead.call(accounts[0]).then(function (isDead) {
      assert.equal(isDead, false, "Cell was dead.")
    }).then(done).catch(done)
  })
  it("Should send coin correctly", function (done) {
    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    cell.getBalance.call(account_one).then(function (balance) {
      account_one_starting_balance = balance.toNumber();
      return cell.getBalance.call(account_two);
    }).then(function (balance) {
      account_two_starting_balance = balance.toNumber();
      return cell.sendCoin(account_two, amount, { from: account_one });
    }).then(function () {
      return cell.getBalance.call(account_one);
    }).then(function (balance) {
      account_one_ending_balance = balance.toNumber();
      return cell.getBalance.call(account_two);
    }).then(function (balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    }).then(done).catch(done);
  })
  it("Should be dead if balance is 0", function (done) {
    var account_one = accounts[0];
    var account_two = accounts[1];
    cell.sendCoin(account_two, 9990, { from: account_one }).then(function () {
      //console.log(cell.address)
      cell.isDead.call(accounts[0]).then(function (isDead) {
        assert.equal(isDead, true, "Cell was dead.")
      }).then(done).catch(done)
    })
  })
  it("Should not change name if dead", function (done) {
    cell.setName(accounts[0], "NameChange").then(function () {
      cell.getName.call().then(function (name) {
        assert.equal(web3.toAscii(name).replace(/\u0000/g, ''), "CellZero", "CellZero wasn't the name " + name);
      }).then(done).catch(done)
    })
  })
  it("Should allow data to be set",function(done){
    cell.set("some data").then(function(){
      cell.get().then(function(data){
        assert.equal("some data", data.toAscii())
      }).then(done)
    })
  })
  it("Should store generational data",function(done){
    system.getKnowledge(cell.address, 0).then(function(data){
      console.log(data.toAscii())
      assert.equal("Inception", data.toAscii())
    }).then(done)
  })
})

contract('System Tick', function (accounts) {
  it("should store data", function(done){
    system.set("data").then(function(){
      system.get.call().then(function(data){
        assert.equal("data", data.toAscii())
        system.set("New Data").then(function(){
          system.get.call().then(function(data){
            assert.equal("New Data", data.toAscii())
          })
        }).then(done)     
      })        
    })
  })
  it("should get data",function(done){    
    system.get.call().then(function(data){
      assert.equal("New Data", data.toAscii())     
    }).then(done)
  })
  it("should be able to detect if cell is dead", function (done) {
    system.Tick().then(function (agent) {
    }).then(function () {
      system.getCell.call(0).then(function (addr) {
        var foo = Cell.at(addr)
      }).then(function () {
        cell.sendCoin(accounts[1], 10000, { from: accounts[0] }).then(function () {
          system.Tick().then(function (agent) {
            system.cells(1).then(function (agent) {
                }).then(done)
          })
        })
      })
    })
  })
  it("should not be able to have accept value if dead", function (done) {
      cell.getBalance.call(cell.address).then(function (balance) {
        assert.equal(balance.toNumber(), 0)
      }).then(function () {
        cell.getBalance.call(accounts[1]).then(function (balance) {
          assert.equal(balance.toNumber(), 10000)
        }).then(function () {
          cell.sendCoin(cell.address, 10000, { from: accounts[1] }).then(function () {
            cell.getBalance.call(cell.address).then(function (balance) {
              assert.equal(balance, 0)
            }).then(done)
          })
        })
      })
  })
})

String.prototype.toAscii = function(){
  return web3.toAscii(this).replace(/\u0000/g, '')
}