import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecommendation } from "../../api/api";
import { useSrollHook } from "../../hook/useScrollHook";

function Recommendations({ media_type, id }) {
  const scrollRef = useSrollHook();
  const [recommend, setRecommend] = useState([]);

  const fetchRecommendation = async () => {
    const recommend = await getRecommendation(media_type, id);
    setRecommend(recommend);
  };

  useEffect(() => {
    fetchRecommendation();
    return () => {
      setRecommend([]);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h3 className="text--white">Recommendations</h3>
      <div className="scroll-container">
        <div className="gridscroll" ref={scrollRef}>
          {recommend.length > 0 ? (
            recommend &&
            recommend.map((reco) => {
              return (
                <div className="recommendation" key={reco.id}>
                  <Link
                    className="card--link"
                    to={`/details/${media_type}/${id}`}
                  >
                    <img
                      src={
                        reco.backdrop_path
                          ? `https://image.tmdb.org/t/p/w300${reco.backdrop_path}`
                          : "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg"
                      }
                      alt=""
                    />
                    <p className="original__title">{reco.title}</p>
                  </Link>
                </div>
              );
            })
          ) : (
            <p className="text--white">
              We don't have enough data to suggest any movies based on. You can
              help by rating movies you've seen.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Recommendations;
