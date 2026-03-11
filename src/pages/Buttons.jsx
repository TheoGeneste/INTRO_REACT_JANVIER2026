import ButtonComponent from "../components/ButtonComponent";

const Buttons = () => {
    return <>
        <ButtonComponent title={"toto"} styles={{backgroundColor : 'red'}} onclick={() => {console.log("Je suis toto");}} />
        <ButtonComponent title={"tata"} onclick={() => {console.log("Je suis tata");}}/>
        <ButtonComponent title={"Bernard"} styles={{backgroundColor : 'darkorange'}}/>
        <ButtonComponent title={"Gérard"}/>
    </>;
}
 
export default Buttons;