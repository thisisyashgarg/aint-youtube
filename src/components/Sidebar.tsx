import { useSelector } from "react-redux";
import { RootState } from "../utils/store";

const Sidebar = () => {
  const isMenuOpen: boolean = useSelector(
    (store: RootState) => store.app.isMenuOpen
  );

  return !isMenuOpen ? null : (
    <div className="shadow-lg w-48 p-5 m-4 space-y-4 h-[85vh]">
      <div>
        <ul>
          <li>Home</li>
          <li>shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>

      <div>
        <h1 className="text-2xl font-medium ">Subscriptions</h1>
        <ul>
          <li>Movies</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>

      <div>
        <h1 className="text-2xl font-medium ">Watch Later</h1>
        <ul>
          <li>Movies</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
