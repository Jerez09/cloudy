import React, { useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

import Context from './../../Context'
import CurrentWeather from './../UI/CurrentWeather'

function WeatherPage() {
    const { weather } = useContext(Context)
    
    useEffect(() => {
        console.log(weather)
    }, [weather])

    return (
        <WeatherPageContainer>
            <CurrentWeather />
        </WeatherPageContainer>
    )
}

export default WeatherPage

const WeatherPageContainer = styled.div``