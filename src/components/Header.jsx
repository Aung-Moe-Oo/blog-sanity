import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between bg-blue-500 text-white px-8 py-4">
        <div className="">
          <Link to={"/"} className="font-bold">
            <h2>Aung Blog</h2>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-3">
            <li className="lg:text-lg">
              <Link to={"/"} className="">
                Home
              </Link>
            </li>
            <li className="lg:text-lg">
              <Link to={"/blog"} className="">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
