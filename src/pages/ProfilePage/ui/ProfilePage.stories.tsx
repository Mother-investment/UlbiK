import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StoreDecorator({})]

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]