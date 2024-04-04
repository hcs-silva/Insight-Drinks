const Company = () => {
    const handleClick = (e) => {
        console.log(e);
      };
      
return ( 
    <div>
        <img src="./world.jpeg" alt="" className="icon"/>
        <button onClick = {handleClick}>A Nossa Empresa</button>        
    </div>
);

};

export default  Company;