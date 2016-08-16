contract Memory {
    bytes32 storedData;
    function set(bytes32 data) {
        storedData = data;
    }
    function get() constant returns (bytes32 retVal) {
        return storedData;
    }
}