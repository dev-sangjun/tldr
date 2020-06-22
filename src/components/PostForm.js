import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import { Header, TextField, TextArea, Submit } from "./styled";
import { useDispatch } from "react-redux";
import { closeModal, setUser } from "../reducers";
import { createPost, fetch, updatePost } from "../api";

const PostForm = props => {
  const { className, folder, post } = props;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const title = useRef();
  const content = useRef();
  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      if (post) {
        await updatePost(post._id, title.current.value, content.current.value);
      } else {
        await createPost(folder, title.current.value, content.current.value);
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
    if (post) {
      title.current.value = post.title;
      content.current.value = post.content;
    }
  }, [post]);
  return (
    <div className={className}>
      <Header className="header">{post ? "Edit Post" : "New Post"}</Header>
      <form className="post-form" onSubmit={onSubmit}>
        <TextField
          className="text-input"
          name="title"
          placeholder="Title"
          ref={title}
        />
        <TextArea className="text-area" placeholder="Content" ref={content} />
        <Submit className="submit-btn btn">
          {loading ? (
            <ClipLoader size="1em" color="white" />
          ) : post ? (
            "Complete"
          ) : (
            "Add"
          )}
        </Submit>
      </form>
    </div>
  );
};

export default styled(PostForm)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header {
    margin-bottom: 1rem;
  }
  .post-form {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    .text-input,
    .text-area {
      width: 100%;
      margin-bottom: 0.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .text-area {
      height: 20rem;
      font-family: sans-serif;
    }
    .submit-btn {
      width: 100%;
      color: white;
      background-color: #767676;
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
    }
  }
`;
