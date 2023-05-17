import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const UserInput = ({
	currentUser,
	commentsList,
	setCommentsList,
	setIsUserReplying,
	children,
	setChildren,
	commentContent,
	setCommentContent,
	isRootComment,
	isEditing,
	setIsEditing,
}) => {
	const [text, setText] = useState('');
	const { image, username } = currentUser;

	useEffect(() => {
		if (isEditing) {
			setText(commentContent?.content || '');
		}
	}, []);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.length < 1) return;

		if (isEditing) {
			setCommentContent({ ...commentContent, content: text });
			setIsEditing(false);
			return;
		}

		const newComment = {
			id: nanoid(),
			content: text,
			createdAt: '1 minute ago',
			score: 0,
			replyingTo: commentContent?.user?.username || '',
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
				className={`${
					isEditing
						? 'user_input__form | flex no_padding'
						: 'user_input__form | flex'
				}`}
			>
				{!isEditing && (
					<picture className="user_avatar">
						<img
							src={image.webp}
							alt={username}
						/>
					</picture>
				)}
				<textarea
					autoFocus={!isEditing}
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
					{`${isEditing ? 'update' : ''}`}
					{`${!isEditing && !isRootComment ? 'reply' : ''}`}
					{isRootComment && 'send'}
				</button>
			</form>
		</article>
	);
};
export default UserInput;
