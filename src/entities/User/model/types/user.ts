export interface User {
	id: string
	username: string
	password: string
	avatar: string
}

export interface UserSchema {
	authData?: User
	isLoading: boolean
	error?: string
}