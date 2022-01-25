import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import "./showcase.css";

function Showcase({ data, setPage, loading, setData }) {
  const handlePage = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);

    scroll();
  };

  function scroll() {
    const footer = document.querySelector(".footer");

    const options = {};

    const loadObserver = new IntersectionObserver(function (
      entries,
      loadObserver
    ) {
      entries.forEach((entry) => {
        if (!footer.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
    },
    options);

    loadObserver.observe(footer);
  }

  useEffect(() => {
    return () => {
      setData([]);
      setPage([]);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <section className="showcase">
      <div className="contain">
        <h1 className="text--white" style={{ marginLeft: "30px" }}>
          Weekly Movies
        </h1>
        <div className="showcase-content">
          {data.map((da) => {
            return (
              <Link
                className="card--link"
                to={`/details/${da.media_type}/${da.id}`}
                key={da.id}
              >
                <div className="showcase--card">
                  <img
                    src={
                      da.poster_path
                        ? `https://image.tmdb.org/t/p/w300/${da.poster_path}`
                        : "https://www.movienewz.com/img/films/poster-holder.jpg"
                    }
                    alt=""
                  />
                  <p className="text--white">{da.title ? da.title : da.name}</p>
                </div>
              </Link>
            );
          })}
          <div className="loader">
            {loading && <PropagateLoader color="#D0021B" loading />}
          </div>
        </div>
        <div className="showcase-bottom">
          <div className="divider"></div>
          <div className="show-more">
            <Link className="show-btn btn--red" onClick={handlePage}>
              Show more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
