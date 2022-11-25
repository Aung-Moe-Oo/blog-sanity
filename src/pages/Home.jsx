import React from "react";
import { Link } from "react-router-dom";
import bg from "../img/bg.mp4";

const Home = () => {
  return (
    <div className="relative flex justify-center home__wrapper">
      <video autoPlay muted loop className="bg__video">
        <source src={bg} type="video/mp4" />
      </video>
      <section className="hero__text z-10 text-blue-500 flex flex-col items-center justify-center text-center">
        <h1 className="uppercase font-bold drop-shadow-lg text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl">
          Popular News
        </h1>
        <button>
          <Link
            to={"/blog"}
            className="py-2 px-6 rounded shadow text-white bg-black uppercase hover:bg-transparent hover:text-black border-2 border-black transition-all duration-500"
          >
            Read posts
          </Link>
        </button>
      </section>
    </div>
  );
};

export default Home;
