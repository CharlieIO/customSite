(
    function ( ) {
    
var app = angular.module('site', []);
    
var tabs = {
        title:"Charlie Rodiger",
        projects:{
                proj1:{
                            name:"CSGOTeamBot",
                            description:"A bot for Reddit, specifically the /r/GlobalOffensive Subreddit, powered by HLTV.org's Counter Strike: Global Offensive statistics. Access specific team and player stats, instantly. Scrapes HLTV for stats using Python and Morph.io, updates the PostgreSQL database, and returns the stats in a beautifully formatted new comment. Successfully enhanced over 750 discussions.",
                            link:"https://github.com/CharlieIO/csgoteambot",
                            tools:"Python, PostgreSQL, Heroku, Morph.io",
                            show:false,
                }, proj2:{
                            name:"rodiger.io / chrl.io",
                            description:"My personal portfolio site. You are using it! AngularJS allows navigation to be snappy without the need for page reloads. Built from scratch.",
                            link:"https://github.com/CharlieIO/customSite",
                            tools: "Debian, Apache, HTML, CSS, Twitter Bootstrap, AngularJS",
                }, proj3:{
                            name:"NeuralTrump",
                            description:"My first utilization of Neural Networks to attempt to mimic the Tweeting patterns of Donald Trump. Based upon larpars's Word-RNN library on GitHub.",
                            link:"https://github.com/CharlieIO/NeuralTrump",
                            tools: "Recurrent Neural Networks, Python, Twitter API, Word-RNN, Char-RNN",
                }, proj4:{
                            name:"NewsBrain",
                            description:"A work in progress -- This project collects news headlines matched with Stock Tickers and price changes. Once enough data is obtained, potential influence of headlines will hopefully be able to be calculated using a Deep Neural Network. Code available upon request.",
                            link:"",
                            tools: "Neural Networks, Python, Numerous APIs",
                }, proj5:{
                			name:"FooBot",
                			description:"A product of HackRPI 2016. A GroupMe bot to collaboratively discover your next food-adventure.",
                			link:"https://github.com/CharlieIO/Foo-Bot",
                			tools: "Python, Amazon EC2, Trip Advisor RESTful API, GroupMe API, Shell Scripting",
                }
        },
        about:{
                tabname:"About",
                description:"My name is Charlie Rodiger. I am a 20 year-old Computer Science Student at Colgate University from Wilton, CT. My coding passions include Quantitative Trading, Machine Learning, and the growing applications of Big Data. At Colgate, I was Treasurer of the Colgate Hackers and am Co-President of the newly formed Colgate Co-Lab. I also ski/snowboard, run, play on the Colgate Men's Club Soccer team, and I am certified as a soccer referee. As well, I volunteer 40 hours per month working with the Southern Madison County Volunteer Ambulance Corps. But, beyond my classes and extracurriculars, I spend the majority of my time coding, and making cool things.",
                skills:"Python, Java, CSS, HTML, Securities Trading",
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

$(window).load(function () {
    $('.no-fouc').removeClass('no-fouc');
    $('.no-fouc' ).css( "visibility", "visible" );
});
