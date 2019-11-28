import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchVideo } from "../../redux/actions/index";
import Card from "./Card";

const ChannelList = props => {
  React.useEffect(() => {
    props.fetchVideo();
  }, []);
  return (
    <Fragment>
      <Grid container>
        {props.videos.data.map(single => (
          <Grid key={single} item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card single={single} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};
export default connect(mapStateToProps, { fetchVideo })(ChannelList);
