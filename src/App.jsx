import { useEffect, useState } from 'react';
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import './global.css';
import stylesApp from './App.module.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('./src/model/user.json')
      .then(data => data.text())
      .then(json => JSON.parse(json))
      .then(json => setData(json))
  }, [])

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
          {data?.posts?.map((value) => {
            return (
              <Post
                key={value.id}
                author={value.author}
                content={value.text}
                avatar={value.avatar}
                description={value.description}
                comments={value.comments}
              />)
          })}
        </main>
      </div>
    </>
  )
}


export default App
