import React, { Children } from 'react';
const StyledButton =({ children })=>{
    return(
        <>
            <style>
                {
                    `
                    .styled-button{
                        background-color: red;
                        padding: 20px 30px;
                        fontSize: 20px;
                        color: white;
                        border: none;
                        borderRadius: 5px;
                        cursor: pointer;
                        margin-top: 50px;
                        margin-left: 50px;
                        border-radius: 10px
                    }
                    .styled-button:hover{
                        background-color:blue;
                    }
                    `
                }
            </style>
            <button className="styled-button">{children}</button>
        </>
    )
};
export default StyledButton;
