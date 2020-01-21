import React, { Component } from 'react';
import { myMSALObj } from './config'
class App extends Component{
  
  signOut(){
    myMSALObj.logout();
  }

  signIn(){

    var requestObj = {
      scopes: ["user.read"]
    };

    myMSALObj.loginPopup(requestObj).then(function (tokenResponse) {
      console.log(tokenResponse.accessToken);
    }).catch(function (error) {
        console.log(error);
    });

  }

  render(){
    return (
      <div>
        <button onClick={() => this.signIn()}>Sign In</button>
        <button onClick={() => this.signOut()}>Sign Out</button>
      </div>
    );
  }
}

export default App;
