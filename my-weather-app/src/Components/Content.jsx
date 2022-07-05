

export default function Content({ info }) {




    function img(temp) {
        if (temp == "X") return <h2 style={{ color: "white" }}>Search a location for display</h2>
        if (temp <= 10) {

            return <i className="fa-solid fa-snowflake"></i>

        }
        if (temp < 27) {

            return <i className="fa-solid fa-cloud-moon-rain"></i>
        }

        if (temp <= 100) {

            return <i className="fa-solid fa-sun"></i>
        }
    }




    return (
        <div>
            <div className="total">
                <div className="info">
                    <h1 className="temp">{info.temp}<sup>o</sup></h1>
                    <h3 className="location">{info.place}</h3>
                    <h6 className="desc">{info.desc}</h6>


                </div>

                <div className="graphics">
                    <div className="img">
                        {img(info.temp)}
                        {/* <i className="fa-solid fa-snowflake"></i> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

