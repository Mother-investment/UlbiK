export interface User {
	id: string
	username: string
	password: string
}

export interface UserSchema {
	authData?: User
}