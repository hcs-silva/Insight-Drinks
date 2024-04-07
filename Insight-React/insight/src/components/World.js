const World = () => {
    const handleClick = (e) => {
        console.log(e);
      };

return ( 
    <div className="card">
        <img src="./Insight.jpeg" alt="" className="icon"/>
        <button className="button" onClick = {handleClick}>Insight Drinks World</button>        
    </div>
);

};

export default  World;