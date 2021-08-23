import {
	SIGN_UP,
	SIGN_IN,
	ADMIN_IN,
	SET_LOADING,
	AUTH_LOG_ERROR,
	CLEAR_AUTH_DATA,
	BUG_NEW_FEATURE,
	AUTH_PERSONAL_DETAILS,
	AUTH_PROJECTS,
	AUTH_EDUCATIONS,
	AUTH_SKILLS,
	AUTH_SOCIALS,
	CLEAR_MSG,
	CLOSE_ALERT,
	AUTH_WORK,
	AUTH_PROFILE_IMG,
	SET_PROFILE_IMG_FORM,
	AUTH_CUSTOMS,
	DEL_DATA,
	PUBLIC_PDF_DOWNLOAD,
	SET_ALERT_MSG,
} from '../actions/types'
const initialState = {
	userToken: null,
	user: null,
	//
	socials: null,
	projects: null,
	educations: null,
	works: null,
	skills: null,
	customs: null,
	icons: null,
	//
	msg: null,
	//
	//
	profileImgForm: false,
	loading: false,
	error_msg: null,
	success_msg: null,
	alertS: false,
	alertE: false,
	delConfirm: false,
	delData: null,
}
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
	switch (action.type) {
		//
		case PUBLIC_PDF_DOWNLOAD:
			return {
				...state,
			}
		//
		case SET_ALERT_MSG:
			return {
				...state,
				success_msg: action.payload,
				alertS: true,
			}
		case SET_PROFILE_IMG_FORM:
			return {
				...state,
				profileImgForm: action.payload,
			}
		case CLOSE_ALERT:
			return {
				...state,
				alertS: false,
				alertE: false,
				delConfirm: false,
				delData: null,
			}
		case SIGN_UP:
			return {
				...state,
				loading: false,
				error_msg: null,
				success_msg: action.payload.message,
			}
		case CLEAR_MSG:
			return {
				...state,
				loading: false,
				error_msg: null,
				success_msg: null,
				alertS: false,
				alertE: false,
				delConfirm: false,
			}
		case DEL_DATA:
			return {
				...state,
				delConfirm: true,
				delData: action.payload,
			}
		case SIGN_IN:
			return {
				...state,
				userToken: action.payload.data.api_token,
				user: {
					id: action.payload.data.id,
					first_name: action.payload.data.first_name,
					last_name: action.payload.data.last_name,
					email: action.payload.data.email,
				},
				//
				loading: false,
				error_msg: null,
				success_msg: action.payload.message,
			}
		
		case ADMIN_IN:
			return {
				...state,
				userToken: action.payload.data.api_token,
				user: {
					id: action.payload.data.id,
					first_name: action.payload.data.first_name,
					last_name: action.payload.data.last_name,
					email: action.payload.data.email,
				},
				//
				loading: false,
				error_msg: null,
				success_msg: action.payload.message,
			}
		case BUG_NEW_FEATURE:
			return {
				...state,
				loading: false,
				error_msg: null,
				success_msg: action.payload.message,
			}
		case SET_LOADING:
			return {
				...state,
				loading: true,
				success_msg: null,
				error_msg: null,
				alertS: false,
				alertE: false,
				delConfirm: false,
			}
		case AUTH_LOG_ERROR:
			return {
				...state,
				loading: false,
				error_msg: action.payload,
				success_msg: null,
				alertE: true,
				alertS: false,
			}
		case CLEAR_AUTH_DATA:
			return {
				...state,
				userToken: null,
				user: null,
				socials: null,
				projects: null,
				educations: null,
				works: null,
				skills: null,
				icons: null,
				//
				loading: false,
				error_msg: null,
				success_msg: null,
				alertS: false,
				alertE: false,
			}
		case AUTH_PERSONAL_DETAILS:
			return {
				...state,
				user: {
					id: action.payload.data.id,
					tag_name: action.payload.data.tag_name,
					tag_line: action.payload.data.tag_line,
					first_name: action.payload.data.first_name,
					oname: action.payload.data.oname,
					last_name: action.payload.data.last_name,
					state: action.payload.data.state,
					country: action.payload.data.country,
					phone_no: action.payload.data.phone_no,
					blog_url: action.payload.data.blog_url,
					profile_image: action.payload.data.profile_image,
					email: action.payload.data.email,
					user_avatar: action.payload.data.user_avatar,
					username: action.payload.data.username,
					profession: action.payload.data.profession,
					introduction: action.payload.data.introduction,
					published: action.payload.data.published,
					allow_download: action.payload.data.allow_download,
				},
				socials: action.payload.data.socials,
				projects: action.payload.data.projects,
				educations: action.payload.data.educations,
				works: action.payload.data.works,
				skills: action.payload.data.skills,
				customs: action.payload.data.customs,
				icons: action.payload.data.icons,
				loading: false,
				success_msg: action.payload.message,
				error_msg: null,
				alertS: true,
				alertE: false,
				delConfirm: false,
				// msg: action.payload.message,
			}
		case AUTH_PROFILE_IMG:
			return {
				...state,
				user: action.payload.data,
				profileImgForm: false,
				loading: false,
				success_msg: action.payload.message,
				error_msg: null,
				alertS: true,
				alertE: false,
				delConfirm: false,
			}
		case AUTH_WORK:
			return {
				...state,
				works: action.payload.data,
				loading: false,
				error_msg: null,
				success_msg: action.payload.message,
				profileImgForm: false,
				alertS: true,
				alertE: false,
				delConfirm: false,
			}
		case AUTH_PROJECTS:
			return {
				...state,
				projects: action.payload.data,
				loading: false,
				success_msg: action.payload.message,
				error_msg: null,
				alertS: true,
				alertE: false,
				delConfirm: false,
				// msg: action.payload.message,
			}
		case AUTH_SOCIALS:
			return {
				...state,
				socials: action.payload.data,
				loading: false,
				success_msg: action.payload.message,
				error_msg: null,
				alertS: true,
				alertE: false,
				delConfirm: false,
			}
		case AUTH_EDUCATIONS:
			return {
				...state,
				educations: action.payload.data,
				loading: false,
				success_msg: action.payload.message,
				error_msg: null,
				alertS: true,
				alertE: false,
				delConfirm: false,
			}
		case AUTH_SKILLS:
			return {
				...state,
				skills: action.payload.data,
				loading: false,
				success_msg: action.payload.message,
				error_msg: null,
				alertS: true,
				alertE: false,
			}
		case AUTH_CUSTOMS:
			return {
				...state,
				customs: action.payload.data,
				loading: false,
				success_msg: action.payload.message,
				error_msg: null,
				alertS: true,
				alertE: false,
				delConfirm: false,
			}

		default:
			return state
	}
}
