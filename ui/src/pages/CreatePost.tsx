import React from "react";
import css from "../styles/createpost.module.css";
import TextEditor from "../components/Global/TextEditor/TextEditor";

const CreatePost: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <TextEditor />
    </div>
  );
};

export default CreatePost;
