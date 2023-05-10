import React, { useEffect, useState } from 'react';

const Dialog = ({
	comment,
	repliesList,
	setRepliesList,
	commentsList,
	setCommentsList,
	isReply,
}) => {
	const { id } = comment;

	const handleDialogCancel = () => {
		const dialog = document.getElementById(id);
		dialog.close();
	};

	const handleDialogDelete = () => {
		const dialog = document.getElementById(id);
		if (isReply) {
			deleteReply(repliesList, id);
			dialog.close();
			return;
		} else {
			deleteRootComment(commentsList, id);
			dialog.close();
		}
	};

	const deleteRootComment = (commentsList, id) => {
		const newCommentsList = commentsList.filter((comment) => comment.id != id);
		setCommentsList(newCommentsList);
	};

	const deleteReply = (repliesList, id) => {
		const newReplyList = repliesList.filter((reply) => reply.id != id);
		setRepliesList(newReplyList);
	};

	return (
		<dialog
			className="root_comment__dialog"
			id={id}
		>
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
						onClick={handleDialogCancel}
					>
						No, cancel
					</button>
					<button
						type="button"
						className="btn delete"
						onClick={handleDialogDelete}
					>
						Yes, delete
					</button>
				</div>
			</div>
		</dialog>
	);
};

export default Dialog;
