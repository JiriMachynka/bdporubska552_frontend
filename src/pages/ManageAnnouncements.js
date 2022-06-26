import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

const ManageAnnouncements = () => {

    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
        },
        onSubmit: async (values) => {
            console.log(values)
            const { title, content } = formik.values
            axios.post('http://localhost:3001/api/announcement', {
                title: title,
                content: content,
            }).then((res) => console.log(res))
        }
    })

    return (
        <div>
            <form className='flex flex-col w-[700px] gap-2 mx-auto' onSubmit={formik.handleSubmit}>
                <label className='label' htmlFor='title'>Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    className='input-container'
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                <label className='label' htmlFor='content'>Content</label>
                <textarea
                    id="content"
                    name="content"
                    className='input-container'
                    rows={20}
                    cols={20}
                    onChange={formik.handleChange}
                    value={formik.values.content}
                >
                {formik.values.content}
                </textarea>
                <button 
                    type="submit" 
                    className='border-[3px] border-green-300 bg-green-300 rounded-lg font-bold h-[50px] text-2xl
                            hover:border-black'
                >
                    Odeslat
                </button>
            </form>
        </div>
    )
}

export default ManageAnnouncements