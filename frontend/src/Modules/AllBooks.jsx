import image1 from "../../Images/dad-hotel-ySF0lj5A4YM-unsplash.jpg";
import image2 from "../../Images/dad-hotel-WUoztQ3hp9Q-unsplash.jpg";
import UpdateBooks from "./UpdateBooks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooks, getBooks } from "../redux/Slices/BooksManageSlice";
const AllBooks = () => {
  const dispatch = useDispatch();
  const { allBooks, deleteBook } = useSelector((state) => state.bookDetail);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [id, setId] = useState("");
  const handleUpdateClick = (id) => {
    setId(id);
    setIsModalOpen(true); // Open the modal when the "Update" button is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  const handleDeleteClick = (bookId) => {
    // Call the deleteBook action creator with the book ID
    dispatch(deleteBooks(bookId));
    dispatch(getBooks());
  };

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  useEffect(() => {
    if (deleteBook.DeletedBook) {
      dispatch(getBooks());
    }
  }, [deleteBook]);

  useEffect(() => {
    if (allBooks.Books) {
      setBooks(allBooks.Books);
    }
  }, [allBooks]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(getBooks());
    }, 1000); // fetch books every 1 second

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  function formatPublishedDate(published_At) {
    const date = new Date(published_At);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  return (
    <div className="flex flex-col md:flex-row gap-x-6 gap-y-4 md:flex-wrap justify-center items-center w-[90%] mt-28">
      {allBooks.Books &&
        books.map((book, index) => {
          return (
            //
            <div
              className="flex flex-col gap-y-4 p-6 w-[50%] md:w-[27%] bg-white shadow-lg rounded-lg"
              key={index}
            >
              <img
                src={image1}
                alt="..."
                className="object-cover w-full shadow-lg rounded-xl"
              />
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-row justify-between ">
                  <h1 className="text-xl text-green-500 font-radios ">
                    {book.title}
                  </h1>

                  <p className="text-sm font-radios">
                    {" "}
                    {book.no_Of_Pages} pages
                  </p>
                </div>
                <h1 className="px-4 py-2 text-[14px] text-white bg-green-500 rounded-lg font-radios w-max">
                  Author:
                  <span className="ml-1 text-sm text-white font-radios">
                    {book.author}
                  </span>
                </h1>
                <p className="text-sm text-justify font-radios">
                  {book.description}
                </p>
                <h1 className="px-4 py-2 text-[14px] text-white bg-green-500 rounded-lg font-radios w-max">
                  Published At:
                  <span className="ml-1 text-sm text-white font-radios">
                    {formatPublishedDate(book.published_At)}
                  </span>
                </h1>

                <div className="flex flex-row gap-x-3">
                  <button
                    className="px-4 py-2 text-white transition-all duration-300 ease-in-out bg-red-600 rounded-lg hover:bg-red-700"
                    onClick={() => handleDeleteClick(book._id)}
                  >
                    Delete Book
                  </button>
                  <button
                    className="px-4 py-2 text-white transition-all duration-300 ease-in-out bg-green-500 rounded-lg hover:bg-green-700"
                    onClick={() => {
                      handleUpdateClick(book._id);
                    }}
                  >
                    Update Book
                  </button>
                </div>
              </div>
            </div>
          );
        })}

      {isModalOpen && <UpdateBooks onClose={handleCloseModal} id={id} />}
    </div>
  );
};

export default AllBooks;
