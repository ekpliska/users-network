import React from 'react';
import FriendStyle from './Friends.module.css';

const Friends = (props) => {

	// debugger;

    let userFriend = props.friendList.friendBlock.friendsWidget.map((friend, index) => {
		return (
			<div key={index}>
				<div className={FriendStyle.friendContent}>
					<span className={FriendStyle.photo}></span>
					{friend.userName}
				</div>
			</div>
		);
	});

	return (
		<div>
			<h1>Friends</h1>
			{userFriend}
		</div>
	);
}

export default Friends;