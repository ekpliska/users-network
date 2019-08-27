import React from 'react';

class ProfileStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            localStatus: this.props.status
        }
        this.editModeOn = this.editModeOn.bind(this);
        this.editModeOff = this.editModeOff.bind(this);
    }

    editModeOn() {
        this.setState({
            editMode: true,
        });
    }

    editModeOff() {
        this.setState({
            editMode: false
        });
        this.props.onUpdateStatus(this.state.localStatus);
    }

    onStatusChange = (e) => {
        const value = e.currentTarget.value;
        this.setState({
            localStatus: value
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <p onDoubleClick={this.editModeOn}>{this.state.localStatus || 'Установить статус'}</p>
                        : <input onBlur={this.editModeOff} onChange={this.onStatusChange} type="text" defaultValue={this.state.localStatus} autoFocus={true} />
                }
            </div>
        )
    }
}

export default ProfileStatus;