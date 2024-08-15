import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Home from "./Modules/Home";
import Navbar from "./Modules/Navbar";
import AddBook from "./Modules/AddBook";
import AddBookForm from "./Modules/AddBookForm";
import AllBooks from "./Modules/AllBooks";
import UpdateBooks from "./Modules/UpdateBooks";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="w-full h-auto overflow-hidden bg-white ">
      <Router>
        <ToastContainer />
        <Navbar />
        <div className="h-full mt-20 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/updateBook" element={<UpdateBooks />} />
            <Route path="/allBooks" element={<AllBooks />} />
            <Route path="/addBook" element={<AddBook />} />
            <Route path="/addBookForm" element={<AddBookForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
