<template >
  <div>
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="clouds"></div>
    <section id="gradient">
      <div class="galaxy">
        <div class="mt-16 text--white">
          
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style >
#gradient {
  width: 100%;
  padding: 0px;
  margin: 0px;
  z-index: 5;
}

@-webkit-keyframes twinkle_one {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes twinkle_one {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes twinkle_one {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes twinkle_one {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes twinkle_two {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes twinkle_two {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes twinkle_two {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes twinkle_two {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes twinkle_three {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes twinkle_three {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes twinkle_three {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes twinkle_three {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.galaxy {
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  width: 1920px;
  height: 1080px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.1);
}

.star {
  position: absolute;
  background-color: white;
}

.star-type1 {
  width: 1px;
  height: 1px;
  border-radius: 2px;
  -webkit-box-shadow: 0 0 1px 1px white;
  box-shadow: 0 0 1px 1px white;
  -webkit-animation: twinkle_one 3s ease-in-out infinite;
  -moz-animation: twinkle_one 3s ease-in-out infinite;
  -o-animation: twinkle_one 3s ease-in-out infinite;
  animation: twinkle_one 3s ease-in-out infinite;
}
.star-type2 {
  width: 2px;
  height: 2px;
  border-radius: 2px;
  -webkit-box-shadow: 0 0 2px 1px white;
  box-shadow: 0 0 2px 1px white;
  -webkit-animation: twinkle_two 12s ease-in-out infinite;
  -moz-animation: twinkle_two 12s ease-in-out infinite;
  -o-animation: twinkle_two 12s ease-in-out infinite;
  animation: twinkle_two 12s ease-in-out infinite;
}
.star-type3 {
  width: 2px;
  height: 2px;
  border-radius: 2px;
  -webkit-box-shadow: 0 0 2px 0 white;
  box-shadow: 0 0 2px 0 white;
  -webkit-animation: twinkle_three 7s ease-in-out infinite;
  -moz-animation: twinkle_three 7s ease-in-out infinite;
  -o-animation: twinkle_three 7s ease-in-out infinite;
  animation: twinkle_three 7s ease-in-out infinite;
}

/*mask*/
/* 
  Based from this article from Divya Manian - 
  http://nimbupani.com/using-background-clip-for-text-with-css-fallback.html
*/
@import url(https://fonts.googleapis.com/css?family=Oswald:400,700);
* {
  margin: 0;
  padding: 0;
}

*,
:before,
:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
}

body {
  font-family: "Oswald", sans-serif;
  color: #fff;
  background-color: #000;
}

.wrapper {
  text-align: center;
}

.title {
  font-size: 2em;
  position: relative;
  margin: 0 auto 1em;
  padding: 1em 1em 0.25em 1em;
  text-align: center;
  text-transform: uppercase;
}

.title:after {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 240px;
  height: 4px;
  margin-left: -120px;
  content: "";
  background-color: #fff;
}

/* Clip text element */
.clip-text {
  font-size: 6em;
  font-weight: bold;
  line-height: 1;
  position: relative;
  display: inline-block;
  margin: 0.25em;
  padding: 0.5em 0.75em;
  text-align: center;
  /* Color fallback */
  color: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.clip-text:before,
.clip-text:after {
  position: absolute;
  content: "";
}

/* Background */
.clip-text:before {
  z-index: 6;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: inherit;
}

/* Text Background (black zone) */
.clip-text:after {
  position: absolute;
  z-index: -1;
  top: 0.125em;
  right: 0.125em;
  bottom: 0.125em;
  left: 0.125em;
  background-color: #000;
}

/* Change the background position to display letter when the black zone isn't here */
.clip-text--no-textzone:before {
  background-position: -0.65em 0;
}

.clip-text--no-textzone:after {
  content: none;
}

/* Use Background-size cover for photo background and no-repeat background */
.clip-text--cover,
.clip-text--cover:before {
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
}

/* Background image from http://thepatternlibrary.com/ and http://lorempixel.com */
.clip-text_one {
  background-image: url(http://lorempixel.com/480/200/abstract/7);
}

.clip-text_two {
  background-image: url(http://lorempixel.com/480/200/abstract);
}

.clip-text_tree {
  background-image: url(http://lorempixel.com/480/200/abstract/2);
}

.clip-text_four {
  background-image: url(http://lorempixel.com/480/200/abstract/4);
}

.clip-text_five {
  background-image: url(http://lorempixel.com/480/200/abstract/5);
}

.clip-text_six {
  background-image: url(http://lorempixel.com/480/200/abstract/9);
}

.clip-text_seven {
  background-image: url(http://lorempixel.com/480/200/abstract/8);
}

.clip-text_eight {
  background-image: url(http://lorempixel.com/410/200/people);
}

.clip-text_nine {
  background-image: url(http://lorempixel.com/480/200/nightlife);
}

.clip-text_ten {
  background-image: url(http://lorempixel.com/480/200/nightlife/8);
}

.clip-text_eleven {
  background-image: url(http://lorempixel.com/480/200/fashion/10/cc);
  background-size: cover;
}

.clip-text_twelve {
  background-image: url(https://static.pexels.com/photos/32237/pexels-photo.jpg);
}

.clip-text_thirteen {
  background-image: url(http://lorempixel.com/480/200/food/5/cc);
}

.clip-text_fourteen {
  background-image: url(http://lorempixel.com/480/200/city/9/cc);
}

.clip-text_fifteen {
  background-image: url(http://lorempixel.com/480/200/nightlife/5);
}

/*stars variation 2*/

* {
  margin: 0;
  padding: 0;
}
header {
  background-color: rgba(33, 33, 33, 0.9);
  color: #ffffff;
  display: block;
  font: 14px/1.3 Arial, sans-serif;
  height: 50px;
  position: relative;
  z-index: 5;
}
h2 {
  margin-top: 30px;
  text-align: center;
}
header h2 {
  font-size: 22px;
  margin: 0 auto;
  padding: 10px 0;
  width: 80%;
  text-align: center;
}
header a,
a:visited {
  text-decoration: none;
  color: #fcfcfc;
}

@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
@-webkit-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
@-moz-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
@-ms-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

@keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10000px 0;
  }
}
@-webkit-keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10000px 0;
  }
}
@-moz-keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10000px 0;
  }
}
@-ms-keyframes move-clouds-back {
  from {
    background-position: 0;
  }
  to {
    background-position: 10000px 0;
  }
}

.stars,
.twinkling,
.clouds {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.stars {
  background: #000
    url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top
    center;
  z-index: 0;
}

.twinkling {
  background: transparent
    url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat
    top center;
  z-index: 1;

  -moz-animation: move-twink-back 200s linear infinite;
  -ms-animation: move-twink-back 200s linear infinite;
  -o-animation: move-twink-back 200s linear infinite;
  -webkit-animation: move-twink-back 200s linear infinite;
  animation: move-twink-back 200s linear infinite;
}

.clouds {
  background: transparent url(/cloud1.png,cloud2.png,cloud3.png) top no-repeat
    center;
  z-index: 3;

  -moz-animation: move-clouds-back 200s linear infinite;
  -ms-animation: move-clouds-back 200s linear infinite;
  -o-animation: move-clouds-back 200s linear infinite;
  -webkit-animation: move-clouds-back 200s linear infinite;
  animation: move-clouds-back 200s linear infinite;
}
</style>