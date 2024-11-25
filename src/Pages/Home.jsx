import React from "react";
import "./Home.css";
function Home({ char }) {
  console.log(char);
  return (
    <>
      <h1 style={{textAlign:"center", color:"white"}}>Hayri Pıtır Sitem</h1>
      <div className="parentDiv">
        {char ? (
          char.map((char) => {
            return (
              <div>
                
                  <div class="card">
                    <div class="wrapper">
                      <img src={char.image} class="cover-image" />
                    </div>
                    <h1>{char.fullName}</h1>
                    <img src={char.image} class="character" />
                  </div>
                
              </div>
            );
          })
        ) : (
          <div className="tecxt">Yükelniyor</div>
        )}
      </div>
    </>
  );
}

export default Home;
