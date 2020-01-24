import React, {useState, useEffect} from 'react';

function DevForm({onSubmit}) {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  //Toda vez que uma função alterar ou recarregar
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      }, 
      (err) => {
        console.log(err);
      },
      { //Options para a busca da localização
        timeout: 30000
      }
    )
  }, [])  //Pode ser colocado variavel entre o [] e assim que for alterado o valor, será executado

  async function handleSubmit(e){
    e.preventDefault();
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="input-block">
        <label htmlFor="github_username">Usuário github</label>
        <input name="github_username" 
          id="github_username" 
          required
          value={github_username}
          onChange={e=>setGithubUsername(e.target.value)}
        ></input>
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input 
          name="techs" 
          id="techs"
          required
          value={techs}
          onChange={e=>setTechs(e.target.value)}>
        </input>
      </div>
      
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" 
            type="number" 
            id="latitude" 
            required 
            value={latitude} 
            onChange={e => setLatitude(e.target.value)}></input>
        </div>    
        <div className="input-block">
          <label htmlFor="Longitude">Longitude</label>
          <input 
            name="Longitude" 
            type="number" 
            id="Longitude" 
            required 
            value={longitude} 
            onChange={e => setLongitude(e.target.value)}></input>
        </div>
      </div>
    <button type="submit">Salvar</button>

    </form>
  )
}

export default DevForm;