﻿angular
    .module('proyecto')
    .controller('SettingsCtrl', SettingsCtrl);

function SettingsCtrl($scope) {
    $scope.settings = {
        enableFriends: true
    };
}