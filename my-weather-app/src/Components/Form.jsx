import { useState, useEffect } from 'react'
// import Content from './Components/Content'


export default function Form({ setInfo }, { }) {


    const [formData, setFormData] = useState({ cool: "" })

    const [api, setApi] = useState()




    useEffect(
        () => {

            console.log("Use effect");
            formData.cool === "" ? null :
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formData.cool}&units=metric&appid=274e3ff611a6d0859f5a7a258a70fe1e`)
                    .then(res => res.json())
                    .then(data => setApi(data))

        },

        [formData])

    function handleChange(event) {

        const { name, value } = event.target

        setFormData((prevForm) => {
            return {
                ...prevForm,
                [name]: value
            }
        })



    }

    // console.log(formData.cool)


    function submit(e) {
        e.preventDefault()
        console.log(api)
        setInfo({
            temp: api.main.temp,
            desc: api.weather[0].description,
            place: api.name,
        })
    }

    // function handleKeyUp(e) {
    //     if (e.code === "Enter") {
    //         console.log(api)
    //         setInfo({
    //             temp: api.main.temp,
    //             desc: api.weather[0].description,
    //             place: api.name,
    //         })
    //     }

    // }


    return (
        <div>
            <form onSubmit={submit}>
                <div className="form">

                    <input type="text"
                        className="input"
                        name="cool"
                        value={formData.name}
                        placeholder="Enter location here..."
                        onChange={handleChange}
                    // onKeyUp={handleKeyUp}
                    />

                    <i className="fa-solid fa-magnifying-glass search " onClick={submit}  ></i>
                </div>

            </form>
        </div>




    )
}