export default function handler(req, res) {
  const images = [
    "/images/afrahoum.jpg",
    "/images/CENTRE-OF-EXCELLENCE-Web-Banner-Minimally-EN.jpg",
    "/images/DQA-Award-web-banner.jpg",
    "/images/maternity_normal_e_a_web_bannar.jpg",
    "/images/newsweek-webbanner.jpg",
    "/images/ORGAN-DONAR_WEB-BANNER.jpg",
    "/images/Facility-LocationFOR-ZH-_Web-Banner-EN.jpg",
    "/images/paediatric-promotions.jpg",
    "/images/Laser-Hair-Removal-TV-Web.jpg",
  ];
  res.status(200).json(images);
}
