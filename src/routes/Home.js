import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { MdAdd } from "react-icons/md";
import { Sidebar } from "../components";
import { Header } from "../components/styled";

const Home = props => {
  const { className } = props;
  const { user } = useSelector(state => state);
  const [index, setIndex] = useState(-1);
  const onFolderClick = index => setIndex(index);
  const renderPosts = user && (
    <div className="posts-container">
      <div className="top-container">
        <Header className="folders-header">
          {index === -1 ? "Recent Posts" : user.folders[index].title}
        </Header>
        <MdAdd className="add-btn btn" size="1.2em" />
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
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
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
