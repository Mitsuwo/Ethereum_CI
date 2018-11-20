pragma solidity ^0.4.24;

contract Election {

    struct Vote {
        uint id;
        string name;
        uint voteCount;
    }

    struct Host {
        uint id;
        string hostDescription;
        uint hostCount;
    }
    
    mapping(address => bool) public voters;

    mapping(uint => Candidate) public candidates;
    mapping(uint => Host) public hosts;

    uint public candidatesCount;
    uint public hostsCount;

    event votedEvent (
        uint indexed_candidateId
    );

    constructor() public {
        addCandidate("0 - 1000");
        addCandidate("1001 - 2000");
        addCandidate("2001 - 3000");
        addCandidate("3001 - 4000");
        addCandidate("4001 - 5000");
        addCandidate("5001 - 6000");
        addCandidate("6001 - 7000");
        addCandidate("7001 - 8000");
        addCandidate("8001 - 9000");
        addCandidate("9001 - 10000");
        addHost("この商品の需要量を予測してください");
    }

    function addCandidate (string _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function addHost (string _description) private {
        hostsCount ++;
        hosts[hostsCount] = Host(hostsCount, _description, 0);
    }

    function vote (uint _candidateId) public {
        //require
        require(!voters[msg.sender]);
        //require
        require(_candidateId > 0 && _candidateId <= candidatesCount);
        //record that voter has voted
        voters[msg.sender] = true;
        //update candidate vote Count
        candidates[_candidateId].voteCount ++;

        votedEvent(_candidateId);
    }
}