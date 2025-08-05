import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ADMIN_ADD_SONG_PATH,
  HOME_PATH,
  ADMIN_MANAGE_SONGS_PATH,
  ADMIN_EDIT_SONG_PATH,
  MYGIGS_PATH,
  MYGIGS_SONGS_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
} from "./constants/routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddSongs from "./pages/admin/songs/AddSongs";
import ManageSongs from "./pages/admin/songs/ManageSongs";
import MyGigs from "./pages/user/MyGigs"; //control space
import MyGigSongs from "./pages/user/MyGigSongs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PATH} exact element={<Home />} />
        <Route path={LOGIN_PATH} exact element={<Login />} />
        <Route path={REGISTER_PATH} exact element={<Register />} />
        <Route path={MYGIGS_PATH} exact element={<MyGigs />} />
        <Route path={MYGIGS_SONGS_PATH} exact element={<MyGigSongs />} />
        <Route path={ADMIN_ADD_SONG_PATH} exact element={<AddSongs />} />
        <Route path={ADMIN_MANAGE_SONGS_PATH} exact element={<ManageSongs />} />
        <Route path={ADMIN_EDIT_SONG_PATH} exact element={<AddSongs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
