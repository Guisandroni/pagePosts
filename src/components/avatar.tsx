import styles from "./avatar.module.css";

interface propsSrc{
  src: string,
  hasBorder?: boolean,
  
}

export function Avatar({ hasBorder = false, src } : propsSrc) {
  //Usando desestruturação para passar a propriedade src e de borda
  // const hasBorder = props.hasBorder === true;

  return (
    <div>
      <img title="Imagem Perfil"
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        
      
      />
    </div>
  );
}
