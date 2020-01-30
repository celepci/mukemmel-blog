export const getPosts = () => {
  return [
    {
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      slug: "yarisma",
      details: require("./posts/yarisma.md").default,
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda",
      date: "11 January 2020",
      time: "12:22 AM",
      readingtime: "5 min",
      image: {
        src: "/img/img7.jpg",
        alt: "Deneme Alt Etiketi"
      },
      tags: {
        0: "Css3",
        1: "Html5",
        2: "Javascript",
        3: "Vuejs",
        4: "Reactjs",
        5: "Typescript"
      }
    },
    {
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda",
      date: "13 January 2020",
      time: "12:22 AM",
      readingtime: "5 min",
      image: {
        src: "/img/img8.jpg",
        alt: "Deneme Alt Etiketi"
      },
      tags: {
        0: "Css3",
        1: "Html5",
        2: "Javascript",
        3: "Vuejs",
        4: "Reactjs",
        5: "Typescript"
      }
    },
    {
      title: "Merhaba dünya! Nasılsın do?",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda",
      date: "1 January 2020",
      time: "12:22 PM",
      readingtime: "5 min",
      image: {
        src: "/img/img9.jpg",
        alt: "Deneme Alt Etiketi"
      },
      tags: {
        0: "Css3",
        1: "Html5",
        2: "Javascript",
        3: "Vuejs",
        4: "Reactjs",
        5: "Typescript"

      }
    }
  ];
};