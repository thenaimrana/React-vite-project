//class-22 Click Event Handlare

const ClickEvent = () => {
    // Rules-3
    const clickEvent =()=>{alert("clicked! 3 Button")}
    return (
        <div>

        <h1>Button Click Alert Show </h1>

        {/* Rules-1 */}
        <button onClick={()=>alert("clicked! 1 Button")}>Click Me-1</button>
        {/* Rules-2 */}
        <button onClick={
            function demo(){
                alert("clicked! 2 Button")
            }
        }>Click Me-2</button>

        {/* Rules-3 */}
        <button onClick={clickEvent}>Click Me-3</button>

        </div>
    );
};

export default ClickEvent;