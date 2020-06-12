import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdAdd, MdDelete } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import { openModal, setUser } from "../reducers";
import { Sidebar, PostForm, Post } from "../components";
import { Header, Button } from "../components/styled";
import { deleteFolder, fetch } from "../api";

const Home = props => {
  const { className } = props;
  const { user } = useSelector(state => state);
  const [index, setIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const onFolderClick = index => setIndex(index);
  const onFolderDelete = async () => {
    if (
      window.confirm(
        `Are you sure you want to delete ${user.folders[index].title} folder?`
      )
    ) {
      const id = user.folders[index]._id;
      setLoading(true);
      try {
        const res = await deleteFolder(id);
        const res_ = await fetch();
        setIndex(-1);
        dispatch(setUser(res_.data));
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
  };
  const onCreatePost = () => {
    dispatch(openModal(<PostForm folder={user.folders[index]._id} />));
  };
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
          <Button className="delete-btn btn" onClick={onFolderDelete}>
            <span>Delete Folder</span>
            <MdDelete size="1.2em" />
          </Button>
        )}
        {index !== -1 && (
          <Button className="add-btn btn" onClick={onCreatePost}>
            <span>New Post</span>
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
  overflow: scroll;
  position: relative;
  .posts-container {
    width: 100%;
    padding: 3rem;
    .top-container {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      .folders-header {
        font-size: 1.8em;
        margin-right: 1rem;
      }
      .delete-btn,
      .add-btn {
        color: white;
        font-size: 1em;
        display: flex;
        align-items: center;
        span {
          margin-right: 0.5rem;
        }
      }
      .delete-btn {
        background-color: #ff4f67;
        margin-right: 0.5rem;
      }
      .add-btn {
        background-color: #227ef0;
      }
    }
    .posts {
      list-style: none;
      li {
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
