/* eslint-disable */
import React, { useState } from 'react'; // useState를 가져오기


function Help(){
    let post = '도와줘 룸메는 카카오톡 오픈채팅방으로 가버렸습니다.'

    return(
        <div className='bodyContainer'>
            {post}
            <div className='textBox'>
                <div>
                카카오톡 오픈 채팅방을 연결
                </div>
            </div>
        </div>
    )
}

export default Help