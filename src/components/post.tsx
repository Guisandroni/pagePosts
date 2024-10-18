import styles from "./post.module.css";
import {Comentario} from './comentario'
import {format, formatDistanceToNow} from 'date-fns'
import { Avatar } from "./avatar";
import { ChangeEvent, FormEvent, useState } from "react";
import { ptBR } from "date-fns/locale";
//usando o date-fns para formatação de data

interface Author{

  name: string;
  role: string;
  avatarUrl: string;
}

interface propsPost{
  author:Author;
  publishDate:Date;
  content:Content[];
}

interface Content{
  type: 'link' | 'paragraph'
  content: string,
}

export function Post({author,publishDate,content} : propsPost) {


const publishDateFormat = format(publishDate,"dd 'de' LLLL 'há' HH:mm 'h",{
  locale: ptBR,
})

  const publishDateBefore = formatDistanceToNow(publishDate,{
    locale: ptBR,
  })


  const timeDatePublish =  publishDate.toISOString()


  const [comentarios, setComentarios] = useState([
    'Muito bom, que legal!'
  ]) 

  const [CreatenewComentarioText, setCreatenewComentarioText] = useState('')


  function handleNewComentario(event : ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('')

    setCreatenewComentarioText(event.target.value)
    //passa a função, ao ser chamada no click form, reflete o valor
    
   
  }

  function handleCreateNewComentario(event : FormEvent){
    event.preventDefault()
    // const newComentario = event.target.txtComentario.value
    setComentarios([...comentarios,CreatenewComentarioText])
    setCreatenewComentarioText('')
  }

  function deletComent(deletComent: string){
    // console.log(`Deletar Comentario ${comentarios}`)
    const comentarioHandleDelet = comentarios.filter(comentarios=>{
      return comentarios != deletComent

    }) //imutabilidade
     setComentarios(comentarioHandleDelet);
  }



  function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>){
    console.log(event)
    event.target.setCustomValidity('Este campo é obrigatório')
  }



  return (
    
    <article>
      <header  className={styles.header}>
        <div className={styles.perfil} >
          <Avatar hasBorder src={author.avatarUrl}/>

          <div className={styles.perfilNome}>

            <strong >{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishDateFormat} dateTime={timeDatePublish}  >
        {publishDateBefore}                           
          </time>
      </header>

      <div className={styles.contentPerfil}>
        {/* <p>Fala galera</p>
        <p>Acabei de subir mais um projeto....</p>
        <p><a>jane.design/doctorpepe</a></p>
        <p>
          <a href="">#NovoProjeto</a>
          <a href="">#NovoProjeto</a>
          <a href="">#NovoProjeto</a>
        </p> */}

        {content.map(line =>{
          if (line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>;
          } else if ( line.type === 'link'){
            return <p key={line.content}><a>{line.content}</a></p>
          }
        })}
        
       
      </div>
      <form onSubmit={handleCreateNewComentario} className={styles.form} >
        <strong>Deixe seu Feedback</strong>
        <textarea
         name="txtComentario"
         onChange={handleNewComentario} 
         value={CreatenewComentarioText}
         placeholder='Deixe um comentário'
         onInvalid={handleNewCommentInvalid}
         required= {true}
         >
          
        </textarea>

        <footer>
          <button 
          className={styles.btnPublic}
           type="submit"
           disabled={CreatenewComentarioText.length===0}
           >Publicar
           </button>
        </footer>
      </form>

      
    <div>
    {comentarios.map(comentario =>{
        return (
        <Comentario key={comentario} 
          content={comentario} 
          deletComent={deletComent}
          />)
      })}
    </div>
     
    </article>
  );
}
