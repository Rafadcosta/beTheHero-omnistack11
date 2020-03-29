import React from 'react';
// import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import sigImg from '../../assets/log-in.svg';

export default function Logon(){
    return (
        <div className="logon-Container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"/>
                    <button type="submit">Entrar</button>

                    <a href="/register">
                        <img src={sigImg} alt="Be The Hero" /> 
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}