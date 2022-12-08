# Church in Canberra

[Sandbox site](https://churchincanberra.github.io/) 

## For site administrator

### Calendar events

All event entries are stored in `_data/calendar/entries.yml`.

Exemplary entry:

```yml
- id: "a"
  name: "Rhoncus"
  description: "Eni sagittis lacinia lectus primis."
  category: "national"
  singular: false
  date: "0000-01-01"
```

If an event is marked singular, it only appears in the year it is created for.
If it is not singular, it appears in each year.

__Notice:__ If multiple events are created for the same month and day, use
unique `id`s! `id` needs to be alphabet and no numeric.

For each unique category, a category entry must be created in `_data/calendar/categories.yml`.
The category id must match the id used by the entries. The color tag is
utilized to color the calendar entries of the corresponding category.

```yml
- id: birthday
  name: national
  color: "#0000ee"
```

The calendar entries can be filtered by category.

## For site engineer

### Software bill of materials

- Jekyll 4.2+
  - Bootstrap 4.6
  - Services (Collection)
  - SCSS
  - 100% Responsive design, animated hamburger and mobile slide in menu
- Github Pages hosted

### Installing Ruby & Jekyll

If this is your first time using Jekyll, please follow the [Jekyll docs](https://jekyllrb.com/docs/installation/) and make sure your local environment (including Ruby) is setup correctly.

### Running locally

Download or clone the theme.

To run the theme locally, navigate to the theme directory and run:

```
bundle install
```

To start the Jekyll local development server.

```
bundle exec jekyll serve
```

To build the theme.

```
bundle exec jekyll build
```

### Deployment on GitHub Pages

This theme has been tested to work with Github Pages (and Github Project Pages). When using Github Pages you will need to update the `baseurl` in the `_config.yml` otherwise all the css, images and paths will be broken.

For example the site <https://hosting.com/churchincanberra> would have `baseurl: "/churchincanberra/"`

### Extras

#### License

- MIT

#### Credits

- Jekyll Serif theme <https://github.com/zerostaticthemes/jekyll-serif-theme>
- Password protected for static pages <https://github.com/matteobrusa/Password-protection-for-static-pages>
- Calendar component <https://github.com/abzicht/jekyll-calendar>
