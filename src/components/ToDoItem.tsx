import { useState } from "react";

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
    <li>
      <input type="checkbox" checked={checkedTask} onChange={onChangeInput} />
      <span className={checkedTask ? "is-checked" : ""}>{todo}</span>
      <button onClick={() => onDelete(index)}>X</button>
    </li>
  );
}
