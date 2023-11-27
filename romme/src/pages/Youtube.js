/* eslint-disable */
import React, { useState, useEffect } from 'react'; // useState를 가져오기
import styles from '../style/css/Youtube.module.css';


function Youtube(){
  
    const today = new Date();
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short'
    };

    const formattedDate = today.toLocaleDateString('ko-KR', options);
    console.log(formattedDate);



    const youtubers = [
        'Youtuber 1',
        'Youtuber 2',
        'Youtuber 3',
        'Youtuber 4',
        'Youtuber 5',
      ];
    
    const youtubeTitles = [
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

    

    return (
      <div className="bodyContainer">
        <div className="search-section">
          <div className="input-section">
          <select>
            <option value="title1">제목</option>
            <option value="title2">설명</option>
          </select>
              <input type="text" placeholder="Enter title or link" style={{marginLeft:'10px'}} />
              <button>Search</button>
          </div>
        </div>
        <div>
          <div className="result-section">
            <div className="left-section">
              <div className="youtube-info">
                <div>YouTuber</div>
                <p>Subscribers: 100k</p>
              </div>
            </div>
            <div className="right-section">
              <div>YouTube Title</div>
              <p>YouTube Summary YouTube Summary YouTube Summary YouTube Summary YouTube Summary YouTube Summary YouTube Summary YouTube Summary </p>
            </div>
          </div>
        </div>
        <div className='selectYoutuberBox'>
          <div className='selectYoutuber'>
            <div>
              youtuber
              <div className='subscribers'>Subscribers</div>
            </div>
            <div style={{marginLeft:'10px', marginRight:'10px'}}>
              youtube_Title
            </div>
            <div className='buttons'>
              <button className="addButton">Add</button>
              <button className="deleteButton">Delete</button>
            </div>
          </div>


          <div className='selectYoutuber'>
            <div>
              youtuber
              <div className='subscribers'>Subscribers</div>
            </div>
            <div style={{marginLeft:'10px', marginRight:'10px'}}>
              youtube_Title
            </div>
            <div className='buttons'>
              <button className="addButton">Add</button>
              <button className="deleteButton">Delete</button>
            </div>
          </div>

          <div className='selectYoutuber'>
            <div>
              youtuber
              <div className='subscribers'>Subscribers</div>
            </div>
            <div style={{marginLeft:'10px', marginRight:'10px'}}>
              youtube_Title
            </div>
            <div className='buttons'>
              <button className="addButton">Add</button>
              <button className="deleteButton">Delete</button>
            </div>
          </div>

          <div className='selectYoutuber'>
            <div>
              youtuber
              <div className='subscribers'>Subscribers</div>
            </div>
            <div style={{marginLeft:'10px', marginRight:'10px'}}>
              youtube_Title
            </div>
            <div className='buttons'>
              <button className="addButton">Add</button>
              <button className="deleteButton">Delete</button>
            </div>
          </div>

          <div className='selectYoutuber'>
            <div>
              youtuber
              <div className='subscribers'>Subscribers</div>
            </div>
            <div style={{marginLeft:'10px', marginRight:'10px'}}>
              youtube_Title
            </div>
            <div className='buttons'>
              <button className="addButton">Add</button>
              <button className="deleteButton">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Youtube