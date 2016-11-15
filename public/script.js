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
			.when('/profile', {
				templateUrl : 'pages/profile.html',
				controller  : 'profileController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope, $rootScope, $window) {
		// create a message to display in our view
		$scope.message = 'All the awesome events!';
		$scope.cat = '';
		$scope.thisWeek = false;
		$rootScope.events = [
	        {
	          id: '0001',
	          title: 'HKSA Dimsum',
	          description: 'Free dimsum',
	          location: 'Bauer 240',
	          category: 'free_food',
	          date: '05/17/2015',
	          time: '19:00',
	          summary: 'Free dimsum'
	        }, {
	          id: '0002',
	          title: 'TSA Ice Coffee',
	          description: 'Free thai ice coffee',
	          location: 'DUC 239',
	          category: 'free_food',
	          date: '03/25/2016',
	          time: '19:00',
	          summary: 'Free thai ice coffee'
	        }, {
	          id: '0003',
	          title: 'PL4Y Performance',
	          description: 'K-Pop dances',
	          location: 'DUC 110',
	          category: 'performing_arts',
	          date: '09/11/2015',
	          time: '20:00',
	          summary: 'K-Pop dances'
	        },{
	          id: '0004',
	          title: 'Listed event A',
	          description: 'This is created by organization user.',
	          location: 'South 40',
	          category: 'organization_user',
	          date: '10/11/2015',
	          time: '21:00',
	          summary: 'This is created by organization user.'
	        },{
	          id: '0005',
	          title: 'Listed event B',
	          description: 'This is created by organization user.',
	          location: 'South 40',
	          category: 'organization_user',
	          date: '10/22/2015',
	          time: '19:00',
	          summary: 'This is created by organization user.'
	        }
        ];

        $rootScope.savedEvents = [
            {
	          title: 'Saved event one',
	          description: 'This is saved by student user.',
	          location: 'UNKNOWN',
	          category: 'student_user',
	          date: '09/11/2015',
	          time: '15:00',
	          summary: 'This is saved by student user.'
	        },{
	          title: 'Saved event two',
	          description: 'This is saved by student user.',
	          location: 'UNKNOWN',
	          category: 'student_user',
	          date: '09/15/2015',
	          time: '16:00',
	          summary: 'This is saved by student user.'
	        }
        ];

	    $rootScope.orderByDate = function(item) {
		    var parts = item.date.split('/');
		    var number = parseInt(parts[2] + parts[0] + parts[1]);
		    return -number;
		};

		$rootScope.getDataSource = function(category, events) {
			var result = [];
			for (var i = 0; i < events.length; i++) {
				if (category == events[i].category) {
					result.push(events[i]);
				}
			}
			return result;
		}

	    $window.onload = function() {
			for (var i = 0; i < $rootScope.events.length; i++) {
				var item = $rootScope.events[i];
				var date_parts = item.date.split('/');
				var head = 'BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:20161022T090000\nDTEND:20161022T100000\n';
				var tail = 'PRIORITY:3\nEND:VEVENT \nND:VCALENDAR';
				var location = 'LOCATION:' + item.location + '\n';
				var description = 'DESCRIPTION:' + item.description + '\n';
				var summary = 'SUMMARY:' + item.summary + '\n';
				var text = head + location + description + summary + tail;
				var name = item.title + '.ics';
				var type = 'text/plain';
				var a = document.getElementById($rootScope.events[i].id);
				var file = new Blob([text], {type: type});
				a.href = URL.createObjectURL(file);
				a.download = name;
			}
		};

		$scope.$on('$routeChangeSuccess', function (scope, next, current) {
		    for (var i = 0; i < $rootScope.events.length; i++) {
				var item = $rootScope.events[i];
				var date_parts = item.date.split('/');
				var head = 'BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:20161022T090000\nDTEND:20161022T100000\n';
				var tail = 'PRIORITY:3\nEND:VEVENT \nND:VCALENDAR';
				var location = 'LOCATION:' + item.location + '\n';
				var description = 'DESCRIPTION:' + item.description + '\n';
				var summary = 'SUMMARY:' + item.summary + '\n';
				var text = head + location + description + summary + tail;
				var name = item.title + '.ics';
				var type = 'text/plain';
				var a = document.getElementById($rootScope.events[i].id);
				var file = new Blob([text], {type: type});
				a.href = URL.createObjectURL(file);
				a.download = name;
			}
	    })
	});

	scotchApp.controller('foodController', function($scope, $rootScope) {
		$scope.message = 'All about food.';
		$scope.$on('$routeChangeSuccess', function (scope, next, current) {
		    for (var i = 0; i < $rootScope.events.length; i++) {
		    	if (item.category == 'free_food') {
					var item = $rootScope.events[i];
					var date_parts = item.date.split('/');
					var head = 'BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:20161022T090000\nDTEND:20161022T100000\n';
					var tail = 'PRIORITY:3\nEND:VEVENT \nND:VCALENDAR';
					var location = 'LOCATION:' + item.location + '\n';
					var description = 'DESCRIPTION:' + item.description + '\n';
					var summary = 'SUMMARY:' + item.summary + '\n';
					var text = head + location + description + summary + tail;
					var name = item.title + '.ics';
					var type = 'text/plain';
					var a = document.getElementById($rootScope.events[i].id);
					var file = new Blob([text], {type: type});
					a.href = URL.createObjectURL(file);
					a.download = name;
			    }
			}
	    })
	});

	scotchApp.controller('artsController', function($scope, $rootScope) {
		$scope.message = 'All about arts.';
		$scope.$on('$routeChangeSuccess', function (scope, next, current) {
		    for (var i = 0; i < $rootScope.events.length; i++) {
		    	if (item.category == 'performing_arts') {
					var item = $rootScope.events[i];
					var date_parts = item.date.split('/');
					var head = 'BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:20161022T090000\nDTEND:20161022T100000\n';
					var tail = 'PRIORITY:3\nEND:VEVENT \nND:VCALENDAR';
					var location = 'LOCATION:' + item.location + '\n';
					var description = 'DESCRIPTION:' + item.description + '\n';
					var summary = 'SUMMARY:' + item.summary + '\n';
					var text = head + location + description + summary + tail;
					var name = item.title + '.ics';
					var type = 'text/plain';
					var a = document.getElementById($rootScope.events[i].id);
					var file = new Blob([text], {type: type});
					a.href = URL.createObjectURL(file);
					a.download = name;
			    }
			}
	    })
	});

	scotchApp.controller('loginController', function($scope, $rootScope) {
		$scope.message = 'Login page.';
	});

	scotchApp.controller('weekController', function($scope, $rootScope) {
		$scope.message = 'Events this week.';
		$scope.$on('$routeChangeSuccess', function (scope, next, current) {
		    for (var i = 0; i < $rootScope.events.length; i++) {
				var item = $rootScope.events[i];
				var date_parts = item.date.split('/');
				var head = 'BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:20161022T090000\nDTEND:20161022T100000\n';
				var tail = 'PRIORITY:3\nEND:VEVENT \nND:VCALENDAR';
				var location = 'LOCATION:' + item.location + '\n';
				var description = 'DESCRIPTION:' + item.description + '\n';
				var summary = 'SUMMARY:' + item.summary + '\n';
				var text = head + location + description + summary + tail;
				var name = item.title + '.ics';
				var type = 'text/plain';
				var a = document.getElementById($rootScope.events[i].id);
				var file = new Blob([text], {type: type});
				a.href = URL.createObjectURL(file);
				a.download = name;
			}
	    })
	});
	scotchApp.controller('studentController', function($scope, $rootScope) {
		$scope.message = 'Student page.';
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
		    	    var date = new Date(dateArray[2], dateArray[0], dateArray[1]);
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