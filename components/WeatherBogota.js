import Image from 'next/image'

const WeatherBogota = ({props}) => {
    return (
        <>
            <div id="jumbo" className="p-5 mb-4 bg-light rounded-3 border border-3 rounded-pill">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Temperatura actual en Bogotá</h1>
                    <h1>
                    {
                        props.bogota.main.temp
                    }°    
                    </h1> 
                </div>
            </div>
        </>
    )
}

export default WeatherBogota;