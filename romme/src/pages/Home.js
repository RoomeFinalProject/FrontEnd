/* eslint-disable */
import React, { useState } from 'react'; // useState를 가져오기
import { Link } from 'react-router-dom';


function Home(){
    let post = '강남 우동 맛집'

    return(
        <div className='bodyContainer'>
            홈화면 {post}
            <div className='textBox'>
                <div>
                금융으로 전문학습된 AI가 <br></br>
                여러분들의 투자를 도와드립니다 <br></br>
                AI가관리하고<br></br>
                AI가도와주는<br></br>
                금융 전문오픈채팅방 룸메<br></br>
                </div>
            </div>
            <div className='CardContainer'>
                <Link to='/youtube' className='card no-underline'>
                    유튜브요약
                </Link>
                <Link to='/research' className='card no-underline'>
                    리서치요약
                </Link>
            </div>
            <div className='CardContainer'>    
                <Link to='/openchat' className='card no-underline'>
                    오픈채팅방
                </Link>
                <Link to='/help' className='card no-underline'>
                    도와줘룸메
                </Link>
            </div>

            
        </div>
    )
}

export default Home