import React, { Component } from "react";
import GoogleLogin from "react-google-login";

export class App extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.tokenObj.access_token);
    console.log(this.fetchDetail(response.tokenObj.access_token));
  };

  fetchDetail(token) {
    fetch(
      "https://gmail.googleapis.com/gmail/v1/users/alidiplana@gmail.com/labels",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="354361971363-8jjcvgd3brcgb2nn38bqmhi0gjr3e2rh.apps.googleusercontent.com"
          onSuccess={this.responseGoogle}
        />
      </div>
    );
  }
}

export default App;
