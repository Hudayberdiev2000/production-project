import 'app/styles/index.scss';
import { Decorator, StoryContext, StoryFn } from "@storybook/react";
import {BrowserRouter} from "react-router-dom";

export const RouterDecorator: Decorator = (Story: StoryFn, context: StoryContext) => (
    <BrowserRouter>
        {Story(context.args, context)}
    </BrowserRouter>
)