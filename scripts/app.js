(function ( ) {
var app = angular.module('site', []);
    
var tabs = {
        projects:{proj1:{
                            name:"CSGOTeamBot",
                            description:"A bot for Reddit, specifically the /r/GlobalOffensive Subreddit, powered by HLTV.org's Counter Strike: Global Offensive statistics. Access specific team and player stats, instantly. Scrapes HLTV for stats using Python and Morph.io, updates the PostgreSQL database, and returns the stats in a beautifully formatted new comment. Successfully augmented over ",
                            link:"https://github.com/Charrod/csgoteambot",
                            tools:"Python, PostgreSQL, Heroku, and Morph.io",
                            show:false,
                },proj2:{
                            name:"rodiger.io / chrl.io",
                            description:"My personal portfolio site. You are using it! AngularJS allows navigation to be snappy without the need for page reloads. Built from scratch.",
                            link:"https://github.com/Charrod/customSite",
                            tools: "HTML, CSS, Twitter Bootstrap, and AngularJS",
                        }
        },
            about:{
                tabname:"About",
                description:"My name is Charlie Rodiger, and I am a 19 year-old CS Student from Wilton, CT. At Colgate, I am Treasurer of the Colgate Hackers. I also ski/snowboard, run, play on the Colgate Men's Club Soccer team, and I am certified as a soccer referee. As well, I volunteer 40 hours per month working with the Southern Madison County Volunteer Ambulance Corps. But, beyond my classes and extracurriculars, I spend the majority of my time coding, and making cool things.",
                skills:"Python, Java, CSS, HTML, SQL, and JavaScript",
                show:false
        },
            home:{
                tabname:"Home",
                show:true
        }
};


app.controller('ContentController', function(){
    this.tabs = tabs;
})
})();