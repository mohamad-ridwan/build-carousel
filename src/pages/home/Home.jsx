import React, { useState, useEffect } from 'react'
import {useSwipeable} from 'react-swipeable'
import './Home.scss'
import Carousel from '../../components/carousel/Carousel'

function Home() {
    const [data, setData] = useState([
        {
            txt: 'text1'
        },
        {
            txt: 'text2'
        },
        {
            txt: 'text3'
        }
    ])
    const [activeIdx, setActiveIdx] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            clickBtn(activeIdx + 1)
        }, 3000);

        return ()=>{
            if(interval){
                clearInterval(interval)
            }
        }
    })

    function clickBtn(i) {
        if (i < 0) {
            setActiveIdx(2)
        } else if (i < 3) {
            setActiveIdx(i)
        } else if (i >= 3) {
            setActiveIdx(0)
        }
    }

    const handlers = useSwipeable({
        onSwipedLeft: ()=> clickBtn(activeIdx + 1),
        onSwipedRight: ()=> clickBtn(activeIdx - 1)
    })


    return (
        <>
            <div {...handlers} className="carousel">
                <div className="inner" style={{
                    transform: `translateX(-${activeIdx * 100}%)`
                }}>
                    {data.map((e, i) => {
                        return (
                            <Carousel key={i} txt={e.txt} />
                        )
                    })}
                </div>
                <button onClick={() => {
                    clickBtn(activeIdx - 1)
                }}>
                    Prev
                </button>
                {data.map((e, i) => {
                    return (
                        <button style={{
                            backgroundColor: i === activeIdx ? '#000' : '#aaa',
                            color: i === activeIdx ? '#fff' : '#000'
                        }} onClick={() => {
                            clickBtn(i)
                        }}>{i + 1}</button>
                    )
                })}
                <button onClick={() => {
                    clickBtn(activeIdx + 1)
                }}>
                    Next
                </button>
            </div>
        </>
    )
}

export default Home