export function Entry({title, placeholder, type}){
    return <div className="entry">
        <p>{title}</p>
        <div>
            <input type={type} placeholder={placeholder} autoComplete="off"/>
        </div>
    </div>
}