import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileLoader, setUserProfile} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";

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

let WithRouterUseProfileContainer = withRouter (ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, profileLoader})(WithRouterUseProfileContainer);