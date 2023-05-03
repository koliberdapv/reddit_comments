import { useState } from 'react';
import './App.css';
import CommentsList from './CommentsList';
import data from './data.json';
import UserInput from './UserInput';

const { comments, currentUser } = data;
console.log(comments);

function App() {
	return (
		<main className="main">
			<div className="container">
				<CommentsList />
				<UserInput currentUser={currentUser} />
			</div>
		</main>
	);
}

export default App;
