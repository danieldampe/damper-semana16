import { useEffect, useState } from 'react'
import { Card } from '../../components/card/Card';

export const Post = () => {
  /* Obtener las publicaciones */
  const [posts, setPosts] = useState([]);
  const PAGE_RIZE = 10;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasmore, setHasmore] = useState(true);
  
  const addComment = (postId, commentToAdd) => setPosts(prevPosts => prevPosts.map(post => post.id !== postId ? post : {
    ...post,
    comments: [...post.comments, commentToAdd]
  }))

  const handleLikes = postId => setPosts(prevPosts => prevPosts.map(post => post.id !== postId ? post : {
    ...post,
    likes: post.userLike ? post.likes - 1 : post.likes + 1,
    userLike: !post.userLike
  }))

  useEffect(() => {
    const ObtenerPublicaciones = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${PAGE_RIZE}&_page=${page}`);
        console.info("Pagina: ", page);
        const data = await response.json();

        if (data.length === 0) {
          setHasmore(false); // no hay mas publicaciones
        } else {
          const newPosts = data.map(post => ({
            ...post,
            likes: Math.floor(Math.random() * 25),
            comments: [],
            userLike: false
          }))
          setPosts(prevPosts => [...prevPosts, ...newPosts]); // agregar nuevas publicaciones al estado
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false); // cambiar el estado de carga a falso
      }
    }

    ObtenerPublicaciones();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (document.getElementById('section-post').scrollTop + document.getElementById('section-post').clientHeight >= document.getElementById('section-post').scrollHeight - 200 && !loading && hasmore) {
        setPage(prevPage => prevPage + 1);
      }
    }

    /*  window.addEventListener('scroll', handleScroll); */ /* Agrega el evento de desplazamiento */
    document.getElementById('section-post').addEventListener('scroll', handleScroll); /* Agrega el evento de desplazamiento al contenedor */
    return () => document.getElementById('section-post').removeEventListener('scroll', handleScroll); // Limpia el evento de desplazamiento
  }, [loading, hasmore]);

  console.log('POSTS')
  console.log(posts)

  return (
    <div className="text-cyan-900 bg-gradient-to-r from-sky-100 to-zinc-50 w-screen">
      <div className="flex justify-center items-center h-full">
        <div className="w-[1400px] h-[900px] bg-white/85 rounded-2xl shadow-xl">
          <div className="w-full h-full rounded-2xl grid grid-cols-4">
            <main className="col-span-3 rounded-br-2xl rounded-tr-2xl p-5 bg-gray-50">
              <h2 className="text-3xl mb-2">Publicaciones</h2>
              <section id='section-post' className='flex flex-col gap-5 overflow-y-auto h-[790px] p-2 py-4'>
                {posts.map(({ id, title, body, likes, userLike, comments }) => (
                  <Card 
                    key={id} 
                    id={id}
                    titulo={title} 
                    descripcion={body} 
                    likes={likes} 
                    userLike={userLike} 
                    comments={comments}
                    addComment={addComment} 
                    onLikes={() => handleLikes(id)} 
                  />
                ))}

                {loading && <p className='text-center'>Cargando...</p>}
                {!hasmore && <p className='text-center'>No hay más publicaciones</p>}
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
