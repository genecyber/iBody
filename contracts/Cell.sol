import "ConvertLib.sol";
import 'Creator.sol';
import 'Agent.sol';
import 'Memory.sol';

contract Cell is Agent {
	mapping (address => uint) balances;
	address public owner;
	address public self;
	Agent offspring;
	bytes32 name;
	bytes32 storedData;
	bool died;
	
	function Cell (bytes32 myName) {
		balances[tx.origin] = 10000;
		storedData = myName;
		died = false;
		name = myName;
		owner = tx.origin;		
	}
	function set(bytes32 data) {
        storedData = data;
    }
    function get() constant returns (bytes32 retVal) {
        return storedData;
    }
	
	modifier whenAlive()
    {
        if (!died)
		_
    }
	 
	function setSelf(address _self) {
		self = _self;
	}
	function sendCoin(address receiver, uint amount) whenAlive() returns(bool sufficient) {
		if (balances[msg.sender] < amount) return false;
		balances[msg.sender] -= amount;
		balances[receiver] += amount;
		if (balances[msg.sender] == 0) respawn();
		return true;
	}
	function setName(address addr, bytes32 theName) whenAlive() returns(bool success) {
    	name = theName;
		return true;
  	}
	function getBalanceInNRG(address addr) returns(uint){
		return ConvertLib.convert(getBalance(addr),2);
	}
  	function getBalance(address addr) returns(uint) {
		//Died if 0
		if (balances[addr] == 0) respawn();
    	return balances[addr];
  	}
	function getName() returns(bytes32) {
    	return name;
  	}
	function isDead() returns(bool) {
		if (balances[owner] == 0) respawn();
		return died;
	}
	function respawn() {
		died = true;	
	}
	function getOffSpring() returns(Agent) {
		return offspring;
	}
}
