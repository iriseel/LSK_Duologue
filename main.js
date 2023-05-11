const start_btn = document.querySelector(".start");
const kk_speaker = document.querySelector(".kk");
const lx_speaker = document.querySelector(".lx");
const labels = document.querySelectorAll(".label");
const bgm = document.querySelector(".bgm");

let kk_links = [
    "https://archive.nytimes.com/latitude.blogs.nytimes.com/2013/01/18/song-and-dance-hun-sens-other-power-play/?searchResultPosition=3",
    "https://www.theguardian.com/world/2021/aug/11/china-to-ban-karaoke-songs-with-content-that-endangers-national-unity",
    "https://www.nytimes.com/2016/11/12/world/asia/rodrigo-duterte-najib-razak-karaoke.html?searchResultPosition=12",
    //Popular Propaganda? Art and Culture in Revolutionary China
    "http://www.jstor.org/stable/40541604",
    //重庆：红歌大联唱「快闪」
    "https://youtu.be/0MIJsuBkt0k",
    //Performing Rebellion: Karaoke as a Lens into Political Violence
    "https://doi.org/10.1093/ips/oly013",
    //好乐Day
    // "https://www.youtube.com/watch?v=NroJcYgd590&ab_channel=superfun1981",
    //陶紅-堂堂正正一輩子(習主席寄語)MV
    "https://youtu.be/nCxLvlFMcbE",
    //Mimic Me
    "https://youtu.be/ZRrrlJXDDIA",
];
let lx_links = [
    //Sound principles
    "https://www.theguardian.com/world/2008/feb/21/china",
    "https://radiolab.org/podcast/wubi-effect",
    "http://www.pinyin.info/romanization/sinwenz/",
    "https://en.wikipedia.org/wiki/Sagittarius_A*",
    //Official Chinese media outlet uses racial slur 'banana' to insult departing US envoy
    "https://www.scmp.com/news/china/article/1437846/official-chinese-media-outlet-uses-racial-slur-banana-insult-departing-us",
    //别了，骆氏家辉！
    "https://www.chinanews.com.cn/gn/2014/02-27/5892576.shtml#0-tsina-1-40808-397232819ff9a47a7b7e80a40613cfe1",
    //Melancholia trailer
    "https://youtu.be/6IZGwvxhXvw",
];

window.addEventListener("click", init);

function init() {
    start_btn.style.opacity = 0;
    setTimeout(() => {
        start_btn.style.display = "none";
    }, 500);

    labels.forEach(function (label) {
        setTimeout(() => {
            label.style.display = "block";
        }, 500);
    });

    bgm.play();
    bgm.volume = 0.15;

    kk_speaker.addEventListener("mouseover", function () {
        this.play();
        // this.style.filter = "blur(0px)";
    });
    kk_speaker.addEventListener("mouseleave", function () {
        this.pause();
        // this.style.filter = "blur(2px)";
    });

    lx_speaker.addEventListener("mouseover", function () {
        this.play();
        // this.style.filter = "blur(0px)";
    });
    lx_speaker.addEventListener("mouseleave", function () {
        this.pause();
        // this.style.filter = "blur(2px)";
    });

    kk_speaker.addEventListener("click", function () {
        //!!Add condition so that shown links are removed!
        const random_index = Math.floor(Math.random() * kk_links.length);
        // Open the link at the random index in a new tab
        window.open(kk_links[random_index], "_blank");

        //remove the opened link from array so it doesn't repeat
        kk_links = kk_links.filter(function (item) {
            return item !== kk_links[random_index];
        });
    });

    lx_speaker.addEventListener("click", function () {
        const random_index = Math.floor(Math.random() * lx_links.length);
        // Open the link at the random index in a new tab
        window.open(lx_links[random_index], "_blank");

        lx_links = lx_links.filter(function (item) {
            return item !== lx_links[random_index];
        });
    });

    window.removeEventListener("click", init);
}
