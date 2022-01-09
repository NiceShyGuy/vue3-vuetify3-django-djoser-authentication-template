<template>
  <div class="notfoundanimation" align="center">
    <div class="floatY">
      <div class="floatX">
        <div class="slideIn">
          <div class="fadeIn">
            <v-img :src="svg" width="50px" class="spin" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.floatY {
  animation: floatY 10s infinite;
}
.floatX {
  animation: floatX 5s infinite;
}
.slideIn {
  animation: slideIn 2s;
}
.fadeIn {
  animation: fadeIn 2s;
}
.spin {
  animation: spin 3s infinite linear;
}

@keyframes floatY {
  0% {
    transform: translateY(20px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(20px);
  }
}

@keyframes floatX {
  0% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(10px);
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>

<script>
export default {
  name: "NotFoundAnimation",
  data() {
    return {
      svg: require("../assets/amongus.svg"),
    };
  },
};
</script>
