import React from 'react';
import UserStyle from './User.module.css';

const User = ({ id, fullName, pathInfo, status, location, follow, followClick, unFollowClick }) => {
	return (
		<div className={UserStyle.userBlockInfo}>
			<div className={UserStyle.userImage}>
				<img src={pathInfo} />
			</div>
			<div className={UserStyle.userInfo}>
				<p>{fullName }</p>
				<p>{status}</p>
				<p>{location.country}, {location.city}</p>
			</div>
			<div className={UserStyle.userFollow}>
				{
					(follow)
						? <button onClick={() => followClick(id)}>Follow</button>
						: <button onClick={() => unFollowClick(id)}>Unfollow</button>
				}
			</div>
		</div>
	)
}

export default User;