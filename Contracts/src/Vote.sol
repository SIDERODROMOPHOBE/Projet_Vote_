// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Vote {


struct Poll {
        uint256 vote_id;
        uint256 vote_deadline;

        string vote_name;
        string vote_desc;

        string option1;
        string option2;
        string option3;
        string option4;

        uint256 option1_value;
        uint256 option2_value;
        uint256 option3_value;
        uint256 option4_value;
    }

    //Each poll has its position in this mapping (easy to access from frontend then)
    mapping(uint256 => Poll) public Polls;

    //Total number of polls
    uint256 public polls_couter=0;


    //Use this to create and register a new poll
    function Create_Poll(uint256 _vote_deadline,string memory _vote_name, string memory _vote_desc) public {

        //Create a new poll from a form
        Poll memory newPoll = Poll({

            vote_id: ++polls_couter,
            vote_deadline: _vote_deadline,
            vote_name:_vote_name,
            vote_desc: _vote_desc,

            option1:"un",
            option2:"deux",
            option3:"trois",
            option4:"quatre",

            option1_value:uint256(0),
            option2_value:uint256(0),
            option3_value:uint256(0),
            option4_value:uint256(0)

        });

        //register this new poll with all polls
        Polls[polls_couter] = newPoll;
    }

    
}
