/* eslint-disable i18next/no-literal-string */
import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader, LoaderSize, LoaderType } from 'shared/ui/Loader/Loader'
import { Modal } from 'shared/ui/Modal/Modal'
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
		<Modal className={classNames(cls.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
			<Suspense fallback={<Loader type={LoaderType.WINDOW} size={LoaderSize.XL} />}>
				<LoginFormAsync onClose={onClose} />
			</Suspense>
		</Modal>
	)
}