import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

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
                  <li className="collection-item" key={song.id}>
                    {song.title}
                  </li>
                ))}
              </ul>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default SongList;
