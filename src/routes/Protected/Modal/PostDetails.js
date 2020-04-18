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
  Rating,
  Label
} from "semantic-ui-react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteJob } from "../../../redux/actions/index";
import Remove from "./Remove";
import DetailsNav from "./DetailsNav";
import Messages from "../../../UIElements/Messages";
import Cal from "./Cal";

function PostDetails(props) {
  let thisJob = props.jobs.find(obj => obj.id === props.jobId);

  console.log("fired");
  const [open, setOpen] = useState(false);
  const [job, setJob] = useState({
    rating: thisJob.rating || 3,
    applicationDeadline: new Date("11/11/2020")
  });

  const handleRating = (e, data) => {
    setJob({
      ...job,
      rating: data.rating
    });
  };
  const [view, setView] = useState();
  return (
    <>
      <Modal
        open={open}
        closeOnEscape={false}
        trigger={
          <Icon
            name="edit"
            size="large"
            onClick={() => {
              setOpen(true);
            }}
          />
        }
      >
        {" "}
        <Icon
          name="close"
          style={{
            position: "relative",
            top: "0",
            left: "95%",
            fontSize: "2em"
          }}
          color="red"
          onClick={() => {
            setOpen(false);
          }}
        />
        <Modal.Header>{thisJob.companyTitle}</Modal.Header>
        <DetailsNav setView={setView} job={thisJob} jobId={props.jobId} />
        <Modal.Content>
          <Modal.Description>
            <Grid>
              <Grid.Column width={10}>{view}</Grid.Column>
              <Grid.Column floated="right" width={5}>
                <div>
                  <Image size="small" src={props.imgSrc} />
                  <Header as="h3" content={thisJob.jobTitle} />
                </div>
                <Rating
                  style={{ margin: ".5em 0 2em" }}
                  onRate={handleRating}
                  rating={job.rating}
                  maxRating={5}
                  clearable
                />
                <Cal dueDate={thisJob.applicationDeadline || Date.now} />
                <Remove removeJob={props.deleteJob} id={props.jobId} />
              </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
}
function mapStateToProps(state) {
  return {
    jobs: state.jobs
  };
}

const mapDispatchToProps = {
  deleteJob
};
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
