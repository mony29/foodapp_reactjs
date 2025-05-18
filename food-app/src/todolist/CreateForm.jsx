import { Dialog, DialogTitle, DialogContent, DialogContentText } from "@mui/material";

export default function CreateForm({ onClose, open, todo, setTodo, handleAdd }) {
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
