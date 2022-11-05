const HEAD = (
    <div style={{
        width:"50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        top: "50px",
        position: "absolute",
        right: "-30px"
    }}>
    </div>
)

const BODY = (
    <div style={{
        width:"10px",
        height: "100px",
        background: "black",
        top: "120px",
        position: "absolute",
        right: 0
    }}>
    </div>
)

const RIGHT_ARM = (
    <div style={{
        width:"100px",
        height: "10px",
        background: "black",
        top: "150px",
        position: "absolute",
        right: "-100px",
        rotate:"-30deg",
        transformOrigin:"left bottom"
    }}>
    </div>
)
const LEFT_ARM = (
    <div style={{
        width:"100px",
        height: "10px",
        background: "black",
        top: "150px",
        position: "absolute",
        right: "10px",
        rotate:"30deg",
        transformOrigin:"right bottom"
    }}>
    </div>
)

const RIGHT_LEG = (
    <div style={{
        width:"100px",
        height: "10px",
        background: "black",
        top: "210px",
        position: "absolute",
        right: "-90px",
        rotate:"60deg",
        transformOrigin:"left bottom"
    }}>
    </div>
)

const LEFT_LEG = (
    <div style={{
        width:"100px",
        height: "10px",
        background: "black",
        top: "210px",
        position: "absolute",
        right: "0",
        rotate:"-60deg",
        transformOrigin:"right bottom"
    }}>
    </div>
)

const BODY_PARTS = [
    HEAD, BODY, RIGHT_LEG, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG
]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {


  return (
    <div style={{
        position: 'relative'
    }}>
        {
            BODY_PARTS.slice(0, numberOfGuesses)
        }
        <div style={{height: "50px", width: "10px", background: "black", top: 0, right: 0, position: 'absolute'}}> </div>
        <div style={{height: "10px", width: "200px", background: "black", marginLeft: "120px"}}> </div>
        <div style={{height: "400px", width: "10px", background: "black", marginLeft: "120px"}}> </div>
        <div style={{height: "10px", width:"250px", background: "black"}}></div>
    </div>
  )
}

export default HangmanDrawing