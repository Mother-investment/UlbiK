import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import cls from './LoginModal.module.scss'

interface LoginModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const LoginModal:React.FC<LoginModalProps> = (props) => {
	const { className, isOpen, onClose } = props

	return (
		<Suspense fallback={<Loader />}>
			<Modal className={classNames(cls.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
				<LoginFormAsync onClose={onClose} />
			</Modal>
		</Suspense>
	)
}