import React, { useEffect, useState } from "react";
import BinaryDigit from "./BinaryDigit";
import updateClock from "./UpdateClock";

function BinaryClock() {
    const [hTwo, setHTwo] = useState();
    const [hOne, setHOne] = useState();
    const [mTwo, setMTwo] = useState();
    const [mOne, setMOne] = useState();
    const [sTwo, setSTwo] = useState();
    const [sOne, setSOne] = useState();


    const setClock = () => {
        let clockArray = updateClock()
        setHTwo(clockArray[0])
        setHOne(clockArray[1])
        setMTwo(clockArray[2])
        setMOne(clockArray[3])
        setSTwo(clockArray[4])
        setSOne(clockArray[5])
    }

    useEffect(() => {
        setInterval(setClock, 10)
    }, [])

    return <>
        <div className="wrapperHorizontal">
            <BinaryDigit digit={hTwo}/>
            <BinaryDigit digit={hOne}/>
            <h1>:</h1>
            <BinaryDigit digit={mTwo}/>
            <BinaryDigit digit={mOne}/>
            <h1>:</h1>
            <BinaryDigit digit={sTwo}/>
            <BinaryDigit digit={sOne}/>
        </div>
    </>
}

export default BinaryClock;