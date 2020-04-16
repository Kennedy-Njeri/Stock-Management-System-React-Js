import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'


const Alerts = () => {

    const alertContext = useContext(AlertContext)

    return (
      alertContext.alerts.length > 0 && alertContext.alerts.map((alert, index) => (
          <div key={alert.index} className={`alert alert-${alert.type}`}>
              <i className="fas fa-info-circle" /> {alert.msg}
          </div>
      ))
    )
}


export default Alerts