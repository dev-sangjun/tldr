import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdAdd, MdDelete } from "react-icons/md";
import { openModal } from "../reducers";
import { Sidebar, PostForm } from "../components";
import { Header } from "../components/styled";

const Home = props => {
  const { className } = props;
  const { user } = useSelector(state => state);
  const [index, setIndex] = useState(-1);
  const dispatch = useDispatch();
  const onFolderClick = index => setIndex(index);
  const onCreatePost = () => {
    dispatch(openModal(<PostForm folder={user.folders[index]._id} />));
  };
  const renderPosts = user && (
    <div className="posts-container">
      <div className="top-container">
        <Header className="folders-header">
          {index === -1 ? "Recent Posts" : user.folders[index].title}
        </Header>
        {index !== -1 && <MdDelete className="delete-btn btn" size="1.2em" />}
        {index !== -1 && (
          <MdAdd className="add-btn btn" size="1.2em" onClick={onCreatePost} />
        )}
      </div>
      <ul className="posts">
        {index === -1
          ? user.posts.map(post => <li key={post._id}>{post.title}</li>)
          : user.folders[index].posts.map(post => (
              <li key={post._id}>{post.title}</li>
            ))}
      </ul>
    </div>
  );
  return (
    <div className={className}>
      <Sidebar onFolderClick={onFolderClick} />
      {renderPosts}
    </div>
  );
};

export default styled(Home)`
  flex: 1;
  display: flex;
  overflow: hidden;
  .posts-container {
    width: 100%;
    padding: 1rem;
    .top-container {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      .delete-btn {
        position: relative;
        top: -0.125rem;
      }
      .add-btn {
        position: relative;
        top: -0.125rem;
      }
    }
    .posts {
      list-style: none;
    }
  }
`;
