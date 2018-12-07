import React from "react";
import { deleteSongMutation } from "../queries";
import { Mutation } from "react-apollo";
import { Link } from "react-router";

export const SongListItem = ({ songId, onClick, title }) => {
  return (
    <li className="collection-item">
      <Link to={`/songs/${songId}`}>{title}</Link>
      <i className="material-icons" onClick={() => onClick()}>
        delete
      </i>
    </li>
  );
};
