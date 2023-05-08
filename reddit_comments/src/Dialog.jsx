import React, { useEffect } from 'react';

const Dialog = ({ comment, commentsList, setCommentsList }) => {
	const { id } = comment;

	const handleDialogCancel = () => {
		const dialog = document.getElementById(id);
		console.log(dialog);
		dialog.close();
	};

	const handleDialogDelete = () => {
		const dialog = document.getElementById(id);
		deleteRootComment(commentsList, id);
		console.log(id);
		dialog.close();
	};

	const deleteRootComment = (commentsList, id) => {
		const newList = commentsList.filter((comment) => comment.id !== id);
		setCommentsList(newList);
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
