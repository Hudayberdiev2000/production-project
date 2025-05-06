import {Meta, StoryObj} from '@storybook/react';

import {Sidebar} from './Sidebar';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Sidebar> = {
    title: "widget/Sidebar",
    component: Sidebar,
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {

};

export const Clear: Story = {
    decorators: ThemeDecorator(Theme.DARK)

};

