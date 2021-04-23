import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
           <div className='container'>
                <ol className="list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
                    <button className="badge bg-primary rounded-pill" >14</button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
                    <button className="badge bg-primary rounded-pill">1200</button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
                    <button className="badge bg-primary rounded-pill">1400</button>
                </li>
            </ol>
           </div>


        )
    }
}
