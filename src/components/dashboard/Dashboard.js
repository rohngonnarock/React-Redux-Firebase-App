import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import FileUpload from './FileUplaod'
import firebase from "firebase";


class Dashboard extends Component {
  state = {
    avatarURL: ""
  };
  loadImages = () => {
    firebase
      .storage()
      .ref("images")
      .child('341e8266-682b-4be6-8a8e-8dfd450bdfd5.gif')
      .getDownloadURL()
      .then(url => {
        console.log(`url -- ${url}`)
        debugger;
        this.setState({ avatarURL: url })
      }).catch(err => console.log(`error -- ${err}`))
  }


  render() {
    this.loadImages();
    const { projects, auth, notifications } = this.props;
    console.log(`avatar ${this.props.avatarURL}`)
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
          <div className="col s12 m5 offset-m1">
            <FileUpload></FileUpload>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ])
)(Dashboard)
