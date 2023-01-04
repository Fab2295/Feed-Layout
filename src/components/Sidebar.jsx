import React from 'react'

import { PencilLine } from 'phosphor-react'
import {Avatar} from './Avatar.jsx'
import imagePerfil from '../assets/Romeu.jpeg'
import styleSidebar from './Sidebar.module.css'

export function Sidebar({avatar, name, description}) {
  return (
    <aside className={styleSidebar.sidebar}>
      <img 
        src={imagePerfil} 
        alt="Imagem cover"
        className={styleSidebar.cover} />

      <div className={styleSidebar.profile}>
        <Avatar 
          src={avatar}
          outline={true}
          border={true}
        />
        <strong>{name}</strong>
        <span>{description}</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
