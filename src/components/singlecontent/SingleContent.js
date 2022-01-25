import React from "react";
import Truncate from "react-truncate";
import { useTimeHook } from "../../hook/useTimeHook";

function SingleContent({ singleMovie, credits }) {
  const time = useTimeHook(singleMovie && singleMovie.runtime);
  // const text = useTruncateHook(singleMovie && singleMovie.overview, 300);

  return (
    <>
      {singleMovie && (
        <div className="col--2">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w300${singleMovie.poster_path}`}
              alt=""
            />
          </div>
          <div className="movie_details">
            <div className="text--title">
              {singleMovie.original_title
                ? singleMovie.original_title
                : singleMovie.name}{" "}
              (
              {singleMovie.release_date
                ? singleMovie.release_date.slice(0, 4)
                : singleMovie.first_air_date.slice(0, 4)}
              )
            </div>
            <div className="cols--3">
              <div
                className={
                  singleMovie.vote_average > 6 ? "primary" : "secondary"
                }
              >
                <div className="vote">{singleMovie.vote_average}</div>
              </div>
              <div className="genres">
                {singleMovie.genres.map((genre) => {
                  return (
                    <div className="text--normal" key={genre.id}>
                      {genre.name},
                    </div>
                  );
                })}
              </div>
              <div className="runtime text--normal">{time}</div>
            </div>
            <h2 className="text--white">Overview</h2>
            <p className="text--overview">
              <Truncate
                lines={2}
                ellipsis={<span className="read--more">...</span>}
              >
                {singleMovie.overview}
              </Truncate>
            </p>
            <div className="flex--3">
              {credits.crew && // eslint-disable-next-line
                credits.crew.map((crews) => {
                  if (
                    (crews.known_for_department === "Directing" &&
                      crews.job === "Director") ||
                    (crews.known_for_department === "Writing" &&
                      crews.job === "Screenplay") ||
                    crews.job === "Writer" ||
                    crews.job === "Story"
                  ) {
                    return (
                      <div className="crew" key={crews.id}>
                        {crews.name}
                        <p className="job__title">{crews.job}</p>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleContent;
