import { IPost } from "./Post.type";
import './ReadPost.style.css';

type Props = {
  onClose: () => void;
  data:IPost;
};

const ReadPost = (props:Props) => {
  const { onClose, data } = props;

  return (
    <div id="myPost" className="post">
      <div className="post-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>Blog</h3>
        <div>
          <div>
            <label>Title: {data.postTitle}</label>
          </div>
          <div>
            <label>Body: {data.postBody}</label>
          </div>
          <div>
            <label>Current Mood: {data.currentMood}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadPost;