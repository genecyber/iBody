// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"","type":"address"}],"name":"setSelf","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"isDead","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"data","type":"bytes32"}],"name":"set","outputs":[],"type":"function"}],
    binary: "606060405260618060106000396000f3606060405260e060020a60003504636d4ce63c8114603857806390db72d914604157806399baa10c146045578063db80813f14604d575b005b6057600054604a565b6036565b605760005b90565b6004356000556036565b6060908152602090f3",
    unlinked_binary: "606060405260618060106000396000f3606060405260e060020a60003504636d4ce63c8114603857806390db72d914604157806399baa10c146045578063db80813f14604d575b005b6057600054604a565b6036565b605760005b90565b6004356000556036565b6060908152602090f3",
    address: "",
    generated_with: "2.0.9",
    contract_name: "Agent"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Agent error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Agent error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Agent error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Agent error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Agent = Contract;
  }

})();
