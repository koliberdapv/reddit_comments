import RootComment from './RootComment';

const CommentsList = ({ commentsList, currentUser, setCommentsList }) => {
	return (
		<section className="comments">
			{commentsList.map((commentContent) => {
				return (
					<RootComment
						comment={commentContent}
						key={commentContent.id}
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
