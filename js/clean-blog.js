(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

})(jQuery); // End of use strict

function formatDatePt(date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

const mountLabels = async (categories) => {
  let label = '';
  await categories.forEach(category => {
    if('robsonandradev' !== category) {
      label += `<label class="post-meta art-tag">${category}</label> `;
    }
  });
  return label;
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

function getMediumStories() {
  const mediumFeed = {
    rss_url: 'https://medium.com/feed/@robsonandradev'
  };
  $.get('https://api.rss2json.com/v1/api.json', mediumFeed, mountPostsPage);
}
