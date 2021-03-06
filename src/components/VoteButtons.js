import React from 'react';

const VoteButtons = (props) => {
	return (
		<div className='media-left'>
			<i onClick={props.voteArticle.bind(null, 'up')} className="fa fa-arrow-circle-up block"/>
			<span>{props.votes}</span>
			<i onClick={props.voteArticle.bind(null, 'down')} className="fa fa-arrow-circle-down block"/>
		</div>
	);
};

VoteButtons.proptypes = {
	voteArticle: React.PropTypes.func.isRequired,
	votes: React.PropTypes.string.isRequired
};

export default VoteButtons;