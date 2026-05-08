export interface SolarTermPoster {
  id: string;
  name: string;
  season: string;
  image: string;
  version: string;
  description: string;
  motifs: string[];
  palette: string[];
  prompt: string;
  versions?: SolarTermVersion[];
}

export interface SolarTermVersion {
  label: string;
  image: string;
  note: string;
}

const version = "V1.0 \u00b7 2026.05";
const iteratedVersion = "V2.0 \u00b7 2026.05";
const promptPlaceholder = "\u63d0\u793a\u8bcd\u5f85\u8865\u5145\u3002";

const solarTermPrompts = {
  jingzhe:
    "modern Chinese decorative illustration, oriental storybook illustration, elegant new Chinese aesthetic, Awakening of Insects solar term scene, Jingzhe solar term, early spring garden after light rain, moist dark soil beginning to soften, tiny fresh grass shoots breaking through the ground, small insects awakening near the roots, young willow buds just appearing, distant pale golden thunderclouds behind misty trees, soft drizzle in the air, a single elegant figure in pale cyan wide-sleeved hanfu crouching sideways on a bluestone path, quietly looking down at the new shoots and tiny insects with gentle surprise, fresh and lively but restrained atmosphere, sense of nature waking after spring thunder, pale jade green, misty blue, ivory, soft peach and fresh grass green tones, open airy composition, large negative space, flat color, delicate simplified lines, soft xuan paper texture, mineral pigment feeling, minimal blank face, no facial features, no eyes, no nose, no mouth, featureless face, no text, no Chinese characters, no calligraphy, no signature, no seal, no watermark, no logo, no typography, no heavy thunderstorm, no dramatic lightning, no dense peach blossoms, no fully blooming spring scene, no snow-covered winter scene, no pond, no lotus, no modern objects, no anime, no 3D, no cinematic lighting --iw 0.5 --niji 6 --ar 3:4 --raw --s 80",
  chunfen:
    "modern Chinese decorative illustration, oriental storybook illustration, elegant new Chinese aesthetic, Spring Equinox solar term scene, Chunfen solar term, balanced mid-spring countryside meadow, clear mild air, soft spring wind, peach blossoms and young willow branches gently moving, fresh grass and small wildflowers, swallows returning across a pale blue sky, evenly spread warm sunlight, one child running across the meadow while flying a swallow-shaped kite, one adult standing behind and gently holding the kite spool, kite string lifted by the wind, joyful but peaceful spring outing mood, sense of day and night in harmony, pale jade green, ivory, soft peach, misty blue and warm beige tones, open airy composition, large negative space, flat color, delicate simplified lines, soft xuan paper texture, mineral pigment feeling, minimal blank face, no facial features, no eyes, no nose, no mouth, featureless face, no text, no Chinese characters, no calligraphy, no signature, no seal, no watermark, no logo, no typography, no pond, no lotus, no heavy rain, no summer heat, no modern objects, no anime, no 3D, no cinematic lighting --niji 6 --ar 3:4 --raw --s 80",
  guyu:
    "modern Chinese decorative illustration, oriental storybook illustration, elegant new Chinese aesthetic, Grain Rain solar term scene, Guyu solar term, late spring after gentle rain, misty tea garden on a low hillside, fresh tea buds covered with tiny raindrops, peonies blooming near a quiet courtyard wall, moist warm air, soft cloudy sunlight, young green leaves, small birds and drifting petals, one elegant figure picking fresh tea leaves into a bamboo basket, another figure gently holding a paper umbrella beside blooming peonies, calm and fertile late spring atmosphere, sense of rain nourishing grains and plants, fresh jade green, ivory, pale peach, soft peony pink and misty grey tones, open airy composition, large negative space, flat color, delicate simplified lines, soft xuan paper texture, mineral pigment feeling, refined Chinese countryside courtyard, minimal blank face, no facial features, no eyes, no nose, no mouth, featureless face, no text, no Chinese characters, no calligraphy, no signature, no seal, no watermark, no logo, no typography, no heavy rain, no storm, no pond, no lotus, no summer heat, no autumn harvest, no modern objects, no anime, no 3D, no cinematic lighting --niji 6 --ar 3:4 --raw --s 80",
  lixia:
    "modern Chinese decorative illustration, oriental storybook illustration, elegant new Chinese aesthetic, Beginning of Summer solar term scene, Lixia solar term, early summer courtyard and countryside edge, no garden pond, no waterside pavilion, bright warm sunlight filtering through dense fresh green leaves, green plum tree full of small unripe plums, soft shadows of locust tree flowers, light breeze moving grass and robe ribbons, one elegant figure reaching up to pick green plums, another figure holding a bamboo basket below, joyful and lively early summer mood, fresh grass, wildflowers, butterflies, a simple rattan chair and bamboo basket nearby, emerald green, plum green, pale blue, warm white and soft beige tones, open airy composition, large negative space, flat color, delicate simplified lines, soft xuan paper texture, mineral pigment feeling, minimal blank face, no facial features, no eyes, no nose, no mouth, featureless face, no text, no Chinese characters, no calligraphy, no signature, no seal, no watermark, no logo, no typography, no lotus pond, no water surface, no heavy humidity, no extreme heat, no autumn harvest, no modern objects, no anime, no 3D, no cinematic lighting --niji 6 --ar 3:4 --raw --s 80",
  xiaoshu:
    "modern Chinese decorative illustration, oriental storybook illustration, elegant new Chinese aesthetic, Minor Heat solar term scene, Xiaoshu solar term, early period of summer heat, quiet Chinese courtyard under large trees, dense green foliage casting deep shade, still humid air, faint heat haze, soft warm sunlight filtering through leaves, no strong wind, calm and slightly oppressive atmosphere, two elegant women in light summer hanfu with thin flowing robes, pale jade green, ivory, soft peach and warm beige tones, one woman sitting under the tree slowly fanning herself with a round silk fan, another woman placing sliced watermelon on a small table, sense of seeking shade and cooling down, slow and relaxed movement, early summer fruits, subtle signs of heat, minimal background water, no lotus pond, open airy composition, large negative space, flat color, clean graphic composition, delicate simplified lines, soft xuan paper texture, mineral pigment feeling, refined Chinese courtyard architecture, minimal blank face, no facial features, no eyes, no nose, no mouth, only soft face silhouette, featureless face, elegant simplified figure, avoid detailed facial rendering, no text, no Chinese characters, no calligraphy, no signature, no seal, no watermark, no logo, no typography, no extreme scorching heat, no heavy night scene, no strong wind, no autumn colors, no cold atmosphere, no modern objects, no anime, no 3D, no cinematic lighting, no exaggerated fantasy --niji 6 --ar 3:4 --raw --s 80",
  chushu:
    "modern Chinese decorative illustration, oriental storybook illustration, elegant new Chinese aesthetic, End of Heat solar term scene, Chushu solar term, late summer turning into early autumn, quiet riverside at dusk, summer heat fading, cool evening breeze, one elegant figure bending down to gently place a lotus-shaped river lantern onto the water, another figure standing on the riverbank slowly folding a round summer fan, scattered lantern reflections on the calm river, pale reed flowers swaying in the wind, withered lotus leaves near the shore, wild grasses beginning to turn light ochre, distant geese flying south across misty mountains, soft twilight atmosphere, quiet and tender mood, sense of sending away summer heat, muted blue-green, misty white, pale apricot yellow, faded lotus green and warm beige tones, open airy composition, large negative space, flat color, delicate simplified lines, soft xuan paper texture, mineral pigment feeling, minimal blank face, no facial features, no eyes, no nose, no mouth, featureless face, no text, no Chinese characters, no calligraphy, no signature, no seal, no watermark, no logo, no typography, no deep night, no festival crowd, no mourning atmosphere, no strong summer heat, no dense lotus pond, no deep red autumn leaves, no frost, no snow, no modern objects, no anime, no 3D, no cinematic lighting --niji 6 --ar 3:4 --raw --s 80",
  qiufen:
    "modern Chinese decorative illustration, oriental storybook illustration, elegant new Chinese aesthetic, Autumn Equinox solar term scene, quiet mid-autumn courtyard beside a small osmanthus tree, pale osmanthus blossoms falling gently, distant light-golden rice fields beyond the courtyard wall, clear cool air, soft balanced sunlight, a few yellow leaves drifting in the breeze, a single elegant figure in light autumn hanfu, muted ivory, pale jade, osmanthus yellow, soft ochre and warm beige tones, the figure quietly collecting fallen osmanthus flowers in a small woven basket, peaceful contemplative mood, sense of day and night in harmony, open airy composition, large negative space, flat color, delicate simplified lines, soft xuan paper texture, mineral pigment feeling, refined Chinese courtyard architecture, minimal blank face, no facial features, no eyes, no nose, no mouth, featureless face, no text, no Chinese characters, no calligraphy, no signature, no seal, no watermark, no logo, no typography, no pond, no lotus, no deep red maple leaves, no frost, no cold winter atmosphere, no harvest festival crowd, no modern objects, no anime, no 3D, no cinematic lighting --niji 6 --ar 3:4 --raw --s 80",
  dongzhi:
    "modern Chinese decorative illustration, oriental storybook illustration, elegant new Chinese aesthetic, Winter Solstice solar term scene, Dongzhi solar term, cold winter evening inside a traditional Chinese home, enclosed warm interior, wooden window with faint snow and plum branches outside, soft candlelight and gentle indoor warmth, two or three family members sitting around a low wooden table, preparing tangyuan and warm tea, one elder gently placing tangyuan into a bowl, one young child watching beside the table, quiet reunion atmosphere, sense of warmth during the longest night, muted ivory, warm beige, soft amber, ink green and subtle plum red tones, compact intimate composition, flat color, delicate simplified lines, soft xuan paper texture, mineral pigment feeling, minimal blank face, no facial features, no eyes, no nose, no mouth, featureless face, no text, no Chinese characters, no calligraphy, no signature, no seal, no watermark, no logo, no typography, no open pavilion, no outdoor sitting, no large landscape view, no lonely mood, no modern objects, no anime, no 3D, no cinematic lighting --niji 6 --ar 3:4 --raw --s 70",
  xiaohan:
    "modern Chinese decorative illustration, oriental storybook illustration, elegant new Chinese aesthetic, Minor Cold solar term scene, Xiaohan solar term, completely enclosed traditional Chinese study room in deep winter, compact interior space, low ceiling, thick wooden walls, closed paper windows, small lattice window only, bamboo blinds lowered, heavy fabric curtain blocking the cold wind, no open veranda, no pavilion, no terrace, no courtyard platform, no wide wall opening, no large exterior view, snow and red plum branches visible only faintly through the small window, a single scholar in thick winter robe sitting close to a low wooden table, reading quietly beside a small charcoal brazier, hand warmer and warm wine cup on the table, soft dim interior shadows, cold white and grey blue light outside the window, subtle plum red accents, quiet shelter from severe cold, inward and restrained winter mood, flat color, delicate simplified lines, soft xuan paper texture, mineral pigment feeling, refined Chinese interior architecture, minimal blank face, no facial features, no eyes, no nose, no mouth, featureless face, no text, no Chinese characters, no calligraphy, no signature, no seal, no watermark, no logo, no typography, no pond, no water surface, no open landscape, no outdoor sitting, no two young women, no modern objects, no anime, no 3D, no cinematic lighting --niji 6 --ar 3:4 --raw --s 50",
} as const;

