
export default function List ({ data, displayList }) {
    return (
        <>
            <h3>To do list</h3>
            <ul>
                {
                    data.map(displayList)
                }
            </ul>
        </>
    )
}