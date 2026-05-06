export type LabEntryType = "image-series" | "video" | "article" | "interactive" | "other";

export interface LabImageItem {
  src: string;
  alt: string;
  label: string;
  deity: string;
  source: string;
  temperament: string[];
  note: string;
  version: string;
  prompt: string;
}

export interface LabContentSection {
  id: string;
  title: string;
  body: string;
}

export interface LabEntry {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  type: LabEntryType;
  tags: string[];
  coverImage: string;
  date: string;
  images?: LabImageItem[];
  videoUrl?: string;
  contentSections?: LabContentSection[];
}

export const labTypeLabels: Record<LabEntryType, string> = {
  "image-series": "图像系列",
  video: "视频实验",
  article: "方法记录",
  interactive: "交互实验",
  other: "其他实验",
};

export const labTypeLabelsEn: Record<LabEntryType, string> = {
  "image-series": "Image Series",
  video: "Video Experiment",
  article: "Method Note",
  interactive: "Interactive",
  other: "Other",
};

const defaultVersion = "V1.0（2026.04）";
export const labEntries: LabEntry[] = [
  {
    id: "solar-terms",
    slug: "solar-terms",
    title: "二十四节气 · AI 视觉实验",
    subtitle:
      "以中国传统节气为主题的 AI 视觉实验，尝试用生成式图像、提示词设计与现代网页排版重新表达东方时间美学。",
    description:
      "这组作品把二十四个节气看作一套关于时间、气候与民俗意象的视觉系统。每张海报对应一个节气，在季节流转中保持东方审美的克制、留白与秩序。",
    type: "image-series",
    tags: ["AI 生成", "视觉实验", "东方时间", "提示词设计"],
    coverImage: "/images/lab/solar-terms/shuangjiang.png",
    date: "2026-05-05",
  },
  {
    id: "twelve-flower-goddesses",
    slug: "twelve-flower-goddesses",
    title: "十二花神 · AI 视觉实验",
    subtitle:
      "以中国十二花神为主题，探索 AI 生成图像中的东方审美、人物气质、花卉意象和系列化视觉系统。",
    description:
      "这个系列以中国十二花神为线索，将传统花卉意象、历史人物与 AI 图像生成结合起来。我关注的不只是“生成好看的图”，而是如何让每个月的花神拥有不同的气质、动作、神态和视觉秩序，同时保持整套作品在风格上的统一。",
    type: "image-series",
    tags: ["AI 生成", "视觉实验", "东方审美", "提示词设计"],
    coverImage: "/images/flower-goddesses/07-hollyhock.png",
    date: "2026-04-24",
    images: [
      {
        src: "/images/flower-goddesses/01-plum.png",
        alt: "1月 梅花花神",
        label: "1月 · 梅花",
        deity: "林逋意象",
        source: "梅妻鹤子，以梅与鹤构成清寒孤高的文人意象。",
        temperament: ["清寒", "孤高", "文人气", "疏淡"],
        note: "以梅花、白鹤与寒枝构成画面核心，强调冬末初春的清冷与自守。",
        version: defaultVersion,
        prompt: "ancient chinese plum blossom male flower deity inspired by Lin Bu, reclusive scholar known for plum blossoms and cranes, quiet winter plum grove, one elegant crane standing calmly beside him or slightly behind him, sparse plum blossoms on dark dry branches, snow and pale mist, refined chinese gongbi painting style, rock mineral pigment texture, visible mineral grain, ultra fine delicate linework, matte surface, soft xuan paper texture, elegant slender male figure, half-tied long black hair, white and grey layered hanfu, restrained scholarly robes, calm and distant expression, eyes open with detached gaze, not smiling, not romantic, not feminine, quiet aloof temperament, upright composed posture, hands hidden in sleeves or holding a simple book or plum branch, no dramatic gesture, no strong emotion, crane integrated naturally into composition, not decorative, large negative space, off-center subject, pale winter palette: ivory, ink grey, soft black, muted red plum accents, very subtle flat mineral gold details, non-glowing, soft cold natural light, no glow, no rim light, no cinematic lighting, no fantasy effects, no particles, no game style, no modern illustration style, highly refined, restrained, poetic and serene chinese aesthetic, avoid overly handsome fantasy prince, avoid romantic mood, avoid feeding crane, avoid decorative overload --ar 3:4 --niji 6 --s 80 --raw",
      },
      {
        src: "/images/flower-goddesses/02-apricot.png",
        alt: "2月 杏花花神",
        label: "2月 · 杏花",
        deity: "陆游意象",
        source: "「小楼一夜听春雨，深巷明朝卖杏花。」",
        temperament: ["春雨", "清雅", "坚韧", "短暂绚烂"],
        note: "杏花娇而不艳，先花后叶，和陆游清雅自持、坚守气节的形象相呼应。",
        version: defaultVersion,
        prompt: "ancient chinese apricot blossom male deity inspired by Lu You, traditional chinese gongbi painting, rock mineral pigment painting, visible mineral texture, matte surface, no smooth digital rendering, no soft glow, no cinematic lighting, no volumetric light, no realistic shading, flat color layering, clear brushwork edges, xuan paper texture, elegant chinese scholar figure, restrained and calm expression, eyes open with distant and composed gaze, not soft, not romantic, not modern beauty style, no delicate pretty face, more austere and upright temperament, subtle inner strength, quiet determination, natural dynamic pose, slight body turn, minimal movement, hands hidden in sleeves or holding a scroll, not holding flower near face, not leaning, not decorative interaction, not static but restrained composition inspired by traditional chinese painting, large negative space, off-center placement, sparse elements, minimal composition, early spring apricot blossoms blooming before leaves, scattered petals like light snow, thin branches, light rain just passed, subtle wet ground atmosphere, pale palette: ivory, mist grey, soft faded pink, light ink tones, muted beige, flat mineral gold accents, non-glowing strict constraints: no glow, no rim light, no realistic lighting, no cinematic rendering, no anime style, no game style, no modern illustration style, no smooth skin, no 3D shading, no dramatic contrast highly refined, restrained, poetic, traditional chinese aesthetic --ar 3:4 --niji 6 --s 50 --raw",
      },
      {
        src: "/images/flower-goddesses/03-peach.png",
        alt: "3月 桃花花神",
        label: "3月 · 桃花",
        deity: "息夫人",
        source: "息夫人又称桃花夫人，容貌绝美、命运凄美，自古常以桃花代指她。",
        temperament: ["明媚", "凄美", "春意", "命运感"],
        note: "桃花不只是春日艳色，也带有转瞬即逝的命运感。画面应兼具明媚与淡淡哀感。",
        version: defaultVersion,
        prompt: "ancient chinese peach blossom goddess, traditional chinese gongbi painting, rock mineral pigment style, ultra fine delicate linework, flat color application, matte texture, no glow, no cinematic lighting, elegant chinese figure, classical facial features, subtle expression, soft pink peach blossoms arranged around the figure, branches framing the face, turquoise and muted gold palette, decorative gold details (non-glowing), minimal depth, strong negative space, traditional painting composition, xuan paper texture, non-photorealistic, highly refined, calm and poetic chinese aesthetic --ar 3:4 --niji 6 --s 150 --raw",
      },
      {
        src: "/images/flower-goddesses/04-peony.png",
        alt: "4月 牡丹花神",
        label: "4月 · 牡丹",
        deity: "杨贵妃意象",
        source: "牡丹象征盛唐雍容，杨贵妃承载华贵、酒意与风流气质。",
        temperament: ["雍容", "张扬", "微醺", "盛唐"],
        note: "画面以正红、胭脂红与绯红为主，突出仰头饮酒、衣袂流动与牡丹盛放。",
        version: defaultVersion,
        prompt: "ancient chinese peony flower goddess, yang guifei of tang dynasty, walking slowly among blooming peonies, head tilted back naturally, drinking wine from a small golden cup, wine slightly spilling, relaxed and indulgent posture, subtle intoxication traditional chinese gongbi painting, rock mineral pigment painting, visible mineral texture, matte surface, xuan paper texture no smooth digital rendering, no soft glow, no cinematic lighting, no volumetric light, no rim light flat color layering, clear brushwork edges, restrained ink and color relationship elegant but commanding chinese noblewoman, full presence, slightly lifted chin, half-lidded eyes, relaxed and confident expression, not shy, not submissive, not delicate beauty natural dynamic pose, one arm lifting golden wine cup in motion, sleeve falling back, body slightly leaning, loose posture, weight shifted, not upright, not static, not posing composition inspired by classical chinese painting, large negative space, off-center placement peony blossoms in full bloom, large layered petals, deep red, rouge red, crimson, surrounding but not overcrowded, integrated into composition, not decorative background subtle garden atmosphere, faint ink wash depth, minimal but atmospheric color palette: deep red, rouge red, crimson, ivory, warm beige, restrained mineral gold accents no anime, no game art, no fantasy style, no modern illustration, no glossy skin, no dramatic lighting, no hyper detail highly refined, restrained, poetic, traditional chinese aesthetic --ar 3:4 --niji 6 --s 50 --raw",
      },
      {
        src: "/images/flower-goddesses/05-pomegranate.png",
        alt: "5月 石榴花花神",
        label: "5月 · 石榴花",
        deity: "钟馗意象",
        source: "钟馗镇邪避凶，五月仲夏多疫病，石榴火红驱晦。",
        temperament: ["正气", "镇邪", "烈性", "民俗感"],
        note: "这一张不追求柔美，而强调红衣、威仪、避邪与火红石榴花的力量感。",
        version: defaultVersion,
        prompt: "ancient chinese pomegranate blossom god Zhong Kui, powerful exorcist deity, upright and imposing male figure, strong presence, masculine, righteous aura, not gentle, not soft traditional chinese gongbi painting, rock mineral pigment painting, visible mineral texture, matte surface, rough mineral layering, clear brush edges, xuan paper texture focus on pomegranate blossoms (NOT fruit), small red-orange flowers, thin petals, sparse blooming branches, very few fruits or no fruits, avoid large pomegranate fruit clusters character: stern face, sharp eyes, thick brows, calm authority, slightly fierce but controlled, not demonized, not exaggerated monster clothing: traditional vermilion red robe, heavy and structured, ancient official/exorcist style, wide sleeves, minimal gold mineral patterns (non-glowing) pose: grounded stance, stable posture, slight body turn, natural interaction with branches, NOT holding flower near face, NOT decorative pose, NOT leaning, NOT soft composition: traditional chinese painting layout, large negative space, off-center subject, sparse branches, strong and clean structure color palette: mineral red, ink black, muted beige, ivory, slight gold accents, flat color blocks rendering control: flat painting, no shading gradient, no volumetric light, no depth rendering, no realistic lighting strict constraints: no fruit focus, no large pomegranate fruit, no glow, no rim light, no cinematic lighting, no realistic rendering, no 3D shading, no anime style, no game art style, no modern illustration, no soft skin smoothing highly refined, restrained, powerful, traditional chinese aesthetic --ar 3:4 --niji 6 --s 50 --raw",
      },
      {
        src: "/images/flower-goddesses/06-lotus.png",
        alt: "6月 荷花花神",
        label: "6月 · 荷花",
        deity: "西施意象",
        source: "西施是水乡佳人，品性清雅洁净，与荷花“出淤泥而不染”的寓意相合。",
        temperament: ["清净", "端雅", "水气", "柔而不弱"],
        note: "画面以白衣、水面、荷叶和留白形成清洁的夏日神性，避免过度华丽。",
        version: defaultVersion,
        prompt: "ancient chinese lotus goddess, traditional chinese gongbi painting, rock mineral pigment style, ultra fine delicate linework, elegant chinese figure, classical facial features, calm and distant expression, matte skin, soft ivory and pale jade green palette with very light turquoise accents, large lotus leaves and a few blooming lotus flowers, subtle water surface and misty atmosphere, strong sense of air and depth, minimal composition with generous negative space, flowing lightweight hanfu, fabric drifting gently as if in humid summer air, very restrained decorative details, almost no gold, soft natural diffused lighting, no glow, no dramatic lighting, quiet and serene mood, poetic and ethereal chinese aesthetic, light xuan paper texture, one or two small delicate butterflies subtly placed near the water or hand, refined structure, clear silhouette, controlled linework, not overly abstract, natural and balanced posture, gentle movement, grounded composition, subtle ink wash influence, but primarily fine gongbi detail, refined composition, clear silhouette, controlled linework, natural flowing posture, seated on lotus leaf, gentle body movement, interaction with water surface, subtle ink wash, but primarily fine gongbi detailing, not abstract, eyes open, soft and tranquil gaze, gentle and distant expression, serene, pure, tranquil, slightly distant and contemplative mood, understated and non-dominant --ar 3:4 --niji 6 --s 120 --raw",
      },
      {
        src: "/images/flower-goddesses/07-hollyhock.png",
        alt: "7月 蜀葵花神",
        label: "7月 · 蜀葵",
        deity: "徐渭意象",
        source: "徐渭最爱画蜀葵，笔墨随性；七月蜀葵向阳而生，与其狂逸气质相合。",
        temperament: ["率性", "狂逸", "向阳", "文人笔墨"],
        note: "这一张可以比其他月份更有笔墨冲击力，人物不必过分端庄，要有徐文长式的狂放。",
        version: defaultVersion,
        prompt: "ancient chinese hollyhock deity, Xu Wei (Xu Wenchang) as a free-spirited literati painter, unrestrained yet composed, midsummer atmosphere, strong sunlight but not rendered realistically, tall hollyhock stems rising upward, scattered blossoms climbing vertically, upward growth, resilient and wild elegance elegant chinese male figure, slender but with inner strength, calm yet slightly eccentric expression, distant gaze with subtle intensity, quiet pride, not heroic, not soft, not romanticized, not youthful pretty face, literati temperament with restrained wildness natural dynamic pose, slight body twist, robe moving lightly, one hand loosely holding a brush or long stem, the other relaxed, gesture unforced, not decorative, not holding flower near face, not static, not symmetrical, subtle asymmetry traditional chinese gongbi painting, rock mineral pigment painting, strong mineral pigment texture, visible granularity, matte surface, rough xuan paper texture, dry brush edges, flat color layering, controlled brushwork with slight expressive variation, no gradient smoothing, no soft blending composition inspired by traditional chinese painting, large negative space, off-center placement, vertical emphasis, very sparse branches, minimal composition, not dense, not decorative, empty space dominates muted summer palette: ivory, warm beige, soft ink grey, pale green accents, touches of muted crimson or rose from hollyhock, restrained color usage, flat mineral gold accents, non-glowing strict constraints: no glow, no rim light, no cinematic lighting, no volumetric light, no realistic shading, no smooth skin, no 3D rendering, no anime style, no game style, no modern illustration style, no expressive ink splash dominance, no chaotic brush, no exaggerated abstraction",
      },
      {
        src: "/images/flower-goddesses/08-osmanthus.png",
        alt: "8月 桂花花神",
        label: "8月 · 桂花",
        deity: "徐惠意象",
        source: "徐惠才情温婉、品性高洁；桂花清雅幽香，匹配其贤德气质。",
        temperament: ["幽香", "月夜", "温婉", "高洁"],
        note: "重点是黑金月色、碎金桂花与空气中的香气感，人物应有清远而不甜腻的神性。",
        version: defaultVersion,
        prompt: "ancient chinese osmanthus flower goddess, close-up portrait, upper body dominant, frontal composition, slightly off-center traditional chinese gongbi painting, mineral pigment painting, matte texture, visible brush edges, xuan paper texture elegant chinese female deity, calm, distant, ethereal expression, subtle divinity, not sweet, not seductive, not human-like charm head slightly raised, chin gently lifted, gaze calm and distant, not looking down delicate hand gesture near chest level, fingers softly extended, a single small butterfly resting near fingertip or hovering lightly long flowing hanfu in ivory white, pale gold, and muted ink tones, subtle osmanthus embroidery, refined and restrained luxury osmanthus blossoms as small scattered golden particles, light, sparse, drifting in air, NOT dense, NOT decorative clusters composition with large negative space, background: soft ink wash with faint broken ink circle or moon shape, edges dissolving into mist color palette: ivory, pale gold, muted black, warm beige low saturation, no bright colors, no heavy blue, no strong contrast strict constraints: no anime style, no modern illustration, no glossy skin, no smooth digital shading, no cinematic lighting, no heavy decoration, no symmetrical ornamental composition highly refined, poetic, restrained chinese aesthetic --ar 3:4 --s 50 --niji 6 --raw",
      },
      {
        src: "/images/flower-goddesses/09-chrysanthemum.png",
        alt: "9月 菊花花神",
        label: "9月 · 菊花",
        deity: "左芬意象",
        source: "左芬文采出众、素淡坚韧；菊花凌霜开放，对应其淡泊风骨。",
        temperament: ["清骨", "疏冷", "淡泊", "秋意"],
        note: "画面应避免甜美，强调疏枝、冷风、淡金与人物的自持感。",
        version: defaultVersion,
        prompt: "ancient chinese chrysanthemum goddess, DYNAMIC pose, NOT static, NOT standing straight, sitting casually on rock or low ground, or leaning slightly backward, or turning her body while looking forward, or reaching outward into space instead of toward flowers, NO side profile, NO head-down pose, late autumn atmosphere, sparse chrysanthemum branches, dry wind, calm and aloof expression, distant gaze, quiet pride, not soft, not sweet, flowing hanfu with subtle movement, sleeves drifting naturally, refined chinese gongbi painting style, rock mineral pigment texture, rich mineral layering, visible pigment depth, matte mineral surface, ultra fine delicate linework, flat mineral gold accents, non-glowing, composition minimal, large negative space, off-center subject, flowers sparse, thin stems, dry leaves, muted autumn palette: ivory, pale yellow, beige, ink grey, dark green, soft xuan paper texture, highly refined, restrained, poetic chinese aesthetic --ar 3:4 --niji 6 --s 120 --raw",
      },
      {
        src: "/images/flower-goddesses/10-hibiscus.png",
        alt: "10月 芙蓉花神",
        label: "10月 · 芙蓉",
        deity: "花蕊夫人意象",
        source: "花蕊夫人貌美多才、风华绝代；芙蓉花艳丽温婉，贴合其气质。",
        temperament: ["柔艳", "水岸", "风华", "含蓄"],
        note: "芙蓉临水而开，带有晚秋水岸的柔艳与清冷。画面需要压低饱和度，保留水墨与矿物质感。",
        version: defaultVersion,
        prompt: "ancient chinese hibiscus goddess, traditional chinese gongbi painting, rock mineral pigment painting, visible mineral texture, matte surface, no smooth digital rendering, no soft glow, no cinematic lighting, flat color layering, clear brushwork edges, xuan paper texture elegant chinese figure, restrained and calm expression, eyes open with distant and composed gaze, not sweet, not seductive, not modern beauty style natural dynamic pose, slight body turn, subtle movement, interacting with water or flowers, but not decorative pose, not holding flower near face, not leaning, not static composition inspired by traditional chinese painting, large negative space, off-center placement, sparse elements, minimal composition hibiscus blossoms near water, pale pink and muted tones, soft beige, ivory, grey green, flat mineral gold accents, non-glowing strict constraints: no glow, no rim light, no realistic lighting, no cinematic rendering, no anime style, no modern illustration style, no smooth skin, no 3D shading highly refined, restrained, poetic, traditional chinese aesthetic --ar 3:4 --niji 6 --s 50 --raw",
      },
      {
        src: "/images/flower-goddesses/11-camellia.png",
        alt: "11月 山茶花神",
        label: "11月 · 山茶",
        deity: "王昭君意象",
        source: "王昭君耐寒傲雪、坚韧不屈；山茶冬月盛放，象征其傲骨气节。",
        temperament: ["冷艳", "坚韧", "端正", "冬意"],
        note: "山茶适合红白对比，但要避免甜美，突出寒中开花的清醒感。",
        version: defaultVersion,
        prompt: "ancient chinese camellia goddess, late autumn atmosphere, large camellia blossoms with full layered petals, calm and restrained presence, standing upright with composed posture, not interacting with flowers, hands relaxed or partially hidden in sleeves, flowers surrounding her naturally without direct contact, refined chinese gongbi painting style, rock mineral pigment texture, ultra fine delicate linework, elegant chinese figure, matte skin, eyes open with a calm, distant and slightly aloof gaze, not looking at flowers, subtle cold elegance, quiet confidence, not sweet, not gentle, minimal expression, flowing hanfu with structured drapery, elegant but restrained composition, large negative space, off-center subject, flowers arranged with visual weight, muted palette: ivory, soft red, deep green, ink grey, subtle mineral gold accents, non-glowing, soft natural light, no glow, no rim light, no cinematic lighting, no fantasy effects, no particle effects, no game style, soft xuan paper texture, highly refined, restrained, poetic chinese aesthetic, avoid touching flowers, avoid head-down pose, avoid decorative interaction --ar 3:4 --niji 6 --s 110 --raw",
      },
      {
        src: "/images/flower-goddesses/12-narcissus.png",
        alt: "12月 水仙花神",
        label: "12月 · 水仙",
        deity: "洛神意象",
        source: "洛神与水、雾、不可触及的神性相连；水仙清冷临水。",
        temperament: ["空灵", "疏离", "水气", "不可触及"],
        note: "重点不是水边美人，而是“水在化成人形”。人物应更虚、更远、更不可接近。",
        version: defaultVersion,
        prompt: "ancient chinese luoshen goddess, narcissus flower deity, standing by quiet water, subtle presence, ethereal and distant traditional chinese gongbi painting, rock mineral pigment painting, visible mineral texture, matte surface, xuan paper texture no smooth digital rendering, no soft glow, no cinematic lighting, no volumetric light, no lens flare flat color layering, clear brushwork edges, restrained ink and color relationship elegant chinese figure, calm and distant expression, eyes half lowered, not smiling, not seductive, not modern beauty style natural flowing pose, slight body turn, long sleeves drifting like water, subtle movement, interacting with water surface, not decorative pose composition inspired by classical chinese painting, large negative space, off-center placement, minimal elements narcissus flowers near water, white petals with pale yellow centers, delicate, quiet, slightly scattered, not dense, not decorative pattern water mist, faint ripples, soft river atmosphere, sense of silence and distance color palette: pale ivory, soft white, muted grey-blue, light beige, subtle mineral gold accents, non-glowing no anime, no game art, no fantasy rendering, no 3D shading, no glossy skin, no hyper detail, no dramatic lighting highly refined, restrained, poetic, traditional chinese aesthetic，slightly fading edges, soft dissolving into mist， detached presence, unreachable, not grounded， slightly fading edges, soft dissolving into mist, detached presence, unreachable, not grounded, no warmth, no intimacy, emotionally distant --ar 3:4 --niji 6 --s 50 --raw",
      },
    ],
    contentSections: [
      {
        id: "background",
        title: "项目背景",
        body:
          "我想把这组作品做成一套真正“成系统”的 AI 视觉实验，而不是十二张互不相关的单图。选择十二花神，是因为它天然带有月份、花卉、人物和气质的对应关系，既有东方叙事基础，也适合检验 AI 图像生成在系列统一、角色区分和风格控制上的边界。",
      },
      {
        id: "method",
        title: "创作方法",
        body:
          "整个过程更像一套可重复的方法实验，而不是一次性出图。我先固定一组相对稳定的视觉基调，再围绕月份、花种、服饰、姿态、镜头距离和背景密度去微调提示词。重点不是把 prompt 写得越长越好，而是找到哪些关键词负责统一风格，哪些关键词负责拉开人物差异。",
      },
      {
        id: "system",
        title: "视觉系统",
        body:
          "这套系列里，我刻意让每位花神都拥有不同的气质：有的更清冷，有的更丰盛，有的更端庄，有的更轻盈。但在颜色关系、服饰结构、光线氛围和画面密度上，我又尽量保持一条连续的审美逻辑。对我来说，系列感不是“长得差不多”，而是在变化里仍然能被认出属于同一个世界。",
      },
      {
        id: "gallery",
        title: "作品展示",
        body:
          "下面这组 12 宫格对应十二个月令与花卉。它既是结果展示，也是一种对比视图：放在一起看，才能更清楚地判断哪些图足够成立，哪些图虽然单张好看，但会破坏整套作品的节奏和秩序。",
      },
      {
        id: "reflection",
        title: "阶段反思",
        body:
          "这次实验让我更确定，AI 视觉创作里真正有意思的，不只是“生成能力”本身，而是如何把生成变成一种系统化探索。很多时候最难的不是做出一张好图，而是在“好看”和“统一”之间持续取舍，并用同一套方法把审美判断慢慢沉淀下来。",
      },
    ],
  },
];

