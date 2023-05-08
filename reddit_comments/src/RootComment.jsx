import Dialog from './Dialog';
import Reply from './Reply';
import { useEffect, useState } from 'react';
import reply_svg from '../images/icon-reply.svg';
import delete_svg from '../images/icon-delete.svg';

const RootComment = ({
	comment,
	currentUser,
	commentsList,
	setCommentsList,
}) => {
	const [rating, setRating] = useState(0);
	const { score, user, createdAt, id } = comment;

	useEffect(() => {
		setRating(score);
	}, []);

	const handleIncrease = () => {
		if (rating === score || rating === score - 1) setRating(rating + 1);
	};

	const handleDecrease = () => {
		if (rating === 0) return;
		if (rating === score || rating === score + 1) setRating(rating - 1);
	};

	const handleReply = () => {
		console.log(`Comment to reply to id ${id}`);
	};

	const handleDelete = () => {
		const dialog = document.querySelector('.root_comment__dialog');
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
							onClick={handleIncrease}
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
							onClick={handleDecrease}
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
								<p className="you">you</p>
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
									<Dialog
										id={id}
										commentsList={commentsList}
										setCommentsList={setCommentsList}
									/>
								</>
							)}

							<button
								type="submit"
								className="reply_btn | flex"
								onClick={() => handleReply(id)}
							>
								<img src={reply_svg} />
								reply
							</button>
						</div>
						<p className="comment_content">{comment.content}</p>
					</div>
				</div>
			</article>
			{comment.replies.length > 0 && (
				<div className="replies_list | grid">
					<div className="divider"></div>
					<div className="replies_container | grid">
						{comment.replies.map((reply) => {
							return (
								<Reply
									reply={reply}
									key={reply.id}
									parentId={id}
									currentUser={currentUser}
									commentsList={commentsList}
									setCommentsList={setCommentsList}
								/>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};
export default RootComment;
