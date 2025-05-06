// responding to events

function Button({ children, onClick }) {
    return(
        <button onClick={(e) => {
            // e.stopPropagation() --> when you dont want events to propagate to the parent component
            onClick()
        }}>
            { children }
        </button>
    )
}

function UploadButton() {
    function handleClick() {
        console.log("Uploading Image")
    }

    return(
        <Button onClick={handleClick}>
            Upload Image
        </Button>
    )
}

function PlayButton({ movieName }) {
    return (
        <Button onClick={() => console.log(`Playing ${ movieName }`)}>
            Play { movieName }
        </Button>
    )
}

export default function Toolbar() {
    return (
        <div style={{
            backgroundColor: 'red',
            padding: '16px'
        }}
        onClick={() => console.log("Toolbar clicked")}>
            <PlayButton movieName="Pulp Fiction"/>
            <UploadButton />
        </div>
    )
}