import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import Announcement from '../components/Announcement'
import Tags from '../components/Tags'

const ManageAnnouncements = () => {
    const [announcements, setAnnouncements] = useState([])
    const [announcement, setAnnouncement] = useState({})
    const [reload, setReload] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/api/announcement')
            .then((res) => setAnnouncements(res.data))
        setReload(false)
    }, [reload])
    
    const editAnnouncement = (id) => {
        setAnnouncement(...announcements.filter(announcement => announcement._id === id))
    }

    const deleteAnnouncement = (id) => {
        axios.delete(`http://localhost:3001/api/announcement/${id}`)
        setReload(true)
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: announcement.title || "",
            content:  announcement.content || "",
        },
        onSubmit: async (values, { resetForm }) => {
            const { title, content } = formik.values
            if (announcement.title) {
                axios.patch(`http://localhost:3001/api/announcement/${announcement._id}`, {
                    title: title,
                    content: content,
                })
                setAnnouncement({})
            } else {
                console.log(formik.values)
                axios.post('http://localhost:3001/api/announcement', {
                    title: title,
                    content: content,
                })
            }
            resetForm({ values: '' })
            setReload(true)
        },
    })

    return (
        <div className='grid grid-cols-2 gap-3 mt-2'>
            <div className='flex flex-col gap-3'>
                {announcements.map((announcement, index) => 
                    <Announcement 
                        key={index} 
                        editAnnouncement={editAnnouncement} 
                        deleteAnnouncement={deleteAnnouncement} 
                        {...announcement} 
                    />
                )}
            </div>
            <div>
                <form className='flex flex-col gap-2 mx-auto' onSubmit={formik.handleSubmit}>
                    <label className='label' htmlFor='title'>Nadpis</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className='input-container'
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                    <label className='label' htmlFor='content'>Obsah</label>
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
                        {announcement.title ? "Aktualizovat oznámení" : "Nové oznámení"}
                    </button>
                </form>
            </div>
            {/* <Tags /> */}
        </div>
    )
}

export default ManageAnnouncements