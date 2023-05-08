import React, { useEffect } from 'react';

const Dialog = ({
	id,
	commentsList,
	setCommentsList,
	isReply = 'false',
	parentId,
}) => {
	const handleDialogCancel = (id) => {
		const dialog = document.querySelector('.root_comment__dialog');
		dialog.close();
	};

	const handleDialogDelete = () => {
		const dialog = document.querySelector('.root_comment__dialog');
		if (isReply) {
			console.log('deleting a reply');
			deleteReply(commentsList, parentId, id);
			dialog.close();
			return;
		}
		deleteRootComment(commentsList, id);
		dialog.close();
	};

	const deleteReply = (commentsList, parentId, id) => {
		const parentComment = commentsList.filter(
			(comment) => comment.id === parentId
		);
		console.log(parentComment);
		const currentComment = parentComment[0].replies.filter(
			(comment) => comment.id === id
		);

		currentComment[0].content = 'fuck me';
		console.log(currentComment);
		console.log(parentComment[0].replies.indexOf(currentComment[0]));
	};

	const deleteRootComment = (commentsList, id) => {
		const newList = commentsList.filter((comment) => comment.id !== id);
		setCommentsList(newList);
	};

	return (
		<dialog className="root_comment__dialog">
			<div className="dialog_container | flex">
				<h2 className="dialog_header">Delete comment</h2>
				<p
					className="dialog_text"
					autoFocus
				>
					Are you sure you want to delete this comment? This will remove the
					comment and can't be undone.
				</p>
				<div className="dialog_btn_container | flex">
					<button
						type="button"
						className="btn cancel"
						formMethod="dialog"
						onClick={() => {
							handleDialogCancel(id);
						}}
					>
						No, cancel
					</button>
					<button
						type="button"
						className="btn delete"
						onClick={() => {
							handleDialogDelete();
						}}
					>
						Yes, delete
					</button>
				</div>
			</div>
		</dialog>
	);
};

export default Dialog;
