import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleMenu } from "../utils/AppSLice";
import { HAMBURGER_LOGO_URL, YOUTUBE_LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     getSearchsuggestions();
  //   }, 300);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchQuery]);

  // async function getSearchsuggestions() {
  //   const data = await fetch(
  //     CORS_HEROKU_PROXY +
  //       "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
  //       searchQuery
  //   );
  //   // const json = await data.json();
  //   console.log(await data.json());
  // }

  function toggleSidebar() {
    dispatch(toggleMenu());
  }

  return (
    <div className="flex justify-between bg-white z-10 items-center shadow-lg h-16 px-4 fixed top-0 left-0 right-0 ">
      <div className="flex items-center p-2 ">
        <img
          alt="hamburger"
          onClick={() => toggleSidebar()}
          className=" h-10 cursor-pointer"
          src={HAMBURGER_LOGO_URL}
        />
        <a href="/">
          <img alt="icon" className="h-20" src={YOUTUBE_LOGO_URL} />
        </a>
      </div>

      <div className="flex mx-6 items-center">
        <input
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="rounded-l-full border  border-gray-400 p-2 w-96 px-5"
        />
        <button className="rounded-r-full border  border-gray-400 p-2">
          Search
        </button>
      </div>

      <img
        alt="user"
        className="w-10 h-10 items-center rounded-full"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
    </div>
  );
};

export default Header;
