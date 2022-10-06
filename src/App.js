import { useEffect, useState, useRef } from 'react'

const App = () => {
  const [inps,setInps]= useState([]);
 
  const refs=useRef([]);

  const addBtn=()=>{
    const id=inps.length>0?inps[inps.length-1].id+1:1;
    const inputs=[...inps,{id,value:""}];
    setInps(inputs);
  }
  const handleChange=(e,id)=>{
   
   const value=e.target.value;
   const inputs=inps.map(each=>each.id===id?{...each,value}:each);
   setInps(inputs);

   
  }

  useEffect(()=>{
   const last=inps.length;
   if(refs.current.length>0) refs.current[last].focus();
   
  },[inps])

  return (
    <div>
      <button onClick={addBtn}>+ (click to add inputs...)</button>

      <ul>
       {inps.length>0 && inps.map((v)=>(
          <li key={v.id}><input ref={(el)=>(refs.current[v.id]=el)} value={v.value} onChange={(e)=>handleChange(e,v.id)}/></li>
        ))}
      </ul>
        {inps.length>0 && JSON.stringify(inps)
        }
    </div>
  )
}

export default App
