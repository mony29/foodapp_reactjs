// FilterBy.js
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function FilterBy({ filterDone, setFilterDone }) {
  return (
    <FormControl sx={{ minWidth: 120, marginLeft: "10px" }} size="small">
      <InputLabel id="filter-done-label">Done</InputLabel>
      <Select
        labelId="filter-done-label"
        id="filter-done"
        value={filterDone}
        label="Done"
        onChange={(e) => setFilterDone(e.target.value)}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="true">Done</MenuItem>
        <MenuItem value="false">Not Done</MenuItem>
      </Select>
    </FormControl>
  );
}
