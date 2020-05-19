import React, { useState, useEffect } from "react";
import { addTag, deleteTag } from "../redux/actions/index";
import { connect } from "react-redux";
import { Form, Label, Dropdown, Icon, Header } from "semantic-ui-react";
function TagDropDown(props) {
  const [tags, setTags] = useState([]);
  const [addTagArr, setAddTagArr] = useState([]);

  useEffect(() => {
    props.tags.forEach((t, i) => {
      setTags([...tags, { key: t.id, text: t.tagName, value: t.tagName }]);
    });
  }, [props.tags]);

  const addTag = (e, data) => {
    setAddTagArr(data.value);
  };
  const handleAddition = (e, { value }) => {
    setTags([{ text: value, value, key: value }, ...tags]);
  };
  function submitTag() {
    addTagArr.forEach(tag => props.addTag(tag, props.jobID));
    setAddTagArr([]);
  }
  return (
    <>
      <Header>Tags</Header>
      <Form
        style={{
          margin: "10px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Dropdown
          style={{ width: "70%" }}
          placeholder="Add to Tag"
          fluid
          allowAdditions
          value={addTagArr}
          onAddItem={handleAddition}
          multiple
          search
          selection
          options={tags}
          onChange={addTag}
        ></Dropdown>
        <Icon
          style={{ fontSize: "1.1rem", cursor: "pointer" }}
          color="green"
          circular
          name="plus"
          onClick={submitTag}
        />
      </Form>
      {props.tags?.map(tag =>
        tag.jobPosts_id === props.jobID ? (
          <Label key={tag.id} style={{ margin: "2px" }} color="blue">
            {tag.tagName}
            <Icon name="close" onClick={() => props.deleteTag(tag.id)} />
          </Label>
        ) : null
      )}
    </>
  );
}
function mapStateToProps(state) {
  return {
    tags: state.tags
  };
}
const mapDispatchToProps = {
  addTag,
  deleteTag
};
export default connect(mapStateToProps, mapDispatchToProps)(TagDropDown);
