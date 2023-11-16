import React from 'react'
import Style from './Style.module.css'
import Francess from './Francess'
import { useState } from 'react'
import Zoom from '@mui/material/Zoom';          


const Main = () => {

  const [error,seterror] = useState('')

  const [pro,setPro] = useState({
    Title:"",
    Note:""
})

const [objects,setobjects] = useState([])

const Handle = (e) =>
{
      e.preventDefault();
      const {name,value} = e.target;
  setPro(pre =>{

    return{
        ...pre,
        [name]:value,
       
    }


  })

    }


    const result = (e) =>{
e.preventDefault();

if(pro.Title === "" && pro.Note === ""){
  seterror('Please complete the form')
}else{
  setobjects([...objects, pro])

  setPro({
    Title:"",
      Note:""
  })

  seterror('')
}


    }

    const deletes = (id) =>{

        setobjects((pre)=>{
            return pre.filter((inso,index)=>{
                  return index !== id;
            })
                 
            
        })


    }


  return (
    <>

    <nav>
  <h1>Keeper</h1>
    </nav>

    <div className={Style.Infos}>


<div className={Style.Parent}>

  {error? <h4 style={{ color:'red' }}>{error}</h4>: null}

    <form onSubmit={result}>

<div>
<input type="text" name="Title"placeholder='Title' value={pro.Title} onChange={Handle} />
</div>

<div>
<input type="text"  name="Note"  placeholder='Take a note' value={pro.Note}  onChange={Handle}/>
</div>


<div id={Style.btn}>
    <button type='submit'>+</button>
</div>


    </form>

</div>


</div>




<div className={Style.secret}>

{objects.map((inso,index)=> <Francess  key={index} id={index} Alum={inso.Title} Alum2={inso.Note} onChecked={deletes}/>)}

</div>



    

    
    </>
  )
}

export default Main