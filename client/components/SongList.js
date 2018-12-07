import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { Link } from "react-router";
import { query, deleteSongMutation } from "../queries";
import { SongListItem } from "./SongListItem";

export class SongList extends Component {
  onDeleteSong(deleteSong, data, id, refetch) {
    deleteSong({ variables: { id } }).then(() => refetch());
  }

  render() {
    return (
      <div>
        <Query query={query}>
          {({ loading, error, data, refetch }) => {
            if (loading) {
              return <h4>Loading...</h4>;
            }
            if (error) {
              console.log(error);
            }
            return (
              <ul className="collection">
                {data.songs.map(song => (
                  <Mutation mutation={deleteSongMutation}>
                    {deleteSong => {
                      return (
                        <SongListItem
                          key={song.id}
                          onClick={() => {
                            this.onDeleteSong(
                              deleteSong,
                              data,
                              song.id,
                              refetch
                            );
                          }}
                          title={song.title}
                        />
                      );
                    }}
                  </Mutation>
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
