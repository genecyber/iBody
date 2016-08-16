import 'Cell.sol';
import 'Creator.sol';
import 'Agent.sol';
import 'Memory.sol';

contract Cell_Creator is Creator {
    function createCell(Creator factory, bytes32 _name) returns (Agent cell) {
        return new Cell(_name);
    }
}

contract System is Memory {  
    address public owner = msg.sender;
    Agent cell;
    uint public numCells = 0;
    bytes32 storedData;
    address storedAddress;
    mapping (uint => Agent) public cells;
    mapping (uint => bytes32) knowledge;
    Cell_Creator factory;
    
    function set(bytes32 data) {
        Memory.set(data);
    }
    function get() constant returns (bytes32 retVal) {
        return Memory.get();
    }
    function getAddress() constant returns (address retVal) {
        return storedAddress;
    }
    function getCellnumber() constant returns (uint retVal) {
        return numCells;
    }
    
    function System() {
        factory = new Cell_Creator();
        cell = factory.createCell(factory, "CellZero");
        cells[numCells] = cell;
    }
    
    function Tick() returns (Agent) {
        if (cell.isDead()) {  
            storedAddress = cell;          
            return Spawn();            
        }        
        return cells[numCells];
    }
    
    function getKnowledge(address _address, uint index) returns (bytes32){
        return knowledge[index];
    }
    
    function Spawn() returns (Agent) {       
        knowledge[numCells] = cell.get();
        numCells++; 
        cell = factory.createCell(factory, "Cell");
        cells[numCells] = cell;
        return cells[numCells];
    }
    
    function getCell(uint index) returns (Agent) {
        return cells[index];
    }
}