import React from "react";
import ReactDOM from "react-dom";
import Upload from "./Upload.jsx";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      files: []
    };
  }

  getFiles(files) {
    this.setState({ files: files });
  }

  render() {
    console.log(this.state.files, this.state.files[0]);
    debugger;
    return (
      <div>
        <div className="text-center mt-25">
          <p className="text-center">Upload img</p>
          <Upload onDone={fileData => this.getFiles(fileData)} />
        </div>
        <div className="text-center">
          {this.state.files.length !== 0 ? (
            <img alt="img" src={this.state.files.base64} />
          ) : null}
        </div>

        {this.state.files.length !== 0 ? (
          <div>
            <h3 className="text-center mt-25">Object</h3>
            <div className="pre-container">
              <pre>{JSON.stringify(this.state.files, null, 2)}</pre>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
