import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  const list = props.comments.map(comment => <li key={comment}>{comment}</li>);

  return (
    <div>
      <ul className="comment-list">{list}</ul>
    </div>
  );
}

function mapsStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapsStateToProps)(CommentList);
