
export interface Profile {
	id: number
	first: string
	lastname: string
	age: string
	country: string
	city: string
	username: string
	avatar?: string
}

export interface ProfileSchema {
	data?: Profile
	isLoading: boolean
	error?: string
	readonly: boolean
}

export interface ProfileInfoItemType {
    Text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}
