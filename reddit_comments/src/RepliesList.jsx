import React, { useEffect, useState } from 'react';
import RootComment from './RootComment';
const RepliesList = ({ comment, currentUser, children }) => {
	const [repliesList, setRepliesList] = useState([]);
	const newReplyList = children;

	useEffect(() => {
		setRepliesList(newReplyList);
	}, [children]);

	return (
		<div className="replies_list | grid">
			<div className="divider"></div>
			<div className="replies_container | grid ">
				{repliesList.map((reply) => {
					return (
						<RootComment
							key={reply.id}
							comment={reply}
							currentUser={currentUser}
							repliesList={repliesList}
							setRepliesList={setRepliesList}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default RepliesList;
