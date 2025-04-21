export function Greeting() {
    return <div> Hello World </div>
}

export default function Greetings() {
    return (
        <div>
            <Greeting />
            <Greeting />
            <Greeting />
        </div>
    )
}