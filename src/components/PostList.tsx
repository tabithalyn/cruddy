import { useState } from 'react';
import { IPost } from './Post.type';
import './PostList.style.css';
import ReadPost from './ReadPost';

type Props = {
  list: IPost[];
  onDeleteClickHnd: (data:IPost) => void;
  onEdit: (data:IPost) => void;
};

const PostList = (props:Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showPost, setShowPost] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IPost | null);

  const viewPost = (data:IPost) => {
    setDataToShow(data);
    setShowPost(true);
  };

  const onCloseModal = () => setShowPost(false);

  return (
    <div>
      <article>
        <h3 className="list-header">Post List</h3>
      </article>
      <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
          <th>Current Mood</th>
        </tr>
        </thead>
        <tbody>
        {list.map((post) => {
          return (
            <tr key={post.id}>
              <td>{`${post.postTitle} ${post.postBody}`}</td>
              <td>{post.currentMood}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewPost(post)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => onEdit(post)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(post)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
      {showPost && dataToShow !== null && (
        <ReadPost onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  )
}

export default PostList;