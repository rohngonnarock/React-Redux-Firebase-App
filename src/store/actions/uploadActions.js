export const addFile = (file) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('files').add({
            ...file,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'UPLOAD_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'UPLOAD_ERROR' }, err);
        });
    }
};

export const getAllFiles = (file) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('files').add({
            ...file,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'UPLOAD_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'UPLOAD_ERROR' }, err);
        });
    }
};