export const onDragEnd = (result, columns, setColumns, updateJob) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    updateJob(localStorage.getItem("jobId"), {
      column_id: destination.droppableId
    });
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });

    localStorage.setItem("destItems", JSON.stringify(destItems));
    // localStorage.setItem('sourceItems', JSON.stringify(sourceItems))
    localStorage.setItem("destId", destination.droppableId);
    console.log(destination.droppableId, "change column");
    // localStorage.setItem('sourceId',source.droppableId)
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
    localStorage.setItem("destItems", JSON.stringify(copiedItems));
    localStorage.setItem("destId", source.droppableId);
    console.log(destination.droppableId, "same column");
    updateJob(localStorage.getItem("jobId"), {
      column_id: destination.droppableId
    });
  }
};
