import React from 'react';
import ReactDom from 'react-dom';
import {
    PrimaryButton,
    SecondaryButton,
    TertaryButton
} from './components/Buttons';
import { GlobalStyle } from './utils';

const App = () => (
    <div>
        <div>
            <PrimaryButton modifiers={["small"]}>Join</PrimaryButton>
        </div>
        <div>
            <SecondaryButton modifiers={["large"]}>Reset Password</SecondaryButton>
        </div>
        <div>
            <TertaryButton>Chat Online</TertaryButton>
        </div>
        <GlobalStyle />
    </div>
)
ReactDom.render(<App/>, document.querySelector("#root"));