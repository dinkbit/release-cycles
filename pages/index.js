import Chart from "../components/Chart";

export default () => (
  <div className="container">
    <div className="card">
      <div className="card-header">
        <h2>Laravel Release Cycle</h2>
      </div>
      <div className="card-chart">
        <Chart />
      </div>
      <small>
        <a
          href="https://laravel-news.com/laravel-release-process"
          target="_blank"
        >
          Source
        </a>
      </small>
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
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
          Roboto, Ubuntu, sans-serif;
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
      }

      small {
        text-align: center;
        margin: 20px;
      }

      a {
        text-decoration: none;
        color: rgb(6, 125, 247);
      }

      .container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
      }

      .card {
        width: 600px;
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
