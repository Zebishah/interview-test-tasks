import AddBookForm from "./AddBookForm";
import AllBooks from "./AllBooks";
import image1 from "../../Images/dad-hotel-ySF0lj5A4YM-unsplash.jpg";
const AddBook = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-auto pt-16 bg-center bg-cover gap-y-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image1})`,
      }}
    >
      <h1 className="p-4 text-xl text-center text-white bg-green-500 shadow-lg w-max rounded-xl font-radios">
        Add-Books Form
      </h1>
      <AddBookForm />
      <h1 className="px-8 py-4 text-2xl text-center text-white bg-green-500 shadow-lg w-max rounded-xl font-radios">
        All Books
      </h1>
      <AllBooks />
    </div>
  );
};

export default AddBook;
