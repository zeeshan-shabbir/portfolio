import React from 'react';
import "./service.css"
import { FaHtml5 } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';
import Fade from 'react-reveal/Fade';

export default function SerCard(props){
    const style = {
        fontSize: 60
      };
    const { data } = props;
 
    return (
        <>
        <Fade bottom duration={2000}>
            <div className="services ">
                <div className="serv-logo center">
                    <FaHtml5 style={style} />
                </div>
                <div className="subserv-h center">
                    <h2>{data.title}</h2>
                </div>
                <div className="serv-para">
                    {data.description}
                </div>
            </div>
            </Fade>
        </>
    )
}
