import Student from "./student";

export default function  MainPage ({data}){
    return (
        data.map((person, index) =>{
            return (
                <Student person = {person} key = {index}/>
            )
        })

    )
}
