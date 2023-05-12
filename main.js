const start_btn = document.querySelector(".start");
const kk_speaker = document.querySelector(".kk");
const lx_speaker = document.querySelector(".lx");
const labels = document.querySelectorAll(".label");
const bgm = document.querySelector(".bgm");
const kk_ctx = document.querySelector(".container_2 .context");
const lx_ctx = document.querySelector(".container_1 .context");
const kk_exit = document.querySelector(".container_2 .exit_btn");
const lx_exit = document.querySelector(".container_1 .exit_btn");

// let kk_ended = false;
// let lx_ended = false;

// let kk_links = [
//     "https://archive.nytimes.com/latitude.blogs.nytimes.com/2013/01/18/song-and-dance-hun-sens-other-power-play/?searchResultPosition=3",
//     "https://www.theguardian.com/world/2021/aug/11/china-to-ban-karaoke-songs-with-content-that-endangers-national-unity",
//     "https://www.nytimes.com/2016/11/12/world/asia/rodrigo-duterte-najib-razak-karaoke.html?searchResultPosition=12",
//     //Popular Propaganda? Art and Culture in Revolutionary China
//     "http://www.jstor.org/stable/40541604",
//     //重庆：红歌大联唱「快闪」
//     "https://youtu.be/0MIJsuBkt0k",
//     //Performing Rebellion: Karaoke as a Lens into Political Violence
//     "https://doi.org/10.1093/ips/oly013",
//     //好乐Day
//     // "https://www.youtube.com/watch?v=NroJcYgd590&ab_channel=superfun1981",
//     //陶紅-堂堂正正一輩子(習主席寄語)MV
//     "https://youtu.be/nCxLvlFMcbE",
//     //Mimic Me
//     "https://youtu.be/ZRrrlJXDDIA",
// ];
// let lx_links = [
//     //Sound principles
//     "https://www.theguardian.com/world/2008/feb/21/china",
//     "https://radiolab.org/podcast/wubi-effect",
//     "http://www.pinyin.info/romanization/sinwenz/",
//     "https://en.wikipedia.org/wiki/Sagittarius_A*",
//     //Official Chinese media outlet uses racial slur 'banana' to insult departing US envoy
//     "https://www.scmp.com/news/china/article/1437846/official-chinese-media-outlet-uses-racial-slur-banana-insult-departing-us",
//     //别了，骆氏家辉！
//     "https://www.chinanews.com.cn/gn/2014/02-27/5892576.shtml#0-tsina-1-40808-397232819ff9a47a7b7e80a40613cfe1",
//     //Melancholia trailer
//     "https://youtu.be/6IZGwvxhXvw",
// ];

