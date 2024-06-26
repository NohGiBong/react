import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>물 끓음</p>
    }
    return <p>안 끓음</p>
}


// 화씨 -> 섭씨 변환
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
// 섭씨 -> 화씨 변환
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseInt(temperature);
    if(Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}

function Calculator() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;

    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;



        return (
        <div>
            <TemperatureInput scale="c" temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale="f" temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
            <br />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;