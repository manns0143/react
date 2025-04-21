// Passing Props to a Component

function Card({ children }) {
    return (
        <div style={
            {
                backgroundColor: "red",
                color: "white"
            }
        }>
            { children }
        </div>
    )
}

function Avatar({ person, isAdult = "not an adult" }) {
    return (
        <>
            <div>
                My name is {person.name} and i am a {person.gender}
            </div>
            <div>
                I am {isAdult}
            </div>
        </>
    )
}

// function Avatar( props ) {
//     return (
//         <>
//             <div>
//                 My name is {props.person.name} and i am a {props.person.gender}
//             </div>
//             <div>
//                 I am {props.isAdult}
//             </div>
//         </>
//     )
// }

export default function Profile() {
    return (
        <Card>
            <Avatar person={
                {
                    name: "alice",
                    gender: "girl"
                }
            }
            isAdult="an adult" />
            <Avatar person={
                {
                    name: "bob",
                    gender: "boy"
                }
            }
            isAdult="not an adult" />
            <Avatar person={
                {
                    name: "chuck",
                    gender: "boy"
                }
            } />
        </Card>
    )
}