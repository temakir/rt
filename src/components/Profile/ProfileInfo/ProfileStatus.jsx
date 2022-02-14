import React from "react";
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateMode.bind(this)}> {this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateMode.bind(this)} value={this.props.status}/>
                </div>
                }
            </>
        )
    }
}

export default ProfileStatus;