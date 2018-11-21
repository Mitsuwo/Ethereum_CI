pragma solidity ^0.4.24;

contract Election {

    struct Vote {
        address sender;
        uint value;
        uint hostId;
    }

    struct Host {
        uint id;
        string title;
        string hostDescription;
        uint hostsCount;
    }

    Vote[] public votes;
    
    mapping(address => bool) public voters;

    //mapping(uint => Vote) public votes;
    mapping(uint => Host) public hosts;

    // uint public candidatesCount;
    uint public hostsCount;

    event votedEvent (
        uint indexed_voteId
    );

    constructor() public {
        votes.push(Vote(0, 0, 1));
        addHost("この商品の需要量を予測してください");
    }

    function vote(uint _value, uint _hostId) public returns(uint) {
        require(_value != 0);
        uint id = votes.push(Vote(msg.sender, _value, _hostId))-1;
        return id;
    }

    function getVotes() external view returns (uint[20]) {
        uint[20] memory results;
        uint max = votes.length > 20 ? 20 : votes.length - 1;
        for (uint i=0; i<max; i++) {
            uint voteId = votes.length - 1 - i;
            results[i] = voteId;
        }
        return results;
    }

    function addHost (string _description) private {
        hostsCount ++;
        hosts[hostsCount] = Host(hostsCount, "", _description, 0);
    }

    // function addVote (string _name) private {
    //     candidatesCount ++;
    //     candidates[candidatesCount] = Vote(candidatesCount, _name, 0);
    // }

    // function vote (uint _candidateId) public {
    //     //require
    //     require(!voters[msg.sender]);
    //     //require
    //     require(_candidateId > 0 && _candidateId <= candidatesCount);
    //     //record that voter has voted
    //     voters[msg.sender] = true;
    //     //update candidate vote Count
    //     votes[_candidateId].voteCount ++;

    //     votedEvent(_candidateId);
    // }
}