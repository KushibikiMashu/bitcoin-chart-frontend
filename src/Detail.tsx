import React from 'react'
import Usage from './Usage'
import Author from './Author'

const Detail: React.FC = () => (
  <div className="py-5" style={{ paddingBottom: 1 }}>
    <div className="container">
      <Usage />
      <Author />
    </div>
  </div>
)

export default Detail
