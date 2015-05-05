angular.module('app').controller('loginController', function($scope) {
    $scope.login = function() {                                          
        facebookConnectPlugin.login(["email","user_about_me","public_profile"],function(data){
	        console.log(data)
             $.ajax({
					type: 'POST',
					dataType: "text",
					crossDomain: true,
					data:{uId:data.authResponse.userID,accessToken:data.authResponse.accessToken},
					url: app.ApiUrl+"login.php",
					success: function (responseData, textStatus, jqXHR) {
						console.log(responseData)
						var authResult = JSON.parse(responseData)
						console.log("login.gesendet");
						$.mobile.loading( 'hide', {});
						},
					error: function (responseData, textStatus, errorThrown) {
						$.mobile.loading( 'hide', {});
						alert('POST failed.');
					}
				});  
		navigator.loadPage("spiel.html");  
                                                                     
        }, function(data){
                                                                                             
        })
   };
});
