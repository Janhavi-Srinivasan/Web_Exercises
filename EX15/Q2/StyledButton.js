import React, { Children } from 'react';
const StyledButton =({ children })=>{
    const buttonStyle={
        backgroundColor: 'blue',
        padding: '10px 20px',
        fontSize: '16px',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '50px',
        marginLeft: '50px'
    };
    return <button style={buttonStyle}>{children}</button>
};
export default StyledButton;
