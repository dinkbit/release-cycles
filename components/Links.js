export default () => (
  <div className="links">
    <small>
      <a
        href="https://github.com/dinkbit/release-cycles/issues/new"
        target="_blank"
      >
        feedback
      </a>
    </small>
    <small>
      <a href="https://github.com/dinkbit/release-cycles" target="_blank">
        source
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
