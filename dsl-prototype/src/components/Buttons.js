import styled from 'styled-components';
import { typeScale, defaultTheme } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `
}

const Button = styled.button `
    min-widt: 180px;
    cursor: pointer;
    border-radius: 2px;
    color: #ffffff;
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    fonct-family: "Robot Mono", monospace;
    transition: background-color 0.2s linear, color 0.2s liner;

    &:hover {
        background-color: ${defaultTheme.primaryColorHover};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${defaultTheme.primaryColorHover};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${defaultTheme.primaryColorActive};
        border-color: ${defaultTheme.primaryColorActive};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textColorInverted};
        cursor: none;
    }
`

export const PrimaryButton = styled(Button) `
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: #ffffff;
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
export const SecondaryButton = styled(Button) `
    background-color: ${defaultTheme.secondaryColor};
    border: none;
    color: #ffffff;
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertaryButton = styled(Button) `
    background-color: none;
    border-size: 2px solid ${defaultTheme.primaryColor};
    color: #000000;
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
