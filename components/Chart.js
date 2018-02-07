import React, { Component } from "react";
import {
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  ScatterChart,
  Scatter
} from "recharts";

import format from "date-fns/format";
import isDate from "date-fns/is_date";
import addYears from "date-fns/add_years";
import min from "date-fns/min";
import max from "date-fns/max";

import Stage from "../components/Stage";

export default class Chart extends Component {
  getYears(startDate, endDate) {
    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(parseInt(format(currentDate, "X"), 10));
      currentDate = addYears(currentDate, 1);
    }

    return dates;
  }

  render() {
    const { data } = this.props;

    // Get all releases dates
    const dates = Array.prototype.concat(
      ...data.map(r => Object.values(r).filter(v => isDate(v)))
    );

    // Configure X ticks
    const ticksX = this.getYears(min(...dates), max(...dates));
    const tickFormatterX = tick => format(new Date(tick * 1000), "YYYY");

    // Configure Y ticks
    const ticksY = data.map((release, index) => index + 1);
    const tickFormatterY = tick => data[tick - 1].version;

    return (
      <div>
        <ScatterChart
          width={640}
          height={400}
          margin={{ top: 30, right: 20, bottom: 20, left: 20 }}
        >
          <XAxis
            type="number"
            scale="time"
            name="release"
            dataKey={"x"}
            domain={["dataMin", "dataMax"]}
            ticks={ticksX}
            ticksSize={ticksX.length}
            tickFormatter={tickFormatterX}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            dataKey={"y"}
            name="Releases"
            domain={["dataMin - 0.5", "dataMax"]}
            ticks={ticksY}
            ticksSize={ticksY.length}
            tickFormatter={tickFormatterY}
            width={70}
            axisLine={false}
            tickLine={false}
          />
          <ZAxis />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          {data.map((release, index) => (
            <Scatter
              key={`release-${release.version}`}
              name={release.version}
              data={[
                { x: format(release.releaseStart, "X"), y: index + 1 },
                { x: format(release.releaseEnd, "X"), y: index + 1 }
              ]}
              fill="#00FF22"
              line={{ strokeWidth: 20 }}
              shape={() => null}
            />
          ))}
          {data.map((release, index) => (
            <Scatter
              key={`bugs-${release.version}`}
              name={release.version}
              data={[
                {
                  x: release.bugsStart ? format(release.bugsStart, "X") : null,
                  y: index + 1
                },
                {
                  x: release.bugsEnd ? format(release.bugsEnd, "X") : null,
                  y: index + 1
                }
              ]}
              fill="#e1e1e1"
              line={{ strokeWidth: 20 }}
              shape={() => null}
            />
          ))}
          {data.map((release, index) => (
            <Scatter
              key={`security-${release.version}`}
              name={release.version}
              data={[
                {
                  x: release.securityStart
                    ? format(release.securityStart, "X")
                    : null,
                  y: index + 1
                },
                {
                  x: release.securityEnd
                    ? format(release.securityEnd, "X")
                    : null,
                  y: index + 1
                }
              ]}
              fill="#525252"
              line={{ strokeWidth: 20 }}
              shape={() => null}
            />
          ))}
        </ScatterChart>
        <ul className="recharts-default-legend">
          <Stage text="Active" color="#00FF22" />
          <Stage text="Bug fixes" color="#e1e1e1" />
          <Stage text="Security fixes" color="#525252" />
        </ul>
        <style jsx>{`
          .recharts-default-legend {
            padding: 0;
            margin: 0;
            text-align: center;
            list-style: none;
          }
        `}</style>
      </div>
    );
  }
}
