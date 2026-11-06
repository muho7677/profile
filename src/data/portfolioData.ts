/**
 * SEON CREATIVE STUDIO Data Layer
 * 크리에이터 선귀성 공식 포트폴리오 데이터
 * 추후 프로젝트 추가, 소개글 수정, 미디어 경로 교체 시 이 파일만 수정하면 사이트 전체에 반영됩니다.
 */

export interface ProjectMedia {
  type: 'image' | 'video' | 'audio';
  url: string;
  caption?: string;
}

export interface ProjectDetail {
  id: string;
  category: 'film' | 'storybook' | 'music' | 'education';
  categoryLabel: string;
  categoryEnglish: string;
  title: string;
  subtitle: string;
  badge: string;
  summary: string;
  coverImage: string;
  aspectRatio?: 'poster' | 'landscape' | 'square';
  intention: string[]; // 기획 의도
  processSteps: {
    title: string;
    description: string;
  }[];
  toolsUsed: string[];
  themes: string[];
  sampleNotes: string; // 샘플/플레이스홀더 안내 문구
  mediaList?: ProjectMedia[];
  audioTrack?: {
    title: string;
    duration: string;
    theme: string;
    lyricsSnippet: string[];
  };
  subEpisodes?: {
    name: string;
    subtitle: string;
    description: string;
  }[];
}

export interface ProcessStage {
  step: string;
  stepNumber: string;
  title: string;
  titleEn: string;
  shortDesc: string;
  detail: string;
  keyActivities: string[];
  toolsInvolved: string[];
}

export interface CreativeTool {
  name: string;
  category: 'AI Engine' | 'Music & Sound' | 'Design & Art' | 'Video & Motion' | 'Publishing';
  role: string;
  description: string;
}

export interface StudioConfig {
  brandName: string;
  creatorName: string;
  koreanSlogan: string;
  englishSlogan: string;
  heroTagline: string;
  bioQuotes: string[];
  creativePhilosophy: {
    title: string;
    koreanTitle: string;
    description: string;
  }[];
  contactChannels: {
    email: string;
    youtubeUrl: string;
    blogUrl: string;
    instagramUrl: string;
  };
}

