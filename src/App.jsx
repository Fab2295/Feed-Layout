import { useState } from 'react';

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import { getNextIdInArrayObject } from './utils/utils.js'

import data from './model/user.json'

import './global.css';
import stylesApp from './App.module.css';

function App() {
  const [textPost, setTextPost] = useState('');
  const [post, setPost] = useState(data.posts);

  function handleOnChangeTextPost({ target }) {
    setTextPost(target.value)
  }

  function handlePost(event) {
    event.preventDefault();

    let { userName, profileDescription, avatar } = data;

    setPost([{
      "id": getNextIdInArrayObject(post),
      "author": userName,
      "description": profileDescription,
      "avatar": avatar,
      "text": textPost,
      "comments": []
    }, ...post])

    setTextPost('')
  }

  return (
    <>
      <Header />
      <div className={stylesApp.wrapper}>
        <Sidebar
          avatar={data.avatar}
          name={data.userName}
          description={data.profileDescription}
        />
        <main>
          <div className={stylesApp.post}>
            <form  onSubmit={handlePost} className={stylesApp.postForm}>
              <textarea
                placeholder='Crie seu post'
                value={textPost}
                onChange={handleOnChangeTextPost}
              />
              <footer>
                <button type='submit'>Publicar</button>
              </footer>
            </form>
          </div>
          {post?.map((value) => {
            return (
              <Post
                key={value.id}
                author={value.author}
                content={value.text}
                avatar={value.avatar}
                description={value.description}
                comments={value.comments}
                userName={data.userName}
                avatarProfile={data.avatar}
                publishedDate={value.publishedAt}
              />)
          })}
        </main>
      </div>
    </>
  )
}


export default App