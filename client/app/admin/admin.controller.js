'use strict';

angular.module('umm3601ursamajorApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

//    $scope.submissions = [];
//
//    $http.get('/api/submissions').success(function(submissions) {
//        $scope.submissions = submissions;
//    });

        $scope.roleOptions =
            ['Student',
                'Review Group 1',
                'Review Group 2',
                'Committee Chair'
            ];
       $scope.role =
            [""];



    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.changeRole = function(user) {
        console.log(user);
        Auth.changeRole(user.role , user);
    };

//    $scope.updateRole = function(user) {
//        $scope.updatedUser = {
//            name: user.name,
//            email: user.email,
//            password: user.password,
//            role: $scope.role
//        };
//        $scope.delete(user);
//        Auth.createUser($scope.updatedUser);
//        $scope.users = User.query();
//    };
  });
