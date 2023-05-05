import RootComment from './RootComment';

const CommentsList = ({ commentsList }) => {
	console.log(commentsList);
	return (
		<section className="comments">
			{commentsList.map((comment) => {
				return (
					<RootComment
						comment={comment}
						key={comment.id}
					/>
				);
			})}
		</section>
	);
};
export default CommentsList;
