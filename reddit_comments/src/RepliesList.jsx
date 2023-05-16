import React, { useEffect, useRef, useState } from 'react';
import RootComment from './RootComment';
const RepliesList = ({ comment, currentUser, children, setChildren }) => {
	const [repliesList, setRepliesList] = useState(children);
	const isMounted = useRef(false);

	useEffect(() => {
		setRepliesList(children);
	}, [children]);

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
		setChildren(repliesList);
	}, [repliesList]);
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
