const Team = () => {
    const handleClick = (e) => {
        console.log(e);
      };
      
return ( 
    <div className="card">
        <img src="./Team.jpeg" alt="" className="icon"/>
        <button onClick = {handleClick}>A Nossa Equipa</button>        
    </div>
);

};

export default  Team;