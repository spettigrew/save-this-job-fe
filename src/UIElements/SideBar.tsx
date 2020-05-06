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
export default function SideBar(props) {
  const [mapView, setMapView] = useState(false);

  return (
    <Sidebar.Pushable
      onMouseLeave={() => props.setVisible(false)}
      style={{ height: "100%", overflowY: "hidden" }}
    >
      <Sidebar
        as={Segment}
        animation="overlay"
        icon="labeled"
        direction="left"
        style={{ paddingTop: "100px", background: "#fdfdfd" }}
        onHide={() => props.setVisible(false)}
        vertical
        visible={props.visible}
        width="thin"
      >
        <Header textAlign="center">Save This Job</Header>
        <List selection>
          <List.Item
            style={{ color: "#333", textAlign: "center" }}
            onClick={() => setMapView(!mapView)}
          >
            {!mapView ? "Map View" : "Card View"}
          </List.Item>
        </List>
      </Sidebar>

      <Sidebar.Pusher>{!mapView ? props.children : <MapView />}</Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}
