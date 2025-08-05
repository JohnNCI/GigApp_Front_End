import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ADMIN_ADD_SONG_PATH,
  HOME_PATH,
  ADMIN_MANAGE_SONGS_PATH,
  ADMIN_EDIT_SONG_PATH,
} from "./constants/routes";
import Home from "./pages/Home";
import AddSongs from "./pages/admin/songs/AddSongs";
import ManageSongs from "./pages/admin/songs/ManageSongs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PATH} exact element={<Home />} />
        <Route path={ADMIN_ADD_SONG_PATH} exact element={<AddSongs />} />
        <Route path={ADMIN_MANAGE_SONGS_PATH} exact element={<ManageSongs />} />
        <Route path={ADMIN_EDIT_SONG_PATH} exact element={<AddSongs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
