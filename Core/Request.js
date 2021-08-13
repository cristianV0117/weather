const superagent = require('superagent')
export default class Request
{
    async bogota()
    {
        const bogotaResponse = await superagent.get(`https://api.openweathermap.org/data/2.5/weather?q=bogota&units=metric&appid=${process.env.API}`).then(res => {
            return res.body
        })

        return bogotaResponse
    }

    async forecast()
    {
        const forecastBogotaResponse = await superagent.get(`https://api.openweathermap.org/data/2.5/forecast?q=bogota&units=metric&cnt=20&appid=${process.env.API}`).then(res => {
            return res.body
        })

        return forecastBogotaResponse
    }

    async france()
    {
        const franceResponse = await superagent.get(`https://api.openweathermap.org/data/2.5/weather?q=francia&units=metric&cnt=20&appid=${process.env.API}`).then(res => {
            return res.body
        })

        return franceResponse
    }
}
