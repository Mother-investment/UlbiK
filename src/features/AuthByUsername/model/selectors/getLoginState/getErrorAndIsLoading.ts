import { StateSchema } from 'app/providers/StoreProvider'

export const getErrorAndIsLoading = (state: StateSchema) => {return { isLoading: state.loginForm.isLoading, error: state.loginForm.error }}