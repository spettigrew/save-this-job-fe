import React, { useState, useEffect } from "react";
import {
  Header,
  Image,
  Icon,
  Button,
  Menu,
  Ref,
  Segment,
  Sidebar,
  List
} from "semantic-ui-react";
import MapView from "./MapView";
import SideNavTab from "./SideNavTab";
import Footer from "../routes/footer";
import SearchAndFilter from "./SearchAndFilter";
export default function SideBar(props) {
  const [mapView, setMapView] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <Sidebar.Pushable style={{ height: "100%", overflowY: "hidden" }}>
      <div onMouseLeave={() => setVisible(false)}>
        <Sidebar
          as={Segment}
          animation="overlay"
          icon="labeled"
          direction="left"
          style={{ paddingTop: "100px", width: "200px", background: "#fdfdfd" }}
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
        >
          <List selection>
            <h5>{`Welcome Back, ${props.user && props.user.firstName}`}</h5>
            <SearchAndFilter />
            <List.Item
              style={{
                fontSize: "1.2rem",
                color: "#333",
                textAlign: "center",
                marginTop: "5px"
              }}
              onClick={() => setMapView(!mapView)}
            >
              <Icon
                color={!mapView ? "red" : "blue"}
                name={!mapView ? "map" : "columns"}
              />
              <List.Content>
                <List.Header>{!mapView ? "Map View" : "Kanban"}</List.Header>
              </List.Content>
            </List.Item>
            <List.Item style={{ marginTop: "10px" }}>
              <Icon color={"blue"} name={"briefcase"} />
              <List.Content>
                <List.Header
                  style={{ textAlign: "center", fontSize: "1.2rem" }}
                >
                  {" "}
                  Find Jobs
                </List.Header>
              </List.Content>
            </List.Item>
            <List.Item style={{ textAlign: "center" }}>
              <Icon color={"blue"} name={"globe"} />
              <List.Content>
                <a href="https://indeed.com">Indeed</a>
              </List.Content>
            </List.Item>
            <List.Item style={{ textAlign: "center" }}>
              <Icon color={"blue"} name={"globe"} />
              <List.Content>
                <a href="https://careerbuilder.com">CareerBuilder</a>
              </List.Content>
            </List.Item>
          </List>
        </Sidebar>
      </div>
      <Sidebar.Pusher>
        <>
          <SideNavTab setVisible={setVisible} />

          {!mapView ? props.children : <MapView />}
        </>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}
