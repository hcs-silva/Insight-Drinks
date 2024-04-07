const Servicos = () => {
    const handleClick = (e) => {
        console.log(e);
      };
      
return ( 
    <div className="card">
        <img src="./Serviços.jpeg" alt="" className="icon"/>
        <button className="button" onClick = {handleClick}>Os Nossos Serviços</button>        
    </div>
);

};

export default  Servicos;