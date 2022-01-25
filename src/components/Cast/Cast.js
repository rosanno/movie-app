import React from "react";
import { useSrollHook } from "../../hook/useScrollHook";
import Details from "../details/Details";
import "./cast.css";

function Cast({ moviecast, singleMovie }) {
  const scrollRef = useSrollHook();
  return (
    <>
      <h3 className="text--white">Movie Cast</h3>
      <div className="col--2">
        <div className="scroll-container">
          <div className="gridscroll" ref={scrollRef}>
            {moviecast &&
              moviecast.map((cast) => {
                return (
                  <div className="profile" key={cast.id}>
                    <img
                      src={
                        cast.profile_path
                          ? `https://image.tmdb.org/t/p/w185${cast.profile_path}`
                          : "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
                      }
                      alt=""
                    />
                    <p className="text--black-sm">{cast.original_name}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <Details singleMovie={singleMovie} />
      </div>
      <div className="divider"></div>
    </>
  );
}

export default Cast;
