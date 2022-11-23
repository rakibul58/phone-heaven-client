import React from 'react';
import { Helmet } from 'react-helmet';

const MyTitle = ({children}) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{children}</title>
            </Helmet>
        </div>
    );
};

export default MyTitle;