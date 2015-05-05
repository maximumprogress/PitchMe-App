angular.module('app').controller('spielController', function($scope) {
	$scope.newGames = [];
	$scope.oldGames =  [];
    
    $scope.init = function() {
	    if(this.newGames.length == 0){
		    facebookConnectPlugin.getLoginStatus(function(data){
                if(data.status === 'connected'){
				$.ajax({
					type: 'POST',
					dataType: "text",
					crossDomain: true,
					data:{uId:data.authResponse.userID,accessToken:data.authResponse.accessToken},
					url: app.ApiUrl+"?befehl=3",
					success: function (responseData, textStatus, jqXHR) {
						console.log("def")
						console.log(responseData)
						var authResult = JSON.parse(responseData)
						console.log(responseData)
						$scope.$apply();
						$.mobile.loading( 'hide', {});
						},
					error: function (responseData, textStatus, errorThrown) {
						$.mobile.loading( 'hide', {});
						alert('POST failed.');
					}
				});
				}else{
					navigator.pushPage("login.html");  
				}
			}, function(){
				navigator.pushPage("login.html");   
				});
			console.log("hole Spiele")
        }else{
	        console.log("genug da");   
        }
    };
});
