import { classNames, Modal } from 'shared'
import { LoginForm } from '../LoginForm/LoginForm'
import cls from './LoginModal.module.scss'

interface LoginModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const LoginModal:React.FC<LoginModalProps> = (props) => {
	const { className, isOpen, onClose, ...otherProps } = props

	return (
		<Modal className={classNames(cls.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose}>
			<LoginForm onClose={onClose} />
		</Modal>
	)
}