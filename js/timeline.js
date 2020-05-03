const experiencies = [{
  "company": "Passei Direto",
  "time": "2018 - present",
  "description": ""
}, {
  "company": "EZOps",
  "time": "2016 - 2018",
  "description": ""
}, {
  "company": "Imago",
  "time": "2014 - 2016",
  "description": ""
}
];

const renderExperiencies = () => {
  let liComponents = '';
  experiencies.forEach((exp, i) => {
    liComponents += `<li>`;
    if( i % 2 === 0 ) {
      liComponents += `<div class="direction-r">`;
    } else {
      liComponents += `<div class="direction-l">`;
    }
    liComponents += `<div class="flag-wrapper">`;
    liComponents += `<span class="flag"> ${exp.company} </span>`;
    liComponents += `<span class="time-wrapper"><span class="time"> ${exp.time} </span></span>`;
    liComponents += `</div>`;
    liComponents += `<div class="desc"> ${exp.description} </div>`;
    liComponents += `</div>`;
    liComponents += `</li>`;
  });
  return liComponents;
};

const timeline = document.getElementById('timeline');
timeline.innerHTML += renderExperiencies();
