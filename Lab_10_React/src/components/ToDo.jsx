import React from "react";

function ToDo(props) {
    return (
        <div className="blocks">
            <img  src={props.img} alt="Icon" className="block__images"/>
            <h3>{props.title}</h3>
            <p className="images__text">Возьмите предмет номер {props.text}</p>
        </div>
    );
}

export default ToDo;