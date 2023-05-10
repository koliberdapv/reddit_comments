import { useState } from 'react';
import { nanoid } from 'nanoid';

const UserInput = ({
	currentUser,
	commentsList,
	setCommentsList,
	repliesList,
	setRepliesList,
	isReply,
	setIsUserReplying,
	children,
	setChildren,
	comment,
	isRootComment,
}) => {
	const [text, setText] = useState('');
	const { image, username } = currentUser;

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.length < 1) return;
		const newComment = {
			id: nanoid(),
			content: text,
			createdAt: '1 min ago',
			score: 0,
			user: {
				image: {
					png: image.png,
					webp: image.webp,
				},
				username: username,
			},
			replies: [],
		};

		if (!isRootComment) {
			const newCommentsList = [...children, newComment];
			setChildren(newCommentsList);
			setIsUserReplying(false);
		} else {
			const newCommentsList = [...commentsList, newComment];
			setCommentsList(newCommentsList);
		}
		setText('');
	};
	return (
		<article className="user_input">
			<form
				onSubmit={handleSubmit}
				className="user_input__form | flex"
			>
				<picture className="user_avatar">
					<img
						src={image.webp}
						alt={username}
					/>
				</picture>
				<textarea
					autoFocus
					name="user-input"
					id="user-input"
					cols="30"
					rows="10"
					placeholder="Add a comment..."
					value={text}
					onChange={handleChange}
					className="user_input_text"
				></textarea>
				<button
					type="submit"
					className="btn user_input_submit"
				>
					send
				</button>
			</form>
		</article>
	);
};
export default UserInput;
