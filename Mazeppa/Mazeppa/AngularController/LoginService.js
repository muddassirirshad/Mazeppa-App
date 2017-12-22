MazeppaApp.service("loginService", function ($http) {

    this.UserLogin = function (User) {
        var response = $http({
            method: "post",
            url: "/Login/Login",
            data: JSON.stringify(User),
            dataType: "json"
        });
        return response;
    }

});