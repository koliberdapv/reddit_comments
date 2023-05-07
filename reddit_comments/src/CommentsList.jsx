import RootComment from './RootComment';

const CommentsList = ({ commentsList, currentUser, setCommentsList }) => {
	return (
		<section className="comments">
			{commentsList.map((comment) => {
				return (
					<RootComment
						comment={comment}
						key={comment.id}
						currentUser={currentUser}
						commentsList={commentsList}
						setCommentsList={setCommentsList}
					/>
				);
			})}
		</section>
	);
};
export default CommentsList;
