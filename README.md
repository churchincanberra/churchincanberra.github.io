# churchincanberra.org website

This repository hosts the website on GitHub Pages. The Church in Canberra is a non-profit organisation located in Canberra, Australia.

## For site administrator

### 1\. How to update the church calendar

All event entries are stored in `_data/calendar/entries.yml`.

Exemplary entry:

```
- id: "a"
  name: "Eternal Future"
  description: "New Heaven and New Earth."
  category: "national"
  singular: false
  date: "0000-01-01"
  location: "New Jerusalem"
```

If an event is marked singular, it only appears in the year it is created for. If it is not singular, it appears in each year.

**Notice:** If multiple events are created for the same month and day, use unique `id`s! `id` needs to be alphabet and no numeric.

For each unique category, a category entry must be created in `_data/calendar/categories.yml`. The category id must match the id used by the entries. The color tag is  
utilized to color the calendar entries of the corresponding category.

```
- id: national
  name: National
  color: "#0000ee"
```

This allows calendar entries filter by category.

## For site engineer

### 1\. Software bill of materials

- Jekyll 4.2+
- Bootstrap 4.6
  - Services (Collection)
  - Teams (Collection)
  - SCSS
  - 100% Responsive design, animated hamburger and mobile slide in menu
- Github Pages hosted
- jekyll-environment-variables
- jekyll-seo-tag

### 2\. Getting Started

Follow the [Jekyll docs](https://jekyllrb.com/docs/installation/) if setting up Jekyll for the first time.

Download or clone the repository.

To run the site locally, navigate to the repository directory and run:

```
bundle install
```

To start the Jekyll local development server.

```
bundle exec jekyll serve
```

To build the site.

```
bundle exec jekyll build
```

### 3\. Deploy changes to the site

This site is hosted on Github Pages for production, and the deployment branch is `gh-pages`.

Commit changes to the `main` branch and push to the remote repository.

To deploy, create a pull request from the `main` branch to `gh-pages` branch. Once the pull request is approved and merged, the changes will be deployed to the production site.

> Note: When deploying, assure `baseurl` value in the `_config.yml` otherwise all the css, images and paths will be broken.

For example the site \<https://hosting.com/churchincanberra\> would have `baseurl: "/churchincanberra/"`

## Credits

- Jekyll Serif theme \<https://github.com/zerostaticthemes/jekyll-serif-theme\>
- Password protected for static pages \<https://github.com/matteobrusa/Password-protection-for-static-pages\>
- Calendar component \<https://github.com/abzicht/jekyll-calendar\>
- Jekyll-seo-tag \<https://github.com/jekyll/jekyll-seo-tag\>
- HTTP Request Superagent \<https://github.com/ladjs/superagent\>
