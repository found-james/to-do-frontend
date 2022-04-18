
export default function Completed ({ data, displayList }){

    return(
        <>
            <h3>Completed</h3>
            <ul>
                {
                    data.map(displayList)
                }
                </ul>

        </>
    )
}