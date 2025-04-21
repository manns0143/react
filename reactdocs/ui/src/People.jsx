// Rendering Lists

const people = [{
    id: 1,
    name: "ted",
    profession: "architect"
}, {
    id: 2,
    name: "marshall",
    profession: "lawyer"
}, {
    id: 3,
    name: "barney",
    profession: "please"
}]

export default function People() {
    const listItems1 = people.map(person => <li key={person.id}>
        My name is {person.name} and I am {person.profession}
    </li>)

    const lawyers = people.filter(person => person.profession === 'lawyer')
    const listItems2 = lawyers.map(lawyer => <li key={lawyer.id}>
        My name is {lawyer.name} and I am {lawyer.profession}
    </li>)

    return (
        <>
            <h4>The Gang: </h4>
            <ul>
                {listItems1}
            </ul>

            <h4>Lawyers: </h4>
            <ul>
                {listItems2}
            </ul>
        </>
    )
}