export const STUDIO_CONFIG: StudioConfig = {
  brandName: 'SEON CREATIVE STUDIO',
  creatorName: '선귀성',
  koreanSlogan: '상상을 이야기로, 이야기를 작품으로.',
  englishSlogan: 'Turning Imagination into Stories.',
  heroTagline: 'AI FILM · MUSIC · STORYTELLING · DESIGN',
  bioQuotes: [
    '안녕하세요. 이야기를 만드는 크리에이터 선귀성입니다.',
    '저는 AI를 활용해 상상을 실제 작품으로 만드는 과정을 즐깁니다.',
    '성경 속 인물들의 이야기, 가족과 아이들의 성장, 인간의 마음과 삶에 관한 이야기를 영상과 음악, 그림으로 표현합니다.',
    '저에게 AI는 사람을 대신하는 기술이 아니라, 사람의 상상력과 감성을 확장하는 창작의 도구입니다.',
    '기술은 변하지만, 사람의 마음에 남는 이야기는 오래갑니다.',
  ],
  creativePhilosophy: [
    {
      title: 'HUMAN SINCERITY',
      koreanTitle: '인간의 진정성',
      description: '기술의 화려함보다 사람의 가슴을 울리는 진솔한 서사와 공감을 최우선에 둡니다.',
    },
    {
      title: 'AI AMPLIFICATION',
      koreanTitle: '상상력의 확장',
      description: 'AI는 대체재가 아닌, 1인 창작자가 스튜디오급 비주얼과 사운드를 실현하도록 돕는 날개입니다.',
    },
    {
      title: 'ENDURING STORIES',
      koreanTitle: '오래 남는 이야기',
      description: '트렌드를 넘어 세대를 아우르고 가족과 마음에 긍정적인 가치를 심어주는 작품을 지향합니다.',
    },
  ],
  contactChannels: {
    email: 'contact.seonstudio@gmail.com', // 기본 채널 슬롯
    youtubeUrl: '', // 사용자가 입력하기 전까지 안내 상태 표시
    blogUrl: '',
    instagramUrl: '',
  },
};

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: 'legends-of-the-bible',
    category: 'film',
    categoryLabel: 'AI 시네마틱 필름',
    categoryEnglish: 'AI CINEMATIC FILMS',
    title: 'LEGENDS OF THE BIBLE',
    subtitle: '성경 속 인물들의 고뇌와 믿음을 재해석하는 시네마틱 프로젝트',
    badge: 'CINEMATIC SERIES',
    summary:
      '성경의 에스더, 나아만 장군, 베데스다 38년 된 병자 등의 이야기를 현대적 시네마틱 비주얼과 입체적 내면 묘사로 재해석하는 AI 영상 기획입니다.',
    coverImage: '/src/assets/images/legends_of_bible_poster_1793930226296.jpg',
    aspectRatio: 'poster',
    intention: [
      '고대 역사적 텍스트 속 활자로만 머물던 인물들의 갈등, 두려움, 그리고 결단의 순간을 살아 숨쉬는 영상 언어로 복원합니다.',
      '초자연적 기적 이면에 놓인 인간의 나약함과 겸손, 구원의 감격을 시네마틱 조명과 서사적 미장센으로 표현합니다.',
      'AI 이미지 생성 기술과 모션 연출, 오케스트라 사운드를 융합하여 1인 크리에이터가 독립 단편 영화 수준의 서사시를 창작하는 파이프라인을 구축합니다.',
    ],
    processSteps: [
      {
        title: '역사 고증 및 내러티브 각색',
        description: '성경 본문과 고대 페르시아·근동 역사 배경을 분석하고, 인물의 감정선 중심 시나리오 작성.',
      },
      {
        title: '비주얼 프롬프트 & 스타일 가이드',
        description: '고전 회화의 명암(키아로스쿠로)과 35mm 아나모픽 렌즈 질감을 반영한 일관된 씬 프롬프트 구축.',
      },
      {
        title: '키프레임 생성 및 모션 시퀀싱',
        description: 'Google Flow 및 영상 AI 도구를 활용해 인물의 미세한 표정과 카메라 패닝 시퀀스 생성.',
      },
      {
        title: '사운드 디자인 및 후반 편집',
        description: '서사적 오케스트라 스코어와 앰비언트 사운드를 결합하여 프리미어 프로에서 최종 색보정 및 마스터링.',
      },
    ],
    subEpisodes: [
      {
        name: '에스더 (Esther)',
        subtitle: '죽으면 죽으리이다 (For Such a Time as This)',
        description: '페르시아 수산궁의 침묵 속에서 민족의 운명을 걸고 왕 앞에 나아가는 에스더의 결단과 내면의 떨림.',
      },
      {
        name: '나아만 장군 (Commander Naaman)',
        subtitle: '요단강의 겸손 (River of Humility)',
        description: '강대한 군대 장관의 화려한 갑옷을 벗고 흙탕물 요단강에 일곱 번 몸을 담그며 자아를 내려놓는 정화의 순간.',
      },
      {
        name: '베데스다 38년 병자 (Bethesda Pool)',
        subtitle: '자리를 들고 걸어가라 (Rise and Walk)',
        description: '누구도 물에 넣어주지 않아 절망했던 38년의 세월, 그 메마른 영혼에 찾아온 온전한 치유와 회복의 음성.',
      },
    ],
    toolsUsed: ['Google AI Studio / Gemini', 'Google Flow', 'Adobe Premiere Pro', 'Adobe After Effects', 'Photoshop'],
    themes: ['신앙과 결단', '역사 시네마틱', '인간 내면의 치유', '대서사 비주얼'],
    sampleNotes:
      '※ 본 프로젝트는 현재 시나리오 및 파일럿 콘셉트 보드 단계의 샘플 쇼케이스이며, 실제 최종 영상 마스터는 단계별로 공개될 예정입니다.',
  },
  {
    id: 'hajun-and-turtle',
    category: 'storybook',
    categoryLabel: '그림동화 & 애니메이션',
    categoryEnglish: 'PICTURE BOOK & ANIMATION',
    title: '하준이와 어깨위 거북이',
    subtitle: '어린이의 바른 자세와 건강한 성장을 응원하는 감성 그림동화',
    badge: 'STORYBOOK & IP',
    summary:
      '어린이의 자세와 성장에 관한 이야기를 그림동화, 독창적인 캐릭터 디자인, 따뜻한 애니메이션, 음악으로 표현하는 감성 창작 프로젝트입니다.',
    coverImage: '/src/assets/images/hajun_turtle_storybook_1793930227102.jpg',
    aspectRatio: 'poster',
    intention: [
      '"자세 똑바로 해!"라는 지적과 잔소리 대신, 아이들의 마음에 다정한 친구 거북이를 선물하여 스스로 몸을 펴게 만드는 긍정적 스토리텔링.',
      '스마트 기기와 책상 앞에 오래 앉아 있는 현대 어린이들의 성장통을 거북목 캐릭터라는 은유로 따뜻하게 보듬습니다.',
      '그림책 도서 출판과 더불어 유튜브 쇼츠 애니메이션, 동요 음원까지 확장 가능한 멀티포맷 어린이 콘텐츠 IP를 구축합니다.',
    ],
    processSteps: [
      {
        title: '동화 원작 집필 & 심리학적 접근',
        description: '아이들의 발달 심리와 정서적 유대감을 고려해 7세 주인공 하준이와 거북이의 만남 스토리 구성.',
      },
      {
        title: '캐릭터 디자인 & 수채화 톤앤매너',
        description: '따뜻한 파스텔 수채화 감성의 일러스트레이션 스타일 확립 및 감정 표현 표정 시트 제작.',
      },
      {
        title: '북 레이아웃 & 일러스트 북 디자인',
        description: 'Adobe InDesign과 Illustrator를 활용한 판형 설계, 타이포그래피, 가독성 높은 조판 작업.',
      },
      {
        title: '애니메이션 & 오리지널 동요 제작',
        description: '원화 레이어를 분리하여 모션 그래픽을 적용하고, 아이들이 쉽게 따라 부를 수 있는 멜로디 작곡.',
      },
    ],
    toolsUsed: ['Google AI Studio / Gemini', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Suno'],
    themes: ['어린이 성장', '바른 자세', '우정과 격려', '수채화 동화책'],
    sampleNotes:
      '※ 본 프로젝트는 캐릭터 원화 및 동화책 더미북 제작 단계의 샘플 쇼케이스로, 출판 및 영상화 기획안이 함께 수록되어 있습니다.',
  },
  {
    id: 'ai-music-and-story',
    category: 'music',
    categoryLabel: 'AI 음악 & 서사',
    categoryEnglish: 'AI MUSIC',
    title: 'AI MUSIC & STORY',
    subtitle: '감정과 서사가 담긴 가사를 바탕으로 사운드스케이프를 짓는 음악 프로젝트',
    badge: 'SOUND & STORY',
    summary:
      '문학적 감수성의 한국어 가사와 서사를 기반으로, 클래식 오케스트레이션과 감성적 어쿠스틱 사운드를 AI와 결합하여 제작하는 음악 프로젝트입니다.',
    coverImage: '/src/assets/images/hero_cinematic_atmosphere_1793930227102.jpg',
    aspectRatio: 'landscape',
    intention: [
      '단순히 배경으로 흘러가는 BGM이 아니라, 영화 속 한 장면처럼 듣는 이의 마음속에 영상이 그려지는 음악을 만듭니다.',
      '인간의 고유한 감정과 삶의 굴곡을 담은 가사를 작사하고, AI 음원 생성 엔진의 정밀 프롬프트를 통해 고품질의 악곡을 실체화합니다.',
      '영상 프로젝트(성경 시네마틱, 하준이 동화)와 유기적으로 결합되어 작품의 몰입도를 극대화하는 오리지널 사운드트랙(OST) 시스템을 완성합니다.',
    ],
    processSteps: [
      {
        title: '스토리텔링 가사 작사',
        description: '인물의 내면 상태와 서사적 변곡점을 은유적으로 담은 시적 가사 작성.',
      },
      {
        title: '장르 & 오케스트레이션 설계',
        description: '피아노, 첼로, 바이올린, 앰비언트 신스를 활용한 감정 곡선 다이내믹스 프롬프트 엔지니어링.',
      },
      {
        title: 'Suno AI 생성 및 사운드 스템 분리',
        description: '수십 회의 생성 및 편곡 실험을 거쳐 최적의 멜로디와 보컬 감정선 채택.',
      },
      {
        title: '마스터링 및 영상 싱크',
        description: '다이내믹 EQ 조절 및 리버브 공간감을 정돈하여 영상 프로젝트와 완전한 조화 실현.',
      },
    ],
    audioTrack: {
      title: '새벽을 건너는 사람 (Crossing the Dawn)',
      duration: '03:42',
      theme: '피아노 독주로 시작하여 웅장한 스트링으로 확장되는 서사적 앰비언트 오케스트라',
      lyricsSnippet: [
        '어둠이 가장 짙은 자리에 서서',
        '빛을 부르지 않고 가만히 걸었다',
        '언젠가 이 고요가 노래가 될 때',
        '상처는 단단한 길이 되어 주겠지',
        '우리가 지나온 모든 밤들에게 바치는 이야기',
      ],
    },
    toolsUsed: ['Suno', 'Google AI Studio / Gemini', 'Adobe Premiere Pro', 'Sound Mastering Tools'],
    themes: ['서사적 가사', '시네마틱 오케스트라', '감성 보컬', 'OST 연계'],
    sampleNotes:
      '※ 현재 음원 스트리밍 및 라이선스 준비 중이며, 본 화면에서는 트랙의 기획 콘셉트와 가사 구조를 확인하실 수 있습니다.',
  },
  {
    id: 'mind-and-education',
    category: 'education',
    categoryLabel: '마인드 & 교육 콘텐츠',
    categoryEnglish: 'MIND & EDUCATION',
    title: 'MIND & EDUCATION',
    subtitle: '마음의 세계, 행복의 관점, 존중을 나누는 시각 교육 콘텐츠',
    badge: 'HUMAN & MIND',
    summary:
      '마음의 구조와 행복을 바라보는 관점, 인권과 존중 등의 인문학적 주제를 명확하고 깊이 있는 시각 자료와 프레젠테이션으로 구현하는 교육 작업입니다.',
    coverImage: '/src/assets/images/mind_education_visual_1793930228218.jpg',
    aspectRatio: 'landscape',
    intention: [
      '추상적이고 어렵게 느껴질 수 있는 인간의 내면세계와 심리 기제를 시각적 메타포를 통해 직관적으로 전달합니다.',
      '일방적인 지식 전달 강연이 아닌, 듣는 이가 스스로 자신의 마음을 돌아보고 이웃과의 연결을 회복하도록 돕는 성찰적 콘텐츠를 지향합니다.',
      '학교, 기업, 공공기관의 인문학·인권 교육 현장에서 즉각 활용 가능한 고해상도 비주얼 덱과 인터랙티브 교안을 제공합니다.',
    ],
    processSteps: [
      {
        title: '인문학적 주제 연구 및 핵심 메시지 도출',
        description: '경청, 고립의 원인, 마음의 연결, 행복의 정의 등 인간 관계의 본질 탐구.',
      },
      {
        title: '메타포 기반 비주얼 스토리보딩',
        description: '등불, 나침반, 다리, 메마른 밭과 단비 등 보편적인 상징을 활용한 이미지 기획.',
      },
      {
        title: '프레젠테이션 디자인 & 인포그래픽',
        description: '복잡한 이론을 도식화하고 감성적인 타이포그래피와 색채를 적용해 집중도 극대화.',
      },
      {
        title: '강연 영상 및 워크북 통합',
        description: '청중 참여형 질문지와 영상 클립을 패키지화하여 완결된 교육 솔루션 완성.',
      },
    ],
    subEpisodes: [
      {
        name: '모듈 01. 마음의 세계 (The World of the Heart)',
        subtitle: '고립을 넘어 소통으로',
        description: '겉으로 드러난 행동 이면의 깊은 마음의 상처와 갈망을 발견하고, 진정한 경청으로 서로를 연결하는 여정.',
      },
      {
        name: '모듈 02. 행복을 바라보는 관점 (Perspective on Happiness)',
        subtitle: '조건이 아닌 내면의 깊이',
        description: '더 많은 것을 소유하려는 경쟁에서 벗어나, 이미 주어진 삶의 가치를 발견하는 시각의 대전환.',
      },
      {
        name: '모듈 03. 인권과 상호 존중 (Dignity & Respect)',
        subtitle: '모든 존재가 가진 고유한 빛',
        description: '차이와 다름을 인정하고, 공동체 안에서 서로의 존엄을 지키며 함께 살아가는 온기의 교육.',
      },
    ],
    toolsUsed: ['Google AI Studio / Gemini', 'Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator'],
    themes: ['마음의 성찰', '소통과 공감', '행복의 재정의', '인권과 존중'],
    sampleNotes:
      '※ 교육 기관 및 단체 맞춤형 강연 프레젠테이션 샘플 자료이며, 세부 커리큘럼은 대상별로 최적화하여 구성됩니다.',
  },
];

