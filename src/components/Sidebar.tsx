import { useSelector } from "react-redux";
import { RootState } from "../utils/store";

const Sidebar = () => {
  const isMenuOpen: boolean = useSelector(
    (store: RootState) => store.app.isMenuOpen
  );

  return !isMenuOpen ? null : (
    <div
      className={`fixed mt-16 drop-shadow-lg bg-white  w-52  space-y-4 h-screen p-5 leading-7 ${
        isMenuOpen && "ease-in duration-900"
      }`}
    >
      <div>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>

      <hr className="bg-gray-400" />

      <ul>
        <li>Library</li>
        <li>History </li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Your Clips</li>
      </ul>
      <hr className="bg-gray-400" />
      <div>
        <h1 className="text-2xl font-medium ">Explore Now</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>FIlms</li>
          <li>Live</li>
        </ul>
      </div>
      <hr className="bg-gray-400" />
      <ul>
        <li>Settings</li>
        <li>Report History</li>
        <li>Help</li>
        <li>Send Feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
