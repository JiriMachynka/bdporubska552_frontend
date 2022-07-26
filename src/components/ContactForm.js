function ContactForm(){
   /* 
   const handleSubmit = () => {
        alert('Odeslání formuláře')
    } 
*/
    


    return(
      <div className='md:grid md:grid-cols-1'>        
        <div className="mt-5"> 
          <form >
            <div className="shadow sm:rounded-md sm:overflow-hidden bg-white">
              <div className="px-4 py-5  space-y-6 sm:p-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 px-3">
                    Jméno
                  </label>
                  <div className="mt-1">  
                    <input 
                      name="name" 
                      tabIndex="1" 
                      placeholder="Zadejte Vaše jméno"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300 border-2 pl-3"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 px-3">
                    E-mail
                  </label>
                  <div className="mt-1">  
                    <input 
                      type='email'
                      name="email" 
                      tabIndex="2" 
                      placeholder="example@exampl.cz"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300 border-2 pl-3"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 pl-3">
                    Zpráva
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="message"
                      tabIndex="3"
                      rows={5}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md pl-3"
                      placeholder="Napište zprávu"
                      defaultValue={''}
                    />
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