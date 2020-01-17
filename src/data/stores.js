import { readable } from 'svelte/store'

export const projectSectionData = readable([
  {
    name: "Dev Profiles",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum perferendis ea, officiis, cum asperiores repellendus natus dicta tenetur inventore blanditiis ratione dolorem, quas eum perspiciatis placeat atque nihil. Assumenda, et!",
    image: "https://res.cloudinary.com/dy5hgr3ht/image/upload/c_scale,w_800/v1578652622/Portfolio/cao2za6cryixy6vlwnbt.webp",
    slug: "dev-profiles"
  },
  {
    name: "Gastronomical",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum perferendis ea, officiis, cum asperiores repellendus natus dicta tenetur inventore blanditiis ratione dolorem, quas eum perspiciatis placeat atque nihil. Assumenda, et!",
    image: "https://res.cloudinary.com/dy5hgr3ht/image/upload/c_scale,w_800/v1578652622/Portfolio/cao2za6cryixy6vlwnbt.webp",
    slug: "gastronomical"
  },
  {
    name: "Game of Life",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum perferendis ea, officiis, cum asperiores repellendus natus dicta tenetur inventore blanditiis ratione dolorem, quas eum perspiciatis placeat atque nihil. Assumenda, et!",
    image: "https://res.cloudinary.com/dy5hgr3ht/image/upload/c_scale,w_800/v1578652622/Portfolio/cao2za6cryixy6vlwnbt.webp",
    slug: "game-of-life"
  },
  {
    name: "Portfolio",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum perferendis ea, officiis, cum asperiores repellendus natus dicta tenetur inventore blanditiis ratione dolorem, quas eum perspiciatis placeat atque nihil. Assumenda, et!",
    image: "https://res.cloudinary.com/dy5hgr3ht/image/upload/c_scale,w_800/v1578652622/Portfolio/cao2za6cryixy6vlwnbt.webp",
    slug: "portfolio"
  },
]);

export const projectPageData = readable({
  "dev-profiles": {
    name: "Dev Profiles"
  },
  "gastronomical": {
    name: "Gastronomical"
  },
  "game-of-life": {
    name: "Game of Life"
  },
  "portfolio": {
    name: "Portfolio"
  }
})
