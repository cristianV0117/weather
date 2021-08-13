const Forecast = (props) => {
    let days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let data = [];
    for (let index = 0; index < props.props.forecast.list.length; index++) {
        if (props.props.forecast.list[index]['dt_txt'].includes('15:00:00')) {
            let date = new Date(props.props.forecast.list[index].dt_txt)
            props.props.forecast.list[index]["date"] = days[date.getDay()]
            data.push(props.props.forecast.list[index])
        }
    }
    return (
        <>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <div id="cardOne" className="card rounded-pill">
                        <center>
                            <h4>
                            <p className="mt-5">
                                Pronostico de Bogotá en los proximos 3 días
                            </p>
                            {
                                data.map(item => (
                                    <li className="mt-3" key={item.dt}>{item.date}: {item.main.temp}°</li>
                                ))
                            }
                            </h4>
                        </center>
                        <br />
                    </div>
                </div>
                <div className="col-md-6">
                <div id="cardTwo" className="card rounded-pill">
                        <center>
                            <h4>
                            <p className="mt-5">
                                Temperatura actual de francia
                            </p>
                            {
                                props.props.francia.main.temp
                            }°
                            </h4>
                        </center>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Forecast