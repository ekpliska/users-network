import React from 'react';
import UserStyle from './User.module.css';
import notPhoto from '../../assets/image/user_1.jpg';
import {NavLink} from 'react-router-dom';

const User = ({ id, name, photos, status, followed, followClick, unFollowClick }) => {
	return (
		<div className={UserStyle.userBlockInfo}>
			<div className={UserStyle.userImage}>
				<NavLink to={`/profile/${id}`}>
                	<img src={photos.small ? photos.small : notPhoto} alt="" />
				</NavLink>
			</div>
			<div className={UserStyle.userInfo}>
				<p>{name}</p>
                <p>{status ? status : 'Не определен'}</p>
			</div>
			<div className={UserStyle.userFollow}>
				{
                    (followed)
						? <button onClick={() => unFollowClick(id)} className={UserStyle.btn_follow}>Follow</button>
						: <button onClick={() => followClick(id)} className={UserStyle.btn_unfollow}>Unfollow</button>
				}
			</div>
		</div>
	)
}

export default User;