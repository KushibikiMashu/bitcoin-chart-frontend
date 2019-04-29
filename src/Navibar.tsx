import React from 'react'

const Navibar: React.FC = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary text-left">
    <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="">
        <i className="fa d-inline fa-lg fa-bitcoin" />
        <span className="h3 mb-0">itcoin Chart</span>
      </a>
      <div className="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent" />
    </div>
  </nav>
)

export default Navibar
