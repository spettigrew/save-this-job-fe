import React, { useState } from "react";
import { TextArea, Header, Button } from "semantic-ui-react";
export default function Notes(props) {
  const [notes, setNotes] = useState();
  const handleChanges = e => {
    const value = e.target.value;
    setNotes(value);
  };
  const submitHandler = () => {
    //update notes function
    console.log(notes);
  };
  return (
    <div>
      <Header as="h2" content="Notes" />
      <TextArea
        style={{ width: "90%" }}
        rows={20}
        placeholder="Notes"
        name="notes"
        value={props.job.notes}
        onChange={handleChanges}
      />
      <Button onClick={submitHandler} floated="right">
        Update
      </Button>
    </div>
  );
}
