import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { addLyricMutation } from "../queries";

export class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  onSubmit(e, addLyricToSong) {
    e.preventDefault();
    const variables = {
      songId: this.props.songId,
      content: this.state.content
    };
    if (this.state.content) {
      addLyricToSong({
        variables
      }).then(() => this.setState({ content: "" }));
    }
  }

  render() {
    return (
      <Mutation mutation={addLyricMutation}>
        {(addLyricToSong, { data }) => {
          return (
            <form onSubmit={e => this.onSubmit(e, addLyricToSong)}>
              <label htmlFor="addLyrics">Add a Lyric</label>
              <input
                id="addLyrics"
                type="text"
                autoComplete="off"
                value={this.state.content}
                onChange={e => this.setState({ content: e.target.value })}
              />
            </form>
          );
        }}
      </Mutation>
    );
  }
}
