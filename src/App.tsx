import { Nav } from './container/Nav';
import { Home } from "pages/Home";
import { ToDoPart } from "pages/TodoPart";
import { Route, Routes, useLocation } from "react-router-dom";
import { MycontextP } from "globalstate/mycontext";
import { DonePart } from "pages/DonePart";

function App() {
  const location = useLocation();
  return (
    <MycontextP>
      {location.pathname !== "/" ? <Nav /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDoPart />} />
        <Route path="/done" element={<DonePart />} />
      </Routes>
    </MycontextP>
  );
}

export default App;