let kk_links = [
    {
        excerpt:
            "Phnom Penh — Karaoke is big in Cambodia. Very big. Office workers sing and dance the night away while sipping iced beer in windowless, bunker-like karaoke parlors known as “KTV”s. Younger viewers download the videos directly onto their computers and sing at home.",
        url: "https://archive.nytimes.com/latitude.blogs.nytimes.com/2013/01/18/song-and-dance-hun-sens-other-power-play/?searchResultPosition=3",
    },
    {
        excerpt:
            "Flip to any of the country’s nine major television channels — all owned by government officials or business people with close ties to the governing Cambodia People’s Party and it won’t take long before a karaoke video singing the praises of Prime Minister Hun Sen or his wife, Bun Rany, comes on the air.",
        url: "https://archive.nytimes.com/latitude.blogs.nytimes.com/2013/01/18/song-and-dance-hun-sens-other-power-play/?searchResultPosition=3",
    },
    {
        excerpt:
            "The lyrics to “Techo Hun Sen on Fishing Lots” begin, “All people really appreciate Samdech Techo Hun Sen, who, on February 28, has broadcast in every direction, making all people very happy about Samdech’s cleverness to declare that…” Then, in Hun Sen’s voice the song continues, “To everyone in the whole Tonle Sap basin, there will be no more fishing lots.”",
        url: "https://archive.nytimes.com/latitude.blogs.nytimes.com/2013/01/18/song-and-dance-hun-sens-other-power-play/?searchResultPosition=3",
    },
    {
        excerpt:
            "Sophal Ear, a Cambodian-American academic who closely follows the political situation here, told me that “the constant playback is like any propaganda.” And while most people don’t run out to buy up the DVDs, “it eventually seeps into the consciousness.”",
        url: "https://archive.nytimes.com/latitude.blogs.nytimes.com/2013/01/18/song-and-dance-hun-sens-other-power-play/?searchResultPosition=3",
    },
    {
        excerpt:
            "China will establish a blacklist of karaoke songs to ban those containing “illegal content” from karaoke venues across the country starting from 1 October [2021], according to the Ministry of Culture and Tourism. The ministry said banned content would include that which endangers national unity, sovereignty or territorial integrity, violates state religious policies by propagating cults or superstitions, or which encourages illegal activities such as gambling and drugs.",
        url: "https://www.theguardian.com/world/2021/aug/11/china-to-ban-karaoke-songs-with-content-that-endangers-national-unity",
    },
    {
        excerpt:
            "At a state dinner on his visit to Malaysia, President Rodrigo Duterte of the Philippines and the Malaysian prime minister, Najib Razak, performed a karaoke duet of “Sha-La-La-La-La” by the Danish band The Walkers.",
        url: "https://www.nytimes.com/2016/11/12/world/asia/rodrigo-duterte-najib-razak-karaoke.html?searchResultPosition=12",
    },

    {
        excerpt:
            "That Mr. Duterte’s contribution to international statecraft, the annals of which already include Ping-Pong diplomacy, would include karaoke might come as little surprise to those he leads. As the former mayor of Davao City, Mr. Duterte was a fixture of the city’s karaoke bars, where he would belt out Frank Sinatra tunes while brandishing a .38 pistol.",
        url: "https://www.nytimes.com/2016/11/12/world/asia/rodrigo-duterte-najib-razak-karaoke.html?searchResultPosition=12",
    },
    {
        excerpt:
            "In most cases, so it seems, the political contents of propaganda art have no influence on its reception.",
        url: "http://www.jstor.org/stable/40541604",
    },

    {
        excerpt:
            "The question, then, appears to be less “What does propaganda do to the people?” than “What do people do to propaganda?” ... it becomes clear that consumers of Cultural Revolution propaganda derived pleasure from a text whose ideological message they did not share or accept. ",
        url: "http://www.jstor.org/stable/40541604",
    },
    {
        excerpt:
            "This ambiguity and openness in reception explain some of the after-effects of Cultural Revolution propaganda, which is appreciated not only by those who have nostalgic memories of performing it, but also by a younger generation that never went through the Cultural Revolution at all (this younger generation, now singing karaoke, rapping and rocking to the model works ....)",
        url: "http://www.jstor.org/stable/40541604",
    },
    {
        excerpt:
            "A musician (born 1942) remembers: “My generation likes the model works; they are our youth. Yes, there are people who dislike them, too, but really we do like them. Indeed, when I was young, eighteen or so, I needed art so much, we all did. And then there were just the model works as our food, and we actually thought they were quite great. ... Of course this was propaganda for Mao's thoughts, but it was also simply good art, it is all against these imperialists and their attacks, yes, it is, but it is also good art, really.”",
        url: "http://www.jstor.org/stable/40541604",
    },
    {
        excerpt:
            "Reverence and love for Mao is, paradoxically, often voiced by those who suffered most during the Cultural Revolution and earlier. ... Mao comes to stand for the old and cherished values in a world gone by and, increasingly, he becomes the stuff that makes Chinese society, disintegrating quickly with the effects of socialist capitalism, hold together.”",
        url: "http://www.jstor.org/stable/40541604",
    },
    {
        excerpt:
            "“在我们这辈人看来，样板戏剧像现在我们做的那种音乐一样。比较，怎么说呢，结合的特别……挺另类的。 ……但唯一的区别就是它有政治性。”",
        url: "https://vimeo.com/114648184",
    },
    {
        excerpt:
            "“在最近在大光明电影院，又把这个（样板）戏上演了。他说很多人来买票。很多的，三天的票已卖光。而且特别是中学生大学生，都是年轻人。",
        url: "https://vimeo.com/114648184",
    },
    {
        excerpt: "重庆：红歌大联唱「快闪」",
        url: "https://youtu.be/0MIJsuBkt0k",
    },
    {
        excerpt:
            "“Wow, wow, yeah. Our nation, our suffering, shall be recognized among the nations in the world,” raps a young man in the uniform of the rebel Kachin Independence Army (KIA). He is swaying his Kalashnikov to the relaxed reggae rhythm of a band playing on a green riverbank in a music video on Laiza TV. The television station broadcasts from the small KIA-held town of Laiza in northern Myanmar's restive Kachin State. With thousands of followers worldwide, the station's Facebook page draws a global audience. Besides screening news on the ongoing armed conflict between Myanmar's armed forces and the ethnonational KIA, music videos are a staple on Laiza TV. Many of them feature the lyrics as running subtitles to help with singing along. This is convenient for a favorite pastime among young Kachin people: karaoke.",
        url: "https://doi.org/10.1093/ips/oly013",
    },
    {
        excerpt:
            "【HD】陶紅-堂堂正正一輩子(習主席寄語)MV [Offiicial Music Video]官方完整版",
        url: "https://youtu.be/nCxLvlFMcbE",
    },
    {
        excerpt:
            "Speaking birds already mimic sounds they hear regularly. The more language they are exposed to, the more they'll learn to talk.",
        url: "https://youtu.be/ZRrrlJXDDIA",
    },
    // {
    // “”
    //     excerpt:
    //         "",
    //     url: ,
    // },
];

