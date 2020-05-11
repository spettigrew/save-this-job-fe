PostDetails.js;

import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Image,
  Header,
  Confirm,
  Icon,
  Grid,
  Responsive,
  Rating
} from "semantic-ui-react";
import { connect } from "react-redux";
import {
  deleteJob,
  updateCurrentJob,
  getCurrentJob,
  updateJob
} from "../../../redux/actions/index";
import Remove from "./Remove";
import DetailsNav from "./DetailsNav";
import Messages from "../../../UIElements/Messages";
import "./Cal.css";

function PostDetails(props) {
  const [open, setOpen] = useState(false);
  const handleChanges = (e, data) => {
    const value = e.target.value;
    props.updateCurrentJob({
      ...props.currentJob,
      [e.target.name]: value,
      rating: data.rating
    });
  };
  let editedJob = props.job;
  useEffect(() => {
    editedJob = props.currentJob;
  }, [props.success?.type]);

  const handleSubmit = () => {
    props.updateJob(props.jobId, props.currentJob);
  };

  const onCalChange = date => {
    console.log(date);
    props.updateCurrentJob({
      ...props.currentJob,
      applicationDeadline: date
    });
  };
  const [confirmClose, setConfirmClose] = useState(false);
  function closeModal() {
    if (!props.updateDisabled) {
      setConfirmClose(true);
    } else {
      setOpen(false);
    }
  }

  const [view, setView] = useState();
  return (
    <>
      <Confirm
        header="Changes Were Made"
        open={confirmClose}
        onCancel={() => setConfirmClose(false)}
        content="Are you sure you want to exit without saving?"
        onConfirm={() => {
          setConfirmClose(false);
          setOpen(false);
        }}
      />
      <Responsive>
        <Modal
          open={open}
          trigger={
            <Icon
              style={{ cursor: "pointer" }}
              name="ellipsis horizontal"
              size="big"
              color="grey"
              onClick={() => {
                setOpen(true);
                props.getCurrentJob(props.jobId);
              }}
              style={{ margin: "10px", cursor: "pointer" }}
            />
          }
        >
          {props.currentJob && (
            <>
              <Modal.Header
                style={{
                  display: "flex",
                  width: "100%",
                  padding: ".5rem 5px 0 15px",
                  justifyContent: "space-between"
                }}
              >
                <h2 style={{ display: "inline-block" }}>
                  {editedJob.companyTitle}
                </h2>
                <Icon
                  name="close"
                  style={{
                    fontSize: "1.5em",
                    cursor: "pointer"
                  }}
                  color="red"
                  onClick={() => {
                    closeModal();
                  }}
                />
              </Modal.Header>
              <DetailsNav setView={setView} />
              {props.success?.state && props.success?.type === "Updated" && (
                <Messages
                  visible={true}
                  type={props.success.type}
                  message={props.success.message}
                />
              )}
              <Modal.Content>
                <Modal.Description>
                  <Grid stackable>
                    <Grid.Column style={{ marginRight: "0" }} width={10}>
                      {view}
                    </Grid.Column>
                    <Grid.Column
                      style={{ marginLeft: "10px" }}
                      floated="right"
                      width={5}
                    >
                      <div>
                        <Image
                          style={{ maxHeight: "50px" }}
                          src={props.imgSrc}
                        />
                        <Header as="h3" content={editedJob.jobTitle} />
                      </div>
                      <Rating
                        style={{ margin: ".5em 0 2em" }}
                        icon="star"
                        onRate={handleChanges}
                        rating={props.currentJob.rating || 3}
                        maxRating={5}
                        clearable
                      />
                      <Header
                        as="h4"
                        content={`Location: ${props.currentJob.location}`}
                      />
                    </Grid.Column>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between"
                      }}
                    >
                      <Remove removeJob={props.deleteJob} id={props.jobId} />
                      <Button
                        color={props.updateDisabled ? null : "blue"}
                        onClick={handleSubmit}
                        type="submit"
                        content="Update"
                        disabled={props.updateDisabled}
                      />
                    </div>
                  </Grid>
                </Modal.Description>
              </Modal.Content>
            </>
          )}
        </Modal>
      </Responsive>
    </>
  );
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    currentJob: state.currentJob,
    success: state.success,
    updateDisabled: state.updateDisabled
  };
}

const mapDispatchToProps = {
  deleteJob,
  getCurrentJob,
  updateJob,
  updateCurrentJob
};
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
