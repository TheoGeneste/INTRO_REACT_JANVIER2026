const GalleryItem = ({title,url,isSelected,onSelect}) => {
    return <>
        <h2>{title}</h2>
        <img src={url} onClick={onSelect}
        style={{border: isSelected && "2px solid red", width: "300px", cursor: "pointer"}}/>
    </>;
}
 
export default GalleryItem;