import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <h1 className="rtime-head">RTime</h1>
    </div>
    <div className="other-container-header">
      <Link to="/" className="remainingtime-link">
        Remaining Time
      </Link>
      <Link to="/currenttime" className="normal-time">
        Current Time
      </Link>
    </div>
  </div>
)

export default Header
