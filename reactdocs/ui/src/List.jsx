// Conditional Rendering

function Item({ name, isAvail }) {
    // let item = (
    //     <li>
    //         {name}
    //     </li>
    // )
    // if (!isAvail) item = (
    //     <li>
    //         {name + " out of stock"}
    //     </li>
    // )
    // return item

    let item = name
    if (!isAvail) item = name + " out of stock"
    return (
        <li>
            {item}
        </li>
    )
}

// function Item({ name, isAvail }) {
//     if (!isAvail) return <li>{name  + " out of stock"}</li>
//     return <li>{name}</li>
// }

// function Item({ name, isAvail }) {
//     return (
//         <li>
//             { isAvail ? (
//                 name 
//             ) : (
//                 <del>
//                     { name + ' out of stock'}
//                 </del>
//             )}
//         </li>
//     )
// }

// function Item({ name, isAvail }) {
//     return (
//         <li>
//             { name } { !isAvail && " out of stock" }
//         </li>
//     )
// }

export default function List() {
    return (
        <>
            <h1>Shopping List</h1>
            <ul>
                <Item 
                name="Coffee"
                isAvail={true} />
                <Item 
                name="Tea"
                isAvail={false} />
                <Item 
                name="Coca-Cola"
                isAvail={true} />
            </ul>
        </>
    )
}