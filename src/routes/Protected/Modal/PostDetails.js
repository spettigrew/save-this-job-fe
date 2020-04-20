import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Image,
  Header,
  Icon,
  Form,
  Grid,
  TextArea,
  Responsive,
  Rating,
  Label
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
import Calendar from "react-calendar";
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

  const handleSubmit = () => {
    props.updateJob(props.jobId, props.currentJob);
  };

  const onCalChange = date => {
    props.updateCurrentJob({
      ...props.currentJob,
      applicationDeadline: date
    });
  };

  const [view, setView] = useState();
  return (
    <>
      <Responsive>
        <Modal
          open={open}
          trigger={
            <Icon
              style={{ cursor: "pointer" }}
              name="edit"
              size="large"
              onClick={() => {
                setOpen(true);
                props.getCurrentJob(props.jobId);
              }}
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
                  {props.currentJob.companyTitle}
                </h2>
                <Icon
                  name="close"
                  style={{
                    fontSize: "1.5em",
                    cursor: "pointer"
                  }}
                  color="red"
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </Modal.Header>
              <DetailsNav setView={setView} />
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
                        <Image size="small" src={props.imgSrc} />
                        <Header as="h3" content={props.currentJob.jobTitle} />
                      </div>
                      <Rating
                        style={{ margin: ".5em 0 2em" }}
                        onRate={handleChanges}
                        rating={props.currentJob.rating}
                        maxRating={5}
                        clearable
                      />
                      <Calendar
                        onChange={onCalChange}
                        value={new Date(props.currentJob.applicationDeadline)}
                      />
                      <Remove removeJob={props.deleteJob} id={props.jobId} />
                    </Grid.Column>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end"
                      }}
                    >
                      <Button onClick={handleSubmit} type="submit">
                        Update
                      </Button>
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
    currentJob: state.currentJob
  };
}

const mapDispatchToProps = {
  deleteJob,
  getCurrentJob,
  updateJob,
  updateCurrentJob
};
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
