import React from 'react';
import NavLink from './NavLink';
import VoteButtons from './VoteButtons';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <VoteButtons votes={props.votes}
          voteArticle={props.voteArticle.bind(null, props.article_id)}
        />
        <NavLink to={`/articles/${props.article_id}`}>
          <div className='media-content'>
            <div className='content'>
              <div>{props.body}</div>
              <h3 className='title is-3'>{props.title}</h3>
            </div>
            {props.comments ? <h4>Comments: {props.comments}</h4> : null}
          </div>
        </NavLink>
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  votes: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  comments: React.PropTypes.number,
  body: React.PropTypes.string,
  voteArticle: React.PropTypes.func.isRequired,
  article_id: React.PropTypes.string.isRequired
};

export default ArticleCard;
