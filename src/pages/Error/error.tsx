import React, { /*useState*/ } from 'react';
import { Wrapper } from './error.styles'

const Error: React.FC = () => {

    return (
        <Wrapper>
            <h3>404: Page not found :(</h3>
        </Wrapper>
    );
}

export default Error;