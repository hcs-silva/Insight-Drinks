const World = () => {
    const handleClick = (e) => {
        console.log(e);
      };

return ( 
    <div>
        <img src="./Insight.jpeg" alt="" className="icon"/>
        <h1 onClick = {handleClick}>Insight Drinks World</h1>        
    </div>
);

};

export default  World;