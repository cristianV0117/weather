import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloudflare
} from '@fortawesome/free-brands-svg-icons'
import { faCloudRain, faSun } from '@fortawesome/free-solid-svg-icons';


const WeatherBogota = ({props}) => {
    let icon;
    if (props.bogota.weather[0].main == 'Clouds') {
        icon = faCloudflare
    } else if (props.bogota.weather[0].main == 'Clear') {
        icon = faCloudRain
    } else {
        icon = faSun
    }
    return (
        <>
            <hr />
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark rounded-3 border border-3 rounded-pill shadow-lg">
                <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">Temperatura actual en Bogotá</h1>
                    {   <div>
                        <FontAwesomeIcon icon={icon} />
                        <h1><a href="#" className="text-white fw-bold">{props.bogota.main.temp}°</a></h1>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default WeatherBogota;