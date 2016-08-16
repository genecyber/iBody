// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"theName","type":"bytes32"}],"name":"setName","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getName","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a033216600090815260208190526040902061271090556101778061002f6000396000f3606060405260e060020a600035046335fe620f81146100475780635fd4b08a1461005c5780637bd703e81461006b57806390b98a1114610096578063f8b2cb4f146100c5575b005b6100ea60043560243560018181555b92915050565b6100ea6004356001545b919050565b6100ea600435600073729771b4b8233bb9070536ee5572164226d2d4196396e4ee3d610132846100cc565b6100ea60043560243533600160a060020a0316600090815260208190526040812054829010156100fc57610056565b6100ea6004355b600160a060020a038116600090815260208190526040902054610066565b60408051918252519081900360200190f35b5033600160a060020a03908116600090815260208190526040808220805485900390559184168152208054820190556001610056565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f415610002575050604051519150610066905056",
    unlinked_binary: "6060604052600160a060020a033216600090815260208190526040902061271090556101778061002f6000396000f3606060405260e060020a600035046335fe620f81146100475780635fd4b08a1461005c5780637bd703e81461006b57806390b98a1114610096578063f8b2cb4f146100c5575b005b6100ea60043560243560018181555b92915050565b6100ea6004356001545b919050565b6100ea600435600073__ConvertLib____________________________6396e4ee3d610132846100cc565b6100ea60043560243533600160a060020a0316600090815260208190526040812054829010156100fc57610056565b6100ea6004355b600160a060020a038116600090815260208190526040902054610066565b60408051918252519081900360200190f35b5033600160a060020a03908116600090815260208190526040808220805485900390559184168152208054820190556001610056565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f415610002575050604051519150610066905056",
    address: "0xec33196f09155b5ef8bd3d43956d8ee7f1f9b36a",
    generated_with: "2.0.9",
    contract_name: "MetaCoin"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("MetaCoin error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.MetaCoin = Contract;
  }

})();
