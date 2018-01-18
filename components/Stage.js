export default ({ color, text }) => (
  <li className="recharts-legend-item">
    <svg
      className="recharts-surface"
      width="14"
      height="14"
      viewBox="0 0 32 32"
      version="1.1"
    >
      <path
        fill={color}
        className="recharts-symbols"
        transform="translate(16, 16)"
        d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"
      />
    </svg>
    <span className="recharts-legend-item-text">{text}</span>
    <style jsx>{`
      .recharts-legend-item {
        display: inline-block;
        margin-right: 20px;
      }

      .recharts-surface {
        display: inline-block;
        vertical-align: middle;
        margin-right: 4px;
      }
    `}</style>
  </li>
);
