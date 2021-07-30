import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import HighCharts from "./components/HighCharts";
import ReactVIS from "./components/ReactVIS";

export class App extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.tokenObj.access_token);
    this.fetchDetail(response.tokenObj.access_token);
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
          scope="https://www.googleapis.com/auth/gmail.labels"
          onSuccess={this.responseGoogle}
        />
        <HighCharts />
        <ReactVIS />
      </div>
    );
  }
}

export default App;
