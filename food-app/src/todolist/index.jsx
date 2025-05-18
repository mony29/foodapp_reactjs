import { useState } from "react";
import Button from "@mui/material/Button";
import TodoList from "./TodoList";
import CreateForm from "./CreateForm";
import DeleteDialog from "./DeleteForm";
import UpdateForm from "./UpdateForm";
import ViewDetailsDialog from "./TodoDetails";
import FilterBy from "./Filter";

export default function MainComponent({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");
  const [openView, setOpenView] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [query, setQuery] = useState("");
  const [formCreateOpen, setFormCreateOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  const todoListFilter = todoList.filter((todo) => {
    const nameMatch = todo.name.toLowerCase().includes(query.toLowerCase());
    const statusMatch =
      filterStatus === "all" ||
      (filterStatus === "true" && todo.done) ||
      (filterStatus === "false" && !todo.done);
    return nameMatch && statusMatch;
  });

  function onOpenDeleteDialog(todo) {
    setSelectedTodo(todo);
    setConfirmOpen(true);
  }

  function onOpenUpdateDialog(todo) {
    setSelectedTodo(todo);
    setTodo(todo.name);
    setUpdateOpen(true);
  }

  function onOpenViewDialog(todo) {
    setSelectedTodo(todo);
    setOpenView(true);
  }

  function handleAdd() {
    if (!todo.trim()) return;
    const newTask = createTask(todo);
    setTodoList([...todoList, newTask]);
    setTodo("");
    setFormCreateOpen(false);
  }

  function createTask(name) {
    return {
      id: todoList.length + 1,
      name: name,
      done: false,
    };
  }

  function handleDelete() {
    if (selectedTodo) {
      setTodoList(todoList.filter((todo) => todo.id !== selectedTodo.id));
      setSelectedTodo(null);
      setConfirmOpen(false);
    }
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

  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="search..."
      ></input>

      <FilterBy filterDone={filterStatus} setFilterDone={setFilterStatus} />

      <Button
        onClick={() => setFormCreateOpen(true)}
        variant="contained"
        sx={{ marginLeft: "10px", padding: "4px 10px" }}
      >
        + Add
      </Button>

      {todoListFilter.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          handleDelete={onOpenDeleteDialog}
          handleUpdateOpen={(todo) => onOpenUpdateDialog(todo)}
          handleViewDetails={(todo) => onOpenViewDialog(todo)}
        />
      ))}

      {selectedTodo && (
        <ViewDetailsDialog
          todo={selectedTodo}
          open={openView}
          onClose={() => {
            setOpenView(false);
            setSelectedTodo(null);
          }}
        />
      )}

      <CreateForm
        open={formCreateOpen}
        onClose={() => setFormCreateOpen(false)}
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
