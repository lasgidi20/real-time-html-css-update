import { h, ref, createApp, onMounted, onBeforeUpdate } from "vue"
export default {
    props: {
      css: String,
      html: String,
    },
    setup(props, {slots}) {
      const IframeRef = ref(null)
      const BodyIframe = ref(null)
      const HeadIframe = ref(null)
      const StyleIframe = ref(null)
      let IframeApp = null

    onMounted(() => {
      BodyIframe.value = IframeRef.value.contentDocument.body;
      HeadIframe.value = IframeRef.value.contentDocument.head;
      BodyIframe.value.innerHTML = props.html;
      const elem = document.createElement("div");
      BodyIframe.value.appendChild(elem);
      StyleIframe.value = document.createElement("style");
      StyleIframe.value.innerHTML = props.css
      HeadIframe.value.appendChild(StyleIframe.value)

      IframeApp = createApp({
        setup() {
          return () => slots.default();
        }  
      }).mount(elem)
    })
    onBeforeUpdate(() => {
      if(!IframeApp || !IframeRef.value) {
         return ;
      }
      if(props.css) {
        StyleIframe.value.innerHTML = props.css
      }
      if(props.html) {
        BodyIframe.value.innerHTML = props.html
      }
    });
    return () => h("iframe", {ref: IframeRef});
  },
};