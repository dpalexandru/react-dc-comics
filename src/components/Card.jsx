import React from 'react'

const Card = ({ comic }) => {
  const { thumb, title } = comic;
  return (
    <div className="comics-card">
      <img src={thumb}
        alt={title} />
      <h4>{title}</h4>
    </div>
  )
}

export default Card;
