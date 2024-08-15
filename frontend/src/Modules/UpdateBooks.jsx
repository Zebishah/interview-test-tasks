import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getBookById, updateBooks } from "../redux/Slices/BooksManageSlice";
import { useNavigate } from "react-router";
const UpdateBooks = ({ onClose, id }) => {
  const dispatch = useDispatch();
  const { updateBook, bookById } = useSelector((state) => state.bookDetail);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [description, setDescription] = useState("");

  let submitForm = (id) => {
    const bookData = {
      title,
      author,
      description,
      no_Of_Pages: parseInt(pages, 10), // convert pages to an integer
    };
    console.log(title, author, description, pages);
    dispatch(updateBooks(id, bookData)).then(() => {
      // Show toast for 3 seconds
      toast.success(updateBook.message, {
        autoClose: 3000,
      });
      // Close modal after toast has been shown
      setTimeout(() => {
        onClose();
      }, 3000);
      // Delay page reload by 3 seconds
      setTimeout(() => {
        navigate(0);
      }, 3000);
    });
  };
  useEffect(() => {
    dispatch(getBookById(id));
  }, [id]);
  useEffect(() => {
    if (bookById.Books) {
      setTitle(bookById.Books.title);
      setAuthor(bookById.Books.author);
      setPages(bookById.Books.no_Of_Pages); // convert pages to a string
      setDescription(bookById.Books.description);
    }
  }, [bookById]);
  useEffect(() => {
    if (updateBook.message) {
      toast.success(updateBook.message);
      setTitle("");
      setAuthor("");
      setDescription("");
      setPages("");
    }
  }, [updateBook]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col gap-y-8 xxl:w-[40%] w-[80%] px-12 pb-12 pt-20 h-auto bg-white shadow-lg rounded-xl">
        <button
          className="absolute text-xl text-gray-500 top-4 right-4"
          onClick={onClose}
        >
          &times; {/* Close button */}
        </button>
        <h1 className="p-4 mx-auto text-xl text-center text-white bg-green-500 shadow-lg w-max rounded-xl font-radios">
          Update-Book Form
        </h1>

        <input
          type="text"
          name="title"
          id="title"
          className="px-4 py-5 text-sm transition-all duration-500 ease-in-out border-2 border-gray-400 outline-none rounded-xl placeholder:text-gray-400 font-radios focus:placeholder:text-green-500 focus:placeholder:-translate-y-4 placeholder:transition-transform placeholder:transition-color placeholder:duration-500 focus:border-green-500"
          placeholder="Add Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          name="author"
          id="author"
          className="px-4 py-5 text-sm transition-all duration-500 ease-in-out border-2 border-gray-400 outline-none rounded-xl placeholder:text-gray-400 font-radios focus:placeholder:text-green-500 focus:placeholder:-translate-y-4 placeholder:transition-transform placeholder:transition-color placeholder:duration-500 focus:border-green-500"
          placeholder="Add Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          name="pages"
          id="pages"
          className="px-4 py-5 text-sm transition-all duration-500 ease-in-out border-2 border-gray-400 outline-none rounded-xl placeholder:text-gray-400 font-radios focus:placeholder:text-green-500 focus:placeholder:-translate-y-4 placeholder:transition-transform placeholder:transition-color placeholder:duration-500 focus:border-green-500"
          placeholder="Add Book Pages"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
        <textarea
          name="description"
          id="description"
          className="h-auto px-4 py-5 text-sm transition-all duration-500 ease-in-out border-2 border-gray-400 outline-none rounded-xl placeholder:text-gray-400 font-radios focus:placeholder:text-green-500 focus:placeholder:-translate-y-4 placeholder:transition-transform placeholder:transition-color placeholder:duration-500 focus:border-green-500"
          placeholder="Add Book description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          type="button"
          className="px-10 py-3 mx-auto text-lg text-white transition-all duration-300 bg-green-500 rounded-lg shadow-lg font-radios w-max hover:bg-green-700"
          onClick={() => {
            submitForm(id);
          }}
        >
          Update Note
        </button>
      </div>
    </div>
  );
};
UpdateBooks.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default UpdateBooks;