let lx_links = [
    {
        excerpt:
            "The phonetic alphabet developed by Zhou Youguang, pinyin, turns 50 this month [February 2008], having helped up to a billion Chinese citizens to learn to read, write and in many cases speak the national language.",
        url: "https://www.theguardian.com/world/2008/feb/21/china",
    },
    {
        excerpt:
            "“In politics, economics and every kind of cultural work, it [pinyin] has very important value. China is a country of many dialects, and hanyu pinyin helps the realising of a common language for the entire nation.”",
        url: "https://www.theguardian.com/world/2008/feb/21/china",
    },
    {
        excerpt:
            "However, he [Zhou Youguang] was denounced as a reactionary academic during the Cultural Revolution in the late Sixties, and exiled to the countryside. Zhou, who still produces a paper a month from his modest flat in Beijing, is cheered to see that pinyin is growing ever more useful.",
        url: "https://www.theguardian.com/world/2008/feb/21/china",
    },
    {
        excerpt:
            "[Wang Yongmin:] When we use Pinyin to type, we lose sight of the Chinese characters form and the form is the soul of a character. It's like you're grabbing hold of a person and doing a way with their flesh. You can't express the meaning of a Chinese character by its sound. The more people use Pinyin, the more screwed Chinese characters are.",
        url: "https://radiolab.org/podcast/wubi-effect",
    },

    {
        excerpt:
            "Tom: Wow. Wait, but then he's made this thing that is so blazingly fast and also is able to preserve Chinese way of writing, goes back thousands of years, why is it that these other input methods, these phonetic based methods are winning in terms of usage? <br><br> Simon: Right, well, the reason there is pretty much the Chinese government. The Chinese state promotes the idea of phonetic based input systems, really for one major reason. One of the same reasons they prioritize teaching Pinyin in school.  <br><br> Jad: The unification of the Chinese language.",
        url: "https://radiolab.org/podcast/wubi-effect",
    },
    {
        excerpt:
            "The most revolutionary difference between the Sin Wenz method and prior efforts (such as Gwoyeu Romatzyh) is the assertion that Mandarin can be written with the roman alphabet without tones needing to be indicated most of the time.",
        url: "http://www.pinyin.info/romanization/sinwenz/",
    },
    {
        excerpt:
            "ZOU, ZOU, ZOU.<br> Womn ...zou, zou, zou<br>Womn iou cianbaiwan,<br> Gochu du sh womn<br> Cung beibian, wang nan-bian.<br> Da dungbian, dao sibian.<br> Ai, siao pungjumn,<br> Laidao womndi duiwuli,<br> Laidao womndi duiwuli,<br> Dagia lianxoki.",
        url: "http://www.pinyin.info/romanization/sinwenz/",
    },

    {
        excerpt:
            "Just about the time that the National Phonetic Alphabet succeeded in gaining ascendancy over the Mandarin Alphabet and other schemes, the evolution of literary and political movements into a new stage gave rise to renewed consideration of the roman alphabet as the basis for reform of the Chinese written language.",
        url: "https://pinyin.info/readings/texts/DeFr1950.html",
    },
    {
        excerpt:
            "What seems to have initiated the new stage of discussion was a letter written in March 1918 by Ch`ien Hsüan-t`ung, a well-known philologist and professor of literature at National Peking University, to Ch`en Tu-hsiu, who at the time was editor of La Jeunesse, the leading organ of young Chinese intellectuals, and who soon afterward became one of the founders of the Chinese Communist Party. In his letter Ch`ien Hsüan-t`ung expressed approval of Ch`en Tu-hsiu's demand for a break with the Confucian ideology which had dominated Chinese life for more than two thousand years, and also offered his idea as to how this was to be carried out. “If you want to abolish Confucianism,” he said, “you must first abolish the Chinese script.”",
        url: "https://pinyin.info/readings/texts/DeFr1950.html",
    },
    {
        excerpt:
            "It seemed to Ch`ien that the ideographic script could not be adapted to the needs of modern China. He also saw no solution in the attempts which had thus far been made to apply a phonetic system of writing to Chinese. Indeed, it appeared to him that it would be impossible to apply a phonetic system of writing to Chinese at all. These views also led him to the conclusion, reached earlier by Wu Chih-hui and others, that Chinese writing itself would have to be abandoned and replaced by Esperanto. As an intermediary step he suggested using Chinese for ordinary purposes and resorting to English or French for complicated ideas. He also advanced as an alternative solution the recommendation of Wu Chih-hui to use the paihua or vernacular style of ideographic writing as the basis of the written language while effecting a gradual transition through the piecemeal introduction of Esperanto terms to express special ideas which were not susceptible of translation into Chinese.",
        url: "https://pinyin.info/readings/texts/DeFr1950.html",
    },
    {
        excerpt:
            "In his answering letter Ch`en Tu-hsiu argued that to abolish the writing of Chinese also meant to abolish Chinese speech. This he felt to be impossible. His solution was to retain Chinese speech but to write it in a roman script. Somewhat similar views, but with important modifications, were expressed by Hu Shih, who joined the discussion by writing to Ch`en Tu-hsiu as follows: “I think China will have to have an alphabetic writing in the future. But there are too many monosyllables in the literary language and it would be impossible to change over to an alphabetic script. So it is first necessary to replace the literary writing with paihua writing, and after that to change from paihua writing to alphabetic writing.”",
        url: "https://pinyin.info/readings/texts/DeFr1950.html",
    },
    {
        excerpt:
            "Official Chinese media [China News Service] outlet uses racial slur 'banana' to insult departing US envoy [Gary Locke]",
        url: "https://www.scmp.com/news/china/article/1437846/official-chinese-media-outlet-uses-racial-slur-banana-insult-departing-us",
    },
    {
        excerpt:
            "The editorial “Farewell, Gary Locke” took direct aim at Locke’s identity as a third-generation Chinese-American, calling him a “banana” — a racial term for Asians identifying with Western values despite their skin colour. “But when a banana sits out for long, its yellow peels will always rot, not only revealing its white core but also turning into the stomach-churning colour of black,” read the editorial.",
        url: "https://www.scmp.com/news/china/article/1437846/official-chinese-media-outlet-uses-racial-slur-banana-insult-departing-us",
    },
    {
        excerpt:
            "骆家辉是一个在美国出生的第三代华裔，他的“黄皮白心”的香蕉人属性成了奥巴马外交的优势。美国亚太新战略的显露，选择在他的任期内。... 当美国在亚太不断搅起漩涡、制造矛盾的时候，却有一个表面上久居海外的游子、黑头发黄皮肤的皮囊来为美国叫好。真是演得一出好双簧。",
        url: "https://www.chinanews.com.cn/gn/2014/02-27/5892576.shtml#0-tsina-1-40808-397232819ff9a47a7b7e80a40613cfe1",
    },
    {
        excerpt:
            "　然而香蕉放久了“黄皮”总归是要烂掉的，不但“白心”会露出来，也会变成反胃的“黑心”。也许骆氏觉得单靠黄皮肤出场是不够的。",
        url: "https://www.chinanews.com.cn/gn/2014/02-27/5892576.shtml#0-tsina-1-40808-397232819ff9a47a7b7e80a40613cfe1",
    },
    {
        excerpt:
            "但骆氏不但不认祖先的文字，还看不懂中国法律，特喜欢对着中国的内政指手画脚。。每次美国官员访问中国，骆氏都会递上简报，大谈中国所谓的人权及西藏问题，提点美国官员借机敲打中国。他还跑到新疆、西藏，煽邪风，点邪火。他自己跑不够，还收留所谓的维权律师陈光诚，然后“义务”带着这位盲人一起跑，成功发挥了“导盲犬”的作用。",
        url: "https://www.chinanews.com.cn/gn/2014/02-27/5892576.shtml#0-tsina-1-40808-397232819ff9a47a7b7e80a40613cfe1",
    },
    {
        excerpt:
            "“Melancholia is just gonna pass right in front of us. And it's gonna be the most beautiful sight ever.”",
        url: "https://youtu.be/6IZGwvxhXvw",
    },
    {
        excerpt:
            "The black hole itself is not seen, only nearby objects whose behavior is influenced by the black hole.",
        url: "https://en.wikipedia.org/wiki/Sagittarius_A*",
    },
    // {
    //     excerpt:
    //         "",
    //     url: ,
    // },
    // {
    //     excerpt:
    //         "",
    //     url: ,
    // },
];

