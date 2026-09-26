/*
  Digital/graphic design pieces, rendered on design.html by app.js.
  Same fields as projects.js; images are shown whole (never cropped), and
  imageLabels names each image for screen readers, e.g. ["Front", "Back"].
*/

const PROJECTS = [
  {
    title: "We Can Do It. — Peng & Paige for Senate",
    description: "Campaign poster for the Peng & Paige ticket in Cate School's 2025 Student Body Senate election. Socrates and Confucius flex side by side in the pose of the WWII “We Can Do It!” poster, drawn in a single blue on stone.",
    tags: ["Poster", "Campaign", "2025"],
    images: ["assets/design-senate-poster.jpg"],
    kind: "design"
  },
  {
    title: "Grab Life by the Beans — T-Shirt",
    description: "Front and back artwork for a Café de Colombia–themed shirt. The front carries the Juan Valdez mark; the back is a collage of Juan Valdez riding a wave across a vintage electromagnetic-spectrum diagram, under the line “Grab life by the beans.”",
    tags: ["Apparel", "Collage"],
    images: ["assets/design-beans-shirt-front.png", "assets/design-beans-shirt-back.jpg"],
    imageLabels: ["front", "back"],
    kind: "design"
  },
  {
    title: "67 Drafts Co. — College Essay Consulting Ad",
    description: "Chinese-language marketing poster for 67 Drafts Co. (第六十七稿), a college application essay service covering the Common App personal essay and supplements. A halftone laptop showing the Common App, the headline 文书改写 (“essay rewriting”) and a vertical price list.",
    tags: ["Advertising", "Chinese typography", "Halftone"],
    images: ["assets/design-67-drafts-ad.jpg"],
    kind: "design"
  },
  {
    title: "The Trump Gold Card — Satirical Mailer",
    description: "A US Letter direct-mail piece welcoming a new cardholder to the “Trump Platinum Card,” built from the conventions of a real credit-card mailer: return address, barcodes, a gold card render, an activation QR code and a page of fine print. Political satire and commentary.",
    tags: ["Print", "Satire", "US Letter"],
    images: ["assets/design-trump-gold-card.png"],
    kind: "design"
  }
];
