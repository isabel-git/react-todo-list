import { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

export type ToDoItemProps = {
  todo: string;
  index: number;
  isChecked: boolean;
  onDelete: (index: number) => void;
};

export function ToDoItem({ todo, index, isChecked, onDelete }: ToDoItemProps) {
  const [checkedTask, setCheckedTask] = useState(isChecked);

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    setCheckedTask((c) => checked);
  }

  return (
    <Grid container spacing={10} component="li">
      <Grid item xs={8}>
        <Checkbox checked={checkedTask} onChange={onChangeInput} />
        <span className={checkedTask ? "is-checked" : ""}>{todo}</span>
      </Grid>

      <Grid item xs={4}>
        <Button onClick={() => onDelete(index)}>X</Button>
      </Grid>
    </Grid>
  );
}
