    import React,{useState} from 'react'

    export default function TextForm(props) {
    
        const handleUpClick=()=>{
            let newText= text.toUpperCase()
            setText(newText)
            props.showAlert("Converted To UpperCase!",'success')
        }

        const handleLoClick=()=>{
            let newText= text.toLowerCase()
            setText(newText)
            props.showAlert("Converted To LowerCase!",'success')
        }

        const handleClearText=()=>{
            let newText= ""
            setText(newText)
            props.showAlert("Text Cleared!",'success')
        }

        const handleCopyText=()=>{
            var text= document.getElementById('myBox')
            text.select()
            navigator.clipboard.writeText(text.value)
            props.showAlert("Copied To Clipboard!",'success')
        }

        const handleExtraSpaces=()=>{
            let newText=text.split(/[ ]+/)
            setText(newText.join(" "))
            props.showAlert("Removed Spaces!",'success')
        }
    
        const handleOnChange=(event)=>{
            console.log("onChange");
            setText(event.target.value)
        }
    
        const [text,setText]=useState('')
    
        return (
            <>
            <div className='container'style={{color:props.mode==='light'? 'black':'white'}}>
            <h1 className='mb-4' >{props.heading}</h1>

    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'? 'white':' #212529',color:props.mode==='light'? 'black':'white'}} id="myBox" rows="8"></textarea>
    </div>

    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> Convert To Uppercase</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleLoClick}> Convert To Lowercase</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleClearText}> Clear Text</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleCopyText}> Copy Text</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>


        </div>

        <div className="container my-4" style={{color:props.mode==='light'? 'black':'white'}}>
            <h2>YOUR TEXT SUMMARY</h2>
            <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} WORDS</p>
            <p>{text.length} CHARACTERS</p>
            

        </div>
            </>
    
    )
    }
