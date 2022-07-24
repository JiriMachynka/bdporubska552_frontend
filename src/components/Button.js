function Button(props){
    return(
        <button className="h-8 w-28 bg-sand-navbar hover:bg-sand-font hover:text-white">
            {props.content}
        </button>
    )
}

export default Button