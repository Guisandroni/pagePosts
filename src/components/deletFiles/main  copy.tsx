import styles from "./main.module.css";

// import { Comentario } from "../comentario";
import { Avatar } from "../avatar";

export function Main() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.perfil}>
        <Avatar hasBorder src={"https://github.com/guisandroni.png"}/>
               <div className={styles.nome}>
              <strong>Guilherme Sandroni Dias</strong>
              <p>Developer Front End</p>
            </div>
          </div>
          <p>Públicado há 1h</p>
        </div>

        {/* <Post
        author="Fala Galera"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Similique libero quam cum officiis beatae earum dolor perferendis vitae,
              quisquam veniam tempora? Totam odit modi voluptatum accusamus recusandae nihil dolor blanditiis!"
        
      /> */}

        <p>Fala galeraa</p>
        <p>
          Acabei de subir mais um projeto no mei portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.
        </p>
        <a className={styles.linkProjeto} href="">
          <strong>jane.design/doctorcare</strong>
        </a>

        <p className={styles.hashtag}>
          <strong>#novoprojeto</strong> <strong>#nlw</strong>{" "}
          <strong>#rocketseat</strong>
        </p>

        <div className={styles.comentario}>
          <p>Deixe seu feedback</p>
          <textarea title="Deletar Comentario" name="" id="" ></textarea>

          <button>Publicar</button>
        </div>
      </main>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.perfil}>    
          <Avatar  hasBorder src={"https://github.com/guisandroni.png"}/>

            <div className={styles.nome}>
              <strong>Guilherme Sandroni Dias</strong>
              <p>Developer Front End</p>
            </div>
          </div>
          <p>Públicado há 2h</p>
        </div>

        {/* <Post
  author="Fala Galera"
  content="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
       Similique libero quam cum officiis beatae earum dolor perferendis vitae,
        quisquam veniam tempora? Totam odit modi voluptatum accusamus recusandae nihil dolor blanditiis!"
  
/> */}

        <p>Fala Pessoal</p>
        <p>
          Finalmente finalizei meu novo site/portfólio. Foi um baita desafio
          todo o design e codar na unha, mas consegui.
        </p>
        <a className={styles.linkProjeto} href="">
          Acesse e deixe seu feedback: <strong>devonlane.design</strong>
        </a>

        <p className={styles.hashtag}>
          <strong>#uiux</strong> <strong>#useexperience</strong>{" "}
        </p>
        <div className={styles.comentario}>
          <p>Deixe seu feedback</p>
          <textarea title="deletar comentario" name="" id=""></textarea>
        </div>
{/* 
        <Comentario/>
        <Comentario/> */}
      </main>
    </div>
  );
}
