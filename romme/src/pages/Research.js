/* eslint-disable */
import React, { useState } from 'react'; // useState를 가져오기


function Research(){

  const today = new Date();
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short'
  };

  const formattedDate = today.toLocaleDateString('ko-KR', options);
  console.log(formattedDate);



  const researcher = [
      'Research 1',
      'Research 2',
      'Research 3',
      'Research 4',
      'Research 5',
    ];
  
  const Titles = [
      'title 1',
      'title 2',
      'title 3',
      'title 4',
      'title 5',
  ]


  const contexts = [
    "The President may attend the National Assembly and speak or express his opinion in a letter. The country must strive to prevent disasters and protect the people from such risks.\
    The relevant administrative agency.",
    "The President may attend the National Assembly and speak or express his opinion in a letter. The country must strive to prevent disasters and protect the people from such risks.\
    The relevant administrative agency.",
    "Context for Youtuber 3",
    "Context for Youtuber 4",
    "Context for Youtuber 5",
  ];

    

    return(
      <div className='bodyContainer'>
        <div className='today'>
            {formattedDate} 
        </div>
        <div className>
          <div>최신순 정렬</div>
        </div>
            
            {researcher.map((researcher, index) => (
        <div key={index} className='summaryContainer'>
          <div className='box-researcher'>{researcher}</div>
          <div className='box-context'>{Titles[index]}<br></br> {contexts[index]}</div>
        </div>
      ))}
        </div>
    )
}

export default Research