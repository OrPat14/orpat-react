import React from "react";
import "./Feed.css";
import CommentIcon from "@mui/icons-material/Comment";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CommentIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            Icon={AddPhotoAlternateIcon}
            title="Photo"
            color="lightblue"
          />
          <InputOption Icon={AddAPhotoIcon} title="Camera" color="orange" />
          <InputOption
            Icon={AddPhotoAlternateIcon}
            title="Photo"
            color="#ba90ff"
          />
        </div>
      </div>

      <div className="posts">
        <Post
          name="Or Patael"
          desc="This is the description"
          msg="Daaammnnn you own it!!"
        />
      </div>
    </div>
  );
}

export default Feed;
