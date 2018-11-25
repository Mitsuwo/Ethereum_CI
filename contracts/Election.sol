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

    mapping(uint => Vote) public votes;

    mapping(uint => Host) public hosts;

    //mapping(int => Vote) public voteIdFromHostId;

    uint public votesCount;

    uint public hostsCount;

    constructor() public {
        host("自動生成", "この商品の需要量を予測してください", "報酬タイプA");
    }

    function vote(uint _value, uint _hostId) public {
        require(_value != 0);
        votesCount ++;
        votes[votesCount] = Vote(votesCount, msg.sender, _value, _hostId);
    }

    function host (string _title, string _description, string _reward) public {
        hostsCount ++;
        hosts[hostsCount] = Host(hostsCount, msg.sender, _title, _description, _reward);
    }

    function getHost(uint _id) public view returns (uint, address, string, string, string) {
        Host memory host = hosts[_id];
        return (_id, host.sender, host.title, host.description, host.reward);
    }

    function getVote(uint _id) public view returns (uint, address, uint, uint) {
        Vote memory vote = votes[_id];
        return (_id, vote.sender, vote.value, vote.hostId);
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