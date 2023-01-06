import { memo, ReactNode, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuth, getUserAvatar, userActions } from 'entities/User'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'

interface AuthByUsernameProps {
	className?: string
	onClick: () => void
}

export const AuthByUsername:React.FC<AuthByUsernameProps> = memo((props) => {
	const { className, onClick } = props
	const [isOpenModal, setIsOpenModal] = useState(false)
	const userAuth = useSelector(getUserAuth)
	const userAvatar = useSelector(getUserAvatar)

	const onShowModal = useCallback(() => setIsOpenModal(true), [])
	const onCloseModal = useCallback(() => setIsOpenModal(false), [])



	return (
		<div className={className} onClick={userAuth ? onClick : onShowModal}>
			<Avatar src={userAvatar} size={AvatarSize.L}/>

			{isOpenModal &&
				<Modal isOpen={isOpenModal} onClose={onCloseModal} lazy>
					<LoginFormAsync onClose={onCloseModal} />
				</Modal>
			}
		</div>
	)
})
