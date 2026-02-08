// TODO: Add images and detailed descriptions for each project

import { BlogItem } from "../../components/BlogList";

export const web_dev_array: BlogItem[] = [
  {
    title: "This Website!",
    img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/jayhcrawford-domain.webp",
    about_txt: "This resposnive website uses CSS, SVG, React, GitHub. I made the components.",
    url: "this_website"

  },
  {
    title: "Calculator",
    img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/Calc.webp",
    about_txt: "CSS by me; Originally written with React class components while I did freeCodeCamp in 2023; rewritten into React 19 with an LLM.",
    url: "https://codepen.io/jayhcrawford/pen/rNRQJZa?editors=1010"
  },
  {
    title: "Chem 101 App",
    img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/Chem101.webp",
    about_txt: "Kind of like a study guide wiki. Essentially a markdown viewer/editor that allowed my classmates to create and propose revisions. Revisions were databased and reviewed using a seperately hosted API. Centralizing all the course content in an easy to access place helped me to get an A in this class.",
    url: "https://chem101-sg.vercel.app/index.html"
  },
  {
    title: "UrFriends",
    img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/blog-images/UR_Friends.webp",
    about_txt: "Will be a SaaS toolset for relationship building; inspired by the routines of world leaders. Started on MongoDB and Vercel; migrated to Amplify and AWS; settled on Firebase and Firestore. The hosted beta has auth and data privacy securely enforced and a Stripe webhook.",
    url: "/projects/urfriends",
  },
  {
    title: "Drum Machine",
    img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/web-design-web-icons/DM.webp",
    about_txt: "CSS by me; Originally written with React class components while I did freeCodeCamp in 2023; rewritten into React 19 with an LLM.",
    url: "https://codepen.io/jayhcrawford/pen/poYJzyb"
  },
];
