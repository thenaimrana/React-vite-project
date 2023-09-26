
const Header = () => {
    return (
        <div>
            <ul style={
                {listStyle:"none",
                 display:"flex",
                  margin:"20px",
                  background:"pink",
                  padding:"20px",
                }
                }>
                <li style={{marginLeft:"25px"}}>Home</li>
                <li style={{marginLeft:"25px"}}>Home</li>
                <li style={{marginLeft:"25px"}}>Home</li>
                <li style={{marginLeft:"25px"}}>About</li>
                <li style={{marginLeft:"25px"}}>Blogs</li>
                <li style={{marginLeft:"25px"}}>Servics</li>
                <li style={{marginLeft:"25px"}}>Page</li>
                <li style={{marginLeft:"25px"}}>Others</li>
            </ul>
        </div>
    );
};

export default Header;