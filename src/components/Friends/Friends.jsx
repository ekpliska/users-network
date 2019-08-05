import React from 'react';
import FriendStyle from './Friends.module.css';

const Friends = (props) => {

    const { friendList } = props;

    let userFriend = friendList.friendList.map((friend, index) => {
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