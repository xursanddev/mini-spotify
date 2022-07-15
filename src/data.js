import { v4 as uuid4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Dunyo sening tog'angmas",
      cover:
        "data:image/jpeg;base64,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",
      artist: "JAVA",
      audio: "//mp3uk.net/mp3/files/java-dunyo-seni-tog-angmas-mp3.mp3",
      color: ["#C69400", "#9EA89A"],
      id: uuid4(),
      active: true,
    },
    {
      name: "Liyakun",
      cover:
        "https://i.pinimg.com/474x/35/a4/14/35a414739cce0e5fa06d744208bd9aa6.jpg",
        artist: "nasheed",
      audio: " https://kmuzon.com/upload/files/2020-04/nashid-lijakun_(kmuzon.com).mp3",
      color: ["#C69400", "#9EA89A"],
      id: uuid4(),
      active: true,
    },
    {
      name: "Жылтыр көйлек",
      cover:
        "http://zapoem.com/images/covers/405f5518.a.19760216-1.jpg",
      artist: "Еркебулан Кумаров",
      audio: "https://topmuz.kz/redownload.php?cat=3&song=erkebulan-kumarov---jyltyr-koilek.mp3",
      color: ["#C69400", "#9EA89A"],
      id: uuid4(),
      active: true,
    },
    {
      name: "Комета",
      cover:
        "https://sefon.pro/img/artist_photos/jony.jpg",
      artist: "Jony",
      audio: "https://dl2.mp3party.net/online/9109234.mp3",
      color: ["#557840", "#435F86"],
      id: uuid4(),
      active: false,
    },
    {
      name: "Og'ir guni boshimdasan do'st",
      cover:
        "https://static8.tgstat.ru/channels/_0/4d/4daffe39597c9db81586ec72880c46e3.jpg",
      artist: "Bobur Rep",
      audio: "https://mp3lev.net/mp3/dl/bobur-rep-og-ir-guni-boshimdasan-do-st-file.mp3",
      color: ["#B50404", "#ECBA6E"],
      id: uuid4(),
      active: false,
    },
    {
      name: "Ешкім ұнамайды",
      cover:
        "https://kzmp3.kz/files/artist/476.jpg",
      artist: "2RAR",
      audio: "https://uzhub.net/uploads/files/2022-05/2rar-eshkim-unamajdy_(uzhub.net).mp3",
      color: ["#5A6D3E", "#AD0100"],
      id: uuid4(),
      active: false,
    },
    {
      name: "Қара қызым",
      cover:
        "https://kmuzon.com/uploads/posts/2019-04/thumbs/1555844055_bigban.jpg",
      artist: "BigBan",
      audio: " https://kmuzon.com/upload/files/2019-04/bigban-kara-kyzym_(kmuzon.com).mp3  ",
      color: ["#2C3965", "#C12C4B"],
      id: uuid4(),
      active: false,
    },
    {
      name: "Chiroyligim Gulim",
      cover:
        "https://c-fa.cdn.smule.com/smule-gg-s-sf-bck4/arr/51/9c/a667f3cb-99e0-4389-b300-e1cf10e50e27_1024.jpg",
      artist: "Doxxim",
      audio: " https://uzhits.net/music/dl2/2019/11/24/Doxxim_-_Chiroyligim_gulim_kozlaring_nega_yosh.mp3",
      color: ["#2C3965", "#C12C4B"],
      id: uuid4(),
      active: false,
    },
    {
      name: "Самая вышка",
      cover:
        "https://images.genius.com/599ef9e0bc66d7a2b777eeb936d6021d.900x900x1.jpg",
      artist: "Raim & Artur",
      audio: "https://dl2.mp3party.net/online/8548253.mp3",
      color: ["#AEBBDB", "#4A976D"],
      id: uuid4(),
      active: false,
    },
  ];
}
// 
export default chillHop;
