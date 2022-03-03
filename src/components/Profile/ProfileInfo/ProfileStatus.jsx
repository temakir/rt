import React from "react";
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState(
            {
                status: e.currentTarget.value
            }
        )
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div className={s.status}>
                    <span onDoubleClick={this.activateMode}>Статус: {this.props.status || "------"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateMode}
                           value={this.state.status}/>
                </div>
                }
            </>
        )
    }
}

export default ProfileStatus;