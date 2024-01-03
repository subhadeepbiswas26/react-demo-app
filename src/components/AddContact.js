const BoldSubhContact = (props) => {
    return <><b>{props.name}</b></>
}
const ItalianSubhContact = (props) => {
    return <><i>{props.name}</i></>
}

const AddContact = (props) => {

    const alertHandler = (name, event) => {

        alert(props.fontstyle === "I" ? <ItalianSubhContact name={name} /> : <BoldSubhContact name={name}/>)

    }
    return (
        <div>
            Hello  {props.name} <br />
            <button onClick={(event) => alertHandler(props.name, event)}>Clickme</button>
        </div>
    )

}

export default AddContact;