export function getAllLabEntries(): LabEntry[] {
  return labEntries;
}

const labEntryEnglish: Record<string, Partial<Pick<LabEntry, "title" | "subtitle" | "description" | "tags">>> = {
  "solar-terms": {
    title: "Solar Terms · AI Visual Experiment",
    subtitle:
      "An AI visual experiment based on Chinese solar terms, generative images, prompt design, and modern web presentation.",
    description:
      "This series treats the twenty-four solar terms as a visual system about time, climate, and seasonal imagery, while keeping a restrained eastern aesthetic.",
    tags: ["AI Generation", "Visual Experiment", "Seasonal Time", "Prompt Design"],
  },
  "twelve-flower-goddesses": {
    title: "Flower Deities · AI Visual Experiment",
    subtitle:
      "An AI image series exploring flower imagery, character temperament, and visual consistency.",
    description:
      "This series connects traditional flower imagery, historical references, and AI image generation. The focus is not only on individual images, but on keeping distinct character moods within one coherent visual system.",
    tags: ["AI Generation", "Visual Experiment", "Eastern Aesthetics", "Prompt Design"],
  },
};

const flowerImageEnglish = [
  { label: "January · Plum Blossom", deity: "Lin Bu Reference", source: "A refined literati image built around plum blossoms and cranes.", temperament: ["Cold", "Aloof", "Scholarly", "Sparse"], note: "The image emphasizes winter restraint, sparse branches, and quiet self-possession." },
  { label: "February · Apricot Blossom", deity: "Lu You Reference", source: "A spring-rain literary reference connected with apricot blossoms.", temperament: ["Spring Rain", "Clear", "Resilient", "Brief Bloom"], note: "The image balances early spring softness with a restrained scholarly temperament." },
  { label: "March · Peach Blossom", deity: "Lady Xi Reference", source: "A tragic and luminous figure often associated with peach blossoms.", temperament: ["Bright", "Melancholic", "Spring", "Fateful"], note: "The image keeps both spring brightness and a quiet sense of impermanence." },
  { label: "April · Peony", deity: "Yang Guifei Reference", source: "Peony imagery connected with Tang-dynasty fullness and elegance.", temperament: ["Luxuriant", "Expressive", "Tipsy", "Tang Style"], note: "The image uses red tones and flowing movement to suggest abundance without losing restraint." },
  { label: "May · Pomegranate Blossom", deity: "Zhong Kui Reference", source: "A protective folk image connected with heat, illness, and warding off misfortune.", temperament: ["Righteous", "Protective", "Intense", "Folk"], note: "This image avoids softness and focuses on force, red robes, and protective presence." },
  { label: "June · Lotus", deity: "Xi Shi Reference", source: "A water-side figure connected with purity and quiet elegance.", temperament: ["Pure", "Elegant", "Watery", "Soft Strength"], note: "The image uses white clothing, water, lotus leaves, and empty space to create a clean summer mood." },
  { label: "July · Hollyhock", deity: "Xu Wei Reference", source: "A free-spirited literati painter associated with expressive brushwork.", temperament: ["Free", "Wild", "Sunward", "Literati"], note: "This image is allowed to feel more expressive while staying inside the series language." },
  { label: "August · Osmanthus", deity: "Xu Hui Reference", source: "A refined and gentle figure connected with osmanthus fragrance and moonlight.", temperament: ["Fragrant", "Moonlit", "Gentle", "Noble"], note: "The image focuses on black-gold moonlight, scattered osmanthus, and quiet divinity." },
  { label: "September · Chrysanthemum", deity: "Zuo Fen Reference", source: "A literary figure connected with resilience and autumn restraint.", temperament: ["Clear-Boned", "Cool", "Detached", "Autumn"], note: "The image avoids sweetness and emphasizes sparse branches, cool wind, and self-possession." },
  { label: "October · Hibiscus", deity: "Lady Huarui Reference", source: "A talented and graceful figure connected with waterside hibiscus.", temperament: ["Softly Vivid", "Waterside", "Graceful", "Reserved"], note: "The image keeps the palette muted while preserving the flower's late-autumn softness." },
  { label: "November · Camellia", deity: "Wang Zhaojun Reference", source: "A resilient figure connected with winter bloom and upright character.", temperament: ["Cold Beauty", "Resilient", "Upright", "Winter"], note: "The image uses red-white contrast while avoiding sweetness." },
  { label: "December · Narcissus", deity: "Luo Shen Reference", source: "A distant water deity reference connected with mist and unreachable presence.", temperament: ["Ethereal", "Distant", "Watery", "Unreachable"], note: "The focus is not a beautiful figure by water, but the sense of water turning into a figure." },
];

