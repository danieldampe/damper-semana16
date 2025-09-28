import { useRef, useState } from "react";

export const Card = ({ id, titulo = "Titulo de la publicacion", descripcion, likes, onLikes, comments, userLike, addComment }) => {
  const [addingComment, setAddingComment] = useState(false)
  const textareaRef = useRef()

  const handleAddingComment = () => setAddingComment(prevAddingComment => !prevAddingComment)

  const handleAddComment = () => {
    addComment(id, textareaRef.current.value)
    handleAddingComment()
  }

  const desDefault = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus voluptates qui, iste quis recusandae dolore optio fuga distinctio vel iusto dolorem est odio rem quo, impedit praesentium veritatis ab.";
  
  return (
    <article className='w-full border border-gray-200 shadow-sm rounded-2xl'>
      <header className='flex justify-between items-center p-2'>
        <div className='flex justify-start items-center gap-3'>
          <img src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png"
            className='w-12 rounded-full object-cover border border-gray-400'
            alt="perfil del usuario" />
          <div className='flex flex-col justify-start'>
            <span>Usuario desconocido</span>
            <small>emiluk@example.com</small>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          <span className="font-semibold">{titulo}</span>
          <small>Publicado el 20/06/2024</small>
        </div>
      </header>
      <div className='p-3'>
        <p>{descripcion ? descripcion : desDefault}</p>
      </div>
      <footer>
        <div className='flex justify-start items-center gap-3 p-2 border-t border-gray-200' >
          <button className='bg-cyan-500 text-white px-3 py-1 rounded-xl cursor-pointer hover:bg-cyan-600 transition-colors' onClick={onLikes}>{userLike ?'❤️' : '💙'} {likes} Me gusta</button>
          <button className='bg-cyan-500 text-white px-3 py-1 rounded-xl cursor-pointer hover:bg-cyan-600 transition-colors' onClick={handleAddingComment}>📰 Comentarios</button>
        </div>
      </footer>
      {!addingComment ? '' : <section className="p-2">
          <textarea className="w-full h-32 mb-2 p-[inherit] border-2 border-gray-200 resize-none rounded-xl" ref={textareaRef} placeholder="Escriba su comentario" />
          <div className="flex justify-end gap-x-3">
            <button className="bg-cyan-500 text-white px-3 py-1 rounded-xl cursor-pointer hover:bg-cyan-600 transition-colors" onClick={handleAddingComment}>Cancelar</button>
            <button className="bg-cyan-500 text-white px-3 py-1 rounded-xl cursor-pointer hover:bg-cyan-600 transition-colors" onClick={handleAddComment}>Enviar</button>
          </div>
        </section>}
      {comments.length === 0 ? '' : <section className="space-y-2">
          {comments.map(comment => <div className="flex gap-x-5 items-center p-4">
            <img 
              src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png"
              className='w-10 rounded-full object-cover border border-gray-400'
              alt="perfil del usuario" 
            />
            <p>{comment}</p>
          </div>)}
        </section>}
    </article>
  )
}
