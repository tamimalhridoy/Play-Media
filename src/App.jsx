import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Video from "./pages/Video";
import Groups from "./pages/Groups";
import Games from "./pages/Games";
import Manu from "./pages/Manu";
import Chats from "./pages/Chats";
import Notifications from "./pages/Notifications";
import UserDetails from "./pages/UserDetails";
import Friends from "./pages/Friends";
import Registration from "./pages/Registration";
import Terms from "./pages/Terms";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/terms" element={<Terms/>}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/video" element={<Video />}></Route>
          <Route path="/group" element={<Groups />}></Route>
          <Route path="/game" element={<Games />}></Route>
          <Route path="/manu" element={<Manu />}></Route>
          <Route path="/chats" element={<Chats />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/account" element={<UserDetails />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
          
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
