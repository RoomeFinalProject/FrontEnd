/* eslint-disable */
import React, { useState } from 'react'; // useState를 가져오기


function Research(){

    const numberOfComponents = 5; 
    const today = new Date();
    const options = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
  
    const formattedDate = today.toLocaleDateString('ko-KR', options);
    const researcher = [
        'researcher 1',
        'researcher 2',
        'researcher 3',
        'researcher 4',
        'researcher 5',
      ];
    
      const contexts = [
        "국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다.\
        이 헌법시행 당시에 이 헌법에 의하여 새로 설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여 새로운 기관이 설치될 때까지 존속하며 그 직무를 행한다. .",
        "Context for Judge Imdang 2",
        "Context for researcher 3",
        "Context for researcher 4",
        "Context for researcher 5",
      ];

    

    return(
        <div>
            <div>
                {formattedDate} 금융리서치 요약
            </div>
            
            {researcher.map((researcher, index) => (
        <div key={index} className='summaryContainer'>
          <div className='box-youtuber'>{researcher}</div>
          <div className='box-context'>{contexts[index]}</div>
        </div>
      ))}
        </div>
    )
}

export default Research