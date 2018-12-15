pragma solidity ^0.4.24;

contract Election {

    struct Vote {
        uint id;
        address sender;
        uint level;
        uint value;
        uint hostId;
        uint when;
    }

    struct Host {
        uint id;
        address sender;
        string title;
        string description;
        string image;
        string reward;
        uint end;
        uint minValue;
        uint maxValue;
    }

    mapping(uint => Vote) public votes;

    mapping(uint => Host) public hosts;

    uint public votesCount;

    uint public hostsCount;

    constructor() public {
        host(
            "自動生成",
            "この商品の需要量を予測してください",
            "https://www.gettyimages.co.jp/detail/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88/water-bottles-illustration-%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%AA%E3%83%86%E3%82%A3%E3%83%95%E3%83%AA%E3%83%BC%E3%81%AE%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88/637753312",
            "報酬タイプA",
            10000,
            100,
            10000
        );
    }

    function vote(uint _level, uint _value, uint _hostId) public {
        require(_value != 0);
        votesCount ++;
        votes[votesCount] = Vote(votesCount, msg.sender, _level, _value, _hostId, block.timestamp);
    }

    function host(string memory _title, string memory _description, string memory _image, string memory _reward, uint _biddingTime, uint _minValue, uint _maxValue) public {
        hostsCount ++;
        uint end = now + _biddingTime;
        hosts[hostsCount] = Host(hostsCount, msg.sender, _title, _description, _image, _reward, end, _minValue, _maxValue);
    }

    function getVote(uint _id) public view returns (uint, address, uint, uint, uint, uint) {
        Vote memory vote = votes[_id];
        return (_id, vote.sender, vote.level, vote.value, vote.hostId, vote.when);
    }

    // function getHost(uint _id) public view returns (uint, address, string, string, string, uint) {
    //     Host memory host = hosts[_id];
    //     return (_id, host.sender, host.title, host.description, host.reward, host.end);
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