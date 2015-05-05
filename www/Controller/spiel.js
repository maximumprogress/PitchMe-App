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
					url: app.ApiUrl+"api.php",
					success: function (responseData, textStatus, jqXHR) {
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
					console.log("zug Login")
					navigator.loadPage("login.html");  
				}
			}, function(){
				navigator.loadPage("login.html");   
				});
			
        }else{
	        console.log("genug da");   
        }
    };
});
