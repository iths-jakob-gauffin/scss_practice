import React from 'react'

import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="Navigation">
      <input type="checkbox" className="Navigation__Checkbox" id="Navi-Toggle"/>
      <label htmlFor="Navi-Toggle" className="Navigation__Button">MENU</label>

      <div className="Navigation__Background">&nbsp;</div>

      <nav className="Navigation__Nav">
        <ul className="Navigation__List">
          <li className="Navigation__Item">
            <a href="" className="Navigation__Link"><span>01</span>About Natour</a>
          </li>
          <li className="Navigation__Item">
            <a href="" className="Navigation__Link"><span>02</span>Your benefits</a>
          </li>
          <li className="Navigation__Item">
            <a href="" className="Navigation__Link"><span>03</span>Popular tours</a>
          </li>
          <li className="Navigation__Item">
            <a href="" className="Navigation__Link"><span>04</span>Stories</a>
          </li>
          <li className="Navigation__Item">
            <a href="" className="Navigation__Link"><span>05</span>Book new</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
