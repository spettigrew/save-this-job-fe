import React, { useState } from "react";
import { TextArea, Header, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateCurrentJob } from "../../../redux/actions/index";
function Notes(props) {
  const handleChanges = e => {
    const value = e.target.value;
    props.updateCurrentJob({
      ...props.currentJob,
      [e.target.name]: value
    });
  };
  return (
    <div>
      <Header as="h2" content="Notes" />
      <TextArea
        style={{ width: "90%", resize: "none" }}
        rows={30}
        placeholder="Notes"
        name="notes"
        value={props.currentJob.notes}
        onChange={handleChanges}
      />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    currentJob: state.currentJob
  };
}
const mapDispatchToProps = {
  updateCurrentJob
};
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
