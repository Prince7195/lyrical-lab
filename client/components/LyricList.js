import React, { Component } from "react";

export class LyricList extends Component {
  render() {
    return (
      <ul className="collection">
        {this.props.lyrics.map(lyric => {
          return <LyricListItem key={lyric.id} content={lyric.content} />;
        })}
      </ul>
    );
  }
}

const LyricListItem = props => {
  return (
    <li className="collection-item">
      {props.content}
      <i className="material-icons">thumb_up</i>
    </li>
  );
};
