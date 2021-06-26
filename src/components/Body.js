import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataAction } from "../features/slicer/redditSlice";
import Reddits from "./Reddits";
import SubReddits from "./SubReddits";

function Body() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAction("/r/pics/.json"));
  }, [dispatch]);
  return (
    <div className="body">
      <Reddits />
      <SubReddits />
    </div>
  );
}

export default Body;
