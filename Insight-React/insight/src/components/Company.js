const Company = () => {
    const handleClick = (e) => {
        console.log(e);
      };
      
return ( 
    <div>
        <img src="./world.jpeg" alt="" className="icon"/>
        <h1 onClick = {handleClick}>A Nossa Empresa</h1>        
    </div>
);

};

export default  Company;