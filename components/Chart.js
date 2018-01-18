import React, { Component } from "react";
import moment from "moment";

import map from "lodash/map";
import flatten from "lodash/flatten";
import filter from "lodash/filter";
import min from "lodash/min";
import max from "lodash/max";

import {
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  ScatterChart,
  Scatter
} from "recharts";

import Stage from "../components/Stage";
import data from "../data";

const getYears = (startDate, endDate) => {
  const dates = [];
  const stopDate = moment(endDate);
  let currentDate = moment(startDate);

  while (currentDate <= stopDate) {
    const m = moment(currentDate);
    dates.push(m.unix());
    currentDate = m.add(1, "years");
  }

  return dates;
}

// Get all releases dates
const dates = flatten(data.map(release => filter(release, v => moment.isMoment(v))));

// Configure X ticks
const ticksX = getYears(min(dates), max(dates));
const tickFormatterX = tick => moment(tick, "X").format("YYYY");

// Configure Y ticks
const ticksY = data.map((release, index) => index + 1);
const tickFormatterY = tick => data[tick - 1].version;

export default () => (
  <div>
    <ScatterChart
      width={600}
      height={400}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
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
        domain={["dataMin - 1", "dataMax + 1"]}
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
            { x: release.releaseStart.unix(), y: index + 1 },
            { x: release.releaseEnd.unix(), y: index + 1 }
          ]}
          fill="#f4645f"
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
              x: release.bugsStart ? release.bugsStart.unix() : null,
              y: index + 1
            },
            {
              x: release.bugsEnd ? release.bugsEnd.unix() : null,
              y: index + 1
            }
          ]}
          fill="#aeaeae"
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
              x: release.securityStart ? release.securityStart.unix() : null,
              y: index + 1
            },
            {
              x: release.securityEnd ? release.securityEnd.unix() : null,
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
      <Stage text="Active" color="#f4645f" />
      <Stage text="Bug fixes" color="#aeaeae" />
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
