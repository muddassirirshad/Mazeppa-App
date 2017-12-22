
MazeppaApp.controller("loginCntrl", function ($scope, loginService) {

    $scope.LoginCheck = function () {
        var User = {
            Email: $scope.Email,
            Password: $scope.password
        };
        $("#divLoading").show();
        var getData = loginService.UserLogin(User);
        getData.then(function (msg) {
            if (msg.data == "0") {
                $("#divLoading").hide();
                $("#alertModal").modal('show');
                $scope.msg = "Password Incorrect !";
            }
            else if (msg.data == "-1") {
                $("#divLoading").hide();
                $("#alertModal").modal('show');
                $scope.msg = "Username Incorrect !";
            }
            else {
                uID = msg.data;
                $("#divLoading").hide();
                window.location.href = "/Home/Index";
            }
        });
        debugger;
    }

    function clearFields() {
        $scope.Email = '';
        $scope.uPwd = '';
    }

});