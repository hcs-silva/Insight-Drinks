const Company = () => {
    const handleClick = (e) => {
        console.log(e);
      };
      
return ( 
    <div className="card">
        <img src="./world.jpeg" alt="" className="icon"/>
        <button className="button" onClick = {handleClick}>A Nossa Empresa</button>        
    </div>
);

};

export default  Company;