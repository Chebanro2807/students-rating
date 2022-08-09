import '../style.css'

export default function  Student ({person}){
    return (
        <div className='student'>
            <div className='number'>{person.id}</div>
            <div className='main'>
                <img src={person.photo} alt='/'/>
                <div className='column person'>
                    <div>{person.Name}</div>
                    <div>{person.Surname}</div>
                </div>
                <div className='column score'>
                    <div>{person.HW}</div>
                    <div>{person.points}</div>
                </div>
            </div>
        </div>
    )
}
