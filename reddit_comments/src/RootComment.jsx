import { useEffect, useState } from 'react';
import RepliesList from './RepliesList';
import Dialog from './Dialog';
import reply_svg from '../images/icon-reply.svg';
import delete_svg from '../images/icon-delete.svg';
import edit_svg from '../images/icon-edit.svg';
import UserInput from './UserInput';

const RootComment = ({
	comment,
	currentUser,
	commentsList,
	setCommentsList,
	repliesList,
	setRepliesList,
}) => {
	const [rating, setRating] = useState(0);
	const [isReply, setIsReply] = useState(false);
	const [isUserReplying, setIsUserReplying] = useState(false);
	const [commentContent, setCommentContent] = useState(comment);
	const [children, setChildren] = useState(commentContent?.replies || []);
	const [isEditing, setIsEditing] = useState(false);
	const { score, user, createdAt, id, replyingTo, content } = commentContent;

	useEffect(() => {
		setRating(score);
	}, []);

	useEffect(() => {
		if (!commentsList?.includes(commentContent)) {
			setIsReply(true);
		}
	}, []);

	const handleRatingChange = (action) => {
		if (action === 'increase') {
			if (rating === score || rating === score - 1) setRating(rating + 1);
		}
		if (action === 'decrease') {
			if (rating === 0) return;
			if (rating === score || rating === score + 1) setRating(rating - 1);
		}
	};

	const handleEdit = (id) => {
		setIsEditing(!isEditing);
	};

	const handleDelete = () => {
		const dialog = document.getElementById(id);
		dialog.showModal();
	};

	return (
		<>
			<article className="root_comment | flex">
				<div className="root_comment__container | flex">
					<div className="rating">
						<button
							type="button"
							className="increase_btn"
							onClick={() => handleRatingChange('increase')}
						>
							<svg
								width="11"
								height="11"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
							</svg>
						</button>
						<p className="score">{rating}</p>
						<button
							type="button"
							className="decrease_btn"
							onClick={() => handleRatingChange('decrease')}
						>
							<svg
								width="11"
								height="3"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
							</svg>
						</button>
					</div>
					<div className="root_comment__content | flex">
						<div className="user_info | flex">
							<div className="user_avatar_comment">
								<img
									src={user.image.webp}
									alt={user.username}
								/>
							</div>
							<p className="username">{user.username}</p>
							{currentUser.username === user.username && (
								<span className="you">you</span>
							)}
							<p className="timestamp">{createdAt}</p>
							{currentUser.username === user.username && (
								<>
									<button
										type="button"
										className="delete_btn | flex"
										onClick={() => handleDelete(id)}
									>
										<img src={delete_svg} />
										delete
									</button>
									<button
										type="button"
										className="edit_btn | flex"
										onClick={() => handleEdit(id)}
									>
										<img src={edit_svg} />
										edit
									</button>
									<Dialog
										commentContent={commentContent}
										commentsList={commentsList}
										setCommentsList={setCommentsList}
										repliesList={repliesList}
										setRepliesList={setRepliesList}
										isReply={isReply}
									/>
								</>
							)}
							{currentUser.username != user.username && (
								<button
									type="button"
									className="reply_btn | flex"
									onClick={() => setIsUserReplying(!isUserReplying)}
								>
									<img src={reply_svg} />
									reply
								</button>
							)}
						</div>
						{isEditing && (
							<UserInput
								isEditing={isEditing}
								setIsEditing={setIsEditing}
								id={id}
								currentUser={currentUser}
								commentsList={commentsList}
								setCommentsList={setCommentsList}
								repliesList={repliesList}
								setRepliesList={setRepliesList}
								isReply={isReply}
								setIsUserReplying={setIsUserReplying}
								children={children}
								setChildren={setChildren}
								commentContent={commentContent}
								setCommentContent={setCommentContent}
								isRootComment={false}
							/>
						)}
						{!isEditing && (
							<p className="comment_content">
								<span className="tag">
									{`${(commentContent?.replyingTo && '@') || ''}${
										commentContent?.replyingTo || ''
									}`}
								</span>
								<span>{commentContent.content}</span>
							</p>
						)}
					</div>
				</div>
			</article>
			{isUserReplying && (
				<UserInput
					currentUser={currentUser}
					commentsList={commentsList}
					setCommentsList={setCommentsList}
					repliesList={repliesList}
					setRepliesList={setRepliesList}
					isReply={isReply}
					setIsUserReplying={setIsUserReplying}
					children={children}
					setChildren={setChildren}
					commentContent={commentContent}
					isRootComment={false}
				/>
			)}
			{children?.length != 0 && (
				<RepliesList
					commentContent={commentContent}
					currentUser={currentUser}
					children={children}
				/>
			)}
		</>
	);
};
export default RootComment;
