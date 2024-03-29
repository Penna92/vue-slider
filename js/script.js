// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

const app = new Vue({
  el: "#app",
  data: {
    slides: [
      {
        image: "img/01.jpg",
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
      },
      {
        image: "img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum.",
      },
      {
        image: "img/03.jpg",
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        image: "img/04.jpg",
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
      },
      {
        image: "img/05.jpg",
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
      },
    ],
    activeIndex: 0,
    intervalId: null,
    animation: "",
  },
  methods: {
    nextSlide() {
      if (this.activeIndex === 4) {
        this.animation = "";
        setTimeout(() => {
          this.animation = "animation";
        }, 1);
        this.activeIndex = 0;
      } else {
        this.animation = "";
        setTimeout(() => {
          this.animation = "animation";
        }, 1);
        this.activeIndex += 1;
      }
    },
    prevSlide() {
      this.animation = "";
      if (this.activeIndex === 0) {
        this.activeIndex = 4;
      } else {
        this.activeIndex -= 1;
      }
      setTimeout(() => {
        this.animation = "animation";
      }, 1);
    },
    autoScroll() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
        // console.log(this.activeIndex, this);
      }, 3000);
    },
    stopAutoScroll() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    changeOnClick(index) {
      this.animation = "";
      setTimeout(() => {
        this.animation = "animation";
      }, 1);
      this.activeIndex = index;
    },
  },
  mounted() {
    this.autoScroll();
  },
});