export const CREATIVE_PROCESS_STEPS: ProcessStage[] = [
  {
    step: '01',
    stepNumber: '01',
    title: '아이디어와 주제 발견',
    titleEn: 'IDEA',
    shortDesc: '삶과 사람, 고전 속에서 변치 않는 질문을 길어 올립니다.',
    detail:
      '일상의 관찰, 성경의 깊은 서사, 아이들의 순수한 호기심, 사람들의 마음속 고립과 갈망에서 창작의 씨앗을 발견합니다. 기술보다 먼저 "왜 이 이야기를 지금 전해야 하는가"를 깊이 고민합니다.',
    keyActivities: [
      '주제 리서치 및 인문학적 고증',
      '핵심 메시지와 타깃 감정선 정의',
      '아이디어 마인드맵 및 레퍼런스 수집',
    ],
    toolsInvolved: ['Gemini', 'ChatGPT', '메모 & 저널링'],
  },
  {
    step: '02',
    stepNumber: '02',
    title: '이야기와 감정 설계',
    titleEn: 'STORY',
    shortDesc: '단단한 기승전결과 살아 숨쉬는 인물의 심리를 구축합니다.',
    detail:
      '등장인물의 동기, 위기, 깨달음의 순간을 입체적으로 설계합니다. 그림책이라면 아이의 눈높이에 맞는 언어를, 시네마틱 필름이라면 시대를 초월한 서사적 호흡을 다듬습니다.',
    keyActivities: [
      '시나리오 및 트리트먼트 작성',
      '씬별 감정 곡선(Emotional Arc) 설계',
      '대사와 독백의 문학적 리라이팅',
    ],
    toolsInvolved: ['Google AI Studio', 'ChatGPT', 'Story Doc'],
  },
  {
    step: '03',
    stepNumber: '03',
    title: '이미지와 캐릭터 제작',
    titleEn: 'VISUAL',
    shortDesc: '생각 속의 장면을 정교한 조명과 색채의 비주얼로 구현합니다.',
    detail:
      '정밀한 프롬프트 엔지니어링과 AI 이미지 생성을 통해 장면의 미장센을 완성합니다. 회화적 질감과 캐릭터의 일관성을 세심하게 조율하여 아트디렉터의 손길을 입힙니다.',
    keyActivities: [
      '캐릭터 시트 및 공간 스타일가이드 수립',
      '광원, 렌즈 화각, 질감의 일관성 제어',
      '포토샵·일러스트레이터를 통한 세부 보정',
    ],
    toolsInvolved: ['Google Flow', 'Gemini Vision', 'Adobe Photoshop', 'Adobe Illustrator'],
  },
  {
    step: '04',
    stepNumber: '04',
    title: '영상과 음악 제작',
    titleEn: 'MOTION & SOUND',
    shortDesc: '정적인 장면에 카메라의 움직임과 가슴을 울리는 선율을 입힙니다.',
    detail:
      '카메라의 깊이감 있는 패닝과 피사체의 호흡을 살린 비디오 모션을 생성합니다. 여기에 장면의 정서를 증폭시키는 오케스트라 스코어와 가사가 깃든 음악을 결합합니다.',
    keyActivities: [
      '카메라 무빙 및 시퀀스 모션 생성',
      '분위기 맞춤형 AI 사운드트랙 작곡',
      '환경음(Foley) 및 보이스오버 믹싱',
    ],
    toolsInvolved: ['Google Flow', 'Suno', 'Adobe Premiere Pro'],
  },
  {
    step: '05',
    stepNumber: '05',
    title: '편집과 완성',
    titleEn: 'FINAL CREATION',
    shortDesc: '모든 조각을 하나의 유기적인 작품으로 조탁하여 세상과 만납니다.',
    detail:
      '프리미어 프로와 애프터 이펙트에서 색보정, 타이포그래피, 사운드 마스터링을 진행합니다. 그림책의 경우 인디자인을 통한 조판 및 인쇄 감리를 거쳐 완성도 높은 결과물을 도출합니다.',
    keyActivities: [
      '타임라인 컷 편집 및 리듬감 조율',
      '시네마틱 컬러 그레이딩(LUTs 적용)',
      '디지털 배포 포맷 및 출판 마스터링',
    ],
    toolsInvolved: ['Adobe Premiere Pro', 'Adobe After Effects', 'Adobe InDesign'],
  },
];

