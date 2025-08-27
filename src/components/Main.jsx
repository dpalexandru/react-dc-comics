import React from 'react'
import Card from './Card';

const Main = ({ comics }) => {

  return (
    <main>
      <div className="container">
        <div className="row">

          {/*Iterazione array comics*/}
          {comics.map((comic) => (
            <div className="col-20" key={comic.id}>
              <Card comic={comic} />
            </div>
          ))}
        </div>

        <div className="row align-center">
          <div className="btn-load-more">LOAD MORE</div>

        </div>
      </div>
    </main>
  )
}

export default Main;
