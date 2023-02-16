import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSLice";

const Header = () => {
  const dispatch = useDispatch();
  function toggleSidebar() {
    dispatch(toggleMenu());
  }
  return (
    <div className="flex justify-between shadow-lg h-16 ">
      <div className="flex items-center p-2 ">
        <img
          alt="hamburger"
          onClick={() => toggleSidebar()}
          className=" h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9AQEAoKCj09PQ9PT0vLy8sLCw6OjpUVFTd3d3Jycl4eHg1NTUpKSn5+fk4ODgiIiJcXFydnZ1+fn7Pz8/t7e3k5OS5ubmIiIhwcHDg4OBLS0tFRUWSkpKurq5iYmK5pxemAAACUElEQVR4nO3dCXKrMBBFUQkL4UHMGOyM+99l7Pyqv4Pul5B7dnALyg7tRgkBAAAAAAAAAAAAAAAAAABArzt46zzzlrlU/sq8OPVdx7aJCk07Xj0CT6K+f40n+8Brm2SBMabW/iqOuiv41IzWgUsrDYyxtf64mbWX8HERZ+PCIg6MsdgGdpU6MFa2X/2HH1B4oJBCCtUopJBCCn994f7/agtJ+fz7lJJtYLj14sL+Zlx4Ut+mlfmk5q69iP3dOjB0vXQS1TsMhq+N7jm/JJeBaTcPRXEdUxmsZzT/rdNYcu0rl3FavQIBAAAAAMBudOvJ2+q5frmNVfZXjZtT3ynWmpFpqqPDamII50E3Ek7D2T7wZZD1PQ0v5oWv2p/X0qt14DlLA2PM1vfpRb59eTEurMWBMda2gfv/HX//uxgUUkghhRRSSOFfKAw/oNA2MLzJty/fjAvf5duX78aFq3aIEeNgvhh1076fV6wXaB9elU/5jfmY5qE76p7z66PP4Huq6ib5a+pqcul76LZ5PHob58314AgAAAAAALAL63L2tji+QdpNfev8juxT209Og5pzVg2Fi/nK17cP5Vx/+LAPXMTbl/antDbi7Uvro03Cpl7dq62Xve/y7Uvroz/UC7QxZttAti89Ctk2oZBCdSCFFFJI4e8v/APbl+KX8xxez5vUB+sX672oq3z70vxcwUn7kF87rLZ9Ku/T8mkfGMI9qz5tUrY/vfTblnJp/JWcvI4cCGGZ5ou3efL6h1YAAAAAAAAAAAAAAAAAAAAAAAD79gWaO1Pdj84d6wAAAABJRU5ErkJggg=="
        />
        <a>
          <img
            alt="icon"
            className="h-20"
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
          />
        </a>
      </div>

      <div className="flex mx-6 items-center">
        <input
          type="text"
          className="rounded-l-full border  border-gray-400 p-2 w-96"
        />
        <button className="rounded-r-full border  border-gray-400 p-2">
          Search
        </button>
      </div>

      <div className="flex items-center p-4">
        <img
          alt="user"
          className="w-10 h-10"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
      </div>
    </div>
  );
};

export default Header;
