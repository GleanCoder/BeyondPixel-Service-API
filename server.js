const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// data
const data = [
  {
    id: "1",
    image: "https://i.ibb.co/WDN4YVZ/service-1.webp",
    heading: "Event Coverage & Live Streaming",
    paragraph:
      "We offer comprehensive event coverage services, including live streaming, live broadcasting, 4K videography, and multicam setups. Whether it’s a corporate event, wedding, or festival, we ensure every moment is captured perfectly.",
  },
  {
    id: "2",
    image: "https://i.ibb.co/RpHhYFW/service-2.webp",
    heading: "Wedding Photography & Videography",
    paragraph:
      "Capture your special day with our wedding photography and videography services, including video editing, album design, cinematography, teaser videos, and invitation video and card design.",
  },
  {
    id: "3",
    image: "https://i.ibb.co/D8r36n2/service-3.webp",
    heading: "Documentary Video",
    paragraph:
      "We create impactful documentary videos that tell compelling stories and capture essential moments. Our production team ensures your narrative is engaging and professionally presented.",
  },
  {
    id: "4",
    image: "https://i.ibb.co/qWvWpCj/service-4.webp",
    heading: "Cinematography",
    paragraph:
      "We offer professional cinematography services that capture stunning visuals and tell compelling stories. Our team uses the latest technology and techniques to create cinematic experiences that elevate your projects and leave a lasting impression.",
  },
  {
    id: "5",
    image: "https://i.ibb.co/QdHB7Zr/service-5.webp",
    heading: "Sports Live Stream With Addon Features",
    paragraph:
      "We provide sports live streaming with advanced features like multi-camera setups, real-time score updates, and instant replays. Enjoy an immersive viewing experience with customizable overlays and graphics.",
  },
  {
    id: "6",
    image: "https://i.ibb.co/zNN9B31/service-6.webp",
    heading: "Fashion, Product, Food Photography",
    paragraph:
      "We offer specialized photography services, capturing the essence of fashion, products, and food. Our expert photographers ensure visually stunning and market-ready images that highlight every detail and appeal to your target audience.",
  },
  {
    id: "7",
    image: "https://i.ibb.co/52dNTTb/service-7.webp",
    heading: "Drone Video Service",
    paragraph:
      "Our drone video service captures stunning aerial footage for events and projects, including corporate events, weddings, and real estate. Using advanced drone technology, we deliver dynamic, cinematic shots that enhance your visual storytelling with precision and creativity.",
  },
  {
    id: "8",
    image: "https://i.ibb.co/qBxqsnc/service-8.webp",
    heading: "Podcasts, Online Live Sessions",
    paragraph:
      "We offer high-quality production for podcasts and online live sessions, ensuring professional audio and video output. Our services include live broadcasting, audience engagement features, and post-production editing to deliver engaging and polished content.",
  },
  {
    id: "9",
    image: "https://i.ibb.co/DDksm6G/service-9.webp",
    heading: "Video Editing & Post-Production",
    paragraph:
      "We provide professional video editing and post-production services, transforming raw footage into polished, captivating videos. Our services include color correction, sound design, special effects, and seamless transitions, ensuring your final product is both visually stunning and engaging.",
  },
  {
    id: "10",
    image: "https://i.ibb.co/tB5zPt1/service-10.webp",
    heading: "Motion Graphics & 3D/2D Animation",
    paragraph:
      "Our team of skilled animators and designers combines creativity and technical expertise to bring your vision to life.",
  },
  {
    id: "11",
    image: "https://i.ibb.co/H2hsbN7/service-11.jpg",
    heading: "Website and Application Design",
    paragraph:
      "We create user-friendly and visually appealing websites and applications tailored to your business needs. Our services include e-commerce websites, company profiles, custom websites, and school management systems.",
  },
  {
    id: "12",
    image: "https://i.ibb.co/qJZJBs3/service-12.jpg",
    heading: "SEO - Search Engine Optimization",
    paragraph:
      "Our SEO services enhance your online visibility and improve search engine rankings. We employ proven strategies to drive targeted traffic and boost your website’s performance.",
  },
  {
    id: "13",
    image: "https://i.ibb.co/xM2Xjgn/service-13.webp",
    heading: "Corporate Branding",
    paragraph:
      "We create visually appealing materials that resonate with your audience. Our strategies attract potential customers and convert interest into actionable leads, driving growth and expanding your customer base.",
  },
  {
    id: "14",
    image: "https://i.ibb.co/BVf6nsf/service-14.webp",
    heading: "Printing Materials Design & Printing",
    paragraph:
      "We design and print high-quality materials like posters, business cards, brochures, catalogs, and invitation cards. Our services ensure your materials are visually appealing and professionally finished, effectively representing your brand.",
  },
  {
    id: "15",
    image: "https://i.ibb.co/9wB2H9Z/service-15.webp",
    heading: "Social Media Management",
    paragraph:
      "Enhance your online presence with our strategic social media management, marketing, and advertising services. We help you reach and engage your target audience effectively.",
  },
  {
    id: "16",
    image: "https://i.ibb.co/Jy2MB4R/service-16.webp",
    heading: "Advertisements & Lead Generation",
    paragraph:
      "We specialize in creating compelling advertisements and driving effective lead generation strategies. Our team ensures your campaigns captivate audiences and convert prospects into loyal customers.",
  },
  {
    id: "17",
    image: "https://i.ibb.co/LgT6phk/service-17.webp",
    heading: "Google Business Portfolio",
    paragraph:
      "We craft and optimize Google Business Portfolios to enhance your local visibility and attract more customers. Our approach ensures your business stands out and effectively engages your target audience.",
  },
  {
    id: "18",
    image: "https://i.ibb.co/18hGfSP/service-18.webp",
    heading: "Meta & WhatsApp Business Portfolio",
    paragraph:
      "We develop and optimize Meta and WhatsApp Business Portfolios to boost your brand’s presence and streamline customer interactions. Our strategies ensure effective engagement and growth across these platforms.",
  },
  {
    id: "19",
    image: "https://i.ibb.co/4fQLgSs/service-19.webp",
    heading: "Music, Audio Mixing & Mastering",
    paragraph:
      "We provide music production, including audio mixing and mastering, to deliver polished, industry-standard sound. Our team ensures your tracks are refined and ready for release.",
  },
  {
    id: "20",
    image: "https://i.ibb.co/37bC11w/service-20.webp",
    heading: "CGI, VFX, Product Design",
    paragraph:
      "We specialize in creating stunning CGI, VFX, and product designs that bring your visions to life. Our team utilizes cutting-edge technology and creativity to produce visually striking animations and designs that enhance your brand and captivate your audience.",
  },
];

app.use(
  cors({
    origin: ["http://localhost:5173", "https://beyond-pixel.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/api/objects", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
