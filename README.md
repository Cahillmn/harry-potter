# harry-potter

TITLE:  Harry Potter Fan Site
-----------------------------------------------------
DESCRIPTION OF PROJECT

This site contains a series of pages to provide information  about The Adopt A Dog website.  The site includes the following pages:

1.	 Home – the page contains an overview of the purpose of the website and it includes information about the books in the Harry Potter series.
2.	Blog – the page provides a listing of all of the latest information in the Harry Potter world.
3.	Characters – the page uses an API to allow users to look up information on their favorite characters.
4.	Store – the page is a place where people can purchase Harry Potter Gift Trunks.

-----------------------------------------------------

TECHNOLOGIES USED

The site is written using semantic HTML, SCSS styling, JavaScript, and Vue.js.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

-----------------------------------------------------

SEO Plan

To evaluate the search engine optimization I ran Light house and it came back with an SEO score of 92. I reviewed the Lighthouse results and found two areas thhat needed fixing. The  first one was that I needed to update the syntax for 
<meta charset="utf-8"> so I updated it to <meta http-equiv="content-type" content="text/html; charset=UTF-8">.  The second one was that I was missing a meta tag for the description. I added <meta name="description" content="A site for Harry Potter fans"> as my description and reran Lighthouse and it came back with an SEO score of 100.  In the future I might consider running the Structured Data Testing Tool for a more in depth analysis of my site.