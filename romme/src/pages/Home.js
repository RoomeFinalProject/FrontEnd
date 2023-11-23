/* eslint-disable */
import React, { useState } from 'react'; // useState를 가져오기


function Home(){
    let post = '강남 우동 맛집'

    return(
        <div className='bodyContainer'>
            홈화면 {post}
            <div className='textBox'>
                <div>
                금융으로 전문학습된 AI가 
                여러분들의 투자를 도와드립니다
                AI가관리하고
                AI가도와주는
                금융 전문오픈채팅방 룸메
                </div>
            </div>
            <div className='CardContainer'>
                <div className='card'>
                    유튜브요약
                </div>
                <div className='card'>
                    리서치요약
                </div>
            </div>
            <div className='CardContainer'>
                <div className='card'>
                    오픈채팅방
                </div>
                <div className='card'>
                    도와줘룸메
                </div>
            </div>

            
        </div>
    )
}

export default Home