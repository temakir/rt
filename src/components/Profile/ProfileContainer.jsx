import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileLoader, setUserProfile} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.profileLoader(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}



let mapStateToProps = (state) => {
    return    {
        profile: state.profilePage.profile
    }
}

export default compose (
    connect(mapStateToProps, {setUserProfile, profileLoader}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);