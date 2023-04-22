/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { IPost } from './Post.type';
import './PostList.style.css';
import ReadPost from './ReadPost';
import { Table, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Table className="table d-flex p-2 align-items-stretch w-100 justify-content-center">
        <tbody>
        {list.map((post) => {
          return (
            <tr key={post.id}>
            <td className="table-dark" scope="col">{post.postTitle}</td>
            <td className="table-light" scope="col">{post.postBody}</td>
            <td className="table-primary" scope="col">Current Mood: {post.currentMood}</td>
              <td>
                <div className="text-center">
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
      </Table>
      {showPost && dataToShow !== null && (
        <ReadPost onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  )
}

export default PostList;