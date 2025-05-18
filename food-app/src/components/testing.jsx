import { useState } from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

export default function Testing({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [query, setQuery] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);

  function handleAdd() {
    if (!todo.trim()) return;
    const newTask = createTask(todo);
    setTodoList([...todoList, newTask]);
    resetForm();
  }

  function createTask(name) {
    return {
      id: todoList.length + 1,
      name: name,
      done: false,
    };
  }

  function resetForm() {
    setTodo("");
    handleCloseForm();
  }



  function handleOpenDeleteDialog(todo) {
    setSelectedTodo(todo);
    setConfirmOpen(true);
  }

  function handleDelete() {
    if (selectedTodo) {
      setTodoList(todoList.filter((todo) => todo.id !== selectedTodo.id));
      setSelectedTodo(null);
      setConfirmOpen(false);
    }
  }

  function handleUpdateOpen(todo) {
    setSelectedTodo(todo);
    setTodo(todo.name);
    setUpdateOpen(true);
  }

  function handleUpdate(id, name) {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done, name: name };
        }
        return todo;
      })
    );
    setUpdateOpen(false);
    setSelectedTodo(null);
  }

  function handleOpenDialog(todo) {
    setSelectedTodo(todo);
    setOpen(true);
  }

  function handleCloseDialog() {
    setOpen(false);
    setSelectedTodo(null);
  }

  const todoListFilter = todoList.filter((todo) =>
    todo.name.toLowerCase().includes(query.toLowerCase())
  );

  function handleOpenForm() {
    setFormOpen(true);
  }

  function handleCloseForm() {
    setFormOpen(false);
  }

  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="search..."
      ></input>

      <Button
        onClick={handleOpenForm}
        variant="contained"
        sx={{ marginLeft: "10px", padding: "4px 10px" }}
      >
        + Add
      </Button>

      <p>user input : {query}</p>

      {/* {todoList.map((todo) => ( */}
      {todoListFilter.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          handleDelete={handleOpenDeleteDialog}
          handleUpdateOpen={(todo) => handleUpdateOpen(todo)}
          handleViewDetails={(todo) => handleOpenDialog(todo)}
        />
      ))}

      {selectedTodo && (
        <TodoDetailsDialog
          todo={selectedTodo}
          open={open}
          onClose={handleCloseDialog}
        />
      )}

      <TodoForm
        open={formOpen}
        onClose={handleCloseForm}
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />

      <DeleteDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        handleDelete={handleDelete}
      />

      <UpdateForm
        open={updateOpen}
        onClose={() => setUpdateOpen(false)}
        todo={todo}
        setTodo={setTodo}
        handleUpdate={() => handleUpdate(selectedTodo.id, todo)}
      />
    </div>
  );
}

function TodoList({ todo, handleDelete, handleUpdateOpen, handleViewDetails }) {
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
            // onClick={() => handleUpdate(todo.id)}
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

function TodoDetailsDialog({ onClose, todo, open }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">{"Todo Details"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Task: {todo.name}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Status: {todo.done ? "Done" : "Not Done"}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

function TodoForm({ onClose, open, todo, setTodo, handleAdd }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">{"Add Task"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            placeholder="Enter todo item..."
          />
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          <button onClick={handleAdd} type="submit">
            Add
          </button>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

function DeleteDialog({ open, onClose, handleDelete }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure to delete?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
}

function UpdateForm({ onClose, open, todo, setTodo, handleUpdate }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">{"Update Task"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            placeholder="Enter todo item..."
          />
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          <button onClick={handleUpdate} type="submit">
            save
          </button>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}