import React,{useState} from 'react'

export default function App(){


  const [cor,setCor]=useState(1)

  const vermelho= {color:'#f00'}
  const verde= {color:'#0f0'}
  const azul= {color:'#00f'}

  const retCor=(c)=>{
    if(c==1){
      return vermelho

    }else if(c==2){
      return verde
    }else{
      return azul
    }

  }

  const Mudacor =()=>{
    
    setCor(cor+1)
    if(cor>2){
    setCor(1)
    }

  }

  const [log,setLog]=useState(false)
  


  const msglogin=()=>{
    return 'Usuário Logado'
  }

  const msglogoff=()=>{
    return 'Favor Logar'
  }

  const cumprimento=()=>{
    const hora= new Date().getHours()

    if(hora>=0 && hora<13){
    return <p>Bom dia</p>

     }else if(hora>=13 && hora<18){
      return <p>Boa tarde</p>
     }else{
      return <p>Boa noite</p>
     }

  }

  
   setInterval(Mudacor,1000)

  return(
    <>
    {cumprimento()}
    <p>{log?msglogin():msglogoff()}</p>
    <button onClick={()=>setLog(!log)}>{log?'Logoff':'Login'}</button>

    <h1 style={retCor(cor)}>Teste</h1>
    <button onClick={()=>Mudacor()}>Muda Cor</button>

    </>

  )
}