const chun = "\u6625";
const xia = "\u590f";
const qiu = "\u79cb";
const dong = "\u51ac";

function image(id: string) {
  return `/images/lab/solar-terms/${id}.png`;
}

function versionImage(id: string) {
  return `/images/lab/solar-terms/versions/${id}.png`;
}

function iteration(
  id: string,
  oldNote: string,
  newNote: string
): SolarTermVersion[] {
  return [
    {
      label: "V1.0",
      image: versionImage(`${id}-v1`),
      note: oldNote,
    },
    {
      label: "V2.0",
      image: image(id),
      note: newNote,
    },
  ];
}

const iterationVersions: Record<string, SolarTermVersion[]> = {
  jingzhe: iteration(
    "jingzhe",
    "初版延续了前两个春季节气的灰绿庭院与双人关系，氛围好但识别点不够突出，容易被看成普通早春图。",
    "新版把视觉重心转向雨后土壤、草芽、昆虫苏醒和俯身观察动作，让“惊蛰”的节气语义更清楚。"
  ),
  chunfen: iteration(
    "chunfen",
    "初版色彩在春季系列中偏跳，局部饱和度和装饰感较强，和前后节气的柔和气质不够连贯。",
    "新版收回到浅玉绿、象牙白和淡桃色，用纸鸢、归燕和均衡日光表达春分的平衡感。"
  ),
  lixia: iteration(
    "lixia",
    "初版更像泛化的夏日水边场景，人物行为不够明确，也缺少立夏独有的物候线索。",
    "新版改为青梅采摘和浓荫庭院，用动作、果实和初夏光线建立更强的节气辨识度。"
  ),
  xiaoman: iteration(
    "xiaoman",
    "初版背景偏金黄，整体容易被误读成秋收场景，削弱了“小满”将满未熟的夏初状态。",
    "新版强化麦穗渐满、浅金日光和远山留白，让成熟前的饱满感更柔和、更贴近节气。"
  ),
  mangzhong: iteration(
    "mangzhong",
    "初版画风和人物处理偏硬，和系列中更柔和的新中式绘本语言有距离，整体统一性不足。",
    "新版转向水田插秧、稻苗和湿润空气，用农忙动作连接芒种主题，同时保持系列线条和色调。"
  ),
  xiaoshu: iteration(
    "xiaoshu",
    "初版和夏至同样围绕荷塘展开，节气差异被削弱，而荷叶荷花更适合作为夏至的表达。",
    "新版改成树荫乘凉、团扇和西瓜，把小暑的“暑气初起、寻找清凉”表现得更具体。"
  ),
  chushu: iteration(
    "chushu",
    "初版人物较多但行为不清晰，看不出与处暑相关的活动，节气主题被削弱。",
    "新版用河灯、折扇、残荷和南飞雁表达送走暑气，形成更明确的夏末入秋叙事。"
  ),
  qiufen: iteration(
    "qiufen",
    "初版秋意不足，并且延续双人仕女结构，系列节奏显得重复，不利于体现节气差异。",
    "新版改为单人收集桂花，用金黄色树冠、落花和均衡日光表达秋分的清朗和平衡。"
  ),
  shuangjiang: iteration(
    "shuangjiang",
    "初版人物占比过大，画面色调偏暗，深秋气氛成立但压住了霜降应有的冷白与红叶对比。",
    "新版缩小人物比例，突出红叶、薄霜、水面倒影和灰白留白，让深秋边界感更清晰。"
  ),
  xiaoxue: iteration(
    "xiaoxue",
    "初版两个人物行为不明确，室外雪景成立但缺少小雪特有的避寒与初雪生活感。",
    "新版转向半室内书斋、炉火、书卷和窗外梅雪，用室内外冷暖对比表达小雪后的安静。"
  ),
  dongzhi: iteration(
    "dongzhi",
    "初版月夜与人物关系较抽象，和系列其他作品的生活化新中式表达略有距离。",
    "新版收进温暖室内，用汤圆、围桌、茶盏和窗外雪梅表现冬至长夜里的团圆感。"
  ),
};

