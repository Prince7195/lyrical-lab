import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { likeLyricMutation } from "../queries";

export class LyricList extends Component {
  onLike(likeLyric, lyricId, likes) {
    likeLyric({
      variables: { id: lyricId },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id: lyricId,
          __typename: "LyricType",
          likes: likes + 1
        }
      }
    }).then(() => {
      this.props.refetch();
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.props.lyrics.map(lyric => {
          return (
            <Mutation key={lyric.id} mutation={likeLyricMutation}>
              {(likeLyric, { data }) => {
                return (
                  <LyricListItem
                    content={lyric.content}
                    onClick={() =>
                      this.onLike(likeLyric, lyric.id, lyric.likes)
                    }
                    likes={lyric.likes}
                  />
                );
              }}
            </Mutation>
          );
        })}
      </ul>
    );
  }
}

const LyricListItem = ({ onClick, content, likes }) => {
  return (
    <li className="collection-item">
      {content}
      <div className="vote-box">
        <i onClick={() => onClick()} className="material-icons">
          thumb_up
        </i>
        {likes}
      </div>
    </li>
  );
};
