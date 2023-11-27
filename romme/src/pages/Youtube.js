/* eslint-disable */
import React, { useState, useEffect } from 'react'; // useState를 가져오기

function Youtube(){
  

  // API key, or Token==========================================================

    const numberOfComponents = 5; 
    const today = new Date();
    const options = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
  
    const formattedDate = today.toLocaleDateString('ko-KR', options);
    const youtubers = [
        'Jimsimdang',
        'Judge Imdang 2',
        'Youtuber 3',
        'Youtuber 4',
        'Youtuber 5',
      ];
    
      const contexts = [
        "The President may attend the National Assembly and speak or express his opinion in a letter. The country must strive to prevent disasters and protect the people from such risks.\
        The relevant administrative agency .",
        "Context for Judge Imdang 2",
        "Context for Youtuber 3",
        "Context for Youtuber 4",
        "Context for Youtuber 5",
      ];

    

    return(
        <div>
            <div>
                {formattedDate} 유튜브 요약
            </div>
            
            {youtubers.map((youtuber, index) => (
        <div key={index} className='summaryContainer'>
          <div className='box-youtuber'>{youtuber}</div>
          <div className='box-context'>{contexts[index]}</div>
        </div>
      ))}
        </div>
    )
}

export default Youtube