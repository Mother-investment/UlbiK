import cls from './ProfileCardModal.module.scss'
import { memo, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'
import { Modal } from 'shared/ui/Modal/Modal'
import { ProfileCardInfo } from '../ProfileCardInfo/ProfileCardInfo'
import { Profile } from 'entities/Profile'

interface ProfileCardModalProps {
	className?: string
	data?: Profile
	isOpen: boolean
	onClose: () => void
}

export const ProfileCardModal:React.FC<ProfileCardModalProps> = memo((props) => {
	const { className, isOpen, onClose, data } = props

	return (
		<Suspense fallback={<Loader />}>
			<Modal className={classNames(cls.ProfileCardModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
				<ProfileCardInfo data={data} />
			</Modal>
		</Suspense>
	)
})