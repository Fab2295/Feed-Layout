import React from 'react'
import { Comment } from './Comment';

import stylePost from './Post.module.css'

export function Post({ author, content, ...props }) {
  function handleComment(event) {
    event.preventDefault();
  }


  return (
    <article className={stylePost.post}>
      <header>
        <div className={stylePost.author}>
          <img
            className={stylePost.avatar}
            src="https://avatars.githubusercontent.com/u/19378313?v=4"
          />
          <div className={stylePost.authorInfo}>
            <strong>{author}</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time dateTime='2023-01-01 08:39:24'>Publicado há 1 hora</time>
      </header>

      <div className={stylePost.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum quibusdam magnam sed, cupiditate dolore deserunt praesentium odit dolor quos quae dolorum aliquam suscipit! Cumque delectus labore ullam molestiae aperiam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum quibusdam magnam sed, cupiditate dolore deserunt praesentium odit dolor quos quae dolorum aliquam suscipit! Cumque delectus labore ullam molestiae aperiam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum quibusdam magnam sed, cupiditate dolore deserunt praesentium odit dolor quos quae dolorum aliquam suscipit! Cumque delectus labore ullam molestiae aperiam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum quibusdam magnam sed, cupiditate dolore deserunt praesentium odit dolor quos quae dolorum aliquam suscipit! Cumque delectus labore ullam molestiae aperiam?</p>
      </div>


      <form className={stylePost.commentForm}>
        <strong>Deixei seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentario'
        />
        <footer>
          <button type='submit' onClick={handleComment}>Comentar</button>
        </footer>
      </form>

      <div className={stylePost.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}
