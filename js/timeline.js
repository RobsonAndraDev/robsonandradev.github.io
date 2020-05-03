const experiencies = [{
  "company": "Passei Direto",
  "time": "2018 - present",
  "description": `I arrived here to be a devops expert,
    here is the place when I put all pieces together.
    This is the point when I become a reference to my teammates.
    It's the higher point on my career until now, for now...
    I still writing this history one day each time.`
}, {
  "company": "EZOps",
  "time": "2016 - 2018",
  "description": `I learned about devops here,
    and it was here that I had my first international experience.`
}, {
  "company": "Imago",
  "time": "2014 - 2016",
  "description": `Here was the place where I learned a lot about web.`
}, {
  "company": "Estácio - College",
  "time": "2013 - 2015",
  "description": `This was the moment of my life where
    I decide to change my career a bit,
    now my target is build web applications.`
}, {
  "company": "FAETEC",
  "time": "2012 - 2014",
  "description": `At this point I was here as an expert guy,
    that would help to craft some internal systems,
    at this time I had my first touch with Linux.`
}, {
  "company": "Monteiro & Soares",
  "time": "2010 - 2012",
  "description": `This was the place that show me how the world works,
    and how is working for a real client.`
}, {
  "company": "FAETEC - Internship",
  "time": "2010 - 2010",
  "description": `Technically this was the first place that I works too,
    but at this time it was a kind of extension of my course.`
}, {
  "company": "FAETEC - Course",
  "time": "2008 - 2009",
  "description": "This was my first contact with a programming language."
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
