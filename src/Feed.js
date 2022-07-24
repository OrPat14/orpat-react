import React, { useEffect, useState } from "react";
import "./Feed.css";
import CommentIcon from "@mui/icons-material/Comment";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function Feed() {
  const [input, setinput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Or Patael",
      desc: "#integrating with firebase!",
      msg: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setinput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CommentIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setinput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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
        {posts.map(({ id, data: { name, desc, msg } }) => (
          <Post key={id} name={name} desc={desc} msg={msg} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
