google.load("feeds", "1");

var app=angular.module('myapp',[])

app.controller('myctrl',function($scope, $sce, $timeout){
  
  $scope.news = [{
    title: 'Top Stories',
    link: 'http://rssfeeds.usatoday.com/usatoday-NewsTopStories'
  },{
    title: 'National news',
    link: 'http://rssfeeds.usatoday.com/UsatodaycomNation-TopStories'
  },{
    title: 'Washington news',
    link: 'http://rssfeeds.usatoday.com/UsatodaycomWashington-TopStories'
  },{
    title: 'World news',
    link: 'http://rssfeeds.usatoday.com/UsatodaycomWorld-TopStories'
  }];
  
  $scope.sports = [{
    title:'Sports Headlines',    
    link:'http://rssfeeds.usatoday.com/UsatodaycomSports-TopStories'
  },{
    title:'NFL',
    link:'http://rssfeeds.usatoday.com/UsatodaycomNfl-TopStories'
  },{
    title:'NCAA',
    link:'http://rssfeeds.usatoday.com/UsatodaycomCollegeFootball-TopStories'
  },{
    title:'Golf',
    link:'http://rssfeeds.usatoday.com/UsatodaycomGolf-TopStories'
  },{
    title:'Motor Sports',
    link:'http://rssfeeds.usatoday.com/topmotorsports'
  },{
    title:'Tennis',
    link:'http://rssfeeds.usatoday.com/UsatodayTennis-TopStories'
  }]
  
  $scope.life = [{
    title:'Entartainment',
    link:'http://rssfeeds.usatoday.com/usatoday-LifeTopStories'
  },{
    title:'People',
    link:'http://rssfeeds.usatoday.com/toppeople'
  },{
    title:'Movies',
    link:'http://rssfeeds.usatoday.com/UsatodaycomMovies-TopStories'
  },{
    title:'Music',
    link:'http://rssfeeds.usatoday.com/UsatodaycomMusic-TopStories'
  },{
    title:'TV',
    link:'http://rssfeeds.usatoday.com/UsatodaycomTelevision-TopStories'
  },{
    title:'Books',
    link:'http://rssfeeds.usatoday.com/UsatodaycomBooks-TopStories'
  }]
  
  
  $scope.money=[{
    title:'Money Headlines',
    link:'http://rssfeeds.usatoday.com/UsatodaycomMoney-TopStories'
  },{
    title:'Cars',
    link:'http://rssfeeds.usatoday.com/UsatodaycomMoney-Healey'
  }]
  
  $scope.tech=[{
    title:'Tech headlines',
    link:'http://rssfeeds.usatoday.com/usatoday-TechTopStories'
  },{
    title:'Personal Tech',
    link:'http://rssfeeds.usatoday.com/UsatodaycomTech-PersonalTalk'
  },{
    title:'Gaming',
    link:'http://rssfeeds.usatoday.com/topgaming'
  }]
  
  $scope.travel=[{
    title:'Travel Headlines',
    link:'http://rssfeeds.usatoday.com/UsatodaycomTravel-TopStories'
  },{
    title:'Destinations',
    link:'http://rssfeeds.usatoday.com/UsatodayTravel-Destinations'
  },{
    title:'Flights',
    link:'http://rssfeeds.usatoday.com/UsatodayTravel-Flights'
  },{
    title:'Cruises',
    link:'http://rssfeeds.usatoday.com/TP-TheCruiseLog'
  },{
    title:'Hotels',
    link:'http://rssfeeds.usatoday.com/UsatodayTravel-Hotels'
  }]
  
  
  
$scope.loadFeed = function(feedUrl){
  $scope.menuState = true
     $scope.feed = new google.feeds.Feed(feedUrl);
  $scope.feed.setNumEntries(30);
   $scope.feed.load(function(result) {
     if (!result.error) {
      
       $scope.feeds = result.feed.entries;
       angular.forEach($scope.feeds, function(f){        
        f.content = f.content.substring(0,f.content.indexOf('<div style=\"clear:both;padding-top:0.2em\">'));
         
         f.content = $sce.trustAsHtml(f.content);  
         
       })
       $scope.$apply()
	
     }
   })
  
}  

$scope.loadFeed($scope.news[3].link)

$scope.menuState=true;
  
  $scope.showPost = function(link){
      window.open(link, '_blank');
  }
   $scope.dsa='dsa'
})

app.directive('scrollToTop', function(){
    return {
        restrict: 'A',
        scope: {
            trigger: '=scrollToTop'
        },
        link: function postLink(scope, elem) {
            scope.$watch('trigger', function() {
                elem[0].scrollTop = 0;
            });
        }
    };
});
