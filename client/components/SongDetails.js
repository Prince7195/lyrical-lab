import React, { Component } from "react";
import { getSong } from "../queries";
import { Query } from "react-apollo";
import { Link } from "react-router";
import { LyricCreate } from "./LyricCreate";
import { LyricList } from "./LyricList";

export class SongDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <Query query={getSong} variables={{ id: this.props.params.id }}>
          {({ loading, error, data, refetch }) => {
            if (loading) {
              return <h4>Loading...</h4>;
            }
            if (error) console.log(error);
            console.log(data);
            return (
              <div>
                <h3>{data.song.title}</h3>
                <LyricList lyrics={data.song.lyrics} refetch={refetch} />
                <LyricCreate songId={this.props.params.id} />
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
