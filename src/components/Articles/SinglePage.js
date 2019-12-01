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

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10,
    marginLeft: "15%",
    marginRight: "35%"
  },
  media: {
    height: 0,
    paddingTop: "40%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  },
  img: {
    height: 400,
    overflow: "hidden",
    display: "block",
    width: "100%"
  }
}));

export default function ArticleSinglePage() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            L
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Lijo John"
        subheader="September 14, 2016"
      />
      <Typography variant="h4">
        "Root leads England with ton on rain-marred day"
      </Typography>
      <img
        className={classes.img}
        src="https://www.cricbuzz.com/a/img/v1/595x396/i1/c183457/root-scored-a-test-century-aft.jpg"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          dafkafdlkjlda
        </Typography>
      </CardContent>
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
