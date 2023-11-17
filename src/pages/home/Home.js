import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container_home'>
        <div className='container_info'>
            <p className='title_game'>Memory Color - Regras</p>
            <p className='text_info'>O principal objetivo do jogo é repetir corretamente as sequências de cores apresentadas, 
              aumentando progressivamente a dificuldade à medida que o jogador avança. Cada cor 
              corresponde a uma ação que o jogador deve replicar para acumular pontos e progredir no jogo.</p>
            <p className='subtitile_game'>Mecânica do jogo</p>
            <p className='text_info'>O jogo é composto por quatro cores principais: azul, vermelho, amarelo e verde. 
              Cada uma dessas cores está associada a uma caixa correspondente na tela. O jogo começa 
              com uma sequência simples dessas cores, que o jogador deve reproduzir clicando nas caixas na 
              ordem correta.</p>
              <Link to='/game' className='btn_init_game'>Iniciar</Link>
        </div>
    </div>
  )
}

export default Home