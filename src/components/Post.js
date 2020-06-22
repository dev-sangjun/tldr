import React from "react";
import styled from "styled-components";
import { Header, Content } from "./styled";
import PostForm from "./PostForm";
import { getDateString } from "../utils";
import { MdEdit, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setUser, setLoading, openModal } from "../reducers";
import { deletePost, fetch } from "../api";
const Post = props => {
  const { className, post } = props;
  const updatedAt = getDateString(new Date(post.updatedAt));
  const dispatch = useDispatch();
  const onEdit = async () => {
    dispatch(openModal(<PostForm post={post} />));
  };
  const onDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${post.title} post?`)) {
      dispatch(setLoading(true));
      try {
        const res = await deletePost(post._id);
        const res_ = await fetch();
        dispatch(setUser(res_.data));
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
      dispatch(setLoading(false));
    }
  };
  return (
    <div className={className}>
      <div className="top-container">
        <Header className="post-header">{post.title}</Header>
        <MdEdit className="post-icon btn" onClick={onEdit} />
        <MdDelete className="post-icon btn" onClick={onDelete} />
        <span className="date">{updatedAt}</span>
      </div>
      <Content className="post-content">{post.content}</Content>
    </div>
  );
};

export default styled(Post)`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
  padding: 1rem;
  width: 100%;
  .top-container {
    display: flex;
    align-items: center;
    .post-header {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .post-icon {
      position: relative;
      top: -0.125rem;
      margin-right: 0.5rem;
      color: darkgray;
      &:last-child {
        margin-right: 0;
      }
    }
    .date {
      width: 5.5rem;
      color: gray;
      text-align: right;
    }
  }
  .post-content {
    white-space: pre-wrap;
    word-break: break-all;
    padding-left: 0.5rem;
    max-height: 15rem;
    overflow-y: auto;
  }
`;
