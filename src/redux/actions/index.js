import { FETCH_VIDEOS } from "./typeof";
import axios from "axios";

export const fetchVideo = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(res);
  dispatch({ type: FETCH_VIDEOS, payload: res.data });
};
