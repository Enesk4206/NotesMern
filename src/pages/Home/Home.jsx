import React, { useState } from 'react'
import Navbar from "../../components/Navbar"
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from "react-modal"

const Home = () => {
  const [openAddEditModal , setOpenAddEditModal] = useState({
    isShown:false,
    type:"add",
    data:null,
  })
 
 
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
      <button className='size-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10' 
      onClick={()=>{
        setOpenAddEditModal({isShown:true , type:"add" , data:"null"});
      }}>
        <MdAdd className='text-[32px] text-white'/>
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={()=>{}}
        style={{
          overlay:{background:"rgba(0,0,0,0.2"},
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 mx-auto bg-white mt-14 p-5 overflow-clip"
      >

      <AddEditNotes 
        type={openAddEditModal.type}
        noteData={openAddEditModal.data}
        onClose={()=>{
          setOpenAddEditModal({isShown:false , type:"add" , data:null});
        }}
      />
      </Modal>
    </>
  )
}

export default Home