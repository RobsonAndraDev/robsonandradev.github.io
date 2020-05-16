const getMediumStories = () => {
  const mediumFeed = {
    rss_url: 'https://medium.com/feed/@robsonandradev'
  };
  $.get('https://api.rss2json.com/v1/api.json', mediumFeed, mountPostsPage);
};

const mountPostsPage = (response) => {
  const content = $('#content');
  if (response.status == 'ok') {
    // console.log(response);
    let output = '';
    const items = response.items;
    items.forEach(async item => {
      const description = /<(h4|blockquote)>(.*?)<\/(h4|blockquote)>/g.exec(item.description);
      if(description) {
        let label = '<i class="fa fa-tags"></i> ';
        const subTitle = description[2];
        const pubDate = formatDatePt(new Date(item.pubDate));
        label += await mountLabels(item.categories);
        output += '<div class="post-preview">';
        output += `<a href="${item.link}" target="_blank" >`;
        output += `<h2 class="post-title">${item.title}</h2>`;
        output += `<h3 class="post-subtitle">${subTitle}</h3></a>`;
        output += label;
        output += `<br /><span class="post-meta">Published on ${pubDate}</span>`;
        output += '</div>';
        content.html( output );
      }
    });
  }
};

const formatDatePt = (date) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

const mountLabels = async (categories) => {
  let label = '';
  await categories.forEach(category => {
    if('robsonandradev' !== category) {
      label += `<label class="post-meta art-tag">${category}</label> `;
    }
  });
  return label;
};

getMediumStories();
