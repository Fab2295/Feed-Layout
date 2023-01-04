import React, { useEffect, useState } from 'react'
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import stylePost from './Post.module.css'

export function Post({ author, content, ...props }) {
  const [comment, setComment] = useState({});
  let headers = new Headers();

  headers.append("Accept", "application/json");
  headers.append("Access-Control-Allow-Origin", "http://127.0.0.1:5173/");

  function handleComment(event) {
    event.preventDefault();
  }

  useEffect(() => {
    // A function to fetch files from github using the api 
    fetch('https://fab2295.github.io/Json-feed/fake-api.json', {
      method: 'Get',
      headers: headers,
      mode: 'same-origin'
    }).then(data => data.json())
      .then(data => console.log(data))
      // .catch(error => { 
      //   console.error(error);
      // });
  }, [])


  return (
    <article className={stylePost.post}>
      <header>
        <div className={stylePost.author}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/19378313?v=4"
            outline={true}
            border={true}
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
        {/* {comment.map((value) => {

        })} */}
        <Comment
          userName="Dalcy Fabrício"
          imageUser="https://avatars.githubusercontent.com/u/19378313?v=4"
          comment="Parabéns"
        />
      </div>
    </article>
  )
}
