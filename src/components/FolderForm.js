import React, { useState } from "react";
import styled from "styled-components";
import { Header, TextField, Submit } from "./styled";
const FolderForm = props => {
  const { className } = props;
  const [loading, setLoading] = useState(false);
  return (
    <div className={className}>
      <Header>New Folder</Header>
      <form className="folder-form">
        <TextField name="title" placeholder="Title" />
        <Submit>Add</Submit>
      </form>
    </div>
  );
};

export default styled(FolderForm)``;
