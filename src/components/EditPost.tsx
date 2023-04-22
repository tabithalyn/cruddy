/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { IPost } from './Post.type';
import './PostForm.style.css';

type Props = {
  data: IPost;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data:IPost) => void;
};

const EditPost = (props:Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [postTitle, setPostTitle] = useState(data.postTitle);
  const [postBody, setPostBody] = useState(data.postBody);
  const [currentMood, setcurrentMood] = useState(data.currentMood);

  const onTitleChange = (e:any) => {
    setPostTitle(e.target.value);
  };
  const onBodyChange = (e:any) => {
    setPostBody(e.target.value);
  };
  const onMoodChange = (e:any) => {
    setcurrentMood(e.target.value);
  };

  const onSubmitBtnClickHnd = (e:any) => {
    e.preventDefault();

    const updatedData:IPost = {
      id: data.id,
      postTitle: postTitle,
      postBody: postBody,
      currentMood: currentMood
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Update Post</h3>
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
          <input type="submit" value="Update Post" />
        </div>
      </form>
    </div>
  );
}

export default EditPost;