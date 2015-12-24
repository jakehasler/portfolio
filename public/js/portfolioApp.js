'use strict';

angular
  .module('portfolioApp', [])
  .controller('MainCtrl', function ($scope, $http) {
    
    $scope.name = 'Jake Hasler';

    $scope.sendMail = function()
    {

        var mailOptions = {
          from: $scope.formName + '<' + $scope.formEmail + '>', 
          to: 'jakehasler@gmail.com', 
          subject: 'Message from your Contact Form', 
          text: $scope.formMessage,
          html: '<b>' + $scope.formMessage + '</b>' 
       };

       console.log(mailOptions);

       $http.post('/send', mailOptions).success(function() {
          console.log("Message Sent.");

          $scope.formName = '';
          $scope.formEmail = '';
          $scope.formMessage = '';
          $scope.formSource = '';
       });


    }

  });

