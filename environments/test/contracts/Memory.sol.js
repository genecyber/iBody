// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"data","type":"bytes32"}],"name":"set","outputs":[],"type":"function"}],
    binary: "6060604052603b8060106000396000f3606060405260e060020a60003504636d4ce63c81146024578063db80813f146031575b005b6000546060908152602090f35b600435600055602256",
    unlinked_binary: "6060604052603b8060106000396000f3606060405260e060020a60003504636d4ce63c81146024578063db80813f146031575b005b6000546060908152602090f35b600435600055602256",
    address: "",
    generated_with: "2.0.9",
    contract_name: "Memory"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Memory error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Memory error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Memory error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Memory error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Memory = Contract;
  }

})();
