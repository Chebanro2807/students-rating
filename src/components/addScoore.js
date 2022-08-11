import { useEffect, useState } from 'react';

export default function AddScoore ({data, getList}) {
    const [value, setValue] = useState(0);
    const [student, setStudent] = useState();
    const [list, setList] = useState(data)

    useEffect(() => {
        getList(list)
    }, )

    function submitForm (event) {
        event.preventDefault();
        setList(list.map((el) => {
            if(student === (el.Name + ' ' +el.Surname)) {
                return  {...el, points: parseInt(value) + parseInt(el.points)}
            } else {
                return el;
            }
        }))
    }

    return (
        <form onSubmit={submitForm}>
            <select value={student} onChange={(event) => setStudent(event.target.value)}>
                <option>Выбор студента</option>
                {data.map((person) => {
                    return <option key={person.id}> {person.Name} {person.Surname}</option>
                })}
            </select>
            <input
                type="number"
                placeholder="Бал"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button type="submit">Отправить</button>
        </form>
    )
}


