import React, { useState } from "react";
import { Message } from "semantic-ui-react";

const Messages = props => {
  const [visible, setVisible] = useState(props.visible ? props.visible : false);

  function handleDismiss() {
    setVisible(false);
  }
  if (visible) {
    setTimeout(() => {
      handleDismiss();
    }, 2000);
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
export default Messages;