let kk_excerpts = kk_links.map(({ excerpt }) => excerpt);
let kk_urls = kk_links.map(({ url }) => url);
let lx_excerpts = lx_links.map(({ excerpt }) => excerpt);
let lx_urls = lx_links.map(({ url }) => url);

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
        kk_ctx.style.display = "block";
        setTimeout(() => {
            kk_ctx.style.opacity = 1;
        }, 500);

        hide_lx_ctx();
        // const random_index = Math.floor(Math.random() * kk_links.length);
        // // Open the link at the random index in a new tab
        // window.open(kk_links[random_index], "_blank");
        // //remove the opened link from array so it doesn't repeat
        // kk_links = kk_links.filter(function (item) {
        //     return item !== kk_links[random_index];
        // });
    });

    lx_speaker.addEventListener("click", function () {
        lx_ctx.style.display = "block";
        setTimeout(() => {
            lx_ctx.style.opacity = 1;
        }, 500);

        hide_kk_ctx();
        // const random_index = Math.floor(Math.random() * lx_links.length);
        // // Open the link at the random index in a new tab
        // window.open(lx_links[random_index], "_blank");
        // lx_links = lx_links.filter(function (item) {
        //     return item !== lx_links[random_index];
        // });
    });

    kk_exit.addEventListener("click", function () {
        hide_kk_ctx();
    });

    lx_exit.addEventListener("click", function () {
        hide_lx_ctx();
    });

    // kk_speaker.onended = function () {
    //     console.log("kk ended");
    //     kk_ended = true;
    //     check_ended();
    // };

    // lx_speaker.onended = function () {
    //     console.log("lx ended");
    //     lx_ended = true;
    //     check_ended();
    // };

    window.removeEventListener("click", init);
}

