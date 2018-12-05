'use strict';
const angular = require('angular');
import './style.css';
angular.module('rent', []).component('loginPage', {
    template: `<form class="form-signin" ng-controller="loginCtrl">
       
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input ng-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input ng-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
        </label>
    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                     <fb:login-button class="btn fb-btn" scope="public_profile,email" onlogin="checkLoginState();">
  </fb:login-button>
</form>
`,
    controller: function loginCtrl() {
        this.password = '';
        this.email = '';
    }
    
   
})