<template>
   <div class="text-boxes">
     <p id="html">HTML</p>
     <textarea v-model="form.html" rows="3" cols="75" aria-labelledby="html" id="html-type"></textarea>
     <p id="css">CSS</p>
     <textarea v-model="form.css" rows="3" cols="75" aria-labelledby="css" id="css-type"></textarea>
   </div>
  
  <IFrameRender :css="form.css" :html="form.html" title="rendered-frame">
    <div class="outer-layer">
      <div class="inner-layer">
        <h4 class="contact-us"> Get in touch!</h4><hr>
        <h4 class="name"> Francesca McNulty </h4>
        <p class="contact-details"> International Officer (Europe & Latin
        America) | Student Recruitment and 
        Business Development</p>
      </div>
    </div>
  </IFrameRender>
</template>

<script setup>
import IFrameRender from './components/IFrameRender';
import debounce from 'lodash.debounce'
import { ref, watch} from "vue";

const form = ref({
css: `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.inner-layer {
  position: absolute;
  background: #6495ED;
  width: 250px;
  height: 200px;
  border-radius: 10px;
  left: 20px;
  top: 40px;
  padding-top: 20px;
  padding-left: 20px;

  .contact-us {
    margin-bottom: 10px;
  }
  .name {
    margin-top: 10px;
    color: black;
  }

  .contact-details {
    margin-top: 10px;
    color: black;
     font-size: 12px;
  }
}

.outer-layer {
  position: relative;
  background: black;
  width: 280px;
  height: 270px;
  color: white;
}
`,
html:`
`})

const FormChanges = debounce(() => {
  console.log('setting a delay')
}, 500)

FormChanges();

watch(form, () => {
  FormChanges();
})

</script>

<style lang="less">
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 .text-boxes {
    height: 200px;
 }
</style>