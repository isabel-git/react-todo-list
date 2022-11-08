export type ToDoItemProps = {
  todo: string;
  index: number;
  onDelete: (index: number) => void;
};

export function ToDoItem({ todo, index, onDelete }: ToDoItemProps) {
  return (
    <li>
      {todo}
      <button onClick={() => onDelete(index)}>X</button>
    </li>
  );
}
