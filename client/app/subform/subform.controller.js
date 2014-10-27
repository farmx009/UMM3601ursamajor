'use strict';

angular.module('umm3601ursamajorApp')
  .controller('SubformCtrl', function ($scope, $http, Auth, $location) {

    // redirects the user to the home page if they are not  logged in
    if(Auth.isLoggedIn === false) {
        $location.path('/');
    }

    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.formatOptions =
        ['Artist Statement',
         'Humanities Proposal',
         'Science or Social Science Abstract'
        ];

    $scope.presentationTypes =
        ['Poster or visual display',
         'Oral presentation',
         'Performance'
        ];

    $scope.fundingSources = [
        'UROP',
        'MAP',
        'MMP',
        'LSAMP'
    ];

    $scope.numberOfFundingSources = $scope.fundingSources.length;

    $scope.teeSizes = [
        'S',
        'M',
        'L',
        'XL',
        'XXL',
        'XXXL'
    ];

    $scope.submissionData = {
        title: "",
        format: "",
        abstract: "",
        presentationType: "",
        formatChange: Boolean,
        presenterInfo: {first: "", last: "", email: ""},
        copresenterOne: {first: "", last: "", email: ""},
        copresenterTwo: {first: "", last: "", email: ""},
        discipline: "",
        sponsors: [],
        sponsorsFinal: [],
        adviserInfo: {name: "", email: ""},
        featuredPresentation: Boolean,
        mediaServicesEquipment: "",
        specialRequirements: "",
        presenterTeeSize: "",
        otherInfo: ""
    };



    $scope.submitSubmission = function(){
        for(var i = 0; i< $scope.submissionData.sponsors.length; i++){
            if($scope.submissionData.sponsors[i] !== "" && $scope.submissionData.sponsors[i] != null) {
                $scope.submissionData.sponsorsFinal.push($scope.submissionData.sponsors[i]);
            }
        }
        console.log('posting Data!');
        $http.post('api/submissions/',
            {
            title: $scope.submissionData.title,
            format: $scope.submissionData.format,
            abstract: $scope.submissionData.abstract,
            presentationType: $scope.submissionData.presentationType,
            formatChange: $scope.submissionData.formatChange,
            presenterInfo: {first: $scope.submissionData.presenterInfo.first, last: $scope.submissionData.presenterInfo.last, email: $scope.submissionData.presenterInfo.last},
            copresenterOneInfo: {first: $scope.submissionData.copresenterOne.first, last: $scope.submissionData.copresenterOne.last, email: $scope.submissionData.copresenterOne.email},
            copresenterTwoInfo: {first: $scope.submissionData.copresenterTwo.first, last: $scope.submissionData.copresenterTwo.last, email: $scope.submissionData.copresenterTwo.email},
            discipline: $scope.submissionData.discipline,
            sponsors: $scope.submissionData.sponsorsFinal,
            adviserInfo: {name: $scope.submissionData.adviserInfo.name, email: $scope.submissionData.adviserInfo.email},
            featured: $scope.submissionData.featuredPresentation,
            mediaServicesEquipment: $scope.submissionData.mediaServicesEquipment,
            specialRequirements: $scope.submissionData.specialRequirements,
            presenterTeeSize: $scope.submissionData.presenterTeeSize,
            otherInfo: $scope.submissionData.otherInfo,
            approval: false,
            status: "pending approval"
            }
        );
        $scope.resetData();
        $location.path('/');
    };

    $scope.charsRemaining = function() {
        return 1000 - $scope.submissionData.abstract.length;
    };

    $scope.resetData = function(){
        $scope.submissionData = {
            title: "",
            format: "",
            abstract: "",
            presentationType: "",
            formatChange: Boolean,
            presenterInfo: {first: "", last: "", email: ""},
            copresenterOne: {first: "", last: "", email: ""},
            copresenterTwo: {first: "", last: "", email: ""},
            discipline: "",
            sponsors: ["","","","",""], //Might need to worry about if this is static for the DB later.
            adviserInfo: {name: "", email: ""},
            featuredPresentation: Boolean,
            mediaServicesEquipment: "",
            specialRequirements: "",
            presenterTeeSize: "",
            otherInfo: ""
        };
    };

  });
