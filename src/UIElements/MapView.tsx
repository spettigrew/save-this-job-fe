import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { connect } from "react-redux";
import Pin from "./Pin";
import axios from "axios";
import { getCurrentJob } from "../redux/actions/index";
import DashCard from "../routes/Protected/card";

function MapDisplay(props) {
  const [viewport, setViewport] = useState({
    latitude: 39.8333333,
    longitude: -98.585522,
    zoom: 4,
    bearing: 0,
    pitch: 0,
    width: window.innerWidth,
    height: "100vh"
  });

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    let newJobs = [];
    props.jobs.forEach(job => {
      if (job.location) {
        axios
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${job.location}.json?access_token=${process.env.REACT_APP_MAP_TOKEN}`
          )
          .then(res => {
            let coords = res.data.features[0].center;
            newJobs = [...newJobs, { ...job, lat: coords[1], long: coords[0] }];
            setJobs(newJobs);
          });
      }
    });
  }, []);
  function getWindowWidth() {
    setViewport({ ...viewport, width: window.innerWidth });
  }

  useEffect(() => {
    window.addEventListener("resize", getWindowWidth);
  }, []);

  const [clickedJob, setClickedJob] = useState(null);

  return (
    <>
      {
        <div style={fixWidth}>
          <ReactMapGl
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
            mapStyle={process.env.REACT_APP_MAP_STYLE}
            onViewportChange={viewport => {
              setViewport(viewport);
            }}
          >
            {jobs &&
              jobs.map(
                (place, index) =>
                  place.lat && (
                    <Marker
                      key={index}
                      latitude={place.lat}
                      longitude={place.long}
                    >
                      <button
                        style={transparent}
                        onClick={e => {
                          e.stopPropagation();
                          e.preventDefault();
                          setClickedJob(place);
                        }}
                      >
                        <Pin />
                      </button>
                    </Marker>
                  )
              )}
            {clickedJob && (
              <Popup
                latitude={clickedJob.lat}
                longitude={clickedJob.long}
                onClose={() => {
                  setClickedJob(null);
                }}
              >
                <div className="map-card">
                  <DashCard
                    map={true}
                    key={clickedJob.id}
                    job={clickedJob}
                    getCurrentJob={props.getCurrentJob}
                    updateDisabled={props.updateDisabled}
                  />
                </div>
              </Popup>
            )}
          </ReactMapGl>
        </div>
      }
    </>
  );
}
function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    updateDisabled: state.updateDisabled
  };
}
const mapDispatchToProps = {
  getCurrentJob
};
export default connect(mapStateToProps, mapDispatchToProps)(MapDisplay);
const color = { color: "white" };

const fixWidth = {
  overflow: "hidden",
  margin: "0 auto"
};
const transparent = {
  background: "rgba(0,0,0,0)",
  border: "none"
};
const imgStyle = {
  width: "35px",
  height: "auto"
};
const pop = {
  width: "200px"
};
