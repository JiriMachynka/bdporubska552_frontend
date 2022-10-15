import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

const ManageAnnouncements = () => {
	const [announcements, setAnnouncements] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3001/api/announcement')
			.then((res) => setAnnouncements(res.data))
	}, [])

	const formik = useFormik({
		initialValues: {
			title: "",
			content: "",
		},
		onSubmit: async (values, { resetForm }) => {
			console.log(values)
			const { title, content } = formik.values
			axios.post('http://localhost:3001/api/announcement', {
				title: title,
				content: content,
			}).then((res) => console.log(res))
			resetForm()
		}
	})

	const deleteAnnouncement = (id) => {
		axios.delete(`http://localhost:3001/api/announcement/${id}`)
		toast("Smazal jsi oznámení")
	}

	return (
		<>
			<div className='flex gap-10'>
				<form className='flex flex-col w-[700px] gap-2' onSubmit={formik.handleSubmit}>
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
				<div className='flex flex-col'>
					{announcements.map((announcement, index) => {
						return (
							<div className='flex bg-orange-500 w-[500px] h-fit rounded-xl px-5 py-3'>
								<div className='flex flex-col w-full'>
									<span className=''>{announcement.title}</span>
									<span className=''>{announcement.content}</span>
									<span className=''>{announcement.tag}</span>
								</div>
								<div className='flex flex-col'>
									<button className='bg-red-300 px-5 py-2 rounded-xl hover:border-2 hover:border-black' onClick={() => deleteAnnouncement(announcement._id)}>Delete</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			{/* <ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/> */}
		</>
	)
}

export default ManageAnnouncements