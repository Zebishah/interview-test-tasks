import { useDispatch, useSelector } from "react-redux";
import { createBook, getBooks } from "../redux/Slices/BooksManageSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddBookForm = () => {
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state.bookDetail);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [description, setDescription] = useState("");

  let submitForm = () => {
    const bookData = {
      title,
      author,
      description,
      no_Of_Pages: parseInt(pages, 10), // convert pages to an integer
    };
    console.log(title, author, description, pages);
    dispatch(createBook(bookData)).then(() => {
      // Dispatch an action to fetch the updated list of books
      dispatch(getBooks());
    });
  };

  useEffect(() => {
    if (book.message) {
      dispatch(getBooks());
      toast.success(book.message);
      setTitle("");
      setAuthor("");
      setDescription("");
      setPages("");
    }
  }, [book]);

  return (
    <form className="flex flex-col h-full gap-y-8 xxl:w-[40%] w-[80%] px-12 pb-12 pt-20 bg-white shadow-lg rounded-xl">
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
        onClick={submitForm}
      >
        Add Notes
      </button>
    </form>
  );
};

export default AddBookForm;
