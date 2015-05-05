angular.module('app').controller('loginController', function($scope) {
                                                                 $scope.login = function() {                                          
                                                                 facebookConnectPlugin.login(["email","user_about_me","public_profile"],function(data){
                                                                                             
                                                                                             
                                                                                             }, function(data){
                                                                                             
                                                                                             })
                                                                 };
                                                                 });
