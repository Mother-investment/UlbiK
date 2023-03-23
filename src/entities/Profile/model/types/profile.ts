
export interface Profile {
	id: number
	firstName: string
	lastName: string
	dayBirth: string
	monthBirth: string
	yearBirth: string
	country: string
	city: string
	username: string
	avatar?: string
}

export interface ProfileSchema {
	data?: Profile
	form?: Profile
	isLoading: boolean
	error?: string
	readonly: boolean
}

export interface ProfileInfoItemType {
    Text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}
