import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

export default function ViewDetailsDialog({ todo, onClose, open }) {
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
