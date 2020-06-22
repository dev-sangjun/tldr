import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import { openModal, setUser, setLoading } from "../reducers";
import { Sidebar, PostForm, Post } from "../components";
import { Header, Button } from "../components/styled";
import { deleteFolder, fetch } from "../api";

const Home = props => {
  const { className } = props;
  const { user } = useSelector(state => state);
  const { loading } = useSelector(state => state);
  const [index, setIndex] = useState(-1);
  const dispatch = useDispatch();
  const onFolderClick = index => setIndex(index);
  const onFolderEdit = async () => {};
  const onFolderDelete = async () => {
    if (
      window.confirm(
        `Are you sure you want to delete ${user.folders[index].title} folder?`
      )
    ) {
      const id = user.folders[index]._id;
      dispatch(setLoading(true));
      try {
        const res = await deleteFolder(id);
        const res_ = await fetch();
        setIndex(-1);
        dispatch(setUser(res_.data));
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
      dispatch(setLoading(false));
    }
  };
  const onCreatePost = () => {
    dispatch(openModal(<PostForm folder={user.folders[index]._id} />));
  };
  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch();
        dispatch(setUser(res.data));
      } catch (e) {
        console.log(e);
      }
    };
    if (!user) init();
  }, [dispatch, user]);
  const renderPost = post => (
    <li key={post._id}>
      <Post className="post" post={post} />
    </li>
  );
  const renderPosts = user && (
    <div className="posts-container">
      <div className="top-container">
        <Header className="folders-header">
          {index === -1 ? "Recent Posts" : user.folders[index].title}
        </Header>
        {index !== -1 && (
          <Button className="edit-btn btn" onClick={onFolderEdit}>
            <MdEdit size="1.2em" />
          </Button>
        )}
        {index !== -1 && (
          <Button className="delete-btn btn" onClick={onFolderDelete}>
            <MdDelete size="1.2em" />
          </Button>
        )}
        {index !== -1 && (
          <Button className="add-btn btn" onClick={onCreatePost}>
            <MdAdd size="1.2em" />
          </Button>
        )}
      </div>
      <ul className="posts">
        {index === -1
          ? user.posts.map(post => renderPost(post))
          : user.folders[index].posts.map(post => renderPost(post))}
      </ul>
    </div>
  );
  return (
    <div className={className}>
      <Sidebar onFolderClick={onFolderClick} />
      {renderPosts}
      {loading && (
        <Overlay>
          <ClipLoader size="3em" color="gray" />
        </Overlay>
      )}
    </div>
  );
};
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0.125rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default styled(Home)`
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  .posts-container {
    width: calc(100% - 14rem);
    overflow-y: auto;
    padding: 3rem;
    .top-container {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      .folders-header {
        font-size: 1.8em;
        margin-right: 1rem;
      }
      .edit-btn,
      .delete-btn,
      .add-btn {
        color: white;
        font-size: 0.8em;
        display: flex;
        align-items: center;
        span {
          margin-right: 0.5rem;
        }
      }
      .edit-btn {
        background-color: #f29f05;
        margin-right: 0.5rem;
      }
      .delete-btn {
        background-color: #f28705;
        margin-right: 0.5rem;
      }
      .add-btn {
        background-color: #185905;
      }
    }
    .posts {
      list-style: none;
      width: 100%;
      padding: 0.5rem;
      li {
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
