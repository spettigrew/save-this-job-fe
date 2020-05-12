import React, { useState, useEffect } from "react";
import { Dropdown, Input, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { getTags, getJobs, filterByTag } from "../redux/actions/index";

function SearchAndFilter(props) {
  const [tags, setTags] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  useEffect(() => {
    if (!props.jobs) {
      props.getJobs();
    }
  }, []);
  useEffect(() => {
    if (props.jobs) {
      props.getTags();
    }
  }, [props.jobs]);
  useEffect(() => {
    if (props.tags) {
      let tags = [];
      props.tags.forEach((t, i) => {
        tags = [
          ...tags,
          {
            key: t.id,
            text: t.tagName,
            value: t.id,
            label: { color: "green", empty: true, circular: true }
          }
        ];
      });
      setTags(tags);
      setFilteredTags(tags);
    }
  }, [props.tags]);
  function tagsSearchChange(e) {
    const value = e.target.value;

    let filteredTags = tags.filter(tag => {
      return tag.text.includes(value);
    });
    if (value.length > 0) {
      setFilteredTags(filteredTags);
    } else {
      setFilteredTags(tags);
    }
  }
  const [open, setOpen] = useState(false);
  return (
    <Dropdown
      style={{ width: "100%" }}
      text="Filter Jobs"
      icon={
        <Icon name="refresh" onClick={() => props.getJobs()} color="blue" />
      }
      floating
      labeled
      button
      className="icon"
      onClick={() => setOpen(true)}
      open={open}
    >
      <Dropdown.Menu
        style={{ width: "100%" }}
        onMouseLeave={() => setOpen(false)}
      >
        <Input
          onChange={tagsSearchChange}
          icon="search"
          iconPosition="left"
          className="search"
        />
        <Dropdown.Divider />
        <Dropdown.Header icon="tags" content="Tag Label" />
        <Dropdown.Item onClick={() => props.getJobs()}>
          Clear Filter
        </Dropdown.Item>
        <Dropdown.Divider />

        <Dropdown.Menu style={{ maxHeight: "100px" }} scrolling>
          {/*make onClick to set filtered job posts only with option.value as tag */}
          {filteredTags.map(option => (
            <Dropdown.Item
              key={option.value}
              onClick={() => {
                props.filterByTag(option.text);
                localStorage.removeItem("destItems");
              }}
              {...option}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function mapStateToProps(state) {
  return {
    tags: state.tags,
    jobs: state.jobs
  };
}
const mapDispatchToProps = {
  getTags,
  filterByTag,
  getJobs
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchAndFilter);
