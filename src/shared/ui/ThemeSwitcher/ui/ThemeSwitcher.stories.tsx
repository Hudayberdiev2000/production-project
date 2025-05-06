import {Meta, StoryObj} from '@storybook/react';

import {ThemeSwitcher} from './ThemeSwitcher'
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof ThemeSwitcher> = {
    title: "shared/ThemeSwitcher",
    component: ThemeSwitcher,
};
export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Ligth: Story = {

};

export const Dark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

