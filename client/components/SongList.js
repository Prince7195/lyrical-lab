import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router";
import { query } from "../queries";
import { SongListItem } from "./SongListItem";

export class SongList extends Component {
  render() {
    return (
      <div>
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) {
              return <h4>Loading...</h4>;
            }
            if (error) {
              console.log(error);
            }
            return (
              <ul className="collection">
                {data.songs.map(song => (
                  <SongListItem key={song.id} title={song.title} />
                ))}
              </ul>
            );
          }}
        </Query>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default SongList;
