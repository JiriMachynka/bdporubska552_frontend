import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Jméno musí obsahovat maximálně 15 znaků')
        .required('Nutno vyplnit'),
      email: Yup.string()
        .email('Zadejte platnou emailovou adresu')  
        .required('Nutno vyplnit'),
      message: Yup.string()
        .max(255, 'Zadejte maximálně 255 znaků')
        .required('Nutno vyplnit'), 
    }),
    onSubmit: values => { console.log(values) }, 

    }
  );

  return(
    <div className='md:grid md:grid-cols-1'>        
      <div className="mt-5"> 
        <form onSubmit={formik.handleSubmit} >
          <div className="shadow sm:rounded-md sm:overflow-hidden bg-white">
            <div className="px-4 py-5  space-y-6 sm:p-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 px-3">
                    Jméno
                </label>
                <div className="mt-1">  
                  <input 
                    id="name"
                    name="name" 
                    tabIndex="1" 
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300 border-2 pl-3"
                    {...formik.getFieldProps('name')}
                  />
                  {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 px-3">
                  Email
                </label>
                <div className="mt-1">  
                  <input 
                    id="email"
                    type='email'
                    name="email" 
                    tabIndex="2" 
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300 border-2 pl-3"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 pl-3">
                  Zpráva
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    tabIndex="3"
                    rows={5}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md pl-3"
                    {...formik.getFieldProps('message')}
                  />
                  {formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div> : null}
                </div>
              </div>                    
              
            </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6"> 
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md hover:text-white hover:bg-sand-font bg-sand-navbar focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Odeslat
                </button>
              </div>  
            </div>
          </form>
        </div>
      </div>    
        
    )
}

export default ContactForm