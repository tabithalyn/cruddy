import { useState } from 'react';
import { IPost } from './Post.type';
import './PostForm.style.css';

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data:IPost) => void;
}

const AddPost = (props:Props) => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [currentMood, setCurrentMood] = useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onTitleChange = (e:any) => {
    setPostTitle(e.target.value);
  };
  const onBodyChange = (e:any) => {
    setPostBody(e.target.value);
  };
  const onMoodChange = (e:any) => {
    setCurrentMood(e.target.value);
  };

  const onSubmitBtnClickHnd = (e:any) => {
    e.preventDefault();

    const data:IPost = {
      id: new Date().toJSON().toString(),
      postTitle: postTitle,
      postBody: postBody,
      currentMood: currentMood
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>New Post</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={postTitle}
            onChange={onTitleChange}
          />
        </div>
        <div>
          <label>Body: </label>
          <input type="text" value={postBody} onChange={onBodyChange} />
        </div>
        <div>
          <label>Current Mood: </label>
          <input type="text" value={currentMood} onChange={onMoodChange} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Add Post" />
        </div>
      </form>
    </div>
  );
}

export default AddPost;