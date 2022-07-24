function ContactForm(){
    
    const handleSubmit = () => {
        alert('Odeslání formuláře')
    } 




    return(
            <form>
                <div>
                    <label htmlFor="name">
                        <span className="pr-4">Jméno</span>
                        <input name="name" tabIndex="1" placeholder="Zadejte Vaše jméno" />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        <span className="pr-4">E-mail</span>
                        <input type="email" name="email" tabIndex="2" placeholder="xxxxx@yyyyy.zzz" />
                    </label>
                </div>
                <div>
                    <label htmlFor="message">
                        <span>Zpráva</span>
                    </label>
                    <textarea name="message" placeholder="Napište zprávu" />
                </div>
                <button type="submit" onClick={handleSubmit} >
                    Odeslat
                </button>
            </form>
        
    )
}

export default ContactForm