import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ADMIN_ADD_SONG_PATH, HOME_PATH } from "./constants/routes";
import Home from "./pages/Home";
import AddSongs from "./pages/admin/songs/AddSongs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PATH} exact element={<Home />} />
        <Route path={ADMIN_ADD_SONG_PATH} exact element={<AddSongs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
