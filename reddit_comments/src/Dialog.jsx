import React, { useEffect, useState } from 'react';

const Dialog = ({
	comment,
	commentsList,
	setCommentsList,
	setDestinationReplyList,
	destinationReplyList,
}) => {
	const [replyLis, setReplyList] = useState([]);
	const { id } = comment;

	const handleDialogCancel = () => {
		const dialog = document.getElementById(id);
		console.log(dialog);
		dialog.close();
	};

	const handleDialogDelete = () => {
		const dialog = document.getElementById(id);
		deleteRootComment(commentsList, id);
		dialog.close();
	};

	const remove = (comment) => {
		const replyToDelete = comment.replies?.find((reply) => {
			return reply.id === id;
		});
		if (replyToDelete) console.log('there is a reply to delete');
		if (replyToDelete) {
			const index = comment.replies.indexOf(replyToDelete);
			comment.replies.splice(index, 1);
		}
	};

	const deleteRootComment = (commentsList, id) => {
		const itemToRemove = commentsList.find((comment) => comment.id === id);
		commentsList.forEach((comment) => {
			remove(comment);
		});
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
