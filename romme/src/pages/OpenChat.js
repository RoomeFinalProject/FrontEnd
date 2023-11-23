/* eslint-disable */
import React, { useState } from 'react'; // useState를 가져오기


function OpenChat(){
    let post = '오픈채팅방은 카카오톡 연결로 해결하였습니다.'

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

export default OpenChat