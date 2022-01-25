import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Showcase from "../showcase/Showcase";
import "./header.css";
import { getAllMovies } from "../../api/api";
import Footer from "../Footer/Footer";

function Header() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);
    const moviesData = await getAllMovies(page);
    setData((prev) => [...prev, ...moviesData]);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const BG = {
    background: `url(https://image.tmdb.org/t/p/w1280${
      data[0] && data[0].backdrop_path
    }) no-repeat center center / cover`,
  };

  return (
    <>
      <header className="header" style={BG}>
        {data[0] && (
          <div className="contain">
            <Navbar />
            <div className="col--2">
              <div className="poster">
                <img
                  src={`https://image.tmdb.org/t/p/w300${
                    data[0] && data[0].poster_path
                  }`}
                  alt=""
                />
              </div>
              <div className="movie_details">
                <div className="text--title">
                  {data[0] && data[0].title} (
                  {data[0]
                    ? data[0].release_date.slice(0, 4)
                    : data[0].first_air_date.slice(0, 4)}
                  )
                </div>
                <p className="text--overview">
                  {data[0] && data[0].overview}
                  <Link className="btn-trailer btn--red">Watch trailer</Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
      <Showcase
        data={data}
        setData={setData}
        setPage={setPage}
        loading={loading}
      />
      <Footer />
    </>
  );
}

export default Header;
