
MazeppaApp.controller("loginCntrl", function ($scope, loginService) {

    $scope.LoginCheck = function () {
        var User = {
            UserName: $scope.uName,
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
                window.location.href = "/Login/Index";
            }
        });
        debugger;
    }

    function clearFields() {
        $scope.uName = '';
        $scope.uPwd = '';
    }

});