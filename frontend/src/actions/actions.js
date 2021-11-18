import axios from 'axios';
import { GET_USER } from './types';

const BASE_URL = 'http://localhost:9000';

function getUser(username) {
	return {
		type     : GET_USER,
		username
	};
}

export function getUserFromAPI(username, password) {
	return async function(dispatch) {
		const response = await axios({
			method : 'post',
			url    : `${BASE_URL}/users`,
			data   : {
				username : `${username}`,
				password : `${password}`
			}
		});
		console.log(response);
		return dispatch(getUser(response.data, username));
	};
}

export function registerUser(data) {
	console.log(data.username, data.password);
	return async function(dispatch) {
		const response = await axios({
			method : 'post',
			url    : `${BASE_URL}/users`,
			data   : {
				username : data.username,
				password : data.password
			}
		});
		console.log(response);
		return dispatch(getUser(response.data.username));
	};
}

// function getPost(post) {
//     return {
//         // type: GET_POST,
//         post
//     }
// }
// export function getPostFromAPI(id){
//     return async function (dispatch) {
//         const response = await axios.get(`${API_URL}/${id}`)
//         console.log(response.data)
//         return dispatch(getPost(response.data))
//     }
// }
// function addPost(values) {
//     const id = values.id
//     return {
//         // type: CREATE_POST,
//         values,
//         id
//     }
// }
// export function createPostInAPI({title, description, body}){
//     console.log(title)
//     return async function(dispatch){
//         const response = await axios.post(`${API_URL}`, {
//             title,
//             description,
//             body
//         })

//         return dispatch(addPost(response.data))
//     }
// }
// function deletePost(id) {
//     return {
//         // type: DELETE_POST,
//         id
//     }
// }
// export function deletePostFromAPI(id) {
//     return async function(dispatch){
//         await axios.delete(`${API_URL}/${id}`)
//         return dispatch(deletePost(id))
//     }
// }

// function editPost(values){
//     const id = values.id
//     return {
//         // type: EDIT_POST,
//         values,
//         id
//     }
// }
// export function editPostInAPI({id, title, description, body}) {

//     return async function(dispatch){
//         const response = await axios.put(`${API_URL}/${id}`, {
//             title,
//             description,
//             body
//         })

//         return dispatch(editPost(response.data))
//     }
// }

// function addComment(id, comment){
//     return {
//         // type: CREATE_COMMENT,
//         id,
//         comment
//     }
// }
// export function sendCommentToAPI(text, postId){
//     const id = postId
//     return async function(dispatch){
//         const response = await axios.post(`${API_URL}/${postId}/comments`, {text})
//         return dispatch(addComment(id, response.data))
//     }
// }
// function deleteComment(id, commentId){
//     return {
//         // type: DELETE_COMMENT,
//         id,
//         commentId
//     }
// }
// export function removeCommentFromAPI(id, commentId){
//     return async function(dispatch){
//         await axios.delete(`${API_URL}/${id}/comments/${commentId}`)
//         return dispatch(deleteComment(id, commentId))
//     }
// }
