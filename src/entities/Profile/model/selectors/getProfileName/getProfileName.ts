import { StateSchema } from 'app/providers/StoreProvider'

export const getProfileName = (state: StateSchema) => `${state?.profile?.data?.first} ${state?.profile?.data?.lastname}` || ''