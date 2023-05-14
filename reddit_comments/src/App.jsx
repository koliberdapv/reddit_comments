import { useEffect, useState } from 'react';
import './App.css';
import CommentsList from './CommentsList';
import data from './data.json';
import UserInput from './UserInput';

const { comments, currentUser } = data;
if (!localStorage.getItem('comments')) {
	localStorage.setItem('comments', JSON.stringify(data.comments));
	console.log('added to the storage');
}

function App() {
	const [commentsList, setCommentsList] = useState([]);
	const storedComments = JSON.parse(localStorage.getItem('comments'));

	useEffect(() => {
		setCommentsList(storedComments);
	}, []);

	useEffect(() => {
		localStorage.setItem('comments', JSON.stringify(commentsList));
	}, [commentsList]);

	return (
		<main className="main">
			<div className="container">
				<CommentsList
					commentsList={commentsList}
					setCommentsList={setCommentsList}
					currentUser={currentUser}
				/>
				<UserInput
					isRootComment={true}
					currentUser={currentUser}
					commentsList={commentsList}
					setCommentsList={setCommentsList}
				/>
			</div>
		</main>
	);
}

export default App;
