import React, { useState } from "react";
import { Message } from "semantic-ui-react";
import { clearMessages } from "../redux/actions/index";
import { connect } from "react-redux";
const Messages = props => {
  const [visible, setVisible] = useState(props.visible ? props.visible : false);

  function handleDismiss() {
    props.clearMessages();

    setVisible(false);
  }
  if (visible) {
    setTimeout(() => {
      handleDismiss();
    }, 2500);
  }
  return (
    <>
      {visible && props.type === "Error" ? (
        <Message negative onDismiss={handleDismiss}>
          <Message.Header>{props.type}</Message.Header>
          <p>{props.message}</p>
        </Message>
      ) : (
        visible && (
          <Message onDismiss={handleDismiss}>
            <Message.Header>{props.type}</Message.Header>
            <p>{props.message}</p>
          </Message>
        )
      )}{" "}
    </>
  );
};
const mapDispatchToState = {
  clearMessages: clearMessages
};
export default connect(null, mapDispatchToState)(Messages);
