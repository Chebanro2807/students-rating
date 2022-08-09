import Student from "./student";
import {data} from './data'

export default function  MainPage (){
    return (

        data.map((person, index) =>{
            return (
                <Student person = {person} key = {index}/>
            )
        })

    )
}
