

import styles from './header.module.css'
import logo from './assets/ignite-logo.svg'


export function Header(){
    return (




        <div className={styles.header}>
            <img src={logo} alt="Logo-Ignite" />
            
            <p><strong>Ignite Feed</strong></p>
        </div>

       
    )
}