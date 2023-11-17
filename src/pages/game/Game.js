import React, { useEffect, useState } from 'react'
import './Game.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function Game() {

    const [sequence, setSequence] = useState([])
    const [userSequence, setUserSequence] = useState([])
    const [score, setScore] = useState(0)

    const colors = ['blue', 'red', 'yellow', 'green']

    const generateSequence = () => {
        setTimeout(() => {
            for (let i = 0; i < 2; i++) {
                const random = Math.floor(Math.random() * 4)
                sequence.push(colors[random])
            }
            playSequence(sequence)
        }, 1500)
    }

    const playSequence = (newSequence) => {
        setSequence(newSequence)
        newSequence.forEach((color, index) => {
            setTimeout(() => {
                const box = document.querySelector(`.${color}`)
                box.classList.add('active')
                setTimeout(() => {
                    box.classList.remove('active')
                }, 500)
            }, (index + 1) * 1000)
        })
    }

    const colorSequence = (color) => {
        const box = document.querySelector(`.${color}`)
        box.classList.add('active')
        setTimeout(() => {
            box.classList.remove('active')
        }, 500)
        setUserSequence([...userSequence, color])
        if (userSequence.length === sequence.length - 1) {
            checkSequence(userSequence)
            setUserSequence([])
            generateSequence()
        }
    }

    const checkSequence = (userSequence) => {
        for (let i = 0; i < userSequence.length; i++) {
            if (userSequence[i] !== sequence[i]) {
                setUserSequence([])
                setSequence([])
                setScore(0)
                generateSequence()
                Swal.fire({
                    title: "Você errou! Tente novamente!",
                    showConfirmButton: false,
                    timer: 1000,
                    icon: "error",
                });
                break
            } else {
                Swal.fire({
                    title: `Parabéns! Você acertou! ${score + 1}`,
                    showConfirmButton: false,
                    timer: 1000,
                    icon: "success"
                });
                setScore(score + 1)
            }
        }
    }

    useEffect(() => {
        Swal.fire({
            title: "Bem-vindo ao Genius!",
            text: "Clique em iniciar para começar!",
            confirmButtonColor: "#be9b7b",
            confirmButtonText: "Iniciar",
            background: "#4b3832",
            color: "#fff",
        }).then((result) => {
            if (result.isConfirmed) {
                generateSequence();
            }
        });
    }, [])

    return (
        <div className='container_game'>
            <div>
                <Link to='/' className='btn_start'>Retornar</Link>
            </div>
            <div>
                <p className='score_game'>Pontuação: {score}</p>
            </div>
            <div className='box_game'>
                <div className='primary_layer'>
                    <div onClick={() => colorSequence("blue")} className='box_color blue'>Azul</div>
                    <div onClick={() => colorSequence("red")} className='box_color red'>Vermelho</div>
                </div>
                <div className='detail_game'></div>
                <div className='secondary_layer'>
                    <div onClick={() => colorSequence("yellow")} className='box_color yellow'>Amarelo</div>
                    <div onClick={() => colorSequence("green")} className='box_color green'>Verde</div>
                </div>
            </div>
        </div>
    )
}

export default Game