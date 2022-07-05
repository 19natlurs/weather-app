import Header from './Components/Header'
import Form from './Components/Form'
import Content from './Components/Content'
import { useState } from 'react'



export default function App() {


    const [info, setInfo] = useState({
        temp: "X",
        desc: " Weather description",
        place: "City name",
    });



    // console.log(info)

    return (
        <div>
            <Header />
            <Form setInfo={setInfo} />
            <Content info={info} />
        </div>
    )
}