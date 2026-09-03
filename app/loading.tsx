const forwardConnections = [
  [40, 82, 120, 58],
  [40, 82, 120, 102],
  [40, 118, 120, 58],
  [40, 118, 120, 102],
  [120, 58, 200, 100],
  [120, 102, 200, 100],
];

export default function Loading() {
  return (
    <main
      className="neural-loader"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="neural-loader__panel">
        <svg
          className="neural-loader__network"
          viewBox="0 0 240 160"
          role="img"
          aria-label="Three-layer neural network processing data"
        >
          <g className="neural-loader__connections" aria-hidden="true">
            {forwardConnections.map(([x1, y1, x2, y2], index) => (
              <g key={`${x1}-${y1}-${x2}-${y2}`}>
                <line
                  className="neural-loader__edge neural-loader__edge--base"
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                />
                <line
                  className="neural-loader__edge neural-loader__edge--forward"
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  style={{ animationDelay: `${index * 0.16}s` }}
                />
                <line
                  className="neural-loader__edge neural-loader__edge--backward"
                  x1={x2}
                  y1={y2}
                  x2={x1}
                  y2={y1}
                  style={{ animationDelay: `${index * 0.16 + 0.9}s` }}
                />
              </g>
            ))}
          </g>

          <g className="neural-loader__nodes">
            <circle
              className="neural-loader__node neural-loader__node--cyan"
              cx="40"
              cy="82"
              r="9"
            />
            <circle
              className="neural-loader__node neural-loader__node--cyan"
              cx="40"
              cy="118"
              r="9"
            />
            <circle
              className="neural-loader__node neural-loader__node--violet"
              cx="120"
              cy="58"
              r="9"
            />
            <circle
              className="neural-loader__node neural-loader__node--violet"
              cx="120"
              cy="102"
              r="9"
            />
            <circle
              className="neural-loader__node neural-loader__node--output"
              cx="200"
              cy="100"
              r="11"
            />
          </g>
        </svg>
        <div className="neural-loader__caption">
          <span className="neural-loader__pulse" aria-hidden="true" />
          <span>propagating weights</span>
        </div>
        <div className="neural-loader__legend" aria-hidden="true">
          <span>
            <i className="neural-loader__legend-dot neural-loader__legend-dot--forward" />
            forward pass
          </span>
          <span>
            <i className="neural-loader__legend-dot neural-loader__legend-dot--backward" />
            backpropagation
          </span>
        </div>
      </div>
    </main>
  );
}
