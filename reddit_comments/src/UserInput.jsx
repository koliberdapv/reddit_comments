import { useState } from 'react';

const UserInput = ({ currentUser }) => {
	const [text, setText] = useState('');
	const { image, username } = currentUser;
	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(text);
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
				<input
					type="text"
					name="user-input"
					id="user-input"
					placeholder="add a comment"
					value={text}
					onChange={handleChange}
					className="user_input_text"
				/>
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
