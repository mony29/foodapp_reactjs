import { Button } from "@mui/material";

export default function TodoList({
  todo,
  handleDelete,
  handleUpdateOpen,
  handleViewDetails,
}) {
  return (
    <div>
      <ul>
        <li>
          {todo.id} - {todo.name} - {todo.done ? "Done" : "Not Done"}
          <button
            onClick={() => handleDelete(todo)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
          <button
            onClick={() => handleUpdateOpen(todo)}
            style={{ marginLeft: "10px" }}
          >
            Update
          </button>
          <Button
            onClick={() => handleViewDetails(todo)}
            variant="contained"
            sx={{ marginLeft: "10px", padding: "4px 10px" }}
          >
            View
          </Button>
        </li>
      </ul>
    </div>
  );
}
