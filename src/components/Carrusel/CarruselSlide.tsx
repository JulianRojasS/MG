export default function CarruselSlide({prop}:{prop:any}) {
    return (
        <div id={prop.id}>
            <img src={prop.src} alt={prop.alt}/>
        </div>
    )
}