const iterationVersionsEnglish: Record<string, SolarTermVersion[]> = {
  jingzhe: iteration(
    "jingzhe",
    "The first version stayed too close to the previous spring posters, with a similar grey-green courtyard and figure relationship, so the seasonal identity was not strong enough.",
    "The current version shifts the focus to rain-softened soil, grass shoots, insects waking, and a crouching observation pose, making Jingzhe easier to recognize."
  ),
  chunfen: iteration(
    "chunfen",
    "The first version felt too visually bright within the spring sequence, so its color rhythm stood apart from the softer neighboring posters.",
    "The current version returns to pale jade, ivory, and soft peach, using a kite, returning swallows, and balanced daylight to express Spring Equinox."
  ),
  lixia: iteration(
    "lixia",
    "The first version read as a general summer waterside scene, with unclear figure action and weak Beginning of Summer signals.",
    "The current version uses green-plum picking, dense shade, and early-summer light to make the seasonal action more specific."
  ),
  xiaoman: iteration(
    "xiaoman",
    "The first version leaned too golden, especially in the background, which made it feel closer to autumn harvest than early-summer fullness.",
    "The current version emphasizes wheat gradually filling, pale gold light, and distant blank space to keep the mood soft and not fully ripe."
  ),
  mangzhong: iteration(
    "mangzhong",
    "The first version felt visually stiff and less aligned with the softer storybook language of the rest of the series.",
    "The current version moves toward paddy-field transplanting, rice seedlings, and humid air while keeping the linework and palette consistent."
  ),
  xiaoshu: iteration(
    "xiaoshu",
    "The first version overlapped too much with Summer Solstice through lotus and water imagery, while that visual language suited Summer Solstice better.",
    "The current version uses tree shade, a round fan, and watermelon to express early heat and the everyday search for coolness."
  ),
  chushu: iteration(
    "chushu",
    "The first version had several figures but no clear seasonal activity, so the End of Heat theme was hard to read.",
    "The current version uses river lanterns, a folded fan, withered lotus leaves, and geese flying south to make the late-summer transition clearer."
  ),
  qiufen: iteration(
    "qiufen",
    "The first version did not feel autumnal enough and repeated the two-figure structure too often used elsewhere in the series.",
    "The current version switches to a single figure gathering osmanthus, using a golden canopy, falling flowers, and balanced light."
  ),
  shuangjiang: iteration(
    "shuangjiang",
    "The first version placed the figures too large in the frame and leaned too dark, reducing the crisp frost-and-red-leaf contrast.",
    "The current version reduces figure scale and foregrounds red leaves, thin frost, water reflection, and pale mist."
  ),
  xiaoxue: iteration(
    "xiaoxue",
    "The first version had unclear figure action; the snowy outdoor setting worked, but it lacked a Minor Snow sense of shelter and quiet daily life.",
    "The current version moves into a semi-interior study with books, a brazier, and snowy plum branches outside the window."
  ),
  dongzhi: iteration(
    "dongzhi",
    "The first version felt more abstract and slightly separate from the lived-in new-Chinese tone of the broader series.",
    "The current version moves indoors, using tangyuan, a low table, tea, and snowy plum branches to express reunion during the longest night."
  ),
};

