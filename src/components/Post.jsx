<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Avatar } from './Avatar';
=======
import React from 'react'
>>>>>>> 7143599 (Layout)
import { Comment } from './Comment';

import stylePost from './Post.module.css'

<<<<<<< HEAD
export function Post({ author, content, avatar, description, comments }) {
  const [comment, setComment] = useState(comments);
  const [text, setText] = useState('');

=======
export function Post({ author, content, ...props }) {
>>>>>>> 7143599 (Layout)
  function handleComment(event) {
    event.preventDefault();
  }

<<<<<<< HEAD
  function handleOnChangeText({target}){
    setText(target.value)
  }
=======
>>>>>>> 7143599 (Layout)

  return (
    <article className={stylePost.post}>
      <header>
        <div className={stylePost.author}>
<<<<<<< HEAD
          <Avatar
            src={avatar}
            outline={true}
            border={true}
          />
          <div className={stylePost.authorInfo}>
            <strong>{author}</strong>
            <span>{description}</span>
=======
          <img
            className={stylePost.avatar}
            src="https://avatars.githubusercontent.com/u/19378313?v=4"
          />
          <div className={stylePost.authorInfo}>
            <strong>{author}</strong>
            <span>Web developer</span>
>>>>>>> 7143599 (Layout)
          </div>
        </div>

        <time dateTime='2023-01-01 08:39:24'>Publicado há 1 hora</time>
      </header>

      <div className={stylePost.content}>
<<<<<<< HEAD
        {content}
=======
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum quibusdam magnam sed, cupiditate dolore deserunt praesentium odit dolor quos quae dolorum aliquam suscipit! Cumque delectus labore ullam molestiae aperiam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum quibusdam magnam sed, cupiditate dolore deserunt praesentium odit dolor quos quae dolorum aliquam suscipit! Cumque delectus labore ullam molestiae aperiam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum quibusdam magnam sed, cupiditate dolore deserunt praesentium odit dolor quos quae dolorum aliquam suscipit! Cumque delectus labore ullam molestiae aperiam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum quibusdam magnam sed, cupiditate dolore deserunt praesentium odit dolor quos quae dolorum aliquam suscipit! Cumque delectus labore ullam molestiae aperiam?</p>
>>>>>>> 7143599 (Layout)
      </div>


      <form className={stylePost.commentForm}>
        <strong>Deixei seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentario'
<<<<<<< HEAD
          value={text}
          onChange={handleOnChangeText}
=======
>>>>>>> 7143599 (Layout)
        />
        <footer>
          <button type='submit' onClick={handleComment}>Comentar</button>
        </footer>
      </form>

      <div className={stylePost.commentList}>
<<<<<<< HEAD
        {comment.map((value) => {
          return (
            <Comment
              key={value.id}
              userName={value['author_comment']}
              imageUser={value['avatar_comment']}
              comment={value.comment}
              likes={value.likes}
            />
          )
        })}

=======
        <Comment/>
        <Comment/>
        <Comment/>
>>>>>>> 7143599 (Layout)
      </div>
    </article>
  )
}
