import 'app/styles/index.scss'
import {Decorator, StoryContext, StoryFn} from "@storybook/react";

export const StyleDecorator: Decorator = (Story: StoryFn, context: StoryContext) => Story(context.args, context)
