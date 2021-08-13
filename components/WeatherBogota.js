import Image from 'next/image'

const WeatherBogota = ({props}) => {
    return (
        <>
            <hr />
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark rounded-3 border border-3 rounded-pill shadow-lg">
                <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">Temperatura actual en Bogotá</h1>
                    {
                        <h1><a href="#" className="text-white fw-bold">{props.bogota.main.temp}°</a></h1>
                    }
                </div>
            </div>
        </>
    )
}

export default WeatherBogota;