export const solarTerms: SolarTermPoster[] = [
  {
    id: "lichun",
    name: "\u7acb\u6625",
    season: chun,
    image: image("lichun"),
    version,
    description: "冬末春初的庭院里，梅枝、垂柳和新绿共同构成早春信号；两位人物围绕嫩枝与花枝互动，把“春意初醒”处理成安静的观察与采集。",
    motifs: ["梅枝", "垂柳", "新芽", "庭院屋檐", "采枝人物"],
    palette: ["灰绿", "象牙白", "淡粉", "苔绿", "浅水青"],
    prompt: promptPlaceholder,
  },
  {
    id: "yushui",
    name: "\u96e8\u6c34",
    season: chun,
    image: image("yushui"),
    version,
    description: "雨水以水边庭院、柳丝、浅水倒影和伞下人物表现春雨的润泽感；画面保留大量浅色留白，让雨后的空气比雨滴本身更突出。",
    motifs: ["春雨", "柳丝", "纸伞", "浅水倒影", "庭院"],
    palette: ["水青", "雾白", "淡粉", "柳绿", "浅灰"],
    prompt: promptPlaceholder,
  },
  {
    id: "jingzhe",
    name: "\u60ca\u86f0",
    season: chun,
    image: image("jingzhe"),
    version: iteratedVersion,
    description: "惊蛰没有处理成强烈雷暴，而是用雨后树影、土壤边缘、嫩芽与俯身观察的人物表达万物初动；视觉重点放在“发现变化”的瞬间。",
    motifs: ["春雷", "草芽", "树影", "庭院石阶", "观察姿态"],
    palette: ["雾绿", "浅青", "暖米色", "淡粉", "墨灰"],
    prompt: solarTermPrompts.jingzhe,
    versions: iterationVersions.jingzhe,
  },
  {
    id: "chunfen",
    name: "\u6625\u5206",
    season: chun,
    image: image("chunfen"),
    version: iteratedVersion,
    description: "春分以郊野、桃枝、归燕和放风筝动作表现昼夜平衡后的舒展感；人物一前一后形成风向与视线引导，整体轻快但不过分热闹。",
    motifs: ["桃花", "归燕", "纸鸢", "春草", "郊野"],
    palette: ["浅玉绿", "象牙白", "淡桃粉", "雾蓝", "暖米色"],
    prompt: solarTermPrompts.chunfen,
    versions: iterationVersions.chunfen,
  },
  {
    id: "qingming",
    name: "\u6e05\u660e",
    season: chun,
    image: image("qingming"),
    version,
    description: "清明画面以烟雨水岸、柳枝、石板路和撑伞踏青人物构成清润氛围；远山与水面被压低饱和度，强调春雨后的清明与空阔。",
    motifs: ["烟雨", "柳枝", "纸伞", "水岸", "远山"],
    palette: ["柳绿", "雾灰", "水青", "素白", "淡粉"],
    prompt: promptPlaceholder,
  },
  {
    id: "guyu",
    name: "\u8c37\u96e8",
    season: chun,
    image: image("guyu"),
    version,
    description: "谷雨选择雨后茶园、茶芽、山坡与庭院花枝，把“雨生百谷”的生长感转化为采茶动作；湿润空气和浅绿山色承担主要季节叙事。",
    motifs: ["茶芽", "细雨", "山坡", "牡丹", "采茶人物"],
    palette: ["新茶绿", "雾灰", "象牙白", "淡桃粉", "浅青"],
    prompt: solarTermPrompts.guyu,
  },
  {
    id: "lixia",
    name: "\u7acb\u590f",
    season: xia,
    image: image("lixia"),
    version: iteratedVersion,
    description: "立夏以青梅树、浓荫和采摘动作作为初夏入口，避免直接进入荷塘和酷暑；人物仰头摘果与下方竹篮形成轻快的劳动场景。",
    motifs: ["青梅", "浓荫", "竹篮", "蝴蝶", "采摘动作"],
    palette: ["梅绿", "嫩黄绿", "象牙白", "暖米色", "浅蓝"],
    prompt: solarTermPrompts.lixia,
    versions: iterationVersions.lixia,
  },
  {
    id: "xiaoman",
    name: "\u5c0f\u6ee1",
    season: xia,
    image: image("xiaoman"),
    version: iteratedVersion,
    description: "小满的画面聚焦麦穗渐满而未熟的状态，人物在麦浪中俯身劳作；浅金色光线和远山留白让“将满未满”的节气含义更柔和。",
    motifs: ["麦穗", "麦浪", "远山", "浅金日光", "劳作人物"],
    palette: ["麦金", "浅杏黄", "米白", "灰绿", "淡蓝"],
    prompt: promptPlaceholder,
    versions: iterationVersions.xiaoman,
  },
  {
    id: "mangzhong",
    name: "\u8292\u79cd",
    season: xia,
    image: image("mangzhong"),
    version: iteratedVersion,
    description: "芒种用水田、稻苗、柳荫和插秧动作表达农忙开始；前景荷叶和水面反光增强湿润感，让画面从观赏转向生产活动。",
    motifs: ["稻苗", "水田", "插秧", "柳荫", "荷叶"],
    palette: ["稻绿", "水青", "暖黄", "柳绿", "浅米色"],
    prompt: promptPlaceholder,
    versions: iterationVersions.mangzhong,
  },
  {
    id: "xiazhi",
    name: "\u590f\u81f3",
    season: xia,
    image: image("xiazhi"),
    version,
    description: "夏至以荷叶、盛放荷花和水边人物表现白昼最长后的明亮夏意；粉色衣裙与大面积水青形成轻盈对比，避免暑热压迫感过强。",
    motifs: ["荷叶", "荷花", "水面", "夏日庭院", "赏荷人物"],
    palette: ["荷绿", "水青", "淡粉", "象牙白", "日光黄"],
    prompt: promptPlaceholder,
  },
  {
    id: "xiaoshu",
    name: "\u5c0f\u6691",
    season: xia,
    image: image("xiaoshu"),
    version: iteratedVersion,
    description: "小暑围绕树荫乘凉、团扇和西瓜展开，表现暑气初起时的避暑日常；深绿树冠压低光线，人物动作保持缓慢松弛。",
    motifs: ["树荫", "团扇", "西瓜", "庭院小桌", "乘凉人物"],
    palette: ["浓绿", "竹青", "暖白", "浅桃", "阴影灰"],
    prompt: solarTermPrompts.xiaoshu,
    versions: iterationVersions.xiaoshu,
  },
  {
    id: "dashu",
    name: "\u5927\u6691",
    season: xia,
    image: image("dashu"),
    version,
    description: "大暑没有直接画烈日，而是用高墙、浓荫、水边鸟影和室内外明暗对比表现闷热；人物在廊下停留，形成避暑与热气并存的场景。",
    motifs: ["浓荫", "廊下", "水鸟", "庭院", "避暑人物"],
    palette: ["深绿", "灰青", "暖白", "浅金", "墨绿"],
    prompt: promptPlaceholder,
  },
  {
    id: "liqiu",
    name: "\u7acb\u79cb",
    season: qiu,
    image: image("liqiu"),
    version,
    description: "立秋通过庭院阶前的落叶、盆景与人物回望动作表现暑去秋来的第一丝凉意；画面仍保留粉绿，但加入橘黄叶片提示季节转向。",
    motifs: ["初黄叶", "庭院台阶", "盆景", "秋风", "回望人物"],
    palette: ["浅杏黄", "灰绿", "淡粉", "米白", "暖褐"],
    prompt: promptPlaceholder,
  },
  {
    id: "chushu",
    name: "\u5904\u6691",
    season: qiu,
    image: image("chushu"),
    version: iteratedVersion,
    description: "处暑以黄昏河畔、河灯、残荷、芦花和折扇动作表达送走暑气；水面反光与远山雾气让画面带有夏末入秋的温柔过渡。",
    motifs: ["河灯", "折扇", "残荷", "芦花", "南飞雁"],
    palette: ["蓝绿", "雾白", "淡杏黄", "残荷绿", "暖米色"],
    prompt: solarTermPrompts.chushu,
    versions: iterationVersions.chushu,
  },
  {
    id: "bailu",
    name: "\u767d\u9732",
    season: qiu,
    image: image("bailu"),
    version,
    description: "白露以水边白花、薄雾和浅蓝衣裙营造清晨露气；人物在花草间停驻，视觉重心从夏季的热转向初秋的清润微凉。",
    motifs: ["白花", "露气", "水岸", "晨雾", "停驻人物"],
    palette: ["霜白", "水青", "淡蓝", "浅绿", "米白"],
    prompt: promptPlaceholder,
  },
  {
    id: "qiufen",
    name: "\u79cb\u5206",
    season: qiu,
    image: image("qiufen"),
    version: iteratedVersion,
    description: "秋分围绕桂花、庭院、落花和收集动作展开，用均衡的光线与金黄色树冠表达昼夜平分；画面安静，强调中秋前后的清朗。",
    motifs: ["桂花", "落花", "庭院", "收集花篮", "平衡日光"],
    palette: ["桂花黄", "象牙白", "浅玉绿", "软赭", "暖米色"],
    prompt: solarTermPrompts.qiufen,
    versions: iterationVersions.qiufen,
  },
  {
    id: "hanlu",
    name: "\u5bd2\u9732",
    season: qiu,
    image: image("hanlu"),
    version,
    description: "寒露以菊花、白鸟、倾斜树影和轻拢衣袖的人物表现露寒加深；花色仍明亮，但背景转向灰绿与冷白，形成秋意变冷的层次。",
    motifs: ["菊花", "白鸟", "寒露", "树影", "拢袖人物"],
    palette: ["菊黄", "冷白", "灰绿", "浅青", "暖米色"],
    prompt: promptPlaceholder,
  },
  {
    id: "shuangjiang",
    name: "\u971c\u964d",
    season: qiu,
    image: image("shuangjiang"),
    version: iteratedVersion,
    description: "霜降用红叶、冷水倒影、薄霜枝干和人物拾叶动作表现深秋边界；红色成为画面焦点，和大面积灰白水气形成冷暖对照。",
    motifs: ["红叶", "薄霜", "水面倒影", "拾叶人物", "寒枝"],
    palette: ["枫红", "霜灰", "墨黑", "米白", "冷水青"],
    prompt: promptPlaceholder,
    versions: iterationVersions.shuangjiang,
  },
  {
    id: "lidong",
    name: "\u7acb\u51ac",
    season: dong,
    image: image("lidong"),
    version,
    description: "立冬以室内门窗、梅枝、盆栽和两位人物的照料动作表现入冬后的收束；画面从户外开阔转向室内秩序，气氛更安静。",
    motifs: ["梅枝", "门窗", "盆栽", "室内庭院", "照料人物"],
    palette: ["冷灰", "橄榄绿", "素白", "梅红", "暖褐"],
    prompt: promptPlaceholder,
  },
  {
    id: "xiaoxue",
    name: "\u5c0f\u96ea",
    season: dong,
    image: image("xiaoxue"),
    version: iteratedVersion,
    description: "小雪呈现半室内书斋与窗外梅雪，人物靠近炉火和书卷形成避寒场景；室内暖光与窗外冷雪对比，突出初雪后的静。",
    motifs: ["小雪", "梅枝", "书斋", "炉火", "读书人物"],
    palette: ["雪白", "暖棕", "梅红", "墨绿", "灰蓝"],
    prompt: promptPlaceholder,
    versions: iterationVersions.xiaoxue,
  },
  {
    id: "daxue",
    name: "\u5927\u96ea",
    season: dong,
    image: image("daxue"),
    version,
    description: "大雪以庭院厚雪、松枝、门廊和扫雪/赏雪人物构成寒意主场；灰白空间占据大面积，人物只作为尺度和生活气息的补充。",
    motifs: ["厚雪", "松枝", "门廊", "扫雪人物", "庭院"],
    palette: ["雪白", "银灰", "松绿", "冷褐", "淡梅红"],
    prompt: promptPlaceholder,
  },
  {
    id: "dongzhi",
    name: "\u51ac\u81f3",
    season: dong,
    image: image("dongzhi"),
    version: iteratedVersion,
    description: "冬至把场景收进温暖室内，围桌、汤圆、茶盏和窗外雪梅共同表达最长夜里的团圆；构图紧凑，比其他节气更强调人的关系。",
    motifs: ["汤圆", "围桌", "烛光", "窗外雪", "梅枝"],
    palette: ["暖米色", "柔琥珀", "墨绿", "梅红", "象牙白"],
    prompt: solarTermPrompts.dongzhi,
    versions: iterationVersions.dongzhi,
  },
  {
    id: "xiaohan",
    name: "\u5c0f\u5bd2",
    season: dong,
    image: image("xiaohan"),
    version,
    description: "小寒画面更靠近冷白户外，枯枝、雪地和远处人物形成疏离感；留白和低饱和蓝灰色让寒意显得轻而长。",
    motifs: ["寒枝", "雪地", "远山", "冬衣人物", "冷雾"],
    palette: ["冷灰", "雪白", "淡蓝", "梅白", "墨绿"],
    prompt: solarTermPrompts.xiaohan,
  },
  {
    id: "dahan",
    name: "\u5927\u5bd2",
    season: dong,
    image: image("dahan"),
    version,
    description: "大寒以远山、厚雪、空旷庭院和小尺度人物表现一年中最深的寒冷；画面减少暖色，让山水和雪面承担主要情绪。",
    motifs: ["厚雪", "远山", "空庭", "梅枝", "行走人物"],
    palette: ["雪灰", "冷青", "墨绿", "素白", "微金"],
    prompt: promptPlaceholder,
  },
];

