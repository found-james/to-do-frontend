
export default function Completed ({ doneList, displayTodo }){

    return(
        <>
            <h3>Completed</h3>
            <ul>
                {
                    doneList.map(displayTodo)
                }
                </ul>

        </>
    )
}