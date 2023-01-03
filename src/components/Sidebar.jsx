import React from 'react'

import { PencilLine } from 'phosphor-react'
<<<<<<< HEAD
import {Avatar} from './Avatar.jsx'
import imagePerfil from '../assets/Romeu.jpeg'
import styleSidebar from './Sidebar.module.css'

export function Sidebar({avatar, name, description}) {
=======
import imagePerfil from '../assets/Romeu.jpeg'
import styleSidebar from './Sidebar.module.css'

export function Sidebar() {
>>>>>>> 7143599 (Layout)
  return (
    <aside className={styleSidebar.sidebar}>
      <img 
        src={imagePerfil} 
        alt="Imagem cover"
        className={styleSidebar.cover} />

      <div className={styleSidebar.profile}>
<<<<<<< HEAD
        <Avatar 
          src={avatar}
          outline={true}
          border={true}
        />
        <strong>{name}</strong>
        <span>{description}</span>
=======
        <img
          className={styleSidebar.avatar} 
          src="https://avatars.githubusercontent.com/u/19378313?v=4" 
        />
        <strong>Dalcy Fabrício</strong>
        <span>Web and ABAP developer</span>
>>>>>>> 7143599 (Layout)
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
