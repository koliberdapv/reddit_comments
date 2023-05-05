import { useEffect, useState } from 'react';
import './App.css';
import CommentsList from './CommentsList';
import data from './data.json';
import UserInput from './UserInput';

const { comments, currentUser } = data;

function App() {
	const [commentsList, setCommentsList] = useState([]);

	useEffect(() => {
		setCommentsList(comments);
	}, []);

	return (
		<main className="main">
			<div className="container">
				<CommentsList commentsList={commentsList} />
				<UserInput currentUser={currentUser} />
			</div>
		</main>
	);
}

export default App;
