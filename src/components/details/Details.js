import React from "react";

function Details({ singleMovie }) {
  return (
    <>
      <div className="movie--details">
        {singleMovie && (
          <ul className="details">
            <li>
              <p className="text--white--normal">Original Title</p>
              <p>{singleMovie.original_title}</p>
            </li>
            <li>
              <p className="text--white--normal">Status</p>
              {singleMovie.status}
            </li>
            <li>
              <p className="text--white--normal">Original Language</p>
              <p>{singleMovie.original_language}</p>
            </li>
            <li>
              <p className="text--white--normal">Budget</p>
              <p>
                ${singleMovie.revenue && singleMovie.budget.toLocaleString()}
              </p>
            </li>
            <li>
              <p className="text--white--normal">Revenue</p>
              <p>
                ${singleMovie.revenue && singleMovie.revenue.toLocaleString()}
              </p>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Details;
