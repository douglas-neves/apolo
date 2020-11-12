<template>
  <section class="rocket__main">
    <img src="./assets/logo.png" @click="click" />
    <br />
    <button @click="click">Clique Aqui</button>
    <br />
    <br />
    <!-- eslint-disable vue/no-v-html WARNING XSS ATACK -->
    <section class="rocket__main" v-html="state.theme"></section>
  </section>
</template>

<script lang="ts">
import { reactive, defineComponent, onMounted } from 'vue';
import { Logo } from '@/models/logo/Logo.interface';
import apiClient from '@/api-client';

export default defineComponent({
  setup() {
    const state = reactive({
      theme: '',
    });

    onMounted(() => {
      console.info('Hello World');
    });

    function loadTheme(HTMLtheme: string): void {
      state.theme = HTMLtheme;
    }

    function click(): void {
      apiClient.theme.fetchTheme().then((result) => {
        console.info('Resultado do click GET', result);
        loadTheme(result.data.template);
      });

      const logo = new Logo({ image: 'http://fakeimg.pl/100x100' });
      apiClient.logo.updateLogo(logo).then((result) => {
        console.info('Resultado do click POST', result);
      });
    }

    return {
      state,
      click,
    };
  },
});
</script>
<style>
/* @TODO
 * Separar os estilos SCSS
 */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

.rocket__main {
  text-align: center;
}
</style>
