import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = () => {
  const [data, setData] = useState();
  const [filterData, setFilterData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // const [totalResults, setTotalResults] = useState(0);

  // const capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // };

  const fetchData = async () => {
    try {
      const url = "http://universities.hipolabs.com/search";
      setLoading(true);
      let response = await fetch(url);

      let data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>name is written here below</h1>
      <div className="mb-3">
        {/* //<textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea> */}
        <input
          type="text"
          value={text}
          onChange={handleOnChange}
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          style={{ width: "200px" }}
        ></input>
        {/* <button className="btn btn-primary mx-1 my-1">Button</button> */}
      </div>

      <ol>
        {data
          ?.filter((e) => text === e.country || text.length===0)
          ?.map((element) => (
            <li> {element.name}</li>
          ))}
      </ol>
    </>
  );
};
export default News;
