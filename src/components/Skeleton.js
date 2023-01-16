
function Skeleton({times}){
const boxes =[]
    for (let i=0; i<times;i++){
        boxes.push(<div key={i}></div>)
    }
    return boxes
}

export default Skeleton
