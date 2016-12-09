	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the food page
			.when('/free_food', {
				templateUrl : 'pages/food.html',
				controller  : 'foodController'
			})

			// route for the arts page
			.when('/arts', {
				templateUrl : 'pages/arts.html',
				controller  : 'artsController'
			})

			// route for the login page
			.when('/login', {
				templateUrl : 'pages/login.html',
				controller  : 'loginController'
			})
			.when('/map', {
				templateUrl : 'pages/map.html',
				controller  : 'mapController'
			})
			// route for the week page
			.when('/week', {
				templateUrl : 'pages/week.html',
				controller  : 'weekController'
			})

			// route for the student page
			.when('/student', {
				templateUrl : 'pages/student.html',
				controller  : 'studentController'
			})
			// route for the student page
			.when('/organization', {
				templateUrl : 'pages/organization.html',
				controller  : 'organizationController'
			})
			// route for the event page
			.when('/event', {
				templateUrl : 'pages/event.html',
				controller  : 'eventController'
			})
			.when('/eventsMap', {
				templateUrl : 'pages/eventsMap.html',
				controller  : 'eventsMapController'
			})
			.when('/profile', {
				templateUrl : 'pages/profile.html',
				controller  : 'profileController'
			});
	})
	.directive('mapCanvas', function() {
    return {
        restrict: 'E',
        link: function(scope, element) {
        	alert("s");
            var mapOptions = {
                zoom: 8,
                center: new google.maps.LatLng(-34.397, 150.644)
            };
            new google.maps.Map(element[0], mapOptions);
        }
    };
});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope, $rootScope, $window) {
		// create a message to display in our view
		$scope.message = 'All the awesome events!';
		$scope.cat = '';
		$scope.thisWeek = false;
		$rootScope.orgUser = '';
		$rootScope.currEvent = '';
		$rootScope.newEvent = {
			id: 15,
	        title: "",
	        description: "",
	        peopleFav: 0,
	        people : 0,
	        location: "",
	        category: "",
	        host: "",
	        date: "",
	        time: "",
	        favorite: false,
	        pic: 'images/event.png',
	        recommended: false
		}
		$rootScope.events = [
	        {
	          id: 1,
	          title: 'HKSA Dimsum',
	          description: 'Come join HKSA and enjoy free dimsum imported from Hong Kong',
	          peopleFav: 195,
	          people: 64,
	          location: 'Bauer 240',
	          category: 'free_food',
	          host: 'HKSA',
	          date: '12/17/2016',
	          time: '19:00',
	          favorite: false,
	          pic: 'images/dimsum.jpg',
	          recommended: true
	        }, {
	          id: 2,
	          title: 'Thai SU Ice Tea',
	          description: 'TSA is hosting a cultural event and offers thai ice tea',
	          peopleFav: 15,
	          people: 24,
	          location: 'DUC 239',
	          category: 'free_food',
	          host: 'TSU',
	          date: '01/25/2017',
	          time: '13:00',
	          favorite: false,
	          pic: 'images/thaiicedtea.jpg',
	          recommended: true
	        }, {
	          id: 3,
	          title: 'PL2Y Performance',
	          description: 'PL2Y 10th annual K-Pop dances',
	          peopleFav: 12,
	          people: 43,
	          location: 'DUC 110',
	          category: 'performing_arts',
	          host: 'PL2Y',
	          date: '12/11/2016',
	          time: '20:00',
	          favorite: false,
	          pic: 'images/kpop.jpeg',
	          recommended: false
	        },{
	          id: 4,
	          title: 'SU Spring Initiation',
	          description: 'Student Union is looking for new members',
	          peopleFav: 45,
	          people : 22,
	          location: 'Koenig Lounge',
	          category: 'other',
	          host: 'SU',
	          date: '02/11/2017',
	          time: '19:00',
	          favorite: false,
	          pic: 'images/initiation.png',
	          recommended: false
	        },{
	          id: 5,
	          title: 'WUSIF Pitch Comp',
	          description: 'Class of 2018 Analyst Pitch Comptetion, free pizza and drinks!',
	          peopleFav: 27,
	          people: 16,
	          location: 'Simon 108',
	          category: 'free_food',
	          host: 'WUSIF',
	          date: '12/22/2016',
	          time: '19:00',
	          favorite: false,
	          pic: 'images/pitch.jpg',
	          recommended: true
	        },{
	          id: 6,
	          title: 'PL2Y',
	          description: 'PL2Y 5th Anniversary Showcase',
	          peopleFav: 69,
	          people : 41,
	          location: 'Tisch Commons',
	          category: 'performing_arts',
	          host: 'PL2Y',
	          date: '12/11/2016',
	          time: '20:00',
	          favorite: false,
	          pic: 'images/showcase.png',
	          recommended: true
	        },{
	          id: 7,
	          title: 'SOC Audition',
	          description: 'Music video audition: Block B Bastarz',
	          peopleFav: 42,
	          people : 23,
	          location: 'DUC 234',
	          category: 'performing_arts',
	          host: 'SOC',
	          date: '10/12/2016',
	          time: '17:00',
	          favorite: false,
	          pic: 'images/audition.png',
	          recommended: true
	        },{
	          id: 8,
	          title: 'WUSTL Alum Reunion',
	          description: 'Come join class of 1990 and have a glass of scotch',
	          peopleFav: 52,
	          people : 41,
	          location: 'DUC 270',
	          category: 'free_food',
	          host: 'SU',
	          date: '12/15/2016',
	          time: '16:00',
	          favorite: false,
	          pic: 'images/alum.jpg',
	          recommended: true
	        },{
	          id: 9,
	          title: 'Wash U Theatre',
	          description: 'Show: Murder Mystery Party',
	          peopleFav: 45,
	          people : 34,
	          location: 'Edison Theatre',
	          category: 'performing_arts',
	          host: 'WUTG',
	          date: '12/9/2016',
	          time: '19:00',
	          favorite: false,
	          pic: 'images/theatre.jpg',
	          recommended: false
	        },{
	          id: 10,
	          title: 'SU Afternoon Tea',
	          description: 'Tuesday afternoon tea with desserts',
	          peopleFav: 56,
	          people : 39,
	          location: 'Tisch Commons',
	          host: 'SU',
	          category: 'free_food',
	          date: '12/10/2016',
	          time: '14:00',
	          favorite: false,
	          pic: 'images/tea.jpg',
	          recommended: true
	        },{
	          id: 11,
	          title: 'SU Reading Session',
	          description: 'Reading week is coming, come prepare for your finals',
	          peopleFav: 102,
	          people : 98,
	          location: 'DUC',
	          category: 'other',
	          host: 'SU',
	          date: '12/9/2016',
	          time: '17:30',
	          favorite: false,
	          pic: 'images/reading.jpg',
	          recommended: true
	        }
        ];

        $rootScope.savedEvents = [
            {
	          id: 12,
	          title: 'Saved event one',
	          description: 'This is saved by student user.',
	          location: 'UNKNOWN',
	          category: 'student_user',
	          date: '09/11/2015',
	          time: '15:00',
	          host: 'SU',
	          people : 98,
	          favorite: false
	        },{
	          id: 13,
	          title: 'Saved event two',
	          description: 'This is saved by student user.',
	          location: 'UNKNOWN',
	          category: 'student_user_favor',
	          date: '09/15/2015',
	          time: '16:00',
	          host: 'SU',
	          people : 98,
	          favorite: false
	        }
        ];
        $scope.importFB = function(){
        	$rootScope.events.push({
	          id: 14,
	          title: 'SU Election',
	          description: 'SU Election 2016 (added from Facebook)',
	          peopleFav: 34,
	          people : 73,
	          location: 'Olin 1st floor',
	          category: 'internal',
	          host: 'SU',
	          date: '12/31/2016',
	          time: '13:00',
	          pic: 'images/election.png',
	          recommended: false
	        },
	        {
	          id: 15,
	          title: 'SU Hackathon',
	          description: 'Come join the first hackthon hosted by SU! (added from Facebook)',
	          peopleFav: 50,
	          people : 33,
	          location: 'DUC 240',
	          category: 'other',
	          host: 'SU',
	          date: '12/12/2016',
	          time: '18:00',
	          pic: 'images/hackathon.jpg',
	          recommended: false
	        },
	        {
	          id: 16,
	          title: 'Group Meeting',
	          description: 'SU FL16 12th meeting (added from Facebook)',
	          peopleFav: 22,
	          people : 30,
	          location: 'Simon Hall 109',
	          host: 'SU',
	          category: 'internal',
	          date: '12/10/2016',
	          time: '14:00',
	          pic: 'images/event.png',
	          recommended: false
	        },
	        {
	          id: 17,
	          title: 'Career Fair',
	          description: 'On-campus Career Fair with 199 employers! (added from Facebook)',
	          peopleFav: 45,
	          people : 52,
	          location: 'South 40',
	          category: 'job',
	          host: 'SU',
	          date: '12/13/2016',
	          time: '15:30',
	          pic: 'images/careerfair.jpg',
	          recommended: false
	        });

        }
	    $rootScope.orderByDate = function(item) {
		    var parts = item.date.split('/');
		    var number = parseInt(parts[2] + parts[0] + parts[1]);
		    return -number;
		};


		$rootScope.addEvent = function() {
			$rootScope.events.push($rootScope.newEvent);
		}

		$rootScope.setCurr = function(e) {
			$rootScope.currEvent = e;
		}

		$rootScope.edit = function(e) {
			$rootScope.newEvent = e;
			var index = $rootScope.events.indexOf(e);
  			$rootScope.events.splice(index, 1);  
		}

		$rootScope.getDataSource = function(host, events) {
			var result = [];
			for (var i = 0; i < events.length; i++) {
				if (host == events[i].host) {
					result.push(events[i]);
				}
			}
			return result;
		}

		$rootScope.getFavoriteEvents = function(events) {
			var result = [];
			for (var i = 0; i < events.length; i++) {
				if (events[i].favorite == true) {
					result.push(events[i]);
				}
			}
			return result;
		}

		$rootScope.getRecommendedEvents = function(events) {
			var result = [];
			for (var i = 0; i < events.length; i++) {
				if (events[i].recommended == true) {
					result.push(events[i]);
				}
			}
			return result;
		}

		$rootScope.getSavedEvents = function(events, savedEvents) {
			var result = [];
			for (var i = 0; i < events.length; i++) {
				if (true == events[i].favorite) {
					result.push(events[i]);
				}
			}
			for (var i = 0; i < savedEvents.length; i++) {
				if (true == savedEvents[i].favorite) {
					result.push(savedEvents[i]);
				}
			}
			return result;
		}

		$rootScope.getDataByUser = function(events) {
			var result = [];
			for (var i = 0; i < events.length; i++) {
				if ($rootScope.orgUser == events[i].host) {
					result.push(events[i]);
				}
			}
			return result;
		}


		$rootScope.init = function (user) {
			$rootScope.orgUser = user;
		}


		$rootScope.addToFavorite = function(event) {
            var index = $rootScope.events.indexOf(event);
  			$rootScope.events[index].favorite = true;
  			$rootScope.events[index].recommended = false;
		}

		$rootScope.removeFromFavorite = function(event) {
            var index = $rootScope.events.indexOf(event);
          	$rootScope.events[index].favorite = false;
  			
		}

		$rootScope.removeFromRecommendations = function(event) {
            var index = $rootScope.events.indexOf(event);
            $rootScope.events[index].recommended = false;
		}

		$rootScope.remove = function(item) { 
  			var index = $rootScope.events.indexOf(item);
  			$rootScope.events.splice(index, 1);     
		}

	});

	scotchApp.controller('foodController', function($scope, $rootScope) {
		$scope.message = 'All about food.';

	});

	scotchApp.controller('artsController', function($scope, $rootScope) {
		$scope.message = 'All about arts.';

	});

	scotchApp.controller('loginController', function($scope, $rootScope) {
		$scope.message = 'Login page.';
	});
	scotchApp.controller('eventsMapController', function($scope, $rootScope) {
		$scope.message = 'Login page.';
	});
	scotchApp.controller('mapController', function($scope) {
		 $scope.message = 'Detail page.';
		 $scope.$on('$viewContentLoaded', function(){
		 initMap();
  });
	});
	scotchApp.controller('weekController', function($scope, $rootScope) {
		$scope.message = 'Events this week.';

	});
	scotchApp.controller('studentController', function($scope, $rootScope) {
		$scope.message = 'Student page.';
		$scope.favorite = false;
		$scope.notInterested = false;
	});
	scotchApp.controller('organizationController', function($scope, $rootScope) {
		$scope.message = 'Organization page.';
	});
    scotchApp.controller('eventController', function($scope, $rootScope) {
		$scope.message = 'Event page.';
	});
	scotchApp.controller('profileController', function($scope, $rootScope) {
		$scope.message = 'Profile page.';
	});

	scotchApp.filter('thisWeekFilter', function() {
	    return function(items, thisWeek) {
	    	if (thisWeek) {
		    	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	            var ret = [];

		    	for (var i = 0; i < items.length; i++) {
		    		var item = items[i];
		    		var dateString = item.date;
		    	    var dateArray = dateString.split('/');
		    	    var date = new Date(dateArray[2], dateArray[0]-1, dateArray[1]);
		    	    var currentDate = new Date();
		    	    var diffDays = Math.round(Math.abs((date.getTime() - currentDate.getTime())/(oneDay)));
		    	    if (diffDays >= 0 && diffDays <= 7) {
		    	    	ret.push(item);
		    	    }


				}
		    	
		        return ret;
	        } else {
	        	return items;
	        }
	    };
	});

 // pull test here 