const solarTermEnglish: Record<
  string,
  Pick<SolarTermPoster, "name" | "season" | "description" | "motifs" | "palette" | "prompt">
> = {
  lichun: {
    name: "Beginning of Spring",
    season: "Spring",
    description:
      "A late-winter courtyard where plum branches, willow strands, and fresh green shoots create the first signal of spring. The two figures interact with tender branches, turning the season into a quiet moment of noticing and gathering.",
    motifs: ["Plum Branches", "Willow Strands", "New Shoots", "Courtyard Roof", "Gathering Figures"],
    palette: ["Grey Green", "Ivory White", "Pale Pink", "Moss Green", "Light Aqua"],
    prompt: "Prompt to be added.",
  },
  yushui: {
    name: "Rain Water",
    season: "Spring",
    description:
      "Rain Water is shown through a waterside courtyard, willow strands, soft reflections, and umbrella figures. The large pale space makes the moist air after spring rain feel more important than the raindrops themselves.",
    motifs: ["Spring Rain", "Willow Strands", "Paper Umbrella", "Water Reflection", "Courtyard"],
    palette: ["Aqua Green", "Mist White", "Pale Pink", "Willow Green", "Light Grey"],
    prompt: "Prompt to be added.",
  },
  jingzhe: {
    name: "Awakening of Insects",
    season: "Spring",
    description:
      "Awakening of Insects avoids a dramatic thunderstorm and instead focuses on rain-washed trees, soil edges, tender shoots, and a figure bending down to observe. The visual center is the moment of discovering life beginning to move.",
    motifs: ["Spring Thunder", "Grass Shoots", "Tree Shadows", "Courtyard Steps", "Observing Pose"],
    palette: ["Mist Green", "Pale Cyan", "Warm Beige", "Pale Pink", "Ink Grey"],
    prompt: "Prompt to be added.",
  },
  chunfen: {
    name: "Spring Equinox",
    season: "Spring",
    description:
      "Spring Equinox uses a meadow, peach branches, returning swallows, and a kite-flying action to express balanced daylight. The two figures create a gentle wind direction and visual path without making the scene too busy.",
    motifs: ["Peach Blossoms", "Returning Swallows", "Kite", "Spring Grass", "Meadow"],
    palette: ["Pale Jade", "Ivory White", "Soft Peach", "Misty Blue", "Warm Beige"],
    prompt: "Prompt to be added.",
  },
  qingming: {
    name: "Clear and Bright",
    season: "Spring",
    description:
      "Clear and Bright is built from misty rain, a waterside path, willow branches, stone paving, and umbrella figures. Distant hills and water are kept low-saturation to emphasize the clean, open air after spring rain.",
    motifs: ["Misty Rain", "Willow Branches", "Paper Umbrella", "Waterside Path", "Distant Hills"],
    palette: ["Willow Green", "Mist Grey", "Aqua", "Plain White", "Pale Pink"],
    prompt: "Prompt to be added.",
  },
  guyu: {
    name: "Grain Rain",
    season: "Spring",
    description:
      "Grain Rain turns the idea of rain nourishing growth into a tea-picking scene, using a rain-washed tea garden, hillside, and courtyard blossoms. Moist air and pale green mountains carry the seasonal story.",
    motifs: ["Tea Buds", "Fine Rain", "Hillside", "Peonies", "Tea-Picking Figure"],
    palette: ["Fresh Tea Green", "Mist Grey", "Ivory White", "Soft Peach", "Pale Cyan"],
    prompt: "Prompt to be added.",
  },
  lixia: {
    name: "Beginning of Summer",
    season: "Summer",
    description:
      "Beginning of Summer enters the season through green plums, dense shade, and a picking action rather than lotus ponds or extreme heat. The upward reach and bamboo basket below create a light early-summer labor scene.",
    motifs: ["Green Plums", "Dense Shade", "Bamboo Basket", "Butterflies", "Picking Action"],
    palette: ["Plum Green", "Tender Yellow Green", "Ivory White", "Warm Beige", "Pale Blue"],
    prompt: "Prompt to be added.",
  },
  xiaoman: {
    name: "Grain Buds",
    season: "Summer",
    description:
      "Grain Buds focuses on wheat that is filling but not yet ripe. A figure bends among the wheat, while pale golden light and distant hills keep the sense of fullness soft and unfinished.",
    motifs: ["Wheat Heads", "Wheat Waves", "Distant Hills", "Pale Golden Light", "Working Figure"],
    palette: ["Wheat Gold", "Light Apricot", "Rice White", "Grey Green", "Pale Blue"],
    prompt: "Prompt to be added.",
  },
  mangzhong: {
    name: "Grain in Ear",
    season: "Summer",
    description:
      "Grain in Ear uses paddy fields, rice seedlings, willow shade, and a transplanting action to mark the start of busier farm work. Lotus leaves and water reflections add humid field texture.",
    motifs: ["Rice Seedlings", "Paddy Field", "Transplanting", "Willow Shade", "Lotus Leaves"],
    palette: ["Rice Green", "Aqua", "Warm Yellow", "Willow Green", "Light Beige"],
    prompt: "Prompt to be added.",
  },
  xiazhi: {
    name: "Summer Solstice",
    season: "Summer",
    description:
      "Summer Solstice is expressed through lotus leaves, blooming lotus flowers, water, and figures by the pond. Pink robes contrast with broad aqua space, keeping the longest-day brightness light rather than oppressive.",
    motifs: ["Lotus Leaves", "Lotus Flowers", "Water Surface", "Summer Courtyard", "Lotus Viewing Figures"],
    palette: ["Lotus Green", "Aqua", "Pale Pink", "Ivory White", "Sunlit Yellow"],
    prompt: "Prompt to be added.",
  },
  xiaoshu: {
    name: "Minor Heat",
    season: "Summer",
    description:
      "Minor Heat centers on seeking shade under large trees, with a round fan and watermelon as everyday cooling objects. The deep green canopy lowers the light and keeps the figures slow and relaxed.",
    motifs: ["Tree Shade", "Round Fan", "Watermelon", "Courtyard Table", "Cooling Figures"],
    palette: ["Deep Green", "Bamboo Green", "Warm White", "Pale Peach", "Shadow Grey"],
    prompt: "Prompt to be added.",
  },
  dashu: {
    name: "Major Heat",
    season: "Summer",
    description:
      "Major Heat avoids showing the sun directly and instead uses high walls, dense shade, waterbirds, and indoor-outdoor contrast to suggest still, heavy heat. The figures pause under the veranda, between shelter and hot air.",
    motifs: ["Dense Shade", "Veranda", "Waterbirds", "Courtyard", "Cooling Figures"],
    palette: ["Deep Green", "Grey Cyan", "Warm White", "Pale Gold", "Ink Green"],
    prompt: "Prompt to be added.",
  },
  liqiu: {
    name: "Beginning of Autumn",
    season: "Autumn",
    description:
      "Beginning of Autumn uses courtyard steps, early fallen leaves, a potted plant, and a figure turning back to mark the first cooling shift. Pink and green remain, but orange leaves begin to redirect the season.",
    motifs: ["Early Yellow Leaves", "Courtyard Steps", "Potted Plant", "Autumn Wind", "Turning Figure"],
    palette: ["Light Apricot", "Grey Green", "Pale Pink", "Rice White", "Warm Brown"],
    prompt: "Prompt to be added.",
  },
  chushu: {
    name: "End of Heat",
    season: "Autumn",
    description:
      "End of Heat is shown at a riverside dusk with river lanterns, withered lotus leaves, reeds, and a folded fan. Reflections and misty hills create a tender transition from late summer into early autumn.",
    motifs: ["River Lantern", "Folded Fan", "Withered Lotus", "Reeds", "Geese Flying South"],
    palette: ["Blue Green", "Mist White", "Pale Apricot", "Faded Lotus Green", "Warm Beige"],
    prompt: "Prompt to be added.",
  },
  bailu: {
    name: "White Dew",
    season: "Autumn",
    description:
      "White Dew uses waterside white flowers, mist, and pale blue robes to create a cool morning atmosphere. The standing figures shift the visual mood from summer heat toward early-autumn clarity.",
    motifs: ["White Flowers", "Dew Air", "Waterside", "Morning Mist", "Standing Figures"],
    palette: ["Frost White", "Aqua", "Pale Blue", "Light Green", "Rice White"],
    prompt: "Prompt to be added.",
  },
  qiufen: {
    name: "Autumn Equinox",
    season: "Autumn",
    description:
      "Autumn Equinox is built around osmanthus, a courtyard, falling flowers, and a gathering action. Balanced light and the golden canopy create a calm, clear mood around mid-autumn.",
    motifs: ["Osmanthus", "Falling Flowers", "Courtyard", "Gathering Basket", "Balanced Light"],
    palette: ["Osmanthus Yellow", "Ivory White", "Pale Jade", "Soft Ochre", "Warm Beige"],
    prompt: "Prompt to be added.",
  },
  hanlu: {
    name: "Cold Dew",
    season: "Autumn",
    description:
      "Cold Dew uses chrysanthemums, white birds, angled tree shadows, and a figure gathering the sleeves to show the air turning colder. Bright flowers remain, but the background shifts toward grey green and cold white.",
    motifs: ["Chrysanthemums", "White Birds", "Cold Dew", "Tree Shadows", "Sleeve-Gathering Figure"],
    palette: ["Chrysanthemum Yellow", "Cold White", "Grey Green", "Pale Cyan", "Warm Beige"],
    prompt: "Prompt to be added.",
  },
  shuangjiang: {
    name: "Frost Descent",
    season: "Autumn",
    description:
      "Frost Descent uses red leaves, cold reflections, frosted branches, and a leaf-gathering action to mark the edge of late autumn. Red becomes the visual focus against large areas of pale mist and water.",
    motifs: ["Red Leaves", "Thin Frost", "Water Reflection", "Leaf-Gathering Figure", "Cold Branches"],
    palette: ["Maple Red", "Frost Grey", "Ink Black", "Rice White", "Cold Aqua"],
    prompt: "Prompt to be added.",
  },
  lidong: {
    name: "Beginning of Winter",
    season: "Winter",
    description:
      "Beginning of Winter turns inward, using doors, windows, plum branches, potted plants, and two figures tending the interior. The scene shifts from open outdoor space into quieter winter order.",
    motifs: ["Plum Branches", "Doors and Windows", "Potted Plant", "Interior Courtyard", "Tending Figures"],
    palette: ["Cold Grey", "Olive Green", "Plain White", "Plum Red", "Warm Brown"],
    prompt: "Prompt to be added.",
  },
  xiaoxue: {
    name: "Minor Snow",
    season: "Winter",
    description:
      "Minor Snow presents a semi-interior study with snow and plum branches outside. A figure near books and a small brazier creates shelter, while warm interior light contrasts with the cold window view.",
    motifs: ["Minor Snow", "Plum Branches", "Study Room", "Brazier", "Reading Figure"],
    palette: ["Snow White", "Warm Brown", "Plum Red", "Ink Green", "Grey Blue"],
    prompt: "Prompt to be added.",
  },
  daxue: {
    name: "Major Snow",
    season: "Winter",
    description:
      "Major Snow uses a thickly snowed courtyard, pine branches, a doorway, and small figures sweeping or viewing snow. Large grey-white space makes the environment dominate, with figures adding scale and daily life.",
    motifs: ["Heavy Snow", "Pine Branches", "Doorway", "Snow-Sweeping Figure", "Courtyard"],
    palette: ["Snow White", "Silver Grey", "Pine Green", "Cold Brown", "Pale Plum Red"],
    prompt: "Prompt to be added.",
  },
  dongzhi: {
    name: "Winter Solstice",
    season: "Winter",
    description:
      "Winter Solstice moves indoors, using a low table, tangyuan, tea, candlelight, and snowy plum branches outside the window to express reunion during the longest night. The tighter composition emphasizes human warmth.",
    motifs: ["Tangyuan", "Low Table", "Candlelight", "Snow Outside", "Plum Branches"],
    palette: ["Warm Beige", "Soft Amber", "Ink Green", "Plum Red", "Ivory White"],
    prompt: "Prompt to be added.",
  },
  xiaohan: {
    name: "Minor Cold",
    season: "Winter",
    description:
      "Minor Cold is closer to an outdoor cold-white scene, with bare branches, snow, distant figures, and mist. The low-saturation blue-grey palette makes the cold feel light but prolonged.",
    motifs: ["Cold Branches", "Snow Ground", "Distant Hills", "Winter-Robed Figures", "Cold Mist"],
    palette: ["Cold Grey", "Snow White", "Pale Blue", "Plum White", "Ink Green"],
    prompt: "Prompt to be added.",
  },
  dahan: {
    name: "Major Cold",
    season: "Winter",
    description:
      "Major Cold uses distant mountains, heavy snow, an open courtyard, and small-scale figures to show the deepest cold of the year. Warm color is reduced so snow and landscape carry the mood.",
    motifs: ["Heavy Snow", "Distant Mountains", "Open Courtyard", "Plum Branches", "Walking Figures"],
    palette: ["Snow Grey", "Cold Cyan", "Ink Green", "Plain White", "Subtle Gold"],
    prompt: "Prompt to be added.",
  },
};

export function getSolarTermsLocalized(locale: "zh" | "en" = "zh"): SolarTermPoster[] {
  if (locale === "zh") return solarTerms;
  return solarTerms.map((term) => ({
    ...term,
    ...solarTermEnglish[term.id],
    prompt: term.prompt === promptPlaceholder ? "Prompt to be added." : term.prompt,
    versions: iterationVersionsEnglish[term.id] ?? term.versions,
  }));
}
