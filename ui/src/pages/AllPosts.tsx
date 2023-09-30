import React from "react";
import Table from "react-bootstrap/Table";
import css from "../styles/allposts.module.css";

const AllPosts: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.pageHeadContainer}>
        <div className={css.headlineContainer}>
          <h1 className={css.headline}>Posts</h1>
          <button className={css.newPostBtn}>New Post</button>
        </div>
      </div>

      <div className={css.tableContainer}>
        <Table striped bordered hover>
          <thead>
            <tr className={css.tableRow}>
              <th className={css.checkBoxColumn}>#</th>
              <th className={css.titleColumn}>Title</th>
              <th className={css.authorColumn}>Author</th>
              <th className={css.categoryColumn}>Categories</th>
              <th className={css.dateColumn}>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css.tableRow}>
              <td className={css.checkBoxColumn}>#</td>
              <td className={css.titleColumn}>
                This is a very interesting node.js topic
              </td>
              <td className={css.authorColumn}>Michael Braun</td>
              <td className={css.categoryColumn}>Node.js, C++</td>
              <td className={css.dateColumn}>09-30-2023 08:02am</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllPosts;
