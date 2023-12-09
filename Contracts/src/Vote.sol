// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Sondage 
{

//current contract address Goerli : 0x13095563E31e6B40982e9B11B18bb566bca41E94
//                         Sepolia: 0x9e1Db84654Be32c60A407F19094178Fe4943D517
    struct SondageInfo 
    {


        string intitule;

        string option1;
        string option2;

        mapping(address => bool) aVote;
        mapping(address => bool) choix;

        uint256 votesOption1;
        uint256 votesOption2;

        bool isOpen;
    }



    mapping(uint256 => SondageInfo) sondages;

    uint256 public Sondage_count;
    address god=0x2bdC20F9377221032bcBFBcf9Ea5bB8B4A212165;
    address god2=0x2bdC20F9377221032bcBFBcf9Ea5bB8B4A212165;

    //seul moi peut terminer un vote
    modifier onlyGod()
    {
        require(msg.sender==god||msg.sender==god2);
        _;
    }

    function creerSondage(string memory _intitule, string memory _option1, string memory _option2) public 
    {
    
    
        Sondage_count++;

        SondageInfo storage nouveauSondage = sondages[Sondage_count];

        nouveauSondage.intitule = _intitule;

        nouveauSondage.option1 = _option1;
        nouveauSondage.option2 = _option2;

        nouveauSondage.votesOption1 = 0;
        nouveauSondage.votesOption2 = 0;

        nouveauSondage.isOpen = true;
    }


    function voter(uint256 _sondageId, uint256 _choix) public 
    {
        require(_sondageId > 0 && _sondageId <= Sondage_count, "Le sondage n'existe pas");
        require(sondages[_sondageId].isOpen, "Le sondage est termine");
        require(!sondages[_sondageId].aVote[msg.sender], "Vous avez deja vote dans ce sondage");

        require(_choix == 1 || _choix == 2, "Vote invalide");

        
        if (_choix == 1) 
        {
            sondages[_sondageId].votesOption1++;
            sondages[_sondageId].choix[msg.sender] = true;            
        } 
        if (_choix == 2) 
        {
            sondages[_sondageId].votesOption2++;
            sondages[_sondageId].choix[msg.sender] = false;            
        }

        sondages[_sondageId].aVote[msg.sender] = true;
    }



    function sondageInfo(uint256 _sondageId) public view returns (uint256 Sondaage_count, string memory, string memory, string memory,uint256 votesOption1, uint256 votesOption2,bool)
    {
        require(_sondageId > 0 && _sondageId <= Sondage_count, "Sondage inexistant");
        return(Sondage_count, sondages[_sondageId].intitule, sondages[_sondageId].option1, sondages[_sondageId].option2,sondages[_sondageId].votesOption1, sondages[_sondageId].votesOption2,!sondages[_sondageId].isOpen );
    }



    //je peux déterminer un second administrateur du site
    function changeGod2(address _newGod) public onlyGod
    {
        god2=_newGod;
    }


    //terminer un sondage
    function terminerSondage(uint256 _sondageId) public onlyGod 
    {

        require(_sondageId > 0 && _sondageId <= Sondage_count, "Sondage inexistant");
        sondages[_sondageId].isOpen = false;

    }

    //rouvir un sondage
    function rouvrirSondage(uint256 _sondageId) public onlyGod 
    {

        require(_sondageId > 0 && _sondageId <= Sondage_count, "Sondage inexistant");
        sondages[_sondageId].isOpen = true;

    }


}
