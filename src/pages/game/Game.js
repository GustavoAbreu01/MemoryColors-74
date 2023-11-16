import React, { useEffect, useState } from 'react'
import './Game.css'
import Swal from 'sweetalert2'

function Game() {

    const [sequence, setSequence] = useState([])
    const [userSequence, setUserSequence] = useState([])
    const [score, setScore] = useState(1)

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
                Swal.fire({
                    title: "Você errou! Tente novamente!",
                    showConfirmButton: false,
                    timer: 1000,
                    icon: "error",
                });
                setUserSequence([])
                setScore(0)
                generateSequence()
            } else {
                Swal.fire({
                    title: `Parabéns! Você acertou! ${score}`,
                    showConfirmButton: false,
                    timer: 1000,
                    icon: "success"
                });
                setScore(score + 1)
            }
        }
    }

    useEffect(() => {
        generateSequence()
    }, [])

    return (
        <div className='container_game'>
            <div className='box_game'>
                <div className='primary_layer'>
                    <div onClick={() => colorSequence("blue")} className='box_color blue'></div>
                    <div onClick={() => colorSequence("red")} className='box_color red'></div>
                </div>
                <div className='detail_game'></div>
                <div className='secondary_layer'>
                    <div onClick={() => colorSequence("yellow")} className='box_color yellow'></div>
                    <div onClick={() => colorSequence("green")} className='box_color green'></div>
                </div>
            </div>
        </div>
    )
}

export default Game