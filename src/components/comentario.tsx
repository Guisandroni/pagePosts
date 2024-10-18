import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./comentario.module.css";
import { Avatar } from "./avatar";
import { useState } from "react";

interface propsComment{
  content: string,
  deletComent: (comment: string)=> void, 
}


export function Comentario({content,deletComent}:propsComment) {

  const [likeCount, setLikeCount ] = useState(0)

  function handleLikeComment(){
    setLikeCount((state)=>{
      return state + 1
    })

  }

  function handleDeletComent(){
    deletComent(content)
  }

  

  return (
    <div className={styles.comentario}>
        <Avatar   src={"https://github.com/diego3g.png"}/>
      <div className={styles.comentarioContainer}>
        <div className={styles.comentarioBox}>
          <header className={styles.header}>
            <div>
              <strong>Devon Lane</strong>
              <time>Cerca de 1h </time>
            </div>

            <p>{content}</p>
           
          </header>
          <div>
          <button title="Deletar Comentario" className={styles.btnTrash} onClick={handleDeletComent}>
          <Trash size={24} />
          </button>
          </div>
        </div>
        <footer className={styles.footer}>
         <button className={styles.btnLike} onClick={handleLikeComment}>
         <ThumbsUp />
          Aplaudir.
          <span>{likeCount}</span>
         </button>
        </footer>
      </div>
    </div>
  );
}
