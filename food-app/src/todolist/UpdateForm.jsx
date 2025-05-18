import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function UpdateForm({
  onClose,
  open,
  todo,
  setTodo,
  handleUpdate,
}) {
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
