export type ToDoItemProps = {
    todo: string
}

export function ToDoItem({todo} : ToDoItemProps) {
  return <li>{todo}</li>;
}
