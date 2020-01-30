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
      title: "4 Useful Online Front End Developement Tools",
      slug: "4-useful-online-front-end-developer-tools",
      details: require("./posts/front-end-tools.md").default,
      summary: "I have compiled 4 useful online tools for web developers. All them are free ve easyful.",
      date: "30 January 2020",
      time: "05:07 PM",
      readingtime: "3 min",
      image: {
        src: "/img/post/web-tools2.jpg",
        alt: "Useful Front End Development Tools"
      },
      tags: {
        0: "Css3",
        1: "Html5",
        2: "Javascript",
        3: "Front End",
        4: "Online Tools",
        5: "Web Tools"
      }
    },
    {
      title: "Hello World",
      slug: "hello-world",
      details: require("./posts/hello-world.md").default,
      summary: "Hello world. This is my first blog post.",
      date: "1 January 2020",
      time: "12:22 PM",
      readingtime: "1 min",
      image: {
        src: "/img/img7.jpg",
        alt: "Hello World"
      },
      tags: {
        0: "Hello",
        1: "World"
      }
    }
  ];
};