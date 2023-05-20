import React from 'react';

const Heading = (props) => {

    return (
        <h1 className={`text-center border-bottom py-2 text-light-primary`}>
            {props.heading}
        </h1>
    );
};

export default Heading;