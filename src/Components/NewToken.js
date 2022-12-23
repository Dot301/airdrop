import { TextField } from '@mui/material'
import React from 'react'

function NewToken() {
    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[70%] bg-white flex justify-center pt-6'>
            <form >
                <div className='h-16 text-lg '>
                    <h2>Create Your new token here..</h2>
                </div>
            <div className='w-[800px]'>
                <TextField id="standard-basic" label="Symbol" variant='outlined' className='w-full'/>
            </div>
            </form>
        </div>
    )
}

export default NewToken