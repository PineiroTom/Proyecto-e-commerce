import React from 'react'
import CounterContainer from '../../common/counter/CounterContainer'

const ItemDetail = ({item}) => {
  return  (
  <div>
    <h1>{item.title}</h1>

    <CounterContainer />
  </div>
  )
}

export default ItemDetail