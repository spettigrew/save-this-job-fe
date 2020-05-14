import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  getUser,
  getJobs,
  getCurrentJob,
  updateJob
} from "../../redux/actions/index";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import store from "store";
import DashCard from "./card";
import Loading from "./Loading";
import Message from "../../UIElements/Messages";
import { Header } from "semantic-ui-react";
import { onDragEnd } from "./dragDropContext/onDragEnd";
import { initialColumn } from "./dragDropContext/initialColumn";
import SideBar from "../../UIElements/SideBar";

const Dashboard = props => {
  const [columns, setColumns] = useState(initialColumn);

  useEffect(() => {
    setTokenForExtension();
    props.getUser();
    props.getJobs();
  }, []);

  useEffect(() => {
    handleJobs();
  }, [props.loading, props.jobs]);

  // This is used for the purpose of the chrome extension to authenticate users once they login
  const setTokenForExtension = () => {
    const token = store.get("okta-token-storage").accessToken.accessToken;
    localStorage.setItem("token", token);
  };

  const handleJobs = () => {
    const filterJobs = columnId => {
      const jobs = props.jobs;
      const filterColumns =
        jobs && jobs.filter(job => job.column_id === columnId);
      console.log(jobs);
      return filterColumns;
    };

    const storageCheck = column_id => {
      try {
        const items = localStorage.getItem("destItems");

        if (!items) {
          return undefined;
        }

        const parsedItems = JSON.parse(items);
        const columnChange_id = localStorage.getItem("destId");

        if (columnChange_id === column_id) {
          return parsedItems;
        } else {
          return filterJobs(column_id);
        }
      } catch (err) {
        console.log(err);
        return undefined;
      }
    };

    props.jobs &&
      setColumns({
        ...columns,
        ["column-1"]: {
          ...columns["column-1"],
          items: !storageCheck("column-1")
            ? filterJobs("column-1")
            : storageCheck("column-1")
        },
        ["column-2"]: {
          ...columns["column-2"],
          items: !storageCheck("column-2")
            ? filterJobs("column-2")
            : storageCheck("column-2")
        },
        ["column-3"]: {
          ...columns["column-3"],
          items: !storageCheck("column-3")
            ? filterJobs("column-3")
            : storageCheck("column-3")
        },
        ["column-4"]: {
          ...columns["column-4"],
          items: !storageCheck("column-4")
            ? filterJobs("column-4")
            : storageCheck("column-4")
        },
        ["column-5"]: {
          ...columns["column-5"],
          items: !storageCheck("column-5")
            ? filterJobs("column-5")
            : storageCheck("column-5")
        }
      });
  };

  return (
    <SideBar user={props.user}>
      <div style={{ paddingTop: "60px" }}>
        {props.loading && <Loading />}
        <div>
          {props.success?.state && props.success?.type == "Deleted" && (
            <Message
              type={"Success"}
              visible={true}
              message={"Successfully Deleted Job"}
            />
          )}
          {!props.loading && props.jobs && props.jobs.length < 1 ? (
            <div style={{ height: "100vh" }}>
              <Header
                as="h2"
                style={{
                  paddingTop: "150px",
                  marginLeft: "250px"
                }}
              >
                You currently have no jobs saved to your account.
              </Header>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                maxWidth: "100%",
                margin: "0, auto"
              }}
            >
              <DragDropContext
                onDragEnd={result =>
                  onDragEnd(result, columns, setColumns, props.updateJob)
                }
              >
                {Object.entries(columns).map(([columnId, column], index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "280px",
                        verticalAlign: "top",
                        padding: "20px 20px",
                        borderLeft: "1px solid #ece9f2",
                        height: "95vh",
                        overflow: "auto"
                      }}
                      key={columnId}
                    >
                      <div
                        style={{
                          height: "80px",
                          margin: 0,
                          alignItems: "center",
                          position: "fixed",
                          background: "#f4f8f9",
                          zIndex: 10000000000,
                          width: "250px"
                        }}
                      >
                        <h2
                          key={index}
                          style={{
                            fontFamily: "Lato",
                            fontSize: "16px",
                            padding: "40px 45px",
                            height: "50px",
                            textAlign: "center"
                          }}
                        >
                          {column.name}
                        </h2>
                      </div>

                      <div style={{ paddingTop: 80 }}>
                        <Droppable droppableId={columnId} key={columnId}>
                          {(provided, snapshot) => {
                            return (
                              <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                  background: snapshot.isDraggingOver
                                    ? "#B4E4EE"
                                    : "",
                                  padding: 20,
                                  width: 269,
                                  height: "auto",
                                  minHeight: "78vh",
                                  minWidth: 269
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
                                              {snapshot.isDragging
                                                ? localStorage.setItem(
                                                    "jobId",
                                                    item.id
                                                  )
                                                : null}
                                              <DashCard
                                                key={index}
                                                job={item}
                                                getCurrentJob={
                                                  props.getCurrentJob
                                                }
                                                updateDisabled={
                                                  props.updateDisabled
                                                }
                                              />
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
          )}
        </div>
      </div>
    </SideBar>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
    jobs: state.jobs,
    loading: state.loading,
    error: state.error,
    success: state.success,
    updateDisabled: state.updateDisabled
  };
}

const mapDispatchToProps = {
  getUser,
  getJobs,
  getCurrentJob,
  updateJob
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
