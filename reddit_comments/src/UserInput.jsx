import { useState } from 'react';

const UserInput = ({ currentUser }) => {
	const [text, setText] = useState('');
	const { image, username } = currentUser;

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.length < 1) return;
		console.log(text);
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
