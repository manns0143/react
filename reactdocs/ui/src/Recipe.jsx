// Keeping Components Pure

// let guests = 0;

// function Cup() {
//     guests = guests + 1

//     return (
//         <h3>
//             Add { guests } cup of water
//         </h3>
//     )
// }

function Cup({ guests }) {
    return (
        <h3>
            Add { guests } cup of water
        </h3>
    )
}

export default function Recipe() {
    return (
        <>
            <Cup guests={1}/>
            <Cup guests={2}/>
            <Cup guests={3}/>
        </>
    )
}