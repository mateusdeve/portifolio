import React from 'react'
import './styles.css';
import Header from '../../components/Header';
import Grid from '@material-ui/core/Grid';

import perfil from '../../assets/img/perfil.jpg';
import github from '../../assets/img/github.png'
import linkedin from '../../assets/img/linkedin.png'
import html from '../../assets/img/htmlt.png'
import css from '../../assets/img/css.png'
import js from '../../assets/img/js.png'
import react from '../../assets/img/react.png'
import xd from '../../assets/img/xd.png'
import boneco from '../../assets/img/boneco.png'
import feirao from '../../assets/img/feirao.jpg'
import vulcano from '../../assets/img/vulcano.jpg'

import githubIcon from '../../assets/img/githubIcon.png'
import instagramIcon from '../../assets/img/instagramIcon.png'
import linkedinIcon from '../../assets/img/linkedinIcon.png'
import facebookIcon from '../../assets/img/facebookIcon.png'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Typed from 'react-typed';

const Home = () => {
    return (
        <>
            <div className="secao1">
                <Header />
                <div className="group">
                    <div className="centralizar-nome">
                        <h1 className="nome">Mateus Pires</h1>
                    </div>
                    <div className="buttons">
                        <Button className="button" variant="contained">SOBRE</Button>
                        <Button className="button" style={{marginLeft: 30}}variant="contained">CONTATO</Button>
                    </div>
                </div>
            </div>
            <div className="secao2">
                <Grid item xs={12} sm={6} className="inline">
                    <div className="solt"></div>
                    <div className="sobre" id="sobre">
                        <h1 style={{margin:0}}>Sobre</h1>
                        <hr/>
                        <p className="corpoSobre">Sou desenvolvedor Front - End. <br/> 
                            Acho que a tecnologia deve melhorar a vida
                            das pessoas e estou sempre estudando para
                            aprimorar meus conhecimentos, superar
                            novos desafios e fazer o melhor possível
                            em todas as criações.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className="inline">
                    <div className="cardContainer">
                        <Card className="card">
                            <CardContent className="contentCard">
                                <img src={perfil}  className="perfil" alt=""/>
                            </CardContent>
                                <p className="titulo">Mateus Pires</p>
                                <div className="groupContact">
                                    <div style={{marginTop: 20}}>
                                        <img className="icon" src={github} alt=""/>
                                        <a  href="https://github.com/mateusdeve">github.com/mateusdeve</a>
                                    </div>
                                    <div style={{marginTop: 40}}>
                                        <img className="icon" src={linkedin} alt=""/>
                                        <a  href="https://linkedin.com/in/mateussilveirapires">linkedin.com/mateussilveirapires</a>
                                    </div>
                                </div>
                        </Card>
                    </div>
                    <div className="cardSolt"></div>

                </Grid>
            </div>
            <div className="secao3">
                <div className="tec">
                    <h1>Tecnologias</h1>
                </div>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <div className="back">
                            <h1>BACK-END</h1>
                            <div className="groupBack">
                                <Typed
                                strings={[
                                    '$ Node.JS <br /><br /> Express.js <br /><br /> MongoDB <br /><br /> MySQL <br /><br /> PostegreSQL ',
                                ]}
                                    typeSpeed={90}
                                    loop
                                    loopCount={2}
                                    className="typedFont"
                                    >
                                </Typed>
                            </div>
                        </div>
                    </Grid>
                    <Grid item item xs={12} sm={6}>
                        <div className="front">
                            <h1>FRONT-END</h1>
                            <div className="groupFront">
                                <img src={html} alt=""/>
                                <img className="spacoee" src={css} alt=""/>
                                <img className="spacoee" src={js} alt=""/>
                            </div>
                                <div className="groupFront">
                                    <img className="width" src={react} alt=""/>
                                    <img className="spacoee width" src={xd} alt=""/>
                                </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="secao4">
                <div className="comen">
                    <h1>Contato</h1> 
                </div>
                <Grid container>
                    <Grid item xs={6} className="imgComentario">
                        <Grid container>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={7}>
                            <div>
                                <img src={boneco} className="boneco" alt=""/>
                            </div>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={6}
                    justify="center"
                    alignItems="center">
                        <Grid item xs={7} style={{paddingTop: 50}}>
                            <div>
                                <p style={{padding: 10}}>
                                    <strong> Telefone: </strong>
                                    <a style={{textDecoration: 'none', color: 'black'}} href="">(61) 9 8428-8058</a> 
                                </p>
                                <p style={{padding: 10}}>
                                    <strong> Instagram: </strong>
                                     <a style={{textDecoration: 'none', color: 'black'}} href="https://www.instagram.com/mateuzzp/"> mateuzzp</a>
                                </p>
                                <p style={{padding: 10}}>
                                    <strong> Facebook: </strong>
                                     <a style={{textDecoration: 'none', color: 'black'}} href="https://www.facebook.com/mateus.silveirapires/">Mateus Pires</a> 
                                </p> 
                                <p style={{padding: 10}}>
                                    <strong> Email: </strong>
                                     <a style={{textDecoration: 'none', color: 'black'}} href="mailto:mateus.dev.ti@gmail.com">mateus.dev.ti@gmail.com</a> 
                                </p> 
                            </div>
                        </Grid>

                    </Grid>
                </Grid>
            </div>
            <div className="secao5">
                <div className="comen">
                    <h1>Ultimos Projetos</h1>
                </div>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} style={{height: 100}}></Grid>
                    <Grid item xs={10} sm={4} >
                        <Card>
                            <p style={{textAlign: 'center'}}><strong>Feirão modas</strong></p>
                            <CardContent className="cardContent">
                                <a href="https://feiraomodas.com.br/" target="_blanck">
                                    <img src={feirao} className="imgCard" alt=""/>
                                </a>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid  className="mtCard" item xs={10} sm={4} style={{marginLeft: 25, marginRight: 25}}>
                        <Card>
                            <p style={{textAlign: 'center'}}><strong>Vulcano</strong></p>
                            <CardContent className="cardContent">
                            <a href="https://beta.yuupe.com/pagina/254/" target="_blanck">
                                <img src={vulcano} className="imgCard" alt=""/>
                            </a>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <footer className="footer">
                <div className="socialGroup">
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <Grid item xs={6} style={{textAlign: 'center'}}>
                            <a href="">
                                <img src={githubIcon} alt="" className="iconGit" />
                            </a>
                            <a href="">
                                <img src={instagramIcon} alt="" className="iconInsta"/>
                            </a>
                            <a href="">
                                <img src={linkedinIcon} alt="" className="iconLink"/>
                            </a>
                            <a href="">
                                <img src={facebookIcon} alt="" className="iconFace"/>
                            </a>
                        </Grid>
                    </Grid>
                </div>
                <div className="nomeApp">
                    <p>Mateus Silveira Pires</p>
                </div>
            </footer>
        </>
    )
}

export default Home;
