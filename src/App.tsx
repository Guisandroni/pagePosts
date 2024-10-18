 
import { Header } from "./components/header.tsx";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/sidebar.tsx";
import { Post, propsPost } from "./components/post.tsx";

// publishDate: Date,
// content: String,
const posts : propsPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/guisandroni.png",
      name: "Guilherme Dias",
      role: "Developer EngSoftware",
    },
    content: [
      { type: "paragraph", content: " eae Pessoal" },
      { type: "paragraph", content: " Acabei de subir mais um projeto...." },
      { type: "link", content: "jane.design/doctorpepe"},
      // { type: "link", content: ' #NovoProjeto', },
      // { type: "link", content: ' #NovoProjeto', },
      // { type: "link", content: ' #NovoProjeto',},
    ],
    publishDate: new Date ('2024-09-28 21:00:00'),
  },

  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/guisandroni.png",
      name: "Guilherme Dias",
      role: "Developer EngSoftware",
    },
    content: [
      { type: "paragraph", content: " Fala TEste" },
      { type: "paragraph", content: " Acabei de subir mais um projeto...." },
      { type: "link", content: "jane.design/doctorpepe"},
      // { type: "link", content: ' #NovoProjeto', },
      // { type: "link", content: ' #NovoProjeto', },
      // { type: "link", content: ' #NovoProjeto',}

    ],
    publishDate: new Date ('2024-09-28 21:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/guisandroni.png",
      name: "Guilherme Dias",
      role: "Developer EngSoftware",
    },
    content: [
      { type: "paragraph", content: " Fala galera" },
      { type: "paragraph", content: " Acabei de subir mais um projeto...." },
      { type: "link", content: "jane.design/doctorpepe"},
      // { type: "link", content: ' #NovoProjeto', },
      // { type: "link", content: ' #NovoProjeto', },
      // { type: "link", content: ' #NovoProjeto',},

    ],
    publishDate: new Date ('2024-09-28 21:00:00'),
  },
];

// const fe = posts.forEach(post =>{
//   return 1
// })
// const mp = posts.map(post =>{
//   return posts;
// })


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Sidebar />

        <div className={styles.posts}>
          {posts.map(post =>{
            return (
              <Post 
              key={post.id}
              post = {post}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}


