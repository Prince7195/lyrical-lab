import React, { Component } from "react";
import { addSongMutation } from "../queries";
import { Mutation } from "react-apollo";
import { Link, hashHistory } from "react-router";
import { fetchSongs } from "../queries";

export class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  onSubmit(event, addSong) {
    event.preventDefault();
    addSong({
      variables: { title: this.state.title },
      refetchQueries: [{ query: fetchSongs }]
    }).then(data => hashHistory.push("/"));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <Mutation mutation={addSongMutation}>
          {(addSong, { data }) => {
            return (
              <form onSubmit={e => this.onSubmit(e, addSong)}>
                <label htmlFor="newSongInput">Song Title:</label>
                <input
                  type="text"
                  id="newSongInput"
                  onChange={e => this.setState({ title: e.target.value })}
                  value={this.state.title}
                  autoComplete="off"
                />
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default SongCreate;
