/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import AddPost from './AddPost';
import EditPost from './EditPost';
import { IPost, PageEnum } from './Post.type';
import PostList from './PostList';
import './Home.style.css';

const Home = () => {
  const [postList, setPostList] = useState([] as IPost[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IPost);

  useEffect(() => {
    const listInString = window.localStorage.getItem('postList');
    if (listInString) {
      _setPostList(JSON.parse(listInString));
    }
  }, []);

  const onAddPostClickHnd = () => {
    setShownPage(PageEnum.add);
  };
  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setPostList = (list:IPost[]) => {
    setPostList(list);
    window.localStorage.setItem('postList', JSON.stringify(list));
  };

  const addPost = (data:IPost) => {
    _setPostList([...postList, data]);
  };
  const deletePost = (data:IPost) => {
    const indexToDelete = postList.indexOf(data);
    const tempList = [...postList];

    tempList.splice(indexToDelete, 1);
    _setPostList(tempList);
  };
  const editPostData = (data:IPost) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };
  const updateData = (data:IPost) => {
    const filteredData = postList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = postList.indexOf(filteredData);
    const tempData = [...postList];
    tempData[indexOfRecord] = data;
    _setPostList(tempData);
  };

  return(
    <>
    <article className="article-header">
      <header>
        <h1>React: Simple CRUD Application</h1>
      </header>
    </article>

    <section className="section-content">
      {shownPage === PageEnum.list && (
        <>
          <input
            type="button"
            value="Add post"
            onClick={onAddPostClickHnd}
            className="add-post-btn"
          />
          <PostList
            list={postList}
            onDeleteClickHnd={deletePost}
            onEdit={editPostData}
          />
        </>
      )}

      {shownPage === PageEnum.add && (
        <AddPost
          onBackBtnClickHnd={showListPage}
          onSubmitClickHnd={addPost}
        />
      )}

      {shownPage === PageEnum.edit && (
        <EditPost
          data={dataToEdit}
          onBackBtnClickHnd={showListPage}
          onUpdateClickHnd={updateData}
        />
      )}
    </section>
  </>
  );
};

export default Home;