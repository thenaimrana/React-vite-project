

const props = (props) => {
    return (
        <div>
            <ul style={{display:"flex",listStyle:"none"}}>

            <li>Name: {props.item['name']}</li>
            <li>Age: {props.item['age']}</li>
            <li>Districs: {props.item['Dist']}</li>
            <li>Divition: {props.item['Divition']}</li>
           </ul>
        </div>
    );
};

export default props;