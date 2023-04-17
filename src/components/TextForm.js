import React,{useState} from 'react'

export default function TextForm(props) {
  const handleupclick=()=>{
    // console.log("uppercase was clicked"+text)
    let newtext=text.toUpperCase()
    setText(newtext)
    props.showalert("converted to Uppercase","success")
  }
  const handlelowclick=()=>{
    // console.log("uppercase was clicked"+text)
    let newtext=text.toLowerCase()
    setText(newtext)
    props.showalert("converted to Lowercase","success")
  }
  const handlecopytext=()=>{
    // console.log("uppercase was clicked"+text)
    let text=document.getElementById("mbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copy to clipbord","success")
  }
  const handleclearclick=()=>{
    // console.log("uppercase was clicked"+text)
    let newtext=""
    setText(newtext)
    props.showalert("Clear text","success")
  }
  // const handleonchange=(event)=>{
  //   // console.log("on change")
  //   setText(event.target.value)
  // }
  const handleonchange=(event)=>{
    setText(event.target.value)
  }
  // const [text,setText] = useState("Enter text here");
  const [text,setText]=useState("Enter text hear");
  // text="new text";//wrong way
  // setText("new text");//right way
  return (
  <>
  <div className="form-group container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <label htmlFor="mbox"></label>
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#cecbd6':'white',color:props.mode==='dark'?'white':'black'}} id="mbox" rows="8"></textarea>
    <button className="btn btn-primary my-1" onClick={handleupclick}>Convert to Uppercase</button>
    <button className="btn btn-primary my-1 mx-1" onClick={handlelowclick}>Convert to Lowercase</button>
    <button className="btn btn-primary my-1" onClick={handleclearclick}>Clear text</button>
    <button className="btn btn-primary my-1 mx-1" onClick={handlecopytext}>Copy Text</button>
  </div>
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charcters</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} time taken to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the text box above "}</p>
  </div>
  </>
  )
}
