import React from "react";
import Piechart from "./pie-chart";
import Linechart2 from "./line-chart2";
function Community() {
  return (
    <div>
      <div className="community-Box-1">
        <div className="first-text-box">
          <img
            src={require("./ugc.png")}
            alt="poli"
            className="chartside-image"
          />
          <p className="first-text">Avg. first reply Time</p>
          <p className="first-number">25 Mins</p>
          <div className="chart">
            <Linechart2
              data={{
                "2021-05-13": 7,
                "2021-05-14": 9,
                "2021-05-15": 20,
                "2021-05-16": 15,
                "2021-05-17": 18,
                "2021-05-18": 12,
                "2021-05-19": 11,
                "2021-05-20": 8,
                "2021-05-21": 9,
                "2021-05-22": 5,
                "2021-05-23": 10,
                "2021-05-24": 5,
                "2021-05-25": 7
              }}
            />
          </div>
        </div>
      </div>
      <div className="community-Box-1 position-2">
        <div className="first-text-box">
          <img
            src={require("./new-members.png")}
            alt="poli"
            className="chartside-image"
          />
          <p className="first-text">New Members</p>
          <p className="first-number">800</p>
          <div className="chart">
            <Linechart2
              data={{
                "2021-05-13": 2,
                "2021-05-14": 5,
                "2021-05-15": 7,
                "2021-05-16": 8,
                "2021-05-17": 10,
                "2021-05-18": 1,
                "2021-05-19": 19,
                "2021-05-20": 8,
                "2021-05-21": 9,
                "2021-05-22": 5,
                "2021-05-23": 10,
                "2021-05-24": 5,
                "2021-05-25": 7
              }}
            />
          </div>
        </div>
      </div>
      <div className="community-Box-1 position-3">
        <div className="first-text-box">
          <img
            src={require("./activity.png")}
            alt="poli"
            className="chartside-image"
          />
          <p className="first-text">Active Users</p>
          <p className="first-number">240</p>
          <div className="chart">
            <Linechart2
              data={{
                "2021-05-13": 2,
                "2021-05-14": 5,
                "2021-05-15": 7,
                "2021-05-16": 8,
                "2021-05-17": 10,
                "2021-05-18": 1,
                "2021-05-19": 19,
                "2021-05-20": 8,
                "2021-05-21": 9,
                "2021-05-22": 5,
                "2021-05-23": 10,
                "2021-05-24": 5,
                "2021-05-25": 7
              }}
            />
          </div>
        </div>
      </div>
      <div className="community-Box-1 position-4">
        <div className="first-text-box">
          <img
            src={require("./activity.png")}
            alt="poli"
            className="chartside-image"
          />
          <p className="first-text">New Activities</p>
          <p className="first-number">3500</p>
          <div className="chart">
            <Linechart2
              data={{
                "2021-05-13": 7,
                "2021-05-14": 9,
                "2021-05-15": 20,
                "2021-05-16": 15,
                "2021-05-17": 18,
                "2021-05-18": 12,
                "2021-05-19": 11,
                "2021-05-20": 8,
                "2021-05-21": 9,
                "2021-05-22": 5,
                "2021-05-23": 10,
                "2021-05-24": 5,
                "2021-05-25": 7
              }}
            />
          </div>
        </div>
      </div>
      <div className="community-Box-2">
        <p className="second-text">New User Generated Content</p>
        <p className="second-text-2">Total super users growth of 25</p>
        <div className="piechart">
          <Piechart />
        </div>
      </div>
    </div>
  );
}

export default Community;
