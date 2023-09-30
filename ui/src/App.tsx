import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import css from "./styles/app.module.css";
import NavBar from "./components/NavBar/NavBar";
import "./app.css";
import CreatePost from "./pages/CreatePost";
import AllPosts from "./pages/AllPosts";
import Analytics from "./pages/Analytics";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className={css.wrapper}>
        <NavBar />
        <Routes>
          <Route path="/" Component={Analytics} />
          <Route path="/posts" Component={AllPosts} />
          <Route path="/posts/createpost" Component={CreatePost} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
