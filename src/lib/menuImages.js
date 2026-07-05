const MENU_IMAGE_MAP = {
  "Tahu Aci Kribo Lada Garam": "/Tahu Aci Kribo Lada Garam.webp",
  "Tahu Walik Kribo Mini Hot Lava": "/Tahu Walik Kribo Mini Hot Lava.webp",
  "Tahu Walik Kribo Mini Chili Oil":
    "/Tahu Walik Kribo Mini Chili Oil.webp",
  "Tahuci isi 6": "/Tahuci.jpg",
};

const DEFAULT_TAHU_WALIK_ISI = "/Tahu Walik Menu.jpeg";
const DEFAULT_KRIBO_PLETAK = "/Kribo Pletak Pletok.jpg";

export function getMenuImage(name) {
  if (/^Tahu Walik Isi \d+/i.test(name)) {
    return DEFAULT_TAHU_WALIK_ISI;
  }

  if (/^Kribo Pletak Pletok/i.test(name)) {
    return DEFAULT_KRIBO_PLETAK;
  }

  if (MENU_IMAGE_MAP[name]) {
    return MENU_IMAGE_MAP[name];
  }

  return DEFAULT_TAHU_WALIK_ISI;
}

export const MARQUEE_IMAGES = [
  { src: "/Tahu Walik Menu.jpeg", alt: "Tahu Walik" },
  { src: "/Tahu Aci Kribo Lada Garam.webp", alt: "Tahu Aci Kribo Lada Garam" },
  {
    src: "/Tahu Walik Kribo Mini Hot Lava.webp",
    alt: "Tahu Walik Kribo Mini Hot Lava",
  },
  {
    src: "/Tahu Walik Kribo Mini Chili Oil.webp",
    alt: "Tahu Walik Kribo Mini Chili Oil",
  },
  { src: "/Tahuci.jpg", alt: "Tahuci" },
  { src: "/Kribo Pletak Pletok.jpg", alt: "Kribo Pletak Pletok" },
];
