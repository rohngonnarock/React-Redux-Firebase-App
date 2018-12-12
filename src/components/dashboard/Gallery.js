import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Gallery extends Component {

    render() {
        const { files } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    {files && files.map(file => {
                        return (
                            <div className="col s3">
                                <img className="materialboxed" src={file.avatarURL} width="inherit" key={file.id}></img>
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        files: state.firestore.ordered.files
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'files' }
    ])
)(Gallery)
