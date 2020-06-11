import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Header } from "../components/styled";
const Sidebar = props => {
  const { className } = props;
  const { user } = useSelector(state => state);
  const onClick = e => {
    const index = e.target.dataset.index;
    const folder = user.folders[index];
    console.log(folder);
  };
  const renderFolders = user && (
    <div className="folders-container">
      <Header className="folders-header">
        Folders ({user.folders.length})
      </Header>
      <ul className="folders-list">
        {user.folders.map((folder, index) => (
          <li
            className="btn"
            key={folder._id}
            onClick={onClick}
            data-index={index}
          >
            {folder.title} ({folder.posts.length})
          </li>
        ))}
      </ul>
    </div>
  );

  return <div className={className}>{renderFolders}</div>;
};

export default styled(Sidebar)`
  background-color: white;
  flex: 1;
  width: 12rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
  padding-top: 1rem;
  padding-left: 1rem;
  .folders-header {
    margin-bottom: 0.5rem;
  }
  .folders-list {
    list-style: none;
    padding-left: 0.5rem;
    li {
      margin-bottom: 0.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
