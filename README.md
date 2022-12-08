# Church in Canberra

[Live site](https://churchincanberra.github.io/) |

### Theme features

- Jekyll 4.2+
- Github Pages ready
- Services (Collection)
- Team (Collection)
- Features (Data)
- SCSS
- 100% Responsive design, animated hamburger and mobile slide in menu
- Bootstrap 4.6 - _Only the bootstrap grid and utilites are imported by default. If you want to use more of the Boostrap library you can uncomment the `@import` in `style.scss`_

## Installation

### Installing Ruby & Jekyll

If this is your first time using Jekyll, please follow the [Jekyll docs](https://jekyllrb.com/docs/installation/) and make sure your local environment (including Ruby) is setup correctly.

### Installing Theme

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

## Deployment

### Github Pages

This theme has been tested to work with Github Pages (and Github Project Pages). When using Github Pages you will need to update the `baseurl` in the `_config.yml` otherwise all the css, images and paths will be broken.

For example the site <https://hosting.com/churchincanberra> would have `baseurl: "/churchincanberra/"`

## Extras

### License

- MIT

### Credits

- Jekyll Serif theme <https://github.com/zerostaticthemes/jekyll-serif-theme>
- Password protected for static pages <https://github.com/matteobrusa/Password-protection-for-static-pages>
- Calendar component <https://github.com/abzicht/jekyll-calendar>
