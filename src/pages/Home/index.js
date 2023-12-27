import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../../theme';
import { Container } from './styles';

import Logo from '../../assets/logo.png';
import PlayersImg from '../../assets/players.png';
import ProfileImg from '../../assets/profile.png';

import Card from '../../components/Card';
import CardImg1 from '../../assets/card-img-1.png';
import CardImg2 from '../../assets/card-img-2.png';
import CardImg3 from '../../assets/card-img-3.png';

const Home = () =>{

    const [theme, setTheme] = useState("light");
    const isDarkTheme = theme === "dark";
    const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

    return(
        <Container>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyles />
            <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#423EBD"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={Logo} />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Jogos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">App</a>
                            </li>
                            <li class="nav-item">
                                <button className='btn' onClick={toggleTheme}>
                                    {isDarkTheme ?
                                    <span aria-label="Light mode" role="img">🌞</span> :
                                    <span aria-label="Dark mode" role="img">🌜</span>}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <div className='wrapper'>
                <header>
                    <h1>Counter-Strike 2 é lançado pela Valve, veja requisitos do Jogo</h1>
                    <p className='primary'>O Counter-Strike 2 é uma atualização gratuita para o CS:GO. Portanto, monte o seu arsenal, aperfeiçoe as suas habilidades e prepare-se para o que está por vir!</p>

                    <div className='author'>
                        <div className='author-img'>
                            <img src={ProfileImg} alt='Foto Perfil Autor' />
                        </div>

                        <div className='author-desc'>
                            <p className='secondary' style={{fontWeight: '500'}} >Julia Doe</p>
                            <p className='secondary'>Jun 27 2023</p>
                        </div>
                    </div>
                </header>

                <div className='div-image'>
                    <img src={PlayersImg} className='players' />
                    <p className='secondary'>Créditos: Imagem/ Reprodução Valve</p>
                </div>
            </div>
            
            <div className='blogs'>
                <h1 className='text-center'>Blogs</h1>
                <section>
                        <Card 
                            cardImage={CardImg1}
                            cardTitle="VALORANT | TenZ critica novo duelista Iso"
                            cardText="O novo duelista Iso já tem se tornado o favorito de muitos jogadores mas também recebeu muitas críticas de outros."
                        />

                        <Card 
                            cardImage={CardImg2}
                            cardTitle="Forza Motorsport é o ápice da franquia em gráficos e gameplay"
                            cardText="Versão de teste do novo game da Turn 10 Studios deu sinais extremamente promissores"
                        />

                        <Card 
                            cardImage={CardImg3}
                            cardTitle="FIFA 24 tem menor volume de buscas dos últimos 8 anos"
                            cardText="FIFA 19, jogo que marcou a chegada da Champions League foi o título que despertou maior interesse"
                        />

                </section>
            </div>

            <footer className='mb-5'>
                <h2>Cadastre se em nossa Newsletter</h2>
                <form>
                    <input type='text' placeholder='Seu Nome' className='name' />
                    <input type='email' placeholder='Email' className='email' />
                    <button type='submit' className='btn' style={{backgroundColor:'#423EBD'}}>Cadastrar</button>
                </form>
            </footer>
        </ThemeProvider>
        </Container>
    );
}

export default Home;