function hide_lx_ctx() {
    lx_ctx.style.opacity = 0;
    setTimeout(() => {
        lx_ctx.style.display = "none";
    }, 500);
}

function hide_kk_ctx() {
    kk_ctx.style.opacity = 0;
    setTimeout(() => {
        kk_ctx.style.display = "none";
    }, 500);
}
// function check_ended() {
//     console.log("checking end");
//     if (lx_ended && kk_ended) {
//         location.reload();
//     }
// }

function randomize(min, max) {
    return min + Math.random() * (max - min);
}

//making stars
function createStars() {
    const starMaxSize = 32;
    const starMinSize = 16;
    let margin_vertical = 15;
    let margin_horizontal = 10;

    for (let i = 0; i < kk_links.length; i++) {
        const kk_excerpt = kk_excerpts[i];
        const kk_url = kk_urls[i];
        const fontsize = randomize(starMinSize, starMaxSize);
        const vertical_shift = randomize(-10, 10);
        const horizontal_shift = randomize(-10, 20);

        const star = document.createElement("div");
        const p = document.createElement("p");
        const kk_link = document.createElement("a");

        kk_link.appendChild(p);
        star.appendChild(kk_link);
        kk_ctx.appendChild(star);

        star.className = `star-${Math.ceil(Math.random() * 3)}`;
        p.innerHTML = kk_excerpt;
        kk_link.href = `${kk_url}`;
        kk_link.target = "_blank";

        p.style.fontSize = fontsize + "px";
        star.style.margin = `${margin_vertical}px ${margin_horizontal}px`;
        star.style.transform = `translate(${horizontal_shift}, ${vertical_shift}px)`;
    }

    for (let i = 0; i < lx_links.length; i++) {
        const lx_excerpt = lx_excerpts[i];
        const lx_url = lx_urls[i];
        const fontsize = randomize(starMinSize, starMaxSize);
        const vertical_shift = randomize(-10, 10);
        const horizontal_shift = randomize(-10, 15);

        const star = document.createElement("div");
        const p = document.createElement("p");
        const lx_link = document.createElement("a");

        lx_link.appendChild(p);
        star.appendChild(lx_link);
        lx_ctx.appendChild(star);

        star.className = `star-${Math.ceil(Math.random() * 3)}`;
        p.innerHTML = lx_excerpt;
        lx_link.href = `${lx_url}`;
        lx_link.target = "_blank";

        p.style.fontSize = fontsize + "px";
        star.style.margin = `${margin_vertical}px ${margin_horizontal}px`;
        star.style.transform = `translate(${horizontal_shift}, ${vertical_shift}px)`;
    }
}

createStars();
