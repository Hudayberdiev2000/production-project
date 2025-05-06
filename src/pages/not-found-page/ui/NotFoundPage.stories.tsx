import {Meta, StoryObj} from '@storybook/react';

import {NotFoundPage} from "pages/not-found-page";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof NotFoundPage> = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
};
export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Ligth: Story = {

};

export const Dark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

