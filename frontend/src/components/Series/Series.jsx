import React, { useEffect, useState } from "react";
// import "./TvSeries.css";
import { Link } from "react-router-dom";
import { getSeries } from "../../redux/Slices/tvSeriseslice";
import { useSelector, useDispatch } from "react-redux";
import { addToWatchlist } from "../../redux/Slices/watchlistslice";
export default function Series() {
  const [series, setSeries] = useState([]);
  const [seriesGeners, setSeriesGeners] = useState([]);
  const [seriesGenre, setSeriesGenre] = useState("Drama");

  const genresList = [
    { id: 18, name: "Drama" },
    { id: 10764, name: "Action" },
    { id: 10765, name: "Crime" },
    { id: 10751, name: "Family" },
    { id: 16, name: "Romantic" },
    { id: 10766, name: "Fantasy" },
    { id: 10767, name: "Animation" },
  ];

  function getseriesGenerById(genreId) {
    const filteredSeries = tvSerise.filter((series) =>
      series.genre_ids.includes(parseInt(genreId))
    );
    return filteredSeries;
  }

  const { tvSerise } = useSelector((state) => state.tvSerise);
  const dispatch = useDispatch();
  // console.log(tvSerise);

  const handleAdd = (mov) => {
    dispatch(addToWatchlist(mov));
  };

  useEffect(() => {
    dispatch(getSeries());
    setSeriesGeners(genresList);
    setSeries(getseriesGenerById(18));
    setSeriesGenre("Drama");
  }, [dispatch]);

  function handleSeriesGenresChange(e) {
    const selectedSeriesGenreId = e.target.value;
    const selectedSeriesGenreName =
      e.target.options[e.target.selectedIndex].text;
    setSeries(getseriesGenerById(selectedSeriesGenreId));
    setSeriesGenre(selectedSeriesGenreName);
  }

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-md-12 d-flex my-5">
            <h2 className="mt-5">Discover Tv Showes</h2>
            <select
              className="form-select w-25 mt-5 ms-3"
              aria-label="Default select example"
              onChange={handleSeriesGenresChange}
            >
              {seriesGeners.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
          <h2 className="my-4">{seriesGenre}</h2>
          <hr />
        </div>
        <div className="row g-3">
          {series && series.length > 0 ? (
            series.map((series) => (

              <Link to={`/series/${series._id}`}
              className="card col-md-2 col-sm-8 col-10"> 
                <div  key={series._id}>
                      <i
                        className="fa-solid fa-plus bookmark"
                        onClick={() => handleAdd(series)}
                      ></i>
                      <img src={series.poster_path} alt="" className="" />
                      <h5>{series.title}</h5>
                      <div className="rate">
                        <i className="fa-solid fa-star"></i>
                        <p>{series.vote_average}</p>
                      </div>
                    </div>

              </Link>

            
            ))
          ) : (
            <h5>There Is No Tv Series At this Time</h5>
          )}
        </div>
      </div>
    </div>
  );
}
