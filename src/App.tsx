import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import { TodoList } from "./components/TodoList";
import Progress from "./components/Progress";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">TODO</Link>
            </li>
            <li>
              <Link to="/progress">PROGRESS</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
