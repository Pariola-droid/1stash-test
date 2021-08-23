const app_url = 'http://127.0.0.1:3000/#/'
// const app_url = 'http://1stash.netlify.app/#/'

export const url = {

	// landingpage
	base: app_url,
	home: '/',
	//onboard
	signUp: '/onboard/admin/add-user',
    signIn: '/onboard/sign-in',
    aEntry: '/onboard/admin-entry',
    //
	
	//1:dashboard home
	dashHome: '/dashboard/user/home',
	adminHome: '/dashboard/admin/home',
}

const remote_url = 'https://onestashapi.herokuaoo.com/API/'
// const remote_url = 'http://127.0.0.1:8000/api/v1/'
export const remote = {
	
	signUp: remote_url + 'signup', 
	signIn: remote_url + 'login', 
	adminEntry: remote_url + 'login', 
}
