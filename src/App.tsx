import { ToDoList } from "./components/ToDoList";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export function App() {
  return (
    <Card className="container" sx={{ maxWidth: 475, minHeight: 275 }} >
      <CardContent className="content">
        <Typography variant="h4" component="div"  sx={{ textAlign: 'center' }}>
          My Todo App
        </Typography>
        <ToDoList />
      </CardContent>
    </Card>
  );
}
