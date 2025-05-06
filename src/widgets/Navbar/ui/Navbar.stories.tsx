import {Meta, StoryObj} from '@storybook/react';

import {Navbar} from "widgets/Navbar";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Navbar> = {
    title: "widget/Navbar",
    component: Navbar,
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {

};

export const Clear: Story = {
    decorators: ThemeDecorator(Theme.DARK)

};

