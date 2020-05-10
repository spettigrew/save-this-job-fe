import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUser, getJobs, getCurrentJob } from "../../redux/actions/index";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import store from "store";
import DashCard from "./card";
import Loading from "./Loading";
import Message from "../../UIElements/Messages";
import { Header, Icon } from "semantic-ui-react";
import { onDragEnd } from "./dragDropContext/onDragEnd";
import { initialColumn } from "./dragDropContext/initialColumn";
import SideBar from "../../UIElements/SideBar";
import SideNavTab from "../../UIElements/SideNavTab";

const Dashboard = props => {
  const [columns, setColumns] = useState(initialColumn);

  useEffect(() => {
    setTokenForExtension();
    props.getUser();
    props.getJobs();
  }, []);

  useEffect(() => {
    handleJobs();
  }, [props.jobs]);

  // This is used for the purpose of the chrome extension to authenticate users once they login
  const setTokenForExtension = () => {
    const token = store.get("okta-token-storage").accessToken.accessToken;
    localStorage.setItem("token", token);
  };
  const handleJobs = () => {
    props.jobs &&
      setColumns({
        ...columns,
        ["column-1"]: {
          name: "Interested",
          items: props.jobs
        }
      });
  };

  return (
    <>
      {" "}
      <SideBar>
        {props.error && (
          <Message
            type={"Error"}
            visible={true}
            message={props.error.message}
          />
        )}
        {props.success?.state && props.success?.type == "Deleted" && (
          <Message
            type={"Success"}
            visible={true}
            message={"Successfully Deleted Job"}
          />
        )}

        {!props.loading && props.jobs && props.jobs.length < 1 && (
          <Header as="h2">
            You currently have no jobs saved to your account.
          </Header>
        )}
        {props.loading && <Loading />}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            paddingTop: "100px"
          }}
        >
          <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "290px",
                    verticalAlign: "top",
                    padding: "30px 10px",
                    borderLeft: "1px solid #ece9f2",
                    height: "100%",
                    overflow: "hidden"
                  }}
                  key={columnId}
                >
                  <h2
                    style={{
                      fontFamily: "Lato",
                      fontSize: "16px"
                    }}
                  >
                    {column.name}
                  </h2>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "#08A6C9"
                                : "",
                              padding: 4,
                              width: 250,
                              minHeight: 1000
                            }}
                          >
                            {props.jobs &&
                              column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id.toString()}
                                    draggableId={item.id.toString()}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <DashCard key={index} job={item} />
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      </SideBar>
    </>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
    jobs: state.jobs,
    loading: state.loading,
    error: state.error,
    success: state.success
  };
}

const mapDispatchToProps = {
  getUser,
  getJobs,
  getCurrentJob
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
