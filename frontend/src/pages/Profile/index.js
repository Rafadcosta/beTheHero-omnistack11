import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower } from 'react-icons/fi';
import './styles.css';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, AjudaAê</span>

                <Link className="button" to="/indicentsqnew">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header> 

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong></strong>
                </li>
            </ul>
        </div>
    );
}
