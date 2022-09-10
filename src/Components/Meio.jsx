import React from 'react'
import '../Components/Meio.css'
import copoinicio from '../img/Starbucks-Coffee-Transparent-Free-PNG.png'
import copoGrande from '../img/pngegg(2).png'
import copoGrande2 from '../img/pngegg.png'
import copoGrande3 from '../img/pngegg(3).png'
import { useState } from 'react'



const Meio = () => {

  
  const [foto, useFoto] = useState(copoinicio);
  const [style, setStyle] = useState("butao1")

  const MudaFoto1 = () =>{
    useFoto(copoGrande);
  }
   const MudaFoto2 = () =>{
    useFoto(copoGrande2);
  }
  const MudaFoto3 = () =>{
    useFoto(copoGrande3);
  }

  const changeStyle = () => { 
    setStyle("back2");
  }


  return (
    <div className='container_tudo'>
      <section className='container_meio'>
        <h1>It's not just Coffee<br/>It's <span>Starbucks</span></h1>
       
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus dignissimos illo maiores non delectus odio, dolorem perspiciatis, aut voluptatem harum vitae iste modi aliquam! Blanditiis fuga dolorum sapiente veniam officiis.</p>
      <button>Learn More</button> 

      <section className='copo_pequeno'>
      <div>
      <img onClick={MudaFoto1} src={copoGrande} alt=""/>
      <img onClick={MudaFoto2} src={copoGrande2} alt="" />
      <img onClick={MudaFoto3} src={copoGrande3} alt="" />
      </div>
      </section>
      </section>

      
  
      <section className='container_copo'>
      <div className= 'back'>
      <img onClick={changeStyle} src={foto} alt="aa" /> 
  
      </div>
      <div className={style}>
      <button>Buy</button>
      </div>
      </section>
    </div>
  )
}

export default Meio