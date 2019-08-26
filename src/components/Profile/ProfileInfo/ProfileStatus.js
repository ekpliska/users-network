import React from 'react';

class ProfileStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false
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
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <p onDoubleClick={this.editModeOn}>{this.props.status}</p>
                        : <input onBlur={this.editModeOff} type="text" defaultValue={this.props.status} autoFocus={true} />
                }
            </div>
        )
    }
}

export default ProfileStatus;