import { use, useState } from "react";
import GalleryItem from "../components/GalleryItem";

const Gallery = () => {
    const images = [
        {id:1, title:"Chat", url: "https://static.vecteezy.com/system/resources/thumbnails/041/642/908/small_2x/ai-generated-cute-cat-reaching-up-with-paw-on-transparent-background-png.png"},
        {id:2, title:"Chat Bis", url: "https://static.vecteezy.com/system/resources/thumbnails/041/642/908/small_2x/ai-generated-cute-cat-reaching-up-with-paw-on-transparent-background-png.png"},
        {id:3, title:"Chat Ter", url: "https://static.vecteezy.com/system/resources/thumbnails/041/642/908/small_2x/ai-generated-cute-cat-reaching-up-with-paw-on-transparent-background-png.png"}
    ]
    const [idSelected, setIdSelected] = useState(0);
    const [titleSelected, setTitleSelected] = useState("Aucune image selectionné");

    // const onSelect = (id) => {
    //     setId(id);
    // }

    return <>
    {/* images.map((element)) */}
        <h1>{titleSelected}</h1>
        {/* <h1>{images.find((el) => idSelected == el.id) ? images.find((el) => idSelected == el.id).title : "Aucune image selectionné"}</h1> */}
        {images.map((element) => {
            return <GalleryItem key={element.id} title={element.title} url={element.url} 
            onSelect={() =>{ setIdSelected(element.id); setTitleSelected(element.title)}}
            isSelected={idSelected == element.id} />
        })}
    </>;
}
 
export default Gallery;