import Loadable from "react-loadable";
import Loading from "./Loading";

export const ChannelPage = Loadable({
  loader: () => import("../Channels/List"),
  loading: Loading
});
export const CommentPage = Loadable({
  loader: () => import("../Comments/List"),
  loading: Loading
});

export const HomePage = Loadable({
  loader: () => import("../Home/List"),
  loading: Loading
});
