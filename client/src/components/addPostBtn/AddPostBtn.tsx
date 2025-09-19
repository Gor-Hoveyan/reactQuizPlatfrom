import React from "react";
import styles from "./AddPostBtn.module.scss";
import { NavLink } from "react-router-dom";
import { BsPlus } from "react-icons/bs";

interface IProps {
  postType: "test" | "quiz";
}

export default function AddPostBtn({ postType }: IProps) {
  return (
    <div className={styles.addPost}>
      <NavLink to={`/${postType}/create`} className={styles.link}>
        <BsPlus />
      </NavLink>
    </div>
  );
}
