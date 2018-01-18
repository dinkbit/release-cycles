export default () => (
  <div className="links">
    <small>
      <a
        href="https://laravel-news.com/laravel-release-process"
        target="_blank"
      >
        Source
      </a>
    </small>
    <small>
      <a
        href="https://github.com/dinkbit/laravel-rc"
        target="_blank"
      >
        Github
      </a>
    </small>
    <style jsx>{`
      .links {
        text-align: center;
        margin: 20px;
      }

      a {
        text-decoration: none;
        color: rgb(6, 125, 247);
        margin: 20px;
      }
    `}</style>
  </div>
);
