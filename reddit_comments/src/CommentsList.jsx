import RootComment from './RootComment';

const CommentsList = ({ commentsList, currentUser }) => {
	return (
		<section className="comments">
			{commentsList.map((comment) => {
				return (
					<RootComment
						comment={comment}
						key={comment.id}
						currentUser={currentUser}
					/>
				);
			})}
		</section>
	);
};
export default CommentsList;
