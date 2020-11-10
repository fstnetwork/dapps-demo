pragma solidity ^0.7.0;

contract Storage {

  address public owner;

  uint256 public num;
  
  string public str;
  
  mapping (uint256 => string) public map;

  event NumSet(uint256 old_value, uint256 new_value, uint256 timestamp, address actor);
  event StrSet(string old_value, string new_value, uint256 timestamp, address actor);
  event MapSet(uint256 key, string old_value, string new_value, uint256 timestamp, address actor);

  constructor () {
    owner = msg.sender;
  }
  
  function setNum(uint256 _num) public {
    require(msg.sender == owner);
    
    emit NumSet(num, _num, block.timestamp, msg.sender);
    
    num = _num;
  }

  function setStr(string memory _str) public {
    require(msg.sender == owner);
    
    emit StrSet(str, _str, block.timestamp, msg.sender);
    
    str = _str;
  }

  function setMap(uint256 _k, string memory _v) public {
    require(msg.sender == owner);
    
    emit MapSet(_k, map[_k], _v, block.timestamp, msg.sender);
    
    map[_k] = _v;
  }
}
