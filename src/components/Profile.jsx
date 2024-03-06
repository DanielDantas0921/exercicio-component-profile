

export function Profile(props){

    return (
        <div className="card">
          <img src="./src/assets/foto-perfil.webp" alt="imagem do perfil" className="img-profile" />  
          <h2>Alana Moraes</h2>
          <hr />
          <p>Fullstack javascript developer at Acme Inc. </p>
          <hr />
          <p>+5583991559004</p>
          <hr />
          <p>Alana.moraes28@email.com</p>
          <hr />
          <button className="btn first">GitHub</button>
          <button className="btn">Linkedln</button>
          <button className="btn last">Twitter</button>

        </div>  
    )


}