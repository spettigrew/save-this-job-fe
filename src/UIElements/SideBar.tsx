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
          <Header textAlign="center">Save This Job</Header>
          <SearchAndFilter />
          <List selection>
            <List.Item
              style={{ fontSize: "1.2rem", color: "#333", textAlign: "center" }}
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
