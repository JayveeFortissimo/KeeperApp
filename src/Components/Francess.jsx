import React from 'react'
import Style from './Style.module.css'
import DeleteIcon from '@mui/icons-material/Delete';

const Francess = (props) => {

  return (
   <>


   <div className={Style.CARDSi}>

<dl>

<dt>{props.Alum}</dt>
<dd>{props.Alum2}</dd>

<div className={Style.BTNS}>
 <h4 onClick={()=>{
    props.onChecked(props.id)
 }}>{<DeleteIcon style={{ color:'rgb(255, 196, 54)' }}/>}</h4>
</div>


</dl>


   </div>
   

 
   
   </>
  )
}

export default Francess