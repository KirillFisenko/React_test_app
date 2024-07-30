import React, { useState } from 'react';

const ContentItem = (props) => {
    const [backgroundImage, setBackgroundImage] = useState('');

    const handleButtonClick = (imageUrl) => {
        setBackgroundImage(imageUrl);
    };
    const imgUrls = ["https://randomwordgenerator.com/img/picture-generator/54e9d5414c5aaa14f1dc8460962e33791c3ad6e04e507440742a7ed0954ac1_640.jpg",
        "https://randomwordgenerator.com/img/picture-generator/53e1d7444d53af14f1dc8460962e33791c3ad6e04e507440742a7ad19f4cc0_640.jpg",
        "https://randomwordgenerator.com/img/picture-generator/55e0d3414a51a814f1dc8460962e33791c3ad6e04e507440702d79d3944ecd_640.jpg",
        "https://randomwordgenerator.com/img/picture-generator/54e9d447425aae14f1dc8460962e33791c3ad6e04e5074417c2f7cd39e4dc4_640.jpg",
        "https://randomwordgenerator.com/img/picture-generator/54e2d1404a50ab14f1dc8460962e33791c3ad6e04e507440762a7cd1964ec5_640.jpg"
    ];
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }}>
            {props.setOfLabels.map((item, index) =>
                <div key={item.id} className="card m-3">
                    <img src={imgUrls[index]} className="card-img-top" alt="Изображение" />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.body}</p>
                        <button onClick={() => handleButtonClick(imgUrls[index])} className="btn btn-primary">Сделать фоном</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContentItem;
