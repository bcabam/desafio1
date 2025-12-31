export function Card({ url_img, title, desc }) {
    return (
        <div style={{ display: 'inline-block'}}>
            <img src={url_img} alt="imagen"/>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}