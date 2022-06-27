import React, { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik'
import axios from 'axios'

const Tags = () => {
    const [tags, setTags] = useState([])
    const [error, setError] = useState("")
    const [reload, setReload] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/api/tag')
            .then((res) => setTags(res.data))
        setReload(false)
    }, [reload])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            tag: "",
        }, onSubmit: async (values, { resetForm }) => {
            const { tag } = formik.values
            if (tags.filter(tag_ => tag_.name === tag).length > 0) {
                setError("Tento tag již je uložen")
            } else {
                axios.post('http://localhost:3001/api/tag', {
                    name: tag,
                })
                resetForm({ values: ''})
                setReload(true)
                setError("")
            }
        }
    })

    const deleteTag = (id) => {
        axios.delete(`http://localhost:3001/api/tag/${id}`)
        setReload(true)
    }

    return (
        <div className="h-fit mb-8 bg-blue-500 mt-auto p-2">
            <form className='flex flex-row gap-3' onSubmit={formik.handleSubmit}>
                <input
                    id="tag"
                    name="tag"
                    type="text"
                    className="rounded-md px-2"
                    onChange={formik.handleChange}
                    value={formik.values.tag}
                />
                <button 
                    type="submit" 
                    className='bg-green-300 px-2 rounded-md'
                >
                    Přidat tag
                </button>
            </form>
            {error && <p className='text-red-800 font-bold tracking-wider'>{error}</p>}
            <div className='flex flex-row gap-2 mt-2'>
            {tags &&
                tags.map((tag, index) => 
                    <div 
                        key={index}
                        className="bg-orange-500 rounded-md px-2 py-1 font-bold"
                    >
                        {tag.name} <CloseIcon className="cursor-pointer" onClick={() => deleteTag(tag._id)} />
                    </div>
                )
            }
            </div>
        </div>
    )
}
export default Tags