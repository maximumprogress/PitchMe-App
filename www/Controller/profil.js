angular.module('app').controller('profilController', function($scope) {
	$scope.image ="" ;
	$scope.name = "";
	$scope.userId = "";
	
	$scope.getImage= function(){
		this.image = "https://graph.facebook.com/"+this.userId+"/picture?width=100&height=100";
		$scope.$apply();
	}
    
    $scope.init = function() {
	    tempThis = this;
	    if(this.userId == ""){
		    facebookConnectPlugin.getLoginStatus(function(data){
			    if(data.status === 'connected'){
            		console.log(data)
					tempThis.userId = data.authResponse.userID;
					tempThis.getImage();
				}else{
					navigator.loadPage("login.html"); 
				}
				  
            	}, function(){
				//navigator.pushPage("login.html");   
           		});
        }else{
	        this.getImage();
        }
    };
    
});
