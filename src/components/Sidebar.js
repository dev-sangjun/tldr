import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import { openModal } from "../reducers";
import { FolderForm } from "../components";
import { Header } from "../components/styled";

const Sidebar = props => {
  const { className, onFolderClick } = props;
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();
  const onClick = e => {
    const index = e.target.dataset.index;
    onFolderClick(parseInt(index));
  };
  const onAdd = e => {
    dispatch(openModal(<FolderForm />));
  };
  const renderFolders = user && (
    <div className="folders-container">
      <div className="top-container">
        <Header
          className="recent-posts-header btn"
          onClick={onClick}
          data-index="-1"
        >
          Recent Posts
        </Header>
        <div className="folders-header-container">
          <Header className="folders-header">
            Folders ({user.folders.length})
          </Header>
          <MdAdd className="add-btn btn" size="1.2em" onClick={onAdd} />
        </div>
      </div>
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
  width: 14rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
  padding: 1rem;
  .folders-container {
    .top-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.5rem;
      .recent-posts-header {
        margin-bottom: 0.5rem;
      }
      .folders-header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .folders-header {
        }
        .add-btn {
          position: relative;
          top: -0.125rem;
        }
      }
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
  }
`;
