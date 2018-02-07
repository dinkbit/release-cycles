import React from "react";
import Chart from "../components/Chart";
import Links from "../components/Links";
import data from "../data";

let createHistory
let history

if (typeof window !== 'undefined') {
  createHistory = require('history').createBrowserHistory
  history = createHistory()
}

export default class extends React.Component {
  static getInitialProps({ query }) {
    if (query.platform && data.hasOwnProperty(query.platform)) {
      return { platform: query.platform };
    }

    return { platform: "php" };
  }

  constructor(props) {
    super(props);

    this.state = { platform: this.props.platform };

    this.selectPlatform = this.selectPlatform.bind(this);
  }

  selectPlatform(e) {
    const platform = e.target.value;

    this.setState({ platform });

    history.replace({
      search: encodeURI(`platform=${platform}`)
    });
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2>
              Platforms Release Cycles
              <select
                name="platform"
                id="platform"
                value={this.state.platform}
                onChange={this.selectPlatform}
              >
                <option value="php">PHP</option>
                <option value="laravel">Laravel</option>
              </select>
            </h2>
          </div>
          <div className="card-chart">
            <Chart data={data[this.state.platform]} />
          </div>
          <Links />
        </div>
        <style jsx global>{`
          html,
          body {
            height: 100%;
          }

          body > div:first-of-type {
            height: 100%;
          }

          body {
            font-family: -apple-system, system-ui, BlinkMacSystemFont,
              "Segoe UI", Roboto, Ubuntu, sans-serif;
            font-weight: 400;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            box-sizing: border-box;
          }

          #__next {
            height: 100%;
          }

          #__next > div {
            height: 100%;
          }
        `}</style>
        <style jsx>{`
          h2 {
            font-size: 16px;
            width: 100%;
          }

          select {
            float: right;
          }

          .container {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1 auto;
          }

          .card {
            width: 650px;
            height: 530px;
            border: 1px solid rgb(218, 225, 233);
            border-radius: 2px;
            background-color: rgb(255, 255, 255);
            box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
          }

          .card-header {
            flex-shrink: 0;
            height: 48px;
            padding: 0px 20px;
            border-bottom: 1px solid rgb(218, 225, 233);
            border-bottom-color: rgb(218, 225, 233);
            border-color: rgb(218, 225, 233);
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
          }

          .card-chart {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
          }
        `}</style>
      </div>
    );
  }
}
