//import fitness from "../../Assets/img/fitness.png";
import pick_dice_game from "../../Assets/img/pick_dice_game.png";
import scissor_url_shortner from "../../Assets/img/scissor_url_shortner.png";
import vue_counter_app from "../../Assets/img/vue_counter_app.png";
//import ai from "../../Assets/img/gener8.png";
// import mov from "../../Assets/img/movieApp.png";
// import cocktail from "../../Assets/img/cocktaily.png";

export const ProjectsData = [
  {
    id: 1,
    feats: [
      "2 Players",
      "Game declears winner after any of the 2 Players dice picks 20 and above first",
    ],
    name: "Dice Pick Game",
    det: "This is a Dice Picking Game built with HTML, CSS and Javacript",
    code: "https://github.com/ayeniayodeji2009/pick_dice_game",
    live: "https://pick-dice-game.vercel.app/",
    image: pick_dice_game,
    stack: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 2,
    feats: ["Shorten your long URL as a Digital Marketer",
            "Customize your short URL uniquely as a user",
            "Generate and download QR code for your short URL. View information on the number of clicks on your short URL"
    ],
    name: "Scissor",
    det: "This is a React based URL shortener app that customise long URLs for marketers or users as they so please. HTML, CSS, Javascript, React, Firebase (i.e for backend) and Cloudinary were used to build this app.",
    code: "https://github.com/ayeniayodeji2009/scissor",
    live: "https://scissor-snowy.vercel.app",
    image: scissor_url_shortner,
    stack: ["HTML", "CSS", "Javascript", "React", "Firebase", "Cloudinary"],
  },
  {
    id: 3,
    feats: [
      "Increament",
      "Decreament",
      "Reset to default number 0",
      "Set number to any number of your choice",
      "Friendly User Interface"
    ],
    name: "Vue Counter App",
    det: "This is a Vue based counter app built to help young learners learn positive and negative number counting. HTML, CSS, Javascript, Vue were used to build this app.",
    live: "https://alx-counter-app-vue.vercel.app/",
    code: "https://github.com/ayeniayodeji2009/alx_counter_app_vue",
    image: vue_counter_app,
    stack: ["HTML", "CSS", "Javascript", "Vue"],
  },

  // {
  //   id: 3,
  //feats: "",
  //   name: "Edutech Website",
  //   det: "Implementation of a figma website design using HTML, Sass and Vanilla Javascript",
  //   code: "https://github.com/mo-renike/edutech",
  //   live: "https://mo-renike.github.io/edutech/",
  //   img: edutech,
  // },
  // {
  //   id: 5,
  //   name: "Movies Review App",
  //   det: "A Javacsript based app that displays movies with corresponding image and a details preview using HTML5, CSS3, Vanilla Javascript, WebAPIs",
  //   code: "https://github.com/mo-renike/Movie-App",
  //   live: "https://mo-renike.github.io/Movie-App/",
  //   img: mov,
  // },
  // {
  //   id: 5,
  //   name: "Cocktail App",
  //   det: "A Javacsript based app that displays cocktails with corresponding image and a details page using HTML5, CSS3, Vanilla Javascript, WebAPIs",
  //   code: "https://github.com/mo-renike/cocktail-app",
  //   live: "https://cocktaily1.netlify.app/",
  //   img: cocktail,
  // },
  // {
  //   id: 4,
  //   name: "50 Javascript Projects",
  //   det: "A collection of 50 projects in 50 days using pure HTML, CSS and Javascript",
  //   code: "https://github.com/mo-renike/50Javascript-projects",
  //   live: "https://mo-renike.github.io/50Javascript-projects/",
  //   img: proj,
  // },
];
