import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({onLogout}) => {
  return (
    <div className='flex items-center gap-3'>
        <div className='h-12 w-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
            {getInitials("John Williams")}
        </div>
        <div>
            <p className='text-sm font-medium '>William</p>
            <button className='text-sm text-slate-700 underline' onClick={onLogout}></button>
        </div>
    </div>
    
  )
}

export default ProfileInfo