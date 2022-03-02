import React from "react";
import "./styles/SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StartRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons--repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons--left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons--star">
        <StartRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons--right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons--lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
