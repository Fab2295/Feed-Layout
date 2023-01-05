import React, { useState } from 'react'

import { getNextIdInArrayObject } from '../utils/utils.js'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import stylePost from './Post.module.css'

export function Post({ author, content, avatar, description, comments, ...props }) {
  const [comment, setComment] = useState(comments);
  const [text, setText] = useState('');

  function handleComment(event) {
    event.preventDefault();

    setComment([{
      "id": getNextIdInArrayObject(comment),
      "author_comment": props.userName,
      "avatar_comment": props.avatarProfile,
      "comment": text,
      "likes": 0

    }, ...comment])
  }

  function handleOnChangeText({ target }) {
    setText(target.value)
  }


  return (
    <article className={stylePost.post}>
      <header>
        <div className={stylePost.author}>
          <Avatar
            src={avatar}
            outline={true}
            border={true}
          />
          <div className={stylePost.authorInfo}>
            <strong>{author}</strong>
            <span>{description}</span>
          </div>
        </div>

        <time dateTime='2023-01-01 08:39:24'>Publicado há 1 hora</time>
      </header>

      <div className={stylePost.content}>
        {content}
      </div>


      <form onSubmit={handleComment} className={stylePost.commentForm}>
        <strong>Deixei seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentario'
          value={text}
          onChange={handleOnChangeText}
        />
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={stylePost.commentList}>
        {comment?.map((value) => {
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

      </div>
    </article>
  )
}
