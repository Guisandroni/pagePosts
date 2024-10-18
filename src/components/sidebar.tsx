import styles from './sidebar.module.css'
import perfil from './assets/file.jpg'
import { Avatar } from './avatar'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>

            <img className={styles.perfil} src={perfil} alt="Imagem-perfil" />
            <Avatar hasBorder src={"https://github.com/guisandroni.png"}/>
            <div className={styles.nomePerfil}>
            <strong>Guilherme Dias</strong>
            <span>Web Developer</span>
            </div>

            <footer>
                <a href="">Editar seu Perfil</a>
            </footer>
        </aside>
    )
}