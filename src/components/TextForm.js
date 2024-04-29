import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        let newText=" ";
        setText(newText)
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    // text="new text"; //worng way to change the state
    // setText("new text"); //correct way to change the state 
    

  return (
    <>
    <div className='container'>
    <h1 className={`text-${props.mode==="light"?"dark":"light"}`} htmlFor="myBox">{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" style={{
        background: props.mode === "light"?"white":"grey"}} value={text} onChange={handleonchange} id="mybox" rows="3"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button> 
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Reset</button>

    </div>

    <div className="container my-3">
        <h1 className={`text-${props.mode==="light"?"dark":"light"}`}>Your text summary</h1>
        <p className={`text-${props.mode==="light"?"dark":"light"}`}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
        <p className={`text-${props.mode==="light"?"dark":"light"}`}>{0.008 * text.split(" ").length} minutes reads</p>
        <h2 className={`text-${props.mode==="light"?"dark":"light"}`}>Preview</h2>
        <p className={`text-${props.mode==="light"?"dark":"light"}`}>{text}</p>


    </div>
    </>
  )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
