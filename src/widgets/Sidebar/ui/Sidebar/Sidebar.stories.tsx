import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Sidebar } from './Sidebar'
import { Theme } from 'app/providers/ThemeProvider'

export default {
	title: 'widget/Sidebar',
	component: Sidebar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Dark = Template.bind({})
Dark.args = {}

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]