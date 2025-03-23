import React from 'react'

// function Card(props) {
//     console.log(props)

//     return (
//         <>
//             <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
//                 <img
//                     src="https://images.pexels.com/photos/31223301/pexels-photo-31223301/free-photo-of-dramatic-tokyo-skyline-at-twilight-with-tokyo-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                     alt=""
//                     className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
//                 />
//                 <div className="mt-6 mb-2">
//                     <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
//                         {props.title}
//                     </span>
//                     <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
//                 </div>
//                 <p className="text-gray-300">
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
//                     amet
//                 </p>
//             </div>
//         </>
//     )
// }

function Card({ title, desc = "some city" }) {
    // console.log(title, desc)

    return (
        <>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
                <img
                    src="https://images.pexels.com/photos/31223301/pexels-photo-31223301/free-photo-of-dramatic-tokyo-skyline-at-twilight-with-tokyo-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
                />
                <div className="mt-6 mb-2">
                    <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                        { title }
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">{ desc }</h2>
                </div>
                <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
                    amet
                </p>
            </div>
        </>
    )
}

export default Card