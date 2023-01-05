
export { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly'
export { getProfileData } from './model/selectors/getProfileData/getProfileData'
export { getProfileInfoItems } from './model/selectors/getProfileInfoItems/getProfileInfoItems'
export { getProfileError } from './model/selectors/getProfileError/getProfileError'
export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading'
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'
export { profileReducer, profileActions } from './model/slice/profileSlice'
export type { Profile, ProfileSchema } from './model/types/profile'
