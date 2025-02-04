import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MyBlog from "./pages/MyBlog.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/my-blog" element={<MyBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
