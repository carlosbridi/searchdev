import React, { useState } from 'react';

import './global.css'; 
import './app.css'; 
import './sidebar.css';

import './Main.css';

function App() {
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
           <div class="input-block">
            <label htmlFor="github_username">Usuário github</label>
            <input name="github_username" id="github_username" required></input>
          </div>
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          
          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>    
            <div class="input-block">
              <label htmlFor="Longitude">Longitude</label>
              <input name="Longitude" id="Longitude" required></input>
            </div>
          </div>
        <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>

        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/7713044?s=400&u=cc58af0b2dede2798572e8f31001b56a73971666&v=4" alt="Carlos Bridi"/>

              <div className="user-info">
                <strong>Carlos Bridi</strong>
                <span>ReactJs, RN, Node</span>
              </div>
            
            </header>
            <p>Teste</p>
            <a href="https://github.com/carlosbridi">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/7713044?s=400&u=cc58af0b2dede2798572e8f31001b56a73971666&v=4" alt="Carlos Bridi"/>

              <div className="user-info">
                <strong>Carlos Bridi</strong>
                <span>ReactJs, RN, Node</span>
              </div>
            
            </header>
            <p>Teste</p>
            <a href="https://github.com/carlosbridi">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/7713044?s=400&u=cc58af0b2dede2798572e8f31001b56a73971666&v=4" alt="Carlos Bridi"/>

              <div className="user-info">
                <strong>Carlos Bridi</strong>
                <span>ReactJs, RN, Node</span>
              </div>
            
            </header>
            <p>Teste</p>
            <a href="https://github.com/carlosbridi">Acessar perfil no github</a>
          </li>
        </ul>

      </main>
    </div>  
  );
}

export default App;
