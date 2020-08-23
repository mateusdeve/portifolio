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

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
                <Grid item xs={6} className="inline">
                    <div style={{height: 150}}></div>
                    <div className="sobre">
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
                <Grid item xs={6} className="inline">
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

                </Grid>
            </div>
            <div className="secao3">
                <div className="tec">
                    <h1>Tecnologias</h1>
                </div>
                <Grid container>
                    <Grid item xs={6}>
                        <div className="back">
                            <h1>BACK-END</h1>
                            <div className="groupBack">
                                <p>~$ Node.JS</p>
                                <div>
                                    <p> Express.js</p>
                                    <p> MongoDB</p>
                                    <p> MySQL</p>
                                    <p> PostegreSQL |</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
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
                    <h1>Comentarios</h1>
                </div>
                <Grid container>
                    <Grid item xs={6}>
                    <form style={{marginTop:90}}>
                        <Grid container>
                            <Grid item xs={2}></Grid>
                        <Grid item xs={4}>
                            <TextField id="standard-basic" label="Nome" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="standard-basic" label="Titulo" />
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={10} style={{marginTop: 50}}>
                            <TextField
                                id="standard-multiline-static"
                                label="Comentario"
                                multiline
                                rows={4}
                                className="textArea"
                                />
                        </Grid>

                        <Grid item xs={2}></Grid>
                        <Grid item xs={10}>
                            <Button className="button" style={{marginTop:50}} variant="contained">SOBRE</Button>
                        </Grid>
                        </Grid>
                    </form>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={7}>
                            <div>
                                <img src={boneco} className="boneco" alt=""/>
                            </div>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div className="secao5">
            <div className="comen">
                    <h1>Ultimos Comentarios</h1>
                </div>
            </div>
        </>
    )
}

export default Home;
