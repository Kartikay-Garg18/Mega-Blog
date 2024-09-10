import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({name, control, label, defaultValue=''}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1 '>{label}</label>}
        <Controller name={name || 'content'} control={control} 
        render={({field: {onChange}}) => (
            <Editor
                // apiKey={process.env.REACT_APP_TINY_MCE_API_KEY}
                onEditorChange={onChange}
                initialValue={defaultValue}
                init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'
                }}
            />
        )}/>
    </div>
  )
}

