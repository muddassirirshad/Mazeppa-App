
MazeppaApp.controller("loginCntrl", function ($scope, loginService) {

    $scope.LoginCheck = function () {
        var User = {
            UserName: $scope.uName,
            Password: $scope.password,
            RememberMe: $scope.rememberme
        };
        $("#div_loading").show();
        var getData = loginService.UserLogin(User);
        getData.then(function (msg) {

            if (msg.data == "0") {
                $("#div_loading").hide();
                $scope.msg = "Password Incorrect !";
                $(".alert").show();
                $scope.message = "Invalid UserName or Password";
            }
            else if (msg.data == "-1") {
                $("#div_loading").hide();
                $scope.msg = "Username Incorrect !";
            }
            else {
                uID = msg.data;
                $("#div_loading").hide();
                window.location.href = "/news/news-list";
            }
        });
        debugger;
    }

    function clearFields() {
        $scope.uName = '';
        $scope.uPwd = '';
    }

});

