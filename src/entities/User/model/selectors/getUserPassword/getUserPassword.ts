import { StateSchema } from 'app/providers/StoreProvider'

export const getUserPassword = (state: StateSchema) => state?.user?.authData?.password || ''