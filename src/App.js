import React, { Component } from "react";

import Sidebar from "./Components/Sidebar";
import Landing from "./Components/Landing";
import profileData from "./profileData.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData: profileData.landing,
    };
  }

  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
        </div>
      </div>
    );
  }
}

export default App;
