<template>
  <div id="app" class="mydiv">
    <TopNav></TopNav>
    <div class="block w-100">
     <Nav></Nav>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App'
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
}
router-view{
  display: inline;
  position: absolute;
}

html,
body {
  height: 100%;
}
.mydiv {
  width:100%;
  height:100%;
  color:black;
  font-weight:bold;
  animation: myanimation 100s infinite;
}

@keyframes myanimation {
  0% {background-color: red;}
  25%{background-color:blue;}
  50%{background-color:purple;}
  75%{background-color:brown;}
  100% {background-color: red;}
}
</style>
