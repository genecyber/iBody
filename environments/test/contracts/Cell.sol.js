// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"respawn","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getName","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"theName","type":"bytes32"}],"name":"setName","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[],"name":"self","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"getOffSpring","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_self","type":"address"}],"name":"setSelf","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"isDead","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"data","type":"bytes32"}],"name":"set","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInNRG","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"myName","type":"bytes32"}],"type":"constructor"}],
    binary: "6060604052604051602080610374833950608060405251600160a060020a03329081166000908152600160205260409020612710905560068290556007805460ff19169055600582905560028054600160a060020a0319169091179055506103098061006b6000396000f3606060405236156100a35760e060020a60003504630b1cdbc681146100a557806317d7de7c146100b857806335fe620f146100c25780636d4ce63c146100e75780637104ddb2146100f2578063847ad742146101045780638da5cb5b1461011857806390b98a111461012a57806390db72d91461016557806399baa10c1461018b578063db80813f146101b8578063eb7a4a8e146101c3578063f8b2cb4f146101ee575b005b6100a35b6007805460ff19166001179055565b61021d6005545b90565b61021d60043560243560075460009060ff161515610250575060058190556001610250565b61021d6006546100bf565b61022f600354600160a060020a031681565b61022f600454600160a060020a03166100bf565b61022f600254600160a060020a031681565b61021d60043560243560075460009060ff1615156102505733600160a060020a03168152600160205260408120548290101561025657610250565b6003805473ffffffffffffffffffffffffffffffffffffffff19166004351790556100a3565b61021d600254600160a060020a03166000908152600160205260408120548114156102fd576102fd6100a9565b6004356006556100a3565b61021d600435600073ac2819324d31ef2dcbb882ada932296d3a509ae46396e4ee3d6102b8846101f5565b61021d6004355b600160a060020a038116600090815260016020526040812054811415610298576102986100a9565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b5060015b92915050565b33600160a060020a0390811660008181526001602052604080822080548790038155938716825281208054860190559081529054141561024c5761024c6100a9565b50600160a060020a0381166000908152600160205260409020545b919050565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506102b39050565b5060075460ff166100bf56",
    unlinked_binary: "6060604052604051602080610374833950608060405251600160a060020a03329081166000908152600160205260409020612710905560068290556007805460ff19169055600582905560028054600160a060020a0319169091179055506103098061006b6000396000f3606060405236156100a35760e060020a60003504630b1cdbc681146100a557806317d7de7c146100b857806335fe620f146100c25780636d4ce63c146100e75780637104ddb2146100f2578063847ad742146101045780638da5cb5b1461011857806390b98a111461012a57806390db72d91461016557806399baa10c1461018b578063db80813f146101b8578063eb7a4a8e146101c3578063f8b2cb4f146101ee575b005b6100a35b6007805460ff19166001179055565b61021d6005545b90565b61021d60043560243560075460009060ff161515610250575060058190556001610250565b61021d6006546100bf565b61022f600354600160a060020a031681565b61022f600454600160a060020a03166100bf565b61022f600254600160a060020a031681565b61021d60043560243560075460009060ff1615156102505733600160a060020a03168152600160205260408120548290101561025657610250565b6003805473ffffffffffffffffffffffffffffffffffffffff19166004351790556100a3565b61021d600254600160a060020a03166000908152600160205260408120548114156102fd576102fd6100a9565b6004356006556100a3565b61021d600435600073__ConvertLib____________________________6396e4ee3d6102b8846101f5565b61021d6004355b600160a060020a038116600090815260016020526040812054811415610298576102986100a9565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b5060015b92915050565b33600160a060020a0390811660008181526001602052604080822080548790038155938716825281208054860190559081529054141561024c5761024c6100a9565b50600160a060020a0381166000908152600160205260409020545b919050565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506102b39050565b5060075460ff166100bf56",
    address: "0xbed642729be725fc26be2dcf47442dbbf9237873",
    generated_with: "2.0.9",
    contract_name: "Cell"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Cell error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Cell error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Cell error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Cell error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Cell = Contract;
  }

})();