export const CREATIVE_TOOLS_DATA: CreativeTool[] = [
  {
    name: 'Google AI Studio / Gemini',
    category: 'AI Engine',
    role: '심층 서사 설계 & 멀티모달 프롬프트 분석',
    description: '긴 호흡의 시나리오 검토, 역사적 고증 자문, 멀티모달 이미지 분석 및 고도화된 프롬프트 체계 수립에 활용합니다.',
  },
  {
    name: 'ChatGPT',
    category: 'AI Engine',
    role: '아이디어 브레인스토밍 & 대사 각색',
    description: '등장인물의 다각적 관점 탐색, 어린이 동화 대사의 리듬감 검토, 창작 초기 발상 확장에 사용합니다.',
  },
  {
    name: 'Google Flow',
    category: 'Video & Motion',
    role: '시네마틱 모션 & 비주얼 플로우 생성',
    description: '정적 이미지에 사실적인 카메라 워크와 자연스러운 시간의 흐름을 부여하는 비디오 생성 파이프라인의 중심축입니다.',
  },
  {
    name: 'Suno',
    category: 'Music & Sound',
    role: '서사적 음악 작곡 & 사운드스케이프',
    description: '스토리의 감정선에 부합하는 오케스트라 악곡, 어쿠스틱 멜로디 및 한국어 가사 기반의 감성 트랙을 제작합니다.',
  },
  {
    name: 'Adobe Photoshop',
    category: 'Design & Art',
    role: '디지털 매트 페인팅 & 비주얼 리터칭',
    description: '생성된 이미지의 불완전한 요소를 정밀 수정하고, 조명 밸런스와 시네마틱 텍스처를 마스터링합니다.',
  },
  {
    name: 'Adobe Illustrator',
    category: 'Design & Art',
    role: '캐릭터 벡터 아트 & 그래픽 디자인',
    description: '하준이와 거북이 캐릭터의 라인 드로잉, 동화 그래픽 요소, 아이콘 및 로고타입을 정밀 제작합니다.',
  },
  {
    name: 'Adobe Premiere Pro',
    category: 'Video & Motion',
    role: '타임라인 컷 편집 & 시네마틱 색보정',
    description: '모든 영상 클립과 사운드트랙의 타이밍을 정밀 조율하고, 영화적 질감의 컬러 그레이딩을 완성합니다.',
  },
  {
    name: 'Adobe After Effects',
    category: 'Video & Motion',
    role: '모션 그래픽 & 비주얼 이펙트',
    description: '동화 일러스트레이션의 2D 레이어 모션, 타이틀 시퀀스 연출, 입자 광원 등의 특수 효과를 구현합니다.',
  },
  {
    name: 'Adobe InDesign',
    category: 'Publishing',
    role: '그림책 출판 조판 & 인쇄 규격 디자인',
    description: '그림동화의 판형 설정, 본문 타이포그래피 배치, 출판 및 인쇄 감리를 위한 고해상도 PDF 마스터를 제작합니다.',
  },
];
