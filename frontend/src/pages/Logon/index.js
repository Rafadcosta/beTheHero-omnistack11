import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from    '../../services/api';
import './styles.css';

export default function Logon(){

    const[id, setID] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err){
            alert(`Falha ao fazer logon, tente novamente.`);
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID" value={id} onChange={ e => setID(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>
                    
                </form>

                <Link className="back-link"to="/register">
                        <FiLogIn  size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
            </section>
            
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}