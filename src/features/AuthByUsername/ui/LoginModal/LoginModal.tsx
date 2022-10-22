/* eslint-disable i18next/no-literal-string */
import { Suspense } from 'react'
import { classNames, Modal } from 'shared'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
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
			<Suspense fallback={'Loading'}>
				<LoginFormAsync onClose={onClose} />
			</Suspense>
		</Modal>
	)
}