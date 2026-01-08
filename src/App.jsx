import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')

  const [todo, settodo] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    settodo([...todo, { title, desc }])
    settitle('')
    setdesc('')

  }

  const deleteHandler = (i) => {
    let copytask = [...todo]

    copytask.splice(i, 1)
    settodo(copytask)


  }

  let renderData = <h5 className='text-2xl'>No Task Available</h5>

  if (todo.length > 0) {
    renderData =
      todo.map((t, i) => {

        return (
          <li key={i} className='flex items-center justify-between'>
            <div className='flex justify-between mb-5 w-2/3'>
              <h5 className='text-2xl font-semibold '>{t.title}</h5>
              <h6 className=' text-xl font-semibold'>{t.desc}</h6>
            </div>
            <button onClick={() => {
              deleteHandler(i)
            }}
              className='bg-red-800 text-white rounded py-2 px-4'>Delete</button>
          </li>
        )
      }



      )

  }

  return (
    <>
      <h1 className='text-bold  text-center bg-slate-300 p-8 text-2xl'>My ToDo</h1>
      <br />

      <form
        onSubmit={submitHandler}
        className='gap-5 mx-11  gap-4 flex center justify-space-between'>
        <input
          value={title}
          className='gap-4 border-zinc-800  border-4 text-2xl p-1 '
          type="text"
          placeholder='Enter Title'
          onChange={(e) => {
            settitle(e.target.value)
            console.log(title)
          }}

        />

        <input
          value={desc}
          className='gap-4 border-zinc-800 border-4 border-2xl  text-xl p-1 '
          type="text"
          placeholder='Enter Descr'
          onChange={(e) => {
            setdesc(e.target.value)
            console.log(desc)
          }}
        />
        <button className='gap-4 border-2xl bg-green-100 text-xl p-1 border-rounded px-4 py-2' >Add Task</button>
      </form>

      <div className='bg-black text-white mt-5 px-12 py-4'>
        <ol>
          {renderData}
        </ol>


      </div>
    </>

  )
}

export default App