import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../utils/store";

const Sidebar = () => {
  const isMenuOpen: boolean = useSelector(
    (store: RootState) => store.app.isMenuOpen
  );

  return !isMenuOpen ? null : (
    <div className=" border-r-slate-400 w-48 p-5 m-4 space-y-4 h-[85vh]">
      <div>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>

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
