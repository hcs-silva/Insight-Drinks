const Team = () => {
    const handleClick = (e) => {
        console.log(e);
      };
      
return ( 
    <div>
        <img src="./Team.jpeg" alt="" className="icon"/>
        <h1 onClick = {handleClick}>A Nossa Equipa</h1>        
    </div>
);

};

export default  Team;