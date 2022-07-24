import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import InputOption from "./InputOption";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

function Post({ name, desc, msg, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src="https://www.fivesquid.com/pics/t2/1556218087-112144-2-1.png" />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{msg}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="darkblue" />
        <InputOption Icon={ThumbDownAltIcon} title="STFU" color="darkred" />
      </div>
    </div>
  );
}

export default Post;
