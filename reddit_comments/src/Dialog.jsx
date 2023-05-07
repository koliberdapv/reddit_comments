import React, { useEffect } from 'react';

const Dialog = ({ id, commentsList, setCommentsList }) => {
	console.log(setCommentsList);
	const handleDialogCancel = (id) => {
		const dialog = document.querySelector('.root_comment__dialog');
		dialog.close();
	};

	const handleDialogDelete = () => {
		const dialog = document.querySelector('.root_comment__dialog');
		func(commentsList, id);
		dialog.close();
	};

	const func = (commentsList, id) => {
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
