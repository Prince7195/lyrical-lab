import React from "react";
import { deleteSongMutation } from "../queries";
import { Mutation } from "react-apollo";

export const SongListItem = ({ onClick, title }) => {
  return (
    <Mutation mutation={deleteSongMutation}>
      {(deleteSong, { data }) => {
        console.log(data);
        return (
          <li className="collection-item">
            {title}
            <i className="material-icons" onClick={() => onClick()}>
              delete
            </i>
          </li>
        );
      }}
    </Mutation>
  );
};
