import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {

    let [editMode, changeEditMode] = useState(false);
    let [status, changeUserStatus] = useState(props.status);

    useEffect(() => {
        changeUserStatus(status)
    }, [props.status]);

    const editModeOn = () => {
        changeEditMode(true);
    }

    const editModeOff = () => {
        changeEditMode(false);
        props.onUpdateStatus(status);
    }

    const onStatusChange = (e) => {
        changeUserStatus(e.currentTarget.value);
    }

    return (
        <div>
            {
                !editMode
                    ? <p onDoubleClick={editModeOn}>{status || 'Установить статус'}</p>
                    : <input
                        onBlur={editModeOff}
                        onChange={onStatusChange}
                        type="text"
                        defaultValue={status}
                        autoFocus={true} />
            }
        </div>
    )
}

export default ProfileStatus;