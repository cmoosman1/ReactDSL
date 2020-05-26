import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { PrimaryButton } from '../components';
import { typeScale } from '../utils';
import { SignupIllustrations, CloseIcon }  from '../assets/illustrations'

const ModalWrapper = styled.div `
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background-color: ${props => props.theme.formElementBackgroundColor};
    color: ${props => props.theme.textOnFormElementBackgroundColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 2px;
`

const SignUpHeader = styled.h3 `
    font-size: ${typeScale.header3}
`

const CloseModalButton = styled.button `
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 40px;
    top: 40px;
    width: 24px;
    height: 24px;
    padding: 0;
`
export const SignUpModal = ({ showModal, setShowModal}) => {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`,
        config: config.slow,
    });

    return (
        <animated.div style={animation}>
            <ModalWrapper>
                <SignUpHeader>
                    Welcome to Signup Modal
                </SignUpHeader>
                <img src={SignupIllustrations.Signup} alt="foo"/>
                <PrimaryButton>
                    Sign Up!
                </PrimaryButton>
                <CloseModalButton>
                    <CloseIcon/>
                </CloseModalButton>
            </ModalWrapper>
        </animated.div>
    )
}