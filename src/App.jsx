

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pedrrhenrique.png',
      name: 'Pedro Henrique',
      role: 'Dev Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Projeto realizado com ReactJS. 🚀' },
      { type: 'link', content: 'pedrrhenrique/socialNetwork' },
    ],
    publishedAt: new Date('2022-11-09 11:24:36')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CEO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Boa noitee 👋' },
      { type: 'paragraph', content: 'Aula nova no curso de React. Iremos criar uma SPA. 🚀' },
      { type: 'link', content: 'rocketseat/react' },
    ],
    publishedAt: new Date('2022-11-08 18:46:11')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/rafaballerini.png',
      name: 'Rafa Ballerini',
      role: 'Programmer @RafaBallerini'
    },
    content: [
      { type: 'paragraph', content: 'Eae minha gente, boa tarde 👋' },
      { type: 'paragraph', content: 'Quem está afim de uma aula ao vivo? Segue o link em meus stories do Instagram. 🚀' },
      { type: 'link', content: 'rafaballerini' },
    ],
    publishedAt: new Date('2022-11-06 14:55:16')
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App
