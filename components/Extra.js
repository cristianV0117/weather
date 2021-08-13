import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudflare} from '@fortawesome/free-brands-svg-icons'
import { faCloudRain, faSun } from '@fortawesome/free-solid-svg-icons';

const Forecast = (props) => {
    let days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let data = [];
    let i = 0;
    for (let index = 0; index < props.props.forecast.list.length; index++) {
        if (props.props.forecast.list[index]['dt_txt'].includes('15:00:00')) {
            i++;
            if (i < 4) {
                let date = new Date(props.props.forecast.list[index].dt_txt)
                props.props.forecast.list[index]["date"] = days[date.getDay()]
                data.push(props.props.forecast.list[index])
            }
        }
    }
    let icon;
    if (props.props.francia.weather[0].main == 'Clouds') {
        icon = faCloudflare
    } else if (props.props.francia.weather[0].main == 'Clear') {
        icon = faCloudRain
    } else {
        icon = faSun
    }
    return (
        <>
            <hr />
            <div className="row mb-2 cardeable">
                <div className="col-md-6">
                    <div className="shadow-lg row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-dark">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Pronostico de 3 días</h3>
                            <hr />
                            <ul className="list-group">
                            {
                                data.map(item => (
                                    <li key={item.dt} className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{item.date}</div>
                                        </div>
                                        <span className="badge bg-primary rounded-pill">{item.main.temp}°</span>
                                    </li>
                                    
                                ))
                            }       
                            </ul>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img width="300" height="250" src="/bogota.jpg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="bg-dark shadow-lg row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Temperatura actual de Francia</h3>
                            <hr />
                            {
                                <div>
                                    <FontAwesomeIcon icon={icon} />
                                    <h1>{props.props.francia.main.temp}°</h1>
                                </div>
                            }
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img width="300" height="250" src="/cardTwo.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Forecast