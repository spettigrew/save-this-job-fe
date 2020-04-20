import React, { useState } from "react";
import { TextArea, Header, Button } from "semantic-ui-react";
export default function Notes(props) {
  const [notes, setNotes] = useState({
    notes: props.job.notes || ""
  });
  const handleChanges = e => {
    const value = e.target.value;
    setNotes({
      ...notes,
      [e.target.name]: value
    });
    props.setUpdatedJob({ ...props.updatedJob, notes: e.target.value });
  };
  return (
    <div>
      <Header as="h2" content="Notes" />
      <TextArea
        style={{ width: "90%" }}
        rows={20}
        placeholder="Notes"
        name="notes"
        value={notes.notes}
        onChange={handleChanges}
      />
    </div>
  );
}
