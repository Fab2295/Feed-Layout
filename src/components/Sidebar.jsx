import React from 'react'

import { PencilLine } from 'phosphor-react'
import {Avatar} from './Avatar.jsx'
import imagePerfil from '../assets/Romeu.jpeg'
import styleSidebar from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styleSidebar.sidebar}>
      <img 
        src={imagePerfil} 
        alt="Imagem cover"
        className={styleSidebar.cover} />

      <div className={styleSidebar.profile}>
        <Avatar 
          src="https://avatars.githubusercontent.com/u/19378313?v=4" 
          outline={true}
          border={true}
        />
        <strong>Dalcy Fabrício</strong>
        <span>Web and ABAP developer</span>
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
