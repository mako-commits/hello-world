// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.10;

contract HelloWorld{
    //state variable
    string public greeting;

    constructor( string memory initGreeting){
        greeting = initGreeting;
    }
    
    //function to set greeting message
    function setGreeting(string memory _greeting)public{
        greeting = _greeting;
    }

    //funtion to view greeting message
    function viewGreeting() public view returns(string memory){
        return greeting;
    }
}