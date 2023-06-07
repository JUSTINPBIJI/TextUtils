        import React from 'react'

        export default function About(props) {
        
    let myStyle={
        color: props.mode==='dark'? 'white':'black',
        backgroundColor : props.mode==='dark'? " #212529":'white'
    }
        
        return (
            <div className="container" style={myStyle}>
    <h1 className='container my-3'>About Us</h1>
    <p className='container'> <strong> TextUtils is an application which helps you to modify your text as you wish.</strong> </p>
            
            </div>
            
                
        )
        }
