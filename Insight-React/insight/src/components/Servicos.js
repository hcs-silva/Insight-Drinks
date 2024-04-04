const Servicos = () => {
    const handleClick = (e) => {
        console.log(e);
      };
      
return ( 
    <div>
        <img src="./Serviços.jpeg" alt="" className="icon"/>
        <button onClick = {handleClick}>Os Nossos Serviços</button>        
    </div>
);

};

export default  Servicos;