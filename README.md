# itmd362-singlepage

Project Two: Media-Rich Single-Page Site for ITMD362, Spring 2016. [Project goals and deliverables](http://courses.karlstolley.com/hci/#project-two)

## Project Thesis

For this project, I am building a single-page marketing site for a computer game called YSFlight. YSFlight is a flight
simulator that can run on almost any hardware, new or old. However, [its website](http://ysflight.in.coocan.jp/ysflight/ysflight/e.html) is *very* outdated design-wise.
My goal for the project is to create a marketing site for YSFlight that will tell the story of the game and what
a player can accomplish in it, especially how fun it is for being so simple. I will use lots of media to help do this.

## Building CSS

First, install postcss-cli and Autoprefixer:

`npm install --global postcss-cli autoprefixer`

After that is installed, you can use postcss to build the CSS. Remember to rebuild after each CSS change!

`postcss --use autoprefixer css/screen.raw.css > css/screen.css`

## Credits

I used the following resources in this site:

- [normalize.css](https://necolas.github.io/normalize.css/)
- [Font Awesome](https://fortawesome.github.io/Font-Awesome/) for the download icon
- [Modernizr](https://modernizr.com/)
- [Sprint.js](https://github.com/bendc/sprint), a lightweight jQuery alternative

I also used many images and content from [ysflight.org](https://ysflight.org/) which is another site I own. Images
are served from the custom CDN domain assets.ysfhq.com.

Open an issue if you see a resource being used that is not credited here.
