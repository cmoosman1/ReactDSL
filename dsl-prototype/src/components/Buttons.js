import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `,
    warning: () => `
        background-color: ${props => props.theme.status.warningColor};
        color: ${props => props.theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${props => props.theme.status.warningColorHover};
            outline: 3px solid ${props => props.theme.status.warningColorHover};
        }

        &:active {
            background-color: ${props => props.theme.status.warningColorActive};
        }
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
        background-color: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${props => props.theme.primaryColorHover};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${props => props.theme.primaryColorActive};
        border-color: ${props => props.theme.primaryColorActive};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:disabled {
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textColorInverted};
        cursor: none;
    }
`

export const PrimaryButton = styled(Button) `
    background-color: ${props => props.theme.primaryColor};
    border: none;
    color: #ffffff;
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
export const SecondaryButton = styled(Button) `
    background-color: ${props => props.theme.primaryColor};
    border: none;
    color: #ffffff;
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertaryButton = styled(Button) `
    background-color: none;
    border-size: 2px solid ${props => props.theme.primaryColor};
    color: #000000;
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
