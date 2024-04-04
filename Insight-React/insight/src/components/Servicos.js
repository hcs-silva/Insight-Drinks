const Servicos = () => {
    const handleClick = (e) => {
        console.log(e);
      };
      
return ( 
    <div>
        <img src="./Serviços.jpeg" alt="" className="icon"/>
        <h1 onClick = {handleClick}>Os Nossos Serviços</h1>        
    </div>
);

};

export default  Servicos;