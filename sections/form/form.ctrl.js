'use strict';
angular
    .module('app.core')
    .controller('FormController', function($scope, PageValues) {
        //Set page title and description
        PageValues.title = "FORM";
        PageValues.description = "Demo cuestionarios";
        //Setup view model object
        var vm = this;

        //Ejemplo de uso en vista
        //<div ng-repeat="item in form.items">...</div>
        vm.items = ['1 - Uno','2 - Dos','3 - Tres','4 - Cuatro']; 
    });
