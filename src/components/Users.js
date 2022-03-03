import React, { Component, useEffect, useState } from 'react';

import CanvasCards from './CanvasCards';

import './Users.css';

function Users(props) {
    let [user, setUser] = useState({});

    let daniel = {
        name: 'Daniel',
        surname: 'Vera Villalobos',
        job: 'Architect & Digital Director',
        position: 'Rarea Studio - Director & Co-founder',
        website: 'https://rareastudio.com/',
        email: 'daniel@rareastudio.com',
        phone: '+44 (0) 7491784705',
        instagram: 'https://instagram.com/rareastudio/',
        linkedin: 'https://www.linkedin.com/company/rarea-studio',
        whatsapp: 'https://wa.me/447491784705?text=Hi%20Daniel%2C%20nice%20to%20meet%20you%21%20It%27s%20me%20_',
        contacts: '/businessCards/Daniel Vera Villalobos.vcf',
        photo: '/businessCards/DanielVera_photo.jpg',
        color: 'orange',
    }

    let patricia = {
        name: 'Patricia',
        surname: 'Mascarell Llombart',
        job: 'Architect & Textile Artist',
        position: 'Rarea Studio - Director & Co-founder',
        website: 'https://rareastudio.com/',
        email: 'patricia@rareastudio.com',
        phone: '+44 (0) 7460649722',
        instagram: 'https://instagram.com/rareastudio/',
        linkedin: 'https://www.linkedin.com/company/rarea-studio',
        whatsapp: 'https://wa.me/447460649722?text=Hi%20Patricia%2C%20nice%20to%20meet%20you%21%20It%27s%20me%20_',
        contacts: '',
        photo: '/businessCards/PatriciaMascarell_photo.jpg',
        color: 'yellow',
    }

    useEffect(() => {
        console.log(props.user);
        if(props.user === "daniel"){
            setUser(daniel);
        }
        if(props.user === "patricia"){
            setUser(patricia);
        }
    }, [])
    
    return (
        <div>
            <div className="info-cont">
                <div className="interactive-assets">
                    <img className="round profilePic" src={user.photo} alt="Profile Pic" />
                    <div className="info-personal">
                        <h2 className="text-item nameBC">{user.name + " " + user.surname}</h2>
                        <h3 className="text-item">{user.job}</h3>
                        <h4 className="text-item">{user.position}</h4>
                        <p className="text-item">{user.email}</p>
                        <p className="text-item">{user.phone}</p>
                    </div>
                    <div className="icons-cont">
                        <a href={user.instagram} target="_blank"><div className="iconBC instagramBC" placeholder="instagram"></div></a>
                        <a href={user.linkedin} target="_blank"><div className="iconBC linkedinBC" placeholder="linkedin"></div></a>
                        <a href={"mailto:" + user.email} target="_blank"><div className="iconBC emailBC" placeholder="email"></div></a>
                        <a href={user.website} target="_blank"><div className="iconBC webBC" placeholder="web"></div></a>
                        <a href={user.whatsapp} target="_blank"><div className="iconBC whatsappBC" placeholder="whatsapp"></div></a>
                        <a href={user.contacts} download={user.contacts} target="_blank"><div className="round addBC" placeholder="add"></div></a>
                    </div>
                    
                </div> 

            </div>
            <CanvasCards color={user.color}/>
        </div>
    );
}

export default Users;