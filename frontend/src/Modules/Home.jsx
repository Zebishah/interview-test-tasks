import { Link } from "react-router-dom";
import image2 from "../../Images/dad-hotel-WUoztQ3hp9Q-unsplash.jpg";
const Home = () => {
  return (
    <div className="flex flex-col -mt-12 gap-y-28">
      <div
        className="flex flex-col justify-center object-cover h-screen bg-center bg-cover "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image2})`,
        }}
      >
        <div className="flex flex-col items-center justify-center gap-y-4 ">
          <h1 className="text-3xl font-bold text-white md:text-5xl xl:text-7xl">
            WELCOME TO BOOKESTRA
          </h1>
          <h1 className="font-sans text-xl font-bold text-white md:text-3xl xl:text-4xl">
            Create Reading Memories together{" "}
          </h1>
          <h1 className="text-lg text-white md:text-2xl font-radios">
            Order your favorite books online
          </h1>
          <div className="flex items-center justify-center gap-x-3">
            <Link to={"/addBook"}>
              <button className="px-5 py-3 text-lg text-white transition-all duration-300 ease-in-out bg-green-500 rounded-full shadow-lg font-radios hover:bg-green-800 ">
                Add Book
              </button>
            </Link>
            <Link to={"/allBooks"}>
              {" "}
              <button className="px-5 py-3 text-lg text-white transition-all duration-300 ease-in-out bg-green-500 rounded-full shadow-lg font-radios hover:bg-green-800 ">
                All Books
              </button>
            </Link>
          </div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