function localizeLabImages(images: LabImageItem[] | undefined, locale: "zh" | "en") {
  if (!images || locale === "zh") return images;
  return images.map((image, index) => ({
    ...image,
    alt: flowerImageEnglish[index]?.label ?? image.alt,
    label: flowerImageEnglish[index]?.label ?? image.label,
    deity: flowerImageEnglish[index]?.deity ?? image.deity,
    source: flowerImageEnglish[index]?.source ?? image.source,
    temperament: flowerImageEnglish[index]?.temperament ?? image.temperament,
    note: flowerImageEnglish[index]?.note ?? image.note,
    version: image.version.replace("（", " (").replace("）", ")"),
  }));
}

const labContentEnglish: Record<string, LabContentSection[]> = {
  "twelve-flower-goddesses": [
    {
      id: "background",
      title: "Project Background",
      body:
        "I wanted this series to become a real AI visual experiment with a system behind it, rather than twelve unrelated standalone images. I chose the twelve flower deities because the theme naturally connects months, flowers, figures, and temperaments. It has an eastern narrative foundation, and it is also a useful way to test the limits of AI image generation in series consistency, character differentiation, and style control.",
    },
    {
      id: "method",
      title: "Creation Method",
      body:
        "The process was closer to a repeatable method experiment than a one-off image generation task. I first fixed a relatively stable visual baseline, then adjusted the prompts around month, flower type, clothing, pose, camera distance, and background density. The point was not to make the prompt as long as possible, but to understand which keywords were responsible for keeping the style unified and which keywords created differences between the figures.",
    },
    {
      id: "system",
      title: "Visual System",
      body:
        "In this series, I deliberately gave each flower deity a different temperament: some are colder, some fuller, some more upright, and some lighter. At the same time, I tried to keep a continuous aesthetic logic across color relationships, clothing structure, lighting atmosphere, and image density. For me, a sense of series does not mean that every image looks almost the same. It means that even with variation, the images can still be recognized as belonging to the same world.",
    },
    {
      id: "gallery",
      title: "Gallery",
      body:
        "The twelve-grid gallery below corresponds to the twelve months and their flowers. It is both a result display and a comparison view: only when the images are placed together can I more clearly judge which ones are strong enough, and which ones may look good individually but disrupt the rhythm and order of the whole series.",
    },
    {
      id: "reflection",
      title: "Reflection",
      body:
        "This experiment made me more certain that what is interesting in AI visual creation is not only the generation capability itself, but how generation can become a systematic exploration. Often, the hardest part is not producing one beautiful image, but continuously making trade-offs between beauty and consistency, and gradually turning aesthetic judgment into a reusable method.",
    },
  ],
};

export function getAllLabEntriesLocalized(locale: "zh" | "en" = "zh"): LabEntry[] {
  if (locale === "zh") return labEntries;
  return labEntries.map((entry) => ({
    ...entry,
    ...labEntryEnglish[entry.slug],
    images: localizeLabImages(entry.images, locale),
    contentSections: labContentEnglish[entry.slug] ?? entry.contentSections,
  }));
}

export function getAllLabSlugs(): string[] {
  return labEntries
    .filter((entry) => entry.slug !== "solar-terms")
    .map((entry) => entry.slug);
}

export function getLabBySlug(slug: string): LabEntry | undefined {
  return labEntries.find((entry) => entry.slug === slug);
}

export function getLabBySlugLocalized(slug: string, locale: "zh" | "en" = "zh"): LabEntry | undefined {
  return getAllLabEntriesLocalized(locale).find((entry) => entry.slug === slug);
}
