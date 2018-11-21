pragma solidity ^0.4.24;

contract Election {

    struct Vote {
        uint id;
        address sender;
        uint value;
        uint hostId;
    }

    struct Host {
        uint id;
        address sender;
        string title;
        string description;
        string reward;
    }
    
    mapping(address => bool) public voters;

    mapping(uint => Vote) public votes;

    mapping(uint => Host) public hosts;


    uint public votesCount;

    uint public hostsCount;

    // test...
    event votedEvent (
        uint indexed _voteId
    );

    constructor() public {
        addHost("自動生成", "この商品の需要量を予測してください", "報酬タイプA");
    }

    function vote(uint _value, uint _hostId) public {
        require(_value != 0);
        votesCount ++;
        votes[votesCount] = Vote(votesCount, msg.sender, _value, _hostId);

        // test...
        votedEvent(_value);
    }

    function addHost (string _title, string _description, string _reward) private {
        hostsCount ++;
        hosts[hostsCount] = Host(hostsCount, msg.sender, _title, _description, _reward);
    }

    // function getVotes() external view returns (uint[20]) {
    //     uint[20] memory results;
    //     uint max = votes[].length > 20 ? 20 : votes.length - 1;
    //     for (uint i=0; i<max; i++) {
    //         uint voteId = votes.length - 1 - i;
    //         results[i] = voteId;
    //     }
    //     return results;
    // }

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