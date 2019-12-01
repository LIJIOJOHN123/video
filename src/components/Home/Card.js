import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: "59%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  },
  link: {
    textDecoration: "none"
  }
}));

export default function RecipeReviewCard({ single }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link to={`/articles/${single}`} className={classes.link}>
        <CardMedia
          className={classes.media}
          image="https://c.ndtvimg.com/2019-11/aft8dk0o_virat-kohli_625x300_16_November_19.jpg?output-quality=70&output-format=webp&downsize=555"
          title="Paella dish"
        />
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            "dalfadlkadlka dalkdfaj fdalk dfajlkdf akdfjla klfdajfdalj fdakl
            adlfkj alfkjda flkdajflkdajlkfda"
          </Typography>
        </CardContent>
      </Link>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
