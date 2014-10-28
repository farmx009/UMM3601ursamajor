/**
 * Created by opdah023 on 10/9/14.
 */
'use strict';

angular.module('umm3601ursamajorApp')
    .filter('isntempty', function(){
        return function(item, title){
            if(typeof(item) == "object"){
                if(item.length > 0){
                    return title + " " + item;
                }
            } else if (item !== "" && item !== null){
                return title + " " + item;
            }
        }
    })

    .controller('SublistCtrl', function ($scope, $http, socket) {
        $scope.submissions = [];

        $http.get('/api/submissions').success(function(submissions) {
            $scope.submissions = submissions;
            socket.syncUpdates('submission', $scope.submissions);
        });

        $scope.statusColor = function(status){
            switch(status){
                case "Pending Review":
                    return {'color': 'rgba(255, 220, 10, 1)'};
                    break;
                case "Awaiting Revisions":
                    return {'color': 'rgba(255, 220, 10, 1)'};
                    break;
                case "Approved":
                    return {'color': 'rgba(0, 255, 0, 1)'};
                    break;
                case "Awaiting Adviser Approval":
                    return {'color': 'rgba(255, 0, 0, 1)'};
                    break;
            }
        };

        $scope.selection = {selected: false, item: null};

        $scope.selectItem = function(itemIndex){
            console.log("setting index " + itemIndex + " as active item");
            $scope.selection.selected = true;
            $scope.selection.item = $scope.submissions[itemIndex];
        };

        $scope.resetSelection = function(){
            $scope.selection.selected = false;
        };

        $scope.deleteSubmission = function(item){
            console.log("Deleting submission: " + item.title);
            $http.delete('/api/submissions/' + item._id);
            $scope.resetSelection();
        };

    });