import React, { Component } from "react";
import { getSong } from "../queries";
import { Query } from "react-apollo";
import { Link } from "react-router";

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
            return <h3>{data.song.title}</h3>;
          }}
        </Query>
      </div>
    );
  }
}
