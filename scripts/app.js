(function ( ) {
var app = angular.module('site', []);
    
var projects = [
        {
        name:"CSGOTeamBot",
        description:"A Python bot for /r/globaloffensive, powered by HLTV's statistics. Access specific team and player stats, instantly.",
        link:"https://github.com/Charrod/csgoteambot"
        }
];

app.controller('ContentController', function(){
    this.projects = projects;
})
})();