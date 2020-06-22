import React, { useRef } from "react";
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
  const foldersList = useRef();
  const onClick = e => {
    const index = e.target.dataset.index;
    Array.from(foldersList.current.children).map(list => {
      if (list.dataset.index === index) return list.classList.add("bold");
      else return list.classList.remove("bold");
    });
    onFolderClick(parseInt(index));
  };
  const onAdd = () => {
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
          <Header className="folders-header">My Folders</Header>
          <MdAdd className="add-btn btn" size="1.2em" onClick={onAdd} />
        </div>
      </div>
      <ul className="folders-list" ref={foldersList}>
        {user.folders.map((folder, index) => (
          <li
            className="folder-title btn"
            key={folder._id}
            onClick={onClick}
            data-index={index}
          >
            {folder.title}
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
  height: 100%;
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
      .folder-title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 0.5rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
