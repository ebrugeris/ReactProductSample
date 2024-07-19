import React, { useState } from 'react'

function ImageStateSample() {

    const [imageSource, setImageSource] = useState("https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg")


    let imageSources = [
        "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kodiak_Brown_Bear.jpg/640px-Kodiak_Brown_Bear.jpg",
        "https://farukyalcinzoo.com/wp-content/uploads/2023/08/ASLAN-HABER.jpg",
        "https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2023/05/05/1138311-834348621.jpg?itok=RPVAuBIp",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Serinus_canaria_-Parque_Rural_del_Nublo%2C_Gran_Canaria%2C_Spain_-male-8a.jpg/1200px-Serinus_canaria_-Parque_Rural_del_Nublo%2C_Gran_Canaria%2C_Spain_-male-8a.jpg"
    ]

    //her butona tıkladığımızda resim rasgele değişsin
    const change = () => {

    }


    return <>
        <button onClick={change}>Change</button>
        <img width={200} height={150} src={imageSource} alt="placeholder" />
    </>
}

export default ImageStateSample