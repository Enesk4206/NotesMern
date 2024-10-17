import React from 'react'
import Navbar from "../../components/Navbar"
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="sm:max-w-[960px] lg:max-w-[1440px] md:max-w-[1080px] mx-auto">
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8'>
        <NoteCard 
          title={"Today make a new project "} 
          date={"2023-04-21"} 
          tags={"#morefunmorecode"} 
          content={"learn more and more and more develop myself everytime "}
          isPinned={true}
          onEdit={()=>{}}
          onDelete={()=>{}}
          onPinNote={()=>{}}
        />
        
        </div>
      </div>
      <button className='size-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10' onClick={()=>{}}>
        <MdAdd className='text-[32px] text-white'/>
      </button>

      <AddEditNotes/>
    </>
  )
}

export default Home