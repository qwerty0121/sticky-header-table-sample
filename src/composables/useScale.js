import { watchEffect } from "vue";
import { ref } from "vue";

const scale = ref("0.66");

watchEffect(() => {
  const app = document.getElementById("app");
  if (scale.value !== "1") {
    app.style.width = `calc(100% / ${scale.value})`;
    app.style.transform = `scale(${scale.value})`;
    app.style.transformOrigin = "0px 0px";
  } else {
    app.removeAttribute("style");
  }
});

export function useScale() {
  return scale;
}
