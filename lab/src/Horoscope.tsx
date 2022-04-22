import TextBox from "./TextBox";
import React, {useState} from 'react';
import axios from "axios";
// @ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
function Horoscope() {
    const [traits, setTraits] = useState([]);
    const [sun, setSun] = useState("Sun Sign");
    const [moon, setMoon] = useState("Moon Sign");
    const [rising, setRising] = useState("Rising Sign");
    type message = {
        sun: string;
        moon: string,
        rising: string
    }
    const requestHoroscope = () => {
        const toSend : message = {
            sun: sun,
            moon: moon,
            rising: rising
        }
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }
        axios.post("http://localhost:4567/horoscope", toSend, config).then((response) => {
            console.log(response.data);
            setTraits(response.data['horoscope']);
        }).catch(e => {
            console.log(e);
        })
    }
    return (
        <div className="Horoscope">
            <header className="App-header">
                <TextBox label={"Sun Sign"} change={setSun}/>
                <TextBox label={"Moon Sign"} change={setMoon}/>
                <TextBox label={"Rising Sign"} change={setRising}/>
                <AwesomeButton onPress={() => requestHoroscope()}>submit</AwesomeButton>
                <div>{traits.map((trait) => <p>{trait}</p>)}</div>
            </header>

        </div>
    );
}
export default Horoscope;
