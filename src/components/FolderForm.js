import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import { Header, TextField, Submit } from "./styled";
import { useDispatch } from "react-redux";
import { closeModal, setUser } from "../reducers";
import { createFolder, fetch, updateFolder } from "../api";
const FolderForm = props => {
  const { className, folder } = props;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const title = useRef();
  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      if (folder) {
        await updateFolder(folder._id, title.current.value);
      } else {
        await createFolder(title.current.value);
      }
      const res = await fetch();
      dispatch(setUser(res.data));
      setLoading(false);
      dispatch(closeModal());
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  useEffect(() => {
    if (folder) {
      title.current.value = folder.title;
    }
  }, [folder]);
  return (
    <div className={className}>
      <Header className="header">New Folder</Header>
      <form className="folder-form" onSubmit={onSubmit}>
        <TextField
          className="text-input"
          name="title"
          placeholder="Title"
          ref={title}
        />
        <Submit className="submit-btn btn">
          {loading ? (
            <ClipLoader size="1em" color="white" />
          ) : folder ? (
            "Complete"
          ) : (
            "Add"
          )}
        </Submit>
      </form>
    </div>
  );
};

export default styled(FolderForm)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header {
    margin-bottom: 1rem;
  }
  .folder-form {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    .text-input {
      width: 100%;
      margin-bottom: 0.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .submit-btn {
      width: 100%;
      color: white;
      background-color: #767676;
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
    }
  }
`;
