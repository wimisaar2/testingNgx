'use strict';
angular
    .module('app.core')
    .controller('DemographicController', function($scope, PageValues) {
        $scope.patientDemographicData = {
            name: "Dave",
            lastName: "Springfield",
            secondName: "Simpson",
            recordId: "123456",
            nhsNumber: "UK123AB"
        };
        $scope.fullName = $scope.patientDemographicData.name + " " + $scope.patientDemographicData.lastName + " " + $scope.patientDemographicData.secondName;
    });