import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { getCredits, getSingleMovie } from "../../api/api";
import Cast from "../Cast/Cast";
import Navbar from "../Navbar/Navbar";
import Recommendations from "../Recommendation/Recommendations";
import SingleContent from "../singlecontent/SingleContent";
import "./landing.css";

function Landing() {
  const params = useParams();
  const id = params.id;
  const media_type = params.media_type;

  const [singleMovie, setSingleMovie] = useState();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSingleMovie = async () => {
    setLoading(true);
    const singleMovie = await getSingleMovie(media_type, id);
    setSingleMovie(singleMovie);
    setLoading(false);
  };

  const fetchCredits = async () => {
    setLoading(true);
    const res = await getCredits(media_type, id);
    setCredits(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchSingleMovie();
    fetchCredits();
    return () => {
      setSingleMovie([]);
      setCredits([]);
    };
    // eslint-disable-next-line
  }, []);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {loading ? (
        <div className="loading">
          {loading && <RingLoader color="#EE3046" loading />}
        </div>
      ) : (
        <div
          className="landing"
          style={{
            background: `url(https://image.tmdb.org/t/p/w1280${
              singleMovie && singleMovie.backdrop_path
            }) no-repeat center center / cover`,
          }}
        >
          <div className="contain">
            <Navbar />
            <SingleContent
              singleMovie={singleMovie}
              media_type={media_type}
              id={id}
              credits={credits}
            />
          </div>
        </div>
      )}
      <div className="contain">
        <Cast moviecast={credits.cast} singleMovie={singleMovie} />
        <Recommendations media_type={media_type} id={id} />
      </div>
    </>
  );
}

export default Landing;
