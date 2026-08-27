/* ══════════════════════════════════════════════════════════════
   이거 진짜임? — 역사 OX 문제은행
   필드: id, statement, answer(true=사실), difficulty(1~3),
         category, region('korean'|'world'), explanation, source
   원칙: 한 문제 한 주장 / 평가·논쟁 주제 금지 / 연도 암기 함정 금지
   ══════════════════════════════════════════════════════════════ */
const QUESTIONS = [

  /* ─────────────── 한국사 ─────────────── */
  { id: 'k01', statement: '세종이 한글을 만들자 집현전 학자가 공개적으로 반대 상소를 올렸다.',
    answer: true, difficulty: 2, category: 'culture', region: 'korean',
    explanation: '1444년 집현전 부제학 최만리 등이 한글 창제에 반대하는 상소를 올렸고, 세종이 직접 반박했습니다. 실록에 그대로 남아 있는 논쟁입니다.',
    source: 'https://ko.wikipedia.org/wiki/최만리' },

  { id: 'k02', statement: '훈민정음이 처음 만들어졌을 때 글자 수는 지금 한글보다 많았다.',
    answer: true, difficulty: 2, category: 'culture', region: 'korean',
    explanation: '훈민정음은 28자였습니다. ㆍ, ㅿ, ㆆ, ㅇ(옛이응) 네 글자가 쓰이지 않게 되면서 지금의 24자가 됐습니다.',
    source: 'https://ko.wikipedia.org/wiki/훈민정음' },

  { id: 'k03', statement: '훈민정음 해례본은 20세기에 들어서야 발견되었다.',
    answer: true, difficulty: 3, category: 'culture', region: 'korean',
    explanation: '한글의 창제 원리를 설명한 해례본은 1940년 경북 안동에서 발견됐습니다. 그 전까지는 글자를 만든 원리가 수수께끼였습니다.',
    source: 'https://ko.wikipedia.org/wiki/훈민정음_해례본' },

  { id: 'k04', statement: "'거북선'이라는 배는 임진왜란 때 처음 등장했다.",
    answer: false, difficulty: 3, category: 'war', region: 'korean',
    explanation: '태종실록 1413년 기사에 이미 귀선(거북선)이 등장합니다. 이순신은 기존에 있던 배를 실전형으로 개량한 것입니다.',
    source: 'https://ko.wikipedia.org/wiki/거북선' },

  { id: 'k05', statement: '명량 해전에서 조선 수군의 배는 13척 정도에 불과했다.',
    answer: true, difficulty: 1, category: 'war', region: 'korean',
    explanation: '칠천량에서 궤멸된 뒤 남은 13척으로 일본 수군 130여 척을 상대해 이겼습니다. "신에게는 아직 열두 척의 배가 있사옵니다"의 그 전투입니다.',
    source: 'https://ko.wikipedia.org/wiki/명량_해전' },

  { id: 'k06', statement: '이순신의 난중일기는 유네스코 세계기록유산이다.',
    answer: true, difficulty: 2, category: 'culture', region: 'korean',
    explanation: '2013년 유네스코 세계기록유산으로 등재됐습니다. 장수가 7년 전쟁 내내 직접 쓴 일기라는 점에서 세계적으로도 드문 기록입니다.',
    source: 'https://ko.wikipedia.org/wiki/난중일기' },

  { id: 'k07', statement: '임진왜란이 벌어지던 시기, 영국에서는 셰익스피어가 활동하고 있었다.',
    answer: true, difficulty: 2, category: 'culture', region: 'korean',
    explanation: '임진왜란(1592~1598)은 셰익스피어가 로미오와 줄리엣을 쓰던 시기와 겹칩니다. 이순신과 셰익스피어는 동시대인입니다.',
    source: 'https://en.wikipedia.org/wiki/William_Shakespeare' },

  { id: 'k08', statement: "광해군 시대의 실록은 '실록'이 아니라 '일기'라는 이름으로 남아 있다.",
    answer: true, difficulty: 3, category: 'events', region: 'korean',
    explanation: '폐위된 왕에게는 묘호를 올리지 않아 연산군일기, 광해군일기로 불립니다. 이름만 일기일 뿐 체재는 실록과 같습니다.',
    source: 'https://ko.wikipedia.org/wiki/광해군일기' },

  { id: 'k09', statement: '조선의 왕은 사관이 쓴 자신에 대한 기록을 마음대로 볼 수 없었다.',
    answer: true, difficulty: 2, category: 'events', region: 'korean',
    explanation: '기록의 공정성을 지키기 위해 왕의 사초 열람은 원칙적으로 금지됐습니다. 세종조차 태종실록을 보려다 신하들의 반대로 포기했습니다.',
    source: 'https://ko.wikipedia.org/wiki/조선왕조실록' },

  { id: 'k10', statement: '경복궁은 임진왜란 이후 약 270년 동안 복구되지 않은 채 방치됐다.',
    answer: true, difficulty: 3, category: 'events', region: 'korean',
    explanation: '1592년 소실된 뒤 1865년 흥선대원군이 중건할 때까지 폐허로 남아 있었습니다. 그동안 왕들은 창덕궁 등에서 지냈습니다.',
    source: 'https://ko.wikipedia.org/wiki/경복궁' },

  { id: 'k11', statement: '숭례문(남대문)은 한국전쟁 때 불타 없어졌다.',
    answer: false, difficulty: 2, category: 'culture', region: 'korean',
    explanation: '숭례문은 한국전쟁도 견뎌냈지만, 2008년 방화로 누각 대부분이 불탔고 2013년 복구됐습니다.',
    source: 'https://ko.wikipedia.org/wiki/숭례문' },

  { id: 'k12', statement: "드라마 주인공 '대장금'은 실록에 실제로 등장하는 인물이다.",
    answer: true, difficulty: 2, category: 'people', region: 'korean',
    explanation: "중종실록에 의녀 '대장금(大長今)'이 여러 차례 등장하며, 왕의 주치의 역할을 했다는 기록도 있습니다. 생애 대부분은 드라마의 창작입니다.",
    source: 'https://ko.wikipedia.org/wiki/장금' },

  { id: 'k13', statement: '장영실은 관청 소속 노비 출신이었다.',
    answer: true, difficulty: 2, category: 'people', region: 'korean',
    explanation: '동래현 관노 출신으로, 재주를 인정받아 면천되고 종3품까지 올랐습니다. 신분제 사회에서 매우 이례적인 사례입니다.',
    source: 'https://ko.wikipedia.org/wiki/장영실' },

  { id: 'k14', statement: '금속활자본 직지심체요절은 구텐베르크 성경보다 먼저 인쇄되었다.',
    answer: true, difficulty: 1, category: 'culture', region: 'korean',
    explanation: '직지는 1377년, 구텐베르크 성경은 1450년대에 인쇄됐습니다. 현존 최고(最古)의 금속활자본으로 유네스코 세계기록유산입니다.',
    source: 'https://ko.wikipedia.org/wiki/직지심체요절' },

  { id: 'k15', statement: '직지심체요절 원본은 현재 한국에 보관되어 있다.',
    answer: false, difficulty: 2, category: 'culture', region: 'korean',
    explanation: '구한말 프랑스 외교관이 수집해 간 뒤 지금은 프랑스 국립도서관에 있습니다. 한국에 있는 것은 영인본입니다.',
    source: 'https://ko.wikipedia.org/wiki/직지심체요절' },

  { id: 'k16', statement: '고려는 몽골의 침입을 끝까지 막아내 강화(화친)를 맺지 않았다.',
    answer: false, difficulty: 2, category: 'war', region: 'korean',
    explanation: '수십 년 항쟁 끝에 고려는 몽골과 강화를 맺었고, 이후 고려 왕은 원 황실의 부마(사위)가 되었습니다.',
    source: 'https://ko.wikipedia.org/wiki/여몽전쟁' },

  { id: 'k17', statement: '고려의 국제 무역항 벽란도에는 아라비아 상인도 드나들었다.',
    answer: true, difficulty: 2, category: 'culture', region: 'korean',
    explanation: "고려사에는 대식국(아라비아) 상인이 와서 교역했다는 기록이 있습니다. '코리아'라는 이름이 서방에 퍼진 배경으로 꼽힙니다.",
    source: 'https://ko.wikipedia.org/wiki/벽란도' },

  { id: 'k18', statement: '세종은 관청 노비에게 출산휴가를 주도록 했다.',
    answer: true, difficulty: 3, category: 'life', region: 'korean',
    explanation: '세종은 관비의 출산휴가를 100일로 늘리고, 남편에게도 휴가를 주게 했습니다. 실록에 남아 있는 기록입니다.',
    source: 'https://ko.wikipedia.org/wiki/조선_세종' },

  { id: 'k19', statement: '안중근의 유해는 아직까지 발견되지 않았다.',
    answer: true, difficulty: 2, category: 'people', region: 'korean',
    explanation: '뤼순 감옥 근처에 묻힌 것으로 추정되지만 정확한 위치가 확인되지 않아, 효창공원에는 유해 없는 가묘가 마련되어 있습니다.',
    source: 'https://ko.wikipedia.org/wiki/안중근' },

  { id: 'k20', statement: '고종이 마시던 커피에 독을 탄 암살 시도가 실제로 있었다.',
    answer: true, difficulty: 2, category: 'life', region: 'korean',
    explanation: '1898년 김홍륙이 사주해 고종과 황태자의 커피에 아편을 넣은 사건이 있었습니다. 커피 애호가였던 고종은 맛이 이상해 뱉었다고 전해집니다.',
    source: 'https://ko.wikipedia.org/wiki/김홍륙' },

  { id: 'k21', statement: '경인선 철도는 일제강점기에 처음 개통되었다.',
    answer: false, difficulty: 2, category: 'science', region: 'korean',
    explanation: '한국 최초의 철도 경인선은 1899년, 대한제국 시기에 개통됐습니다. 국권을 빼앗기기 10년도 더 전의 일입니다.',
    source: 'https://ko.wikipedia.org/wiki/경인선' },

  { id: 'k22', statement: '3·1 운동 때 민족대표 33인은 탑골공원에서 독립선언서를 낭독했다.',
    answer: false, difficulty: 3, category: 'events', region: 'korean',
    explanation: '민족대표들은 태화관에 모여 선언식을 하고 스스로 체포됐습니다. 탑골공원에서는 학생과 시민들이 따로 선언서를 낭독하고 만세를 불렀습니다.',
    source: 'https://ko.wikipedia.org/wiki/3·1_운동' },

  { id: 'k23', statement: '신라의 여왕은 선덕여왕 한 명뿐이었다.',
    answer: false, difficulty: 2, category: 'people', region: 'korean',
    explanation: '선덕여왕 외에도 진덕여왕, 진성여왕까지 신라에는 세 명의 여왕이 있었습니다.',
    source: 'https://ko.wikipedia.org/wiki/진성여왕' },

  { id: 'k24', statement: "발해는 일본에 보낸 국서에서 스스로를 '고려(고구려)'라고 칭했다.",
    answer: true, difficulty: 2, category: 'events', region: 'korean',
    explanation: "발해 왕이 일본에 보낸 외교문서에 '고려국왕'이라는 표현이 남아 있습니다. 스스로 고구려 계승을 내세운 근거로 꼽힙니다.",
    source: 'https://ko.wikipedia.org/wiki/발해' },

  { id: 'k25', statement: '백제가 일본에 불교를 전했다는 기록이 남아 있다.',
    answer: true, difficulty: 2, category: 'culture', region: 'korean',
    explanation: '일본서기 등에 백제 성왕이 불상과 경전을 보내 불교를 전했다는 기록이 있습니다.',
    source: 'https://ko.wikipedia.org/wiki/백제' },

  { id: 'k26', statement: '광개토대왕비는 현재 중국 땅에 서 있다.',
    answer: true, difficulty: 2, category: 'culture', region: 'korean',
    explanation: '높이 6m가 넘는 이 비석은 고구려의 옛 수도였던 중국 지린성 지안(집안)에 있습니다.',
    source: 'https://ko.wikipedia.org/wiki/광개토왕릉비' },

  { id: 'k27', statement: '김치는 처음부터 고춧가루를 넣은 빨간 음식이었다.',
    answer: false, difficulty: 1, category: 'life', region: 'korean',
    explanation: '고추는 임진왜란 전후에야 한반도에 들어왔습니다. 그 전의 김치는 소금과 채소 위주의 하얀 절임이었습니다.',
    source: 'https://ko.wikipedia.org/wiki/김치' },

  { id: 'k28', statement: '고구마는 조선 후기에 일본을 통해 들어온 작물이다.',
    answer: true, difficulty: 3, category: 'life', region: 'korean',
    explanation: '1763년 통신사 조엄이 대마도에서 종자를 들여왔습니다. 흉년에 대비한 구황작물로 보급됐습니다.',
    source: 'https://ko.wikipedia.org/wiki/고구마' },

  { id: 'k29', statement: '태극기가 처음 만들어진 것은 대한민국 임시정부 때다.',
    answer: false, difficulty: 2, category: 'culture', region: 'korean',
    explanation: '태극기는 1882~1883년 조선에서 만들어져 국기로 제정됐습니다. 임시정부보다 40년 가까이 앞섭니다.',
    source: 'https://ko.wikipedia.org/wiki/태극기' },

  { id: 'k30', statement: '한국전쟁 정전협정문에 한국(남한) 측의 서명은 없다.',
    answer: true, difficulty: 2, category: 'war', region: 'korean',
    explanation: '1953년 정전협정에는 유엔군, 북한군, 중국군 대표만 서명했습니다. 당시 한국 정부는 정전에 반대해 서명하지 않았습니다.',
    source: 'https://en.wikipedia.org/wiki/Korean_Armistice_Agreement' },

  { id: 'k31', statement: '한국전쟁 동안 서울의 주인은 단 한 번 바뀌었다.',
    answer: false, difficulty: 2, category: 'war', region: 'korean',
    explanation: '서울은 개전 초 함락, 9·28 수복, 1·4 후퇴, 재수복까지 주인이 네 번 바뀌었습니다.',
    source: 'https://en.wikipedia.org/wiki/Korean_War' },

  { id: 'k32', statement: '장희빈은 사극이 만들어낸 가상 인물이다.',
    answer: false, difficulty: 1, category: 'people', region: 'korean',
    explanation: '희빈 장씨(장옥정)는 숙종실록에 등장하는 실존 인물로, 왕비 자리까지 올랐다가 사사됐습니다.',
    source: 'https://ko.wikipedia.org/wiki/희빈_장씨' },

  { id: 'k33', statement: '암행어사의 마패는 신분증이 아니라 말을 빌리기 위한 증표였다.',
    answer: true, difficulty: 2, category: 'events', region: 'korean',
    explanation: '마패는 역참에서 그려진 말의 수만큼 역마를 빌릴 수 있는 증표였고, 관원들이 두루 사용했습니다. 어사의 상징이 된 것은 부수적입니다.',
    source: 'https://ko.wikipedia.org/wiki/마패' },

  { id: 'k34', statement: '어사 박문수는 실존 인물이다.',
    answer: true, difficulty: 2, category: 'people', region: 'korean',
    explanation: '박문수(1691~1756)는 영조 대의 실존 관료입니다. 다만 암행어사 설화 대부분은 후대에 그의 이름에 붙은 이야기입니다.',
    source: 'https://ko.wikipedia.org/wiki/박문수' },

  { id: 'k35', statement: '조선의 마지막 왕은 고종이다.',
    answer: false, difficulty: 1, category: 'people', region: 'korean',
    explanation: '마지막 군주는 고종의 아들 순종입니다. 1907년 고종이 강제 퇴위된 뒤 순종이 즉위했고, 1910년 나라를 잃었습니다.',
    source: 'https://ko.wikipedia.org/wiki/대한제국_순종' },

  { id: 'k36', statement: '세종대왕과 잔 다르크는 같은 시대를 살았다.',
    answer: true, difficulty: 2, category: 'people', region: 'korean',
    explanation: '세종 재위(1418~1450)와 잔 다르크의 생애(1412~1431)는 완전히 겹칩니다. 한글 창제 준비기에 프랑스에서는 잔 다르크가 싸우고 있었습니다.',
    source: 'https://ko.wikipedia.org/wiki/조선_세종' },

  { id: 'k37', statement: '미국 독립선언과 정조의 즉위는 같은 해에 일어났다.',
    answer: true, difficulty: 3, category: 'events', region: 'korean',
    explanation: '둘 다 1776년입니다. 정조가 규장각을 세우던 무렵 미국이라는 나라가 막 태어나고 있었습니다.',
    source: 'https://ko.wikipedia.org/wiki/조선_정조' },

  { id: 'k38', statement: '허난설헌의 시집은 조선보다 중국에서 먼저 간행되었다.',
    answer: true, difficulty: 3, category: 'culture', region: 'korean',
    explanation: '허난설헌의 시는 사후 명나라 사신에게 전해져 중국에서 먼저 시집으로 출간되고 인기를 얻었습니다.',
    source: 'https://ko.wikipedia.org/wiki/허난설헌' },

  { id: 'k39', statement: '혜초의 왕오천축국전은 중국 둔황에서 프랑스 학자가 발견했다.',
    answer: true, difficulty: 3, category: 'culture', region: 'korean',
    explanation: '1908년 프랑스 학자 펠리오가 둔황 석굴에서 발견했고, 현재 프랑스 국립도서관에 있습니다.',
    source: 'https://ko.wikipedia.org/wiki/왕오천축국전' },

  { id: 'k40', statement: '안견의 몽유도원도는 현재 일본에 있다.',
    answer: true, difficulty: 3, category: 'culture', region: 'korean',
    explanation: '조선 전기 최고 걸작으로 꼽히는 몽유도원도는 일본 덴리대학 도서관이 소장하고 있습니다.',
    source: 'https://ko.wikipedia.org/wiki/몽유도원도' },

  /* ─────────────── 세계사: 잘못 알려진 상식 ─────────────── */
  { id: 'w01', statement: '어린 워싱턴이 벚나무를 베고 정직하게 고백했다는 일화는 실제 기록에 근거한다.',
    answer: false, difficulty: 1, category: 'people', region: 'world',
    explanation: '이 일화는 워싱턴 사후 전기작가 윔스가 지어낸 이야기로 여겨집니다. 정작 정직함의 상징이 된 일화가 창작이라는 점이 아이러니입니다.',
    source: 'https://en.wikipedia.org/wiki/Parson_Weems' },

  { id: 'w02', statement: '중세 유럽의 지식인들은 지구가 평평하다고 믿었다.',
    answer: false, difficulty: 1, category: 'culture', region: 'world',
    explanation: '고대 그리스 이래 교육받은 층은 지구가 둥글다는 것을 알고 있었습니다. "중세 = 평평한 지구"는 19세기에 만들어진 신화입니다.',
    source: 'https://en.wikipedia.org/wiki/Myth_of_the_flat_Earth' },

  { id: 'w03', statement: '마리 앙투아네트는 "빵이 없으면 케이크를 먹으면 되지"라고 말했다.',
    answer: false, difficulty: 1, category: 'people', region: 'world',
    explanation: '이 말을 그가 했다는 기록은 없습니다. 비슷한 구절은 그가 프랑스에 오기도 전에 루소의 책에 이미 등장합니다.',
    source: 'https://en.wikipedia.org/wiki/Let_them_eat_cake' },

  { id: 'w04', statement: '바이킹 전사들은 뿔 달린 투구를 쓰고 싸웠다.',
    answer: false, difficulty: 1, category: 'war', region: 'world',
    explanation: '발굴된 바이킹 투구에 뿔은 없습니다. 뿔 투구는 19세기 오페라 무대의상에서 퍼진 이미지입니다.',
    source: 'https://en.wikipedia.org/wiki/Horned_helmet' },

  { id: 'w05', statement: '만리장성은 달에서 맨눈으로 보인다.',
    answer: false, difficulty: 1, category: 'science', region: 'world',
    explanation: '달에서는커녕 지구 저궤도에서도 맨눈으로는 식별이 어렵다는 것이 우주비행사들의 공통된 증언입니다.',
    source: 'https://en.wikipedia.org/wiki/Great_Wall_of_China' },

  { id: 'w06', statement: '아인슈타인은 학창 시절 수학 낙제생이었다.',
    answer: false, difficulty: 1, category: 'people', region: 'world',
    explanation: '아인슈타인은 수학 성적이 뛰어났고 15세에 미적분을 뗐습니다. 본인도 이 소문을 듣고 어이없어했습니다.',
    source: 'https://en.wikipedia.org/wiki/Albert_Einstein' },

  { id: 'w07', statement: '백열전구를 처음 발명한 사람은 에디슨이다.',
    answer: false, difficulty: 2, category: 'science', region: 'world',
    explanation: '에디슨 이전에 스완 등 여러 발명가의 백열전구가 있었습니다. 에디슨의 공은 오래가는 필라멘트와 전력 공급망으로 상용화한 것입니다.',
    source: 'https://en.wikipedia.org/wiki/Incandescent_light_bulb' },

  { id: 'w08', statement: '콜럼버스는 지구가 둥글다는 것을 증명하려고 항해를 떠났다.',
    answer: false, difficulty: 2, category: 'people', region: 'world',
    explanation: '당시 지구가 둥글다는 건 상식이었습니다. 논쟁거리는 지구의 크기였고, 콜럼버스는 오히려 지구를 실제보다 작게 계산해서 떠난 쪽입니다.',
    source: 'https://en.wikipedia.org/wiki/Christopher_Columbus' },

  { id: 'w09', statement: '네로 황제는 로마 대화재를 바라보며 바이올린을 연주했다.',
    answer: false, difficulty: 1, category: 'people', region: 'world',
    explanation: '바이올린은 1500년대에야 만들어진 악기입니다. 고대 기록들도 서로 엇갈리며, 네로가 화재 때 로마 밖에 있었다는 기록도 있습니다.',
    source: 'https://en.wikipedia.org/wiki/Nero' },

  { id: 'w10', statement: "진주만 공습의 '공격 개시 명령' 암호는 '도라 도라 도라'였다.",
    answer: false, difficulty: 2, category: 'war', region: 'world',
    explanation: "'도라 도라 도라'는 기습에 성공했음을 함대에 알리는 보고 신호였습니다. 공격 개시 명령은 '토, 토, 토'였습니다.",
    source: 'https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor' },

  { id: 'w11', statement: '살렘 마녀재판에서 유죄를 받은 사람들은 화형당했다.',
    answer: false, difficulty: 2, category: 'events', region: 'world',
    explanation: '살렘에서 화형당한 사람은 없습니다. 19명이 교수형을 당했고 1명은 돌에 눌려 숨졌습니다. 화형 이미지는 유럽 마녀사냥과 섞인 것입니다.',
    source: 'https://en.wikipedia.org/wiki/Salem_witch_trials' },

  { id: 'w12', statement: '갈릴레이가 재판 후 "그래도 지구는 돈다"라고 말했다는 당대 기록이 있다.',
    answer: false, difficulty: 2, category: 'people', region: 'world',
    explanation: '이 명언은 갈릴레이 사후 100년 넘게 지나서야 문헌에 등장합니다. 후대에 만들어진 전설로 보는 것이 정설입니다.',
    source: 'https://en.wikipedia.org/wiki/And_yet_it_moves' },

  { id: 'w13', statement: '이집트 피라미드는 채찍질당하던 노예들이 지었다.',
    answer: false, difficulty: 1, category: 'culture', region: 'world',
    explanation: '발굴된 노동자 마을과 무덤 기록에 따르면 피라미드는 급여와 식사를 받는 노동자들이 지었습니다. 왕묘 곁에 묻힌 노동자도 있습니다.',
    source: 'https://en.wikipedia.org/wiki/Egyptian_pyramids' },

  { id: 'w14', statement: '스핑크스의 코는 나폴레옹 군대의 포격으로 부서졌다.',
    answer: false, difficulty: 2, category: 'culture', region: 'world',
    explanation: '나폴레옹의 이집트 원정(1798) 이전에 그려진 스케치에 이미 코가 없습니다. 수백 년 전에 파손된 것으로 추정됩니다.',
    source: 'https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza' },

  { id: 'w15', statement: "고문기구 '아이언 메이든(철의 처녀)'은 중세에 실제로 사용되었다.",
    answer: false, difficulty: 2, category: 'culture', region: 'world',
    explanation: '중세에 사용됐다는 기록이 없습니다. 18~19세기에 전시용으로 만들어져 중세의 잔혹함을 과장하는 데 쓰인 물건입니다.',
    source: 'https://en.wikipedia.org/wiki/Iron_maiden' },

  { id: 'w16', statement: '중세 평균수명이 30세 정도였으니, 40세는 보기 드문 노인이었다.',
    answer: false, difficulty: 2, category: 'life', region: 'world',
    explanation: '평균을 끌어내린 주범은 높은 영아 사망률입니다. 어린 시절을 넘긴 사람은 50~60대까지 사는 일이 흔했습니다.',
    source: 'https://en.wikipedia.org/wiki/Life_expectancy' },

  { id: 'w17', statement: '라이트 형제 이전까지 인류는 하늘을 나는 데 성공한 적이 없었다.',
    answer: false, difficulty: 1, category: 'science', region: 'world',
    explanation: '1783년 몽골피에 형제의 열기구가 이미 사람을 태우고 하늘을 날았습니다. 라이트 형제의 업적은 동력 조종 비행입니다.',
    source: 'https://en.wikipedia.org/wiki/Montgolfier_brothers' },

  { id: 'w18', statement: '마젤란은 최초의 세계일주 항해를 끝까지 마쳤다.',
    answer: false, difficulty: 1, category: 'people', region: 'world',
    explanation: '마젤란은 항해 도중 필리핀에서 전사했습니다. 세계일주를 완수한 것은 엘카노가 이끈 생존 선원 18명입니다.',
    source: 'https://en.wikipedia.org/wiki/Ferdinand_Magellan' },

  { id: 'w19', statement: '링컨의 게티즈버그 연설은 두 시간이 넘는 대연설이었다.',
    answer: false, difficulty: 2, category: 'events', region: 'world',
    explanation: '272단어, 약 2분짜리 연설이었습니다. 두 시간 연설한 사람은 앞 순서의 에드워드 에버렛이었는데, 기억되는 것은 2분 쪽입니다.',
    source: 'https://en.wikipedia.org/wiki/Gettysburg_Address' },

  { id: 'w20', statement: '프랑스 혁명 때 습격당한 바스티유 감옥에는 정치범 수백 명이 갇혀 있었다.',
    answer: false, difficulty: 2, category: 'events', region: 'world',
    explanation: '1789년 습격 당시 수감자는 단 7명이었고 정치범도 아니었습니다. 군중의 실제 목표는 감옥의 화약과 무기였습니다.',
    source: 'https://en.wikipedia.org/wiki/Storming_of_the_Bastille' },

  { id: 'w21', statement: '로마의 검투사 시합은 대부분 한쪽이 죽어야 끝났다.',
    answer: false, difficulty: 2, category: 'culture', region: 'world',
    explanation: '검투사는 훈련 비용이 많이 드는 자산이라 대부분의 시합은 항복이나 판정으로 끝났습니다. 죽을 때까지 싸우는 것은 예외적이었습니다.',
    source: 'https://en.wikipedia.org/wiki/Gladiator' },

  { id: 'w22', statement: '아인슈타인은 상대성이론으로 노벨상을 받았다.',
    answer: false, difficulty: 2, category: 'science', region: 'world',
    explanation: '1921년 노벨물리학상의 공식 수상 사유는 광전효과 연구였습니다. 상대성이론은 당시 너무 논쟁적이라는 이유로 제외됐습니다.',
    source: 'https://www.nobelprize.org/prizes/physics/1921/einstein/facts/' },

  { id: 'w23', statement: '헤로도토스는 마라톤의 전령이 아테네까지 달려가 승전보를 전하고 숨졌다고 기록했다.',
    answer: false, difficulty: 3, category: 'war', region: 'world',
    explanation: '헤로도토스가 기록한 것은 전투 전 스파르타로 도움을 청하러 달린 이야기입니다. 아테네에서 숨졌다는 극적인 이야기는 수백 년 뒤 문헌에 나옵니다.',
    source: 'https://en.wikipedia.org/wiki/Pheidippides' },

  { id: 'w24', statement: '포춘쿠키는 중국에서 유래한 과자다.',
    answer: false, difficulty: 2, category: 'life', region: 'world',
    explanation: '포춘쿠키는 일본계 이민자들이 미국에서 만들어 퍼뜨린 것으로 추적됩니다. 정작 중국에는 없다가 역수입됐습니다.',
    source: 'https://en.wikipedia.org/wiki/Fortune_cookie' },

  { id: 'w25', statement: '클레오파트라는 이집트 토착 혈통의 파라오였다.',
    answer: false, difficulty: 2, category: 'people', region: 'world',
    explanation: '클레오파트라는 알렉산드로스 부하 장군의 후손인 그리스계 프톨레마이오스 왕조 사람입니다. 왕조에서 드물게 이집트어를 배운 인물이기도 합니다.',
    source: 'https://en.wikipedia.org/wiki/Cleopatra' },

  { id: 'w26', statement: '콜럼버스는 항해 중 지금의 미국 본토 땅을 밟았다.',
    answer: false, difficulty: 2, category: 'people', region: 'world',
    explanation: '네 차례 항해에서 그가 상륙한 곳은 카리브해 섬들과 중남미 해안이었습니다. 현재의 미국 본토에는 발을 디딘 적이 없습니다.',
    source: 'https://en.wikipedia.org/wiki/Voyages_of_Christopher_Columbus' },

  { id: 'w27', statement: '백년전쟁은 정확히 100년 동안 벌어졌다.',
    answer: false, difficulty: 1, category: 'war', region: 'world',
    explanation: '1337년부터 1453년까지, 116년입니다. 후대에 붙인 이름이 실제 기간보다 유명해진 경우입니다.',
    source: 'https://en.wikipedia.org/wiki/Hundred_Years%27_War' },

  { id: 'w28', statement: '반 고흐는 살아 있을 때 이미 인기 화가였다.',
    answer: false, difficulty: 2, category: 'people', region: 'world',
    explanation: '생전에 확실히 판매된 그림은 한 점 정도로 알려져 있습니다. 명성은 사망 후에야 찾아왔습니다.',
    source: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh' },

  { id: 'w29', statement: '간디는 노벨 평화상을 받았다.',
    answer: false, difficulty: 2, category: 'people', region: 'world',
    explanation: '다섯 차례 후보에 올랐지만 끝내 받지 못했습니다. 노벨위원회는 훗날 이를 최대의 누락으로 꼽았습니다.',
    source: 'https://en.wikipedia.org/wiki/Mahatma_Gandhi' },

  { id: 'w30', statement: '처칠은 노벨 평화상을 받았다.',
    answer: false, difficulty: 2, category: 'people', region: 'world',
    explanation: '처칠이 받은 것은 1953년 노벨 문학상입니다. 회고록과 연설이 수상 사유였습니다.',
    source: 'https://en.wikipedia.org/wiki/Winston_Churchill' },

  { id: 'w31', statement: '에펠탑은 처음부터 파리의 영원한 상징물로 계획되었다.',
    answer: false, difficulty: 2, category: 'culture', region: 'world',
    explanation: '1889년 박람회용 임시 구조물로, 20년 뒤 철거될 예정이었습니다. 무선 안테나로서의 가치 덕분에 살아남았습니다.',
    source: 'https://en.wikipedia.org/wiki/Eiffel_Tower' },

  { id: 'w32', statement: '자유의 여신상은 처음 세워질 때부터 녹색이었다.',
    answer: false, difficulty: 1, category: 'culture', region: 'world',
    explanation: '구리로 만들어져 처음엔 갈색 동전 색이었습니다. 수십 년에 걸쳐 산화되며 지금의 청록색이 됐습니다.',
    source: 'https://en.wikipedia.org/wiki/Statue_of_Liberty' },

  { id: 'w33', statement: '인류는 공룡과 같은 시대에 산 적이 있다.',
    answer: false, difficulty: 1, category: 'science', region: 'world',
    explanation: '(조류가 아닌) 공룡은 약 6600만 년 전에 멸종했고, 인류의 등장은 그로부터 6천만 년도 더 지난 뒤입니다.',
    source: 'https://en.wikipedia.org/wiki/Dinosaur' },

  { id: 'w34', statement: '티라노사우루스는 스테고사우루스와 같은 시대에 살았다.',
    answer: false, difficulty: 3, category: 'science', region: 'world',
    explanation: '둘 사이 간격은 약 8천만 년으로, 티라노사우루스는 스테고사우루스보다 현대 인류와 시간적으로 더 가깝습니다.',
    source: 'https://en.wikipedia.org/wiki/Stegosaurus' },

  { id: 'w35', statement: "'OK'라는 표현은 20세기에 만들어졌다.",
    answer: false, difficulty: 3, category: 'culture', region: 'world',
    explanation: "'OK'는 1839년 미국 신문의 유행어 놀이에서 처음 확인됩니다. 남북전쟁보다도 오래된 말입니다.",
    source: 'https://en.wikipedia.org/wiki/OK' },

  { id: 'w36', statement: '실크로드는 한 갈래로 이어진 단일한 길이었다.',
    answer: false, difficulty: 2, category: 'culture', region: 'world',
    explanation: '실크로드는 초원길·사막길·바닷길 등 여러 갈래의 교역로 네트워크를 통칭하는 말입니다. 이름도 19세기 학자가 붙였습니다.',
    source: 'https://en.wikipedia.org/wiki/Silk_Road' },

  { id: 'w37', statement: '율리우스 카이사르는 로마 제국의 초대 황제였다.',
    answer: false, difficulty: 2, category: 'people', region: 'world',
    explanation: '카이사르는 종신 독재관이었지 황제가 아니었습니다. 초대 황제는 그의 양자 아우구스투스입니다.',
    source: 'https://en.wikipedia.org/wiki/Augustus' },

  { id: 'w38', statement: '"악법도 법이다"는 소크라테스가 남긴 말로 기록되어 있다.',
    answer: false, difficulty: 2, category: 'people', region: 'world',
    explanation: '플라톤의 저작 어디에도 이 문장은 없습니다. 후대에 만들어져 소크라테스에게 붙은 말로, 한국에서는 일제강점기 법학 교육을 거치며 퍼졌습니다.',
    source: 'https://en.wikipedia.org/wiki/Socrates' },

  { id: 'w39', statement: '피사의 사탑은 완공된 뒤 지진 때문에 기울었다.',
    answer: false, difficulty: 2, category: 'culture', region: 'world',
    explanation: '무른 지반 탓에 건설 도중부터 기울기 시작했습니다. 기운 채로 200년에 걸쳐 완공된 건물입니다.',
    source: 'https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa' },

  { id: 'w40', statement: "'빅벤'은 원래 런던 시계탑 건물 전체를 가리키는 이름이다.",
    answer: false, difficulty: 2, category: 'culture', region: 'world',
    explanation: '빅벤은 탑 안의 큰 종의 애칭입니다. 탑의 공식 이름은 엘리자베스 타워입니다.',
    source: 'https://en.wikipedia.org/wiki/Big_Ben' },

  { id: 'w41', statement: "연쇄살인범 '잭 더 리퍼'는 결국 붙잡혀 처형되었다.",
    answer: false, difficulty: 2, category: 'events', region: 'world',
    explanation: '잭 더 리퍼는 끝내 검거되지 않았고 정체도 밝혀지지 않았습니다. 지금까지도 용의자 추정만 무성합니다.',
    source: 'https://en.wikipedia.org/wiki/Jack_the_Ripper' },

  { id: 'w42', statement: '고대 도시 폼페이를 묻어버린 것은 에트나 화산이다.',
    answer: false, difficulty: 1, category: 'events', region: 'world',
    explanation: '폼페이를 묻은 것은 서기 79년 베수비오 화산의 분화입니다. 에트나는 시칠리아에 있는 다른 화산입니다.',
    source: 'https://en.wikipedia.org/wiki/Mount_Vesuvius' },

  { id: 'w43', statement: '트로이는 신화 속 도시일 뿐, 실제 유적이 발견된 적은 없다.',
    answer: false, difficulty: 2, category: 'culture', region: 'world',
    explanation: '19세기에 지금의 튀르키예 히사를리크 언덕에서 트로이로 추정되는 유적이 발굴됐고, 유네스코 세계유산으로 등재되어 있습니다.',
    source: 'https://en.wikipedia.org/wiki/Troy' },

  { id: 'w44', statement: '트로이 목마 이야기는 호메로스의 일리아스에 자세히 나온다.',
    answer: false, difficulty: 3, category: 'culture', region: 'world',
    explanation: '일리아스는 목마가 등장하기 전에 끝납니다. 목마 이야기는 오디세이아에서 짧게 언급되고, 자세한 서술은 후대 서사시에 나옵니다.',
    source: 'https://en.wikipedia.org/wiki/Trojan_Horse' },

  { id: 'w45', statement: '뉴턴이 떨어지는 사과에 머리를 맞고 만유인력을 떠올렸다는 것은 본인 회고에 근거한다.',
    answer: false, difficulty: 2, category: 'science', region: 'world',
    explanation: '지인들이 전한 회고는 "사과가 떨어지는 것을 보고 생각에 잠겼다"입니다. 머리에 맞았다는 부분은 후대의 각색입니다.',
    source: 'https://en.wikipedia.org/wiki/Isaac_Newton' },

  { id: 'w46', statement: '구텐베르크는 인쇄술 덕분에 큰 부자가 되어 생을 마감했다.',
    answer: false, difficulty: 3, category: 'people', region: 'world',
    explanation: '구텐베르크는 동업자 푸스트와의 소송에서 져 인쇄소와 장비를 넘겨야 했습니다. 인쇄 혁명의 부는 다른 사람들이 가져갔습니다.',
    source: 'https://en.wikipedia.org/wiki/Johannes_Gutenberg' },

  { id: 'w47', statement: "1938년 라디오 드라마 '우주 전쟁'은 미국 전역에 실제 대규모 패닉을 일으켰다.",
    answer: false, difficulty: 3, category: 'culture', region: 'world',
    explanation: '전국적 패닉이 있었다는 이야기는 당시 신문들이 라디오를 견제하며 부풀린 것으로 봅니다. 청취자 자체가 많지 않았다는 연구가 정설에 가깝습니다.',
    source: 'https://en.wikipedia.org/wiki/The_War_of_the_Worlds_(1938_radio_drama)' },

  { id: 'w48', statement: "쿠바 미사일 위기 당시 미소 정상 간 직통 핫라인이 이미 운영되고 있었다.",
    answer: false, difficulty: 3, category: 'events', region: 'world',
    explanation: '핫라인은 그 위기를 겪고 나서야 필요성을 절감해 1963년에 설치됐습니다. 위기 당시엔 전보 해독에만 몇 시간이 걸렸습니다.',
    source: 'https://en.wikipedia.org/wiki/Moscow%E2%80%93Washington_hotline' },

  { id: 'w49', statement: '키보드의 쿼티(QWERTY) 배열은 컴퓨터 시대에 설계되었다.',
    answer: false, difficulty: 2, category: 'science', region: 'world',
    explanation: '쿼티는 1870년대 기계식 타자기를 위해 만들어진 배열입니다. 컴퓨터는 그 배열을 물려받았을 뿐입니다.',
    source: 'https://en.wikipedia.org/wiki/QWERTY' },

  { id: 'w50', statement: '링컨의 노예해방선언으로 미국의 모든 노예가 즉시 해방되었다.',
    answer: false, difficulty: 3, category: 'events', region: 'world',
    explanation: '1863년 선언의 적용 대상은 반란 중인 남부연합 지역뿐이었습니다. 노예제의 전면 폐지는 1865년 수정헌법 13조로 이뤄졌습니다.',
    source: 'https://en.wikipedia.org/wiki/Emancipation_Proclamation' },

  { id: 'w51', statement: '베를린 장벽은 2차 대전이 끝난 직후에 세워졌다.',
    answer: false, difficulty: 2, category: 'events', region: 'world',
    explanation: '장벽은 종전 16년 뒤인 1961년에 세워졌습니다. 그 전까지 베를린 시민들은 동서를 오갈 수 있었습니다.',
    source: 'https://en.wikipedia.org/wiki/Berlin_Wall' },

  { id: 'w52', statement: '체 게바라는 쿠바에서 태어났다.',
    answer: false, difficulty: 2, category: 'people', region: 'world',
    explanation: '체 게바라는 아르헨티나 태생의 의사였습니다. 쿠바 혁명에 합류하며 쿠바의 상징처럼 되었을 뿐입니다.',
    source: 'https://en.wikipedia.org/wiki/Che_Guevara' },

  { id: 'w53', statement: '히틀러는 독일에서 태어났다.',
    answer: false, difficulty: 2, category: 'people', region: 'world',
    explanation: '히틀러는 오스트리아 브라우나우 태생으로, 독일 국적을 얻은 것은 집권 직전인 1932년입니다.',
    source: 'https://en.wikipedia.org/wiki/Adolf_Hitler' },

  { id: 'w54', statement: '1차 대전의 도화선이 된 사라예보 사건에서 암살된 사람은 오스트리아 황제였다.',
    answer: false, difficulty: 2, category: 'war', region: 'world',
    explanation: '암살된 것은 황제가 아니라 제위 계승자였던 프란츠 페르디난트 대공 부부입니다. 황제 프란츠 요제프는 그 뒤로도 2년을 더 재위했습니다.',
    source: 'https://en.wikipedia.org/wiki/Assassination_of_Archduke_Franz_Ferdinand' },

  { id: 'w55', statement: '타이타닉의 구명보트가 부족했던 것은 당시 법 규정을 어긴 결과였다.',
    answer: false, difficulty: 3, category: 'events', region: 'world',
    explanation: '놀랍게도 당시 영국 규정 기준으로는 합법이었습니다. 규정이 배의 톤수 기준이라 초대형선 시대를 따라가지 못했고, 참사 후에야 바뀌었습니다.',
    source: 'https://en.wikipedia.org/wiki/Titanic' },

  { id: 'w56', statement: '마추픽추는 잉카인들이 스페인군을 피해 달아나 세운 도시다.',
    answer: false, difficulty: 3, category: 'culture', region: 'world',
    explanation: '마추픽추는 스페인이 오기 이전인 15세기 중반, 잉카 황제의 별궁으로 지어진 것으로 봅니다. 스페인군은 이곳을 발견하지 못했습니다.',
    source: 'https://en.wikipedia.org/wiki/Machu_Picchu' },

  { id: 'w57', statement: "투탕카멘 무덤을 발굴한 사람들은 '미라의 저주'로 대부분 곧 사망했다.",
    answer: false, difficulty: 2, category: 'culture', region: 'world',
    explanation: '발굴 관계자들의 수명을 조사한 연구에서 저주라 할 만한 통계적 이상은 없었습니다. 발굴 책임자 카터도 17년을 더 살았습니다.',
    source: 'https://en.wikipedia.org/wiki/Curse_of_the_pharaohs' },

  { id: 'w58', statement: '진시황릉의 병마용 병사들은 모두 똑같은 얼굴로 만들어졌다.',
    answer: false, difficulty: 2, category: 'culture', region: 'world',
    explanation: '수천 개의 병마용은 얼굴 생김새, 머리 모양, 표정이 제각기 다릅니다. 대량생산과 개별 마감을 결합해 만든 것으로 분석됩니다.',
    source: 'https://en.wikipedia.org/wiki/Terracotta_Army' },

  { id: 'w59', statement: '노벨상에 수학상이 없는 것은 노벨의 연인을 빼앗은 수학자 때문이라는 기록이 있다.',
    answer: false, difficulty: 2, category: 'science', region: 'world',
    explanation: '이 이야기를 뒷받침하는 기록은 없습니다. 노벨은 자신이 생각한 실용적 분야에 상을 만들었을 뿐이라는 것이 일반적인 설명입니다.',
    source: 'https://en.wikipedia.org/wiki/Nobel_Prize' },

  { id: 'w60', statement: '네안데르탈인은 현생 인류와 같은 시대에 산 적이 없다.',
    answer: false, difficulty: 2, category: 'science', region: 'world',
    explanation: '두 인류는 수만 년간 공존했고 혼혈도 있었습니다. 오늘날 많은 사람의 DNA에 네안데르탈인의 흔적이 남아 있습니다.',
    source: 'https://en.wikipedia.org/wiki/Neanderthal' },

  { id: 'w61', statement: '잔 다르크는 전투 중에 전사했다.',
    answer: false, difficulty: 1, category: 'people', region: 'world',
    explanation: '잔 다르크는 포로로 잡힌 뒤 종교재판에서 이단 판결을 받고 1431년 화형당했습니다. 25년 뒤 재심에서 무죄가 선고됐습니다.',
    source: 'https://en.wikipedia.org/wiki/Joan_of_Arc' },

  { id: 'w62', statement: '중세 유럽에서 향신료는 상한 고기의 맛을 감추는 용도로 쓰였다.',
    answer: false, difficulty: 3, category: 'life', region: 'world',
    explanation: '향신료를 살 수 있는 부유층은 신선한 고기도 살 수 있었습니다. 향신료는 부와 지위의 과시재였다는 것이 음식사 연구의 결론입니다.',
    source: 'https://en.wikipedia.org/wiki/Medieval_cuisine' },

  { id: 'w63', statement: '중세 유럽인들은 목욕을 거의 하지 않았다.',
    answer: false, difficulty: 2, category: 'life', region: 'world',
    explanation: '중세 도시에는 공중목욕탕이 성업했습니다. 목욕 기피는 오히려 페스트 이후 근세에 퍼진 풍조입니다.',
    source: 'https://en.wikipedia.org/wiki/Bathing' },

  { id: 'w64', statement: '중세 기사의 갑옷은 너무 무거워 혼자서는 일어설 수 없을 정도였다.',
    answer: false, difficulty: 2, category: 'war', region: 'world',
    explanation: '전신 판금 갑옷은 약 25kg으로 몸 전체에 무게가 분산돼, 입고 뛰고 구를 수 있었습니다. 현대 군장과 비슷한 무게입니다.',
    source: 'https://en.wikipedia.org/wiki/Plate_armour' },

  { id: 'w65', statement: '만리장성은 하나로 쭉 이어진 단일 성벽이다.',
    answer: false, difficulty: 2, category: 'culture', region: 'world',
    explanation: '만리장성은 여러 시대에 걸쳐 쌓인 성벽들의 집합으로, 구간이 끊기거나 겹치는 곳이 많습니다.',
    source: 'https://en.wikipedia.org/wiki/History_of_the_Great_Wall_of_China' },

  /* ─────────────── 세계사: 구라 같은데 진짜 ─────────────── */
  { id: 'o01', statement: '초창기 코카콜라에는 코카인 성분이 들어 있었다.',
    answer: true, difficulty: 2, category: 'science', region: 'world',
    explanation: '초기 제조법에는 코카 잎 추출물이 들어가 미량의 코카인이 포함돼 있었습니다. 1900년대 초에 제거됐습니다.',
    source: 'https://en.wikipedia.org/wiki/Coca-Cola' },

  { id: 'o02', statement: '옥스퍼드 대학은 아즈텍 제국보다 역사가 길다.',
    answer: true, difficulty: 2, category: 'culture', region: 'world',
    explanation: '옥스퍼드에서는 1096년부터 강의가 있었던 것으로 전해지고, 아즈텍의 수도 테노치티틀란은 1325년에 세워졌습니다.',
    source: 'https://en.wikipedia.org/wiki/University_of_Oxford' },

  { id: 'o03', statement: '클레오파트라가 살던 시대는 피라미드 건설보다 아이폰 출시에 시간상 더 가깝다.',
    answer: true, difficulty: 1, category: 'people', region: 'world',
    explanation: '기자 대피라미드는 기원전 2560년경, 클레오파트라는 기원전 30년 사망, 아이폰은 2007년. 클레오파트라에게 피라미드는 2500년 전 고대 유적이었습니다.',
    source: 'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza' },

  { id: 'o04', statement: '기자 대피라미드가 세워졌을 때 지구에는 아직 매머드가 살고 있었다.',
    answer: true, difficulty: 2, category: 'science', region: 'world',
    explanation: '북극해 브란겔섬의 매머드는 기원전 2000년경까지 생존했습니다. 피라미드(기원전 2560년경)가 먼저 세워졌습니다.',
    source: 'https://en.wikipedia.org/wiki/Woolly_mammoth' },

  { id: 'o05', statement: '프랑스는 1970년대까지 기요틴으로 사형을 집행했다.',
    answer: true, difficulty: 2, category: 'events', region: 'world',
    explanation: '프랑스의 마지막 기요틴 처형은 1977년으로, 아폴로 달 착륙과 스타워즈 개봉보다도 뒤의 일입니다.',
    source: 'https://en.wikipedia.org/wiki/Guillotine' },

  { id: 'o06', statement: '링컨과 다윈은 같은 해, 같은 날에 태어났다.',
    answer: true, difficulty: 3, category: 'people', region: 'world',
    explanation: '두 사람 모두 1809년 2월 12일생입니다. 한 명은 노예해방을, 한 명은 진화론을 남겼습니다.',
    source: 'https://en.wikipedia.org/wiki/Charles_Darwin' },

  { id: 'o07', statement: '1차 대전 크리스마스에 적군 병사들끼리 축구를 했다는 증언이 남아 있다.',
    answer: true, difficulty: 2, category: 'war', region: 'world',
    explanation: '1914년 성탄절, 서부전선 곳곳에서 비공식 휴전이 이뤄져 함께 캐럴을 부르고 축구를 했다는 병사들의 편지와 증언이 전해집니다.',
    source: 'https://en.wikipedia.org/wiki/Christmas_truce' },

  { id: 'o08', statement: '1차 대전에서 전서구(비둘기)가 무공 훈장을 받았다.',
    answer: true, difficulty: 2, category: 'war', region: 'world',
    explanation: "비둘기 '셰르 아미'는 부상 속에 메시지를 전달해 고립된 194명을 구했고, 프랑스 무공십자훈장을 받았습니다.",
    source: 'https://en.wikipedia.org/wiki/Cher_Ami' },

  { id: 'o09', statement: '2차 대전 폴란드군에는 포탄을 나르는 곰이 정식 계급을 달고 복무했다.',
    answer: true, difficulty: 1, category: 'war', region: 'world',
    explanation: "곰 '보이텍'은 급여 지급을 위해 정식 입대 처리되어 일병 계급을 받았고, 몬테카시노 전투에서 포탄을 날랐습니다.",
    source: 'https://en.wikipedia.org/wiki/Wojtek_(bear)' },

  { id: 'o10', statement: '미국과 영국이 돼지 한 마리 때문에 군사 대치를 벌인 적이 있다.',
    answer: true, difficulty: 2, category: 'war', region: 'world',
    explanation: "1859년 국경 섬에서 미국 농부가 영국 회사의 돼지를 사살한 일이 '돼지 전쟁'으로 번져 양국 군이 대치했습니다. 사망자는 돼지뿐이었습니다.",
    source: 'https://en.wikipedia.org/wiki/Pig_War_(1859)' },

  { id: 'o11', statement: '호주는 에뮤 떼를 상대로 군대를 투입했다가 사실상 패배했다.',
    answer: true, difficulty: 1, category: 'war', region: 'world',
    explanation: "1932년 기관총 부대까지 동원한 '에뮤 전쟁'에서 에뮤 개체수 감소에 실패해 군이 철수했습니다. 호주가 두고두고 놀림받는 사건입니다.",
    source: 'https://en.wikipedia.org/wiki/Emu_War' },

  { id: 'o12', statement: '런던에서 맥주 홍수가 일어나 사람이 사망한 적이 있다.',
    answer: true, difficulty: 2, category: 'events', region: 'world',
    explanation: '1814년 양조장의 거대한 통이 터지면서 맥주 수백만 리터가 빈민가를 덮쳐 8명이 숨졌습니다.',
    source: 'https://en.wikipedia.org/wiki/London_Beer_Flood' },

  { id: 'o13', statement: '보스턴에서는 당밀(시럽) 홍수로 21명이 사망했다.',
    answer: true, difficulty: 2, category: 'events', region: 'world',
    explanation: '1919년 저장 탱크가 터지며 당밀 파도가 시속 50km로 거리를 덮쳤습니다. 21명이 숨지고 건물이 부서졌습니다.',
    source: 'https://en.wikipedia.org/wiki/Great_Molasses_Flood' },

  { id: 'o14', statement: '카리브해 해적들에게는 부상 보상 규정까지 담긴 성문 규약이 있었다.',
    answer: true, difficulty: 3, category: 'culture', region: 'world',
    explanation: '해적선에는 전리품 분배, 부상 보상금, 선상 규율을 정한 규약이 있었고 선원들이 서명했습니다. 팔다리를 잃으면 보상금이 나왔습니다.',
    source: 'https://en.wikipedia.org/wiki/Pirate_code' },

  { id: 'o15', statement: '고대 로마의 거리에는 즉석 음식을 파는 가게가 흔했다.',
    answer: true, difficulty: 2, category: 'life', region: 'world',
    explanation: '테르모폴리움이라 불린 로마식 분식점 유적이 폼페이에서만 80곳 넘게 발굴됐습니다. 서민들은 집에 부엌이 없어 외식이 일상이었습니다.',
    source: 'https://en.wikipedia.org/wiki/Thermopolium' },

  { id: 'o16', statement: '고대 로마에서는 소변을 모아 세탁에 사용했다.',
    answer: true, difficulty: 2, category: 'life', region: 'world',
    explanation: '소변의 암모니아 성분이 세제 역할을 해 세탁업자들이 소변을 수거해 썼고, 베스파시아누스 황제는 여기에 세금까지 매겼습니다.',
    source: 'https://en.wikipedia.org/wiki/Pecunia_non_olet' },

  { id: 'o17', statement: '고대 올림픽 선수들은 알몸으로 경기에 나섰다.',
    answer: true, difficulty: 1, category: 'culture', region: 'world',
    explanation: '고대 그리스 올림픽 선수들은 나체로 경기했고, 이는 그리스 문화에서 자연스러운 일이었습니다.',
    source: 'https://en.wikipedia.org/wiki/Ancient_Olympic_Games' },

  { id: 'o18', statement: '기자의 대피라미드는 약 3800년 동안 세계에서 가장 높은 건축물이었다.',
    answer: true, difficulty: 3, category: 'culture', region: 'world',
    explanation: '기원전 2560년경 완공된 대피라미드의 기록은 1300년경 영국 링컨 대성당이 세워질 때까지 깨지지 않았습니다.',
    source: 'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza' },

  { id: 'o19', statement: '중세 유럽에서는 동물이 법정 재판에 회부되기도 했다.',
    answer: true, difficulty: 2, category: 'events', region: 'world',
    explanation: '돼지, 쥐, 심지어 곤충까지 정식 재판을 받은 기록이 남아 있습니다. 변호인이 선임된 경우도 있었습니다.',
    source: 'https://en.wikipedia.org/wiki/Animal_trial' },

  { id: 'o20', statement: '1666년 런던 대화재의 공식 기록상 사망자는 10명이 되지 않는다.',
    answer: true, difficulty: 3, category: 'events', region: 'world',
    explanation: '도시의 8할이 불탔지만 기록된 사망자는 한 자릿수였습니다. 실제 희생자는 더 많았으리라는 추정도 있지만, 기록은 그렇습니다.',
    source: 'https://en.wikipedia.org/wiki/Great_Fire_of_London' },

  { id: 'o21', statement: '종이, 화약, 나침반은 모두 중국에서 발명되었다.',
    answer: true, difficulty: 1, category: 'science', region: 'world',
    explanation: '인쇄술까지 합쳐 중국의 4대 발명으로 불립니다. 세 가지 모두 실크로드를 타고 서방으로 전해졌습니다.',
    source: 'https://en.wikipedia.org/wiki/Four_Great_Inventions' },

  { id: 'o22', statement: '인간보다 먼저 개가 지구 궤도를 돌았다.',
    answer: true, difficulty: 1, category: 'science', region: 'world',
    explanation: "1957년 소련의 개 '라이카'가 스푸트니크 2호를 타고 궤도에 올랐습니다. 가가린의 비행보다 4년 빠릅니다.",
    source: 'https://en.wikipedia.org/wiki/Laika' },

  { id: 'o23', statement: '아폴로 11호의 유도 컴퓨터는 요즘 스마트폰보다 성능이 한참 낮았다.',
    answer: true, difficulty: 1, category: 'science', region: 'world',
    explanation: '아폴로 유도 컴퓨터의 메모리는 킬로바이트 단위였습니다. 스마트폰은 그보다 수백만 배 강력한 성능으로 달에 못 가고 있습니다.',
    source: 'https://en.wikipedia.org/wiki/Apollo_Guidance_Computer' },

  { id: 'o24', statement: '칭기즈칸의 무덤은 아직 발견되지 않았다.',
    answer: true, difficulty: 2, category: 'people', region: 'world',
    explanation: '몽골의 전통대로 비밀리에 매장되어 800년 가까이 위치가 확인되지 않고 있습니다. 몽골에서는 발굴 시도 자체를 반기지 않습니다.',
    source: 'https://en.wikipedia.org/wiki/Genghis_Khan' },

  { id: 'o25', statement: '몽골 제국은 역사상 가장 넓은 연속된 영토를 가진 제국이었다.',
    answer: true, difficulty: 2, category: 'war', region: 'world',
    explanation: '전성기 몽골 제국은 하나로 이어진 영토 기준으로 역사상 최대였습니다. 더 넓었던 대영제국은 바다 건너 흩어져 있었습니다.',
    source: 'https://en.wikipedia.org/wiki/Mongol_Empire' },

  { id: 'o26', statement: '러시아의 표트르 대제는 수염에 세금을 매겼다.',
    answer: true, difficulty: 2, category: 'events', region: 'world',
    explanation: '서구화 정책의 하나로 1698년 수염세를 도입했습니다. 세금을 낸 사람은 납세 증표를 들고 다녀야 했습니다.',
    source: 'https://en.wikipedia.org/wiki/Beard_tax' },

  { id: 'o27', statement: '스위스 여성들은 1971년에야 연방 선거 투표권을 얻었다.',
    answer: true, difficulty: 3, category: 'events', region: 'world',
    explanation: '스위스의 연방 차원 여성 참정권은 1971년 국민투표로 도입됐습니다. 달 착륙보다 늦었습니다.',
    source: 'https://en.wikipedia.org/wiki/Women%27s_suffrage_in_Switzerland' },

  { id: 'o28', statement: '동로마(비잔틴) 제국은 콜럼버스의 항해 약 40년 전까지 존재했다.',
    answer: true, difficulty: 2, category: 'events', region: 'world',
    explanation: '콘스탄티노폴리스는 1453년에 함락됐고 콜럼버스의 항해는 1492년입니다. 로마의 후계 제국과 대항해시대는 거의 맞닿아 있습니다.',
    source: 'https://en.wikipedia.org/wiki/Fall_of_Constantinople' },

  { id: 'o29', statement: '오스만 제국은 제1차 세계대전에도 참전했다.',
    answer: true, difficulty: 2, category: 'events', region: 'world',
    explanation: '오스만 제국은 1차 대전에 동맹국으로 참전했고, 패전 후 1922년 해체됐습니다. 비행기와 탱크의 시대까지 존재한 제국입니다.',
    source: 'https://en.wikipedia.org/wiki/Ottoman_Empire' },

  { id: 'o30', statement: '미국의 금주법은 헌법 개정으로 시작해 헌법 개정으로 끝났다.',
    answer: true, difficulty: 3, category: 'events', region: 'world',
    explanation: '수정헌법 18조로 술을 금지했다가 13년 만에 수정헌법 21조로 폐지했습니다. 수정헌법이 다른 수정헌법을 폐지한 유일한 사례입니다.',
    source: 'https://en.wikipedia.org/wiki/Prohibition_in_the_United_States' },

  { id: 'o31', statement: "2차 대전 연합군에는 고무 탱크로 적을 속이는 '유령 부대'가 있었다.",
    answer: true, difficulty: 2, category: 'war', region: 'world',
    explanation: '미군 제23본부 특수부대는 공기주입식 가짜 탱크와 음향 장비로 가상의 군대를 연출해 독일군을 속였습니다. 배우와 디자이너들이 복무했습니다.',
    source: 'https://en.wikipedia.org/wiki/Ghost_Army' },

  { id: 'o32', statement: '2차 대전 때 일본의 풍선 폭탄이 태평양을 건너 미국 본토에서 인명 피해를 냈다.',
    answer: true, difficulty: 3, category: 'war', region: 'world',
    explanation: '제트기류에 실려 날아간 풍선 폭탄 중 하나가 1945년 오리건주에서 소풍 나온 민간인 6명의 목숨을 앗았습니다.',
    source: 'https://en.wikipedia.org/wiki/Fu-Go_balloon_bomb' },

  { id: 'o33', statement: '올림픽에는 한때 회화, 문학 같은 예술 종목 메달이 있었다.',
    answer: true, difficulty: 2, category: 'culture', region: 'world',
    explanation: '1912년부터 1948년까지 회화, 조각, 문학, 음악, 건축에 올림픽 메달이 수여됐습니다. 주제는 스포츠여야 했습니다.',
    source: 'https://en.wikipedia.org/wiki/Art_competitions_at_the_Summer_Olympics' },

  { id: 'o34', statement: '1904년 올림픽 마라톤에서 1위로 들어온 선수는 중간에 차를 탔다가 실격됐다.',
    answer: true, difficulty: 3, category: 'culture', region: 'world',
    explanation: '프레드 로츠는 경기 중 11km가량을 차로 이동한 것이 들통나 실격됐습니다. 이 대회 마라톤은 온갖 사건 사고로 악명 높습니다.',
    source: 'https://en.wikipedia.org/wiki/Fred_Lorz' },

  { id: 'o35', statement: '줄다리기는 한때 올림픽 정식 종목이었다.',
    answer: true, difficulty: 2, category: 'culture', region: 'world',
    explanation: '1900년부터 1920년까지 올림픽 정식 종목이었습니다. 지금도 부활 논의가 이따금 나옵니다.',
    source: 'https://en.wikipedia.org/wiki/Tug_of_war' },

  { id: 'o36', statement: '라이트 형제의 첫 동력 비행은 1분도 걸리지 않았다.',
    answer: true, difficulty: 2, category: 'science', region: 'world',
    explanation: '1903년 첫 비행은 12초, 약 36m였습니다. 여객기 날개 길이보다 짧은 거리를 난 것이 항공 시대의 시작이었습니다.',
    source: 'https://en.wikipedia.org/wiki/Wright_Flyer' },

  { id: 'o37', statement: '세계 최초의 지하철은 증기기관차로 운행됐다.',
    answer: true, difficulty: 3, category: 'science', region: 'world',
    explanation: '1863년 개통한 런던 지하철은 전기가 아니라 증기기관차가 끌었습니다. 터널 안은 연기로 자욱했다고 합니다.',
    source: 'https://en.wikipedia.org/wiki/London_Underground' },

  { id: 'o38', statement: '고대 그리스에는 동전을 넣으면 성수가 나오는 자판기가 있었다.',
    answer: true, difficulty: 3, category: 'science', region: 'world',
    explanation: '1세기 알렉산드리아의 헤론이 동전 무게로 물을 내보내는 성수 자판기를 설계한 기록이 남아 있습니다.',
    source: 'https://en.wikipedia.org/wiki/Vending_machine' },

  { id: 'o39', statement: '전기의자를 처음 고안한 사람은 치과의사였다.',
    answer: true, difficulty: 3, category: 'science', region: 'world',
    explanation: '미국 치과의사 앨프리드 사우스윅이 감전사를 목격한 뒤, 교수형보다 인도적이라며 전기의자를 고안했습니다.',
    source: 'https://en.wikipedia.org/wiki/Alfred_P._Southwick' },

  { id: 'o40', statement: '최초의 컴퓨터 프로그래머로 꼽히는 사람은 19세기 여성이다.',
    answer: true, difficulty: 2, category: 'science', region: 'world',
    explanation: '에이다 러브레이스는 1843년 배비지의 해석기관을 위한 알고리즘을 발표해 최초의 프로그래머로 널리 인정받습니다. 시인 바이런의 딸이기도 합니다.',
    source: 'https://en.wikipedia.org/wiki/Ada_Lovelace' },

  { id: 'o41', statement: '세계 최초의 장편소설로 자주 꼽히는 작품은 여성이 썼다.',
    answer: true, difficulty: 3, category: 'culture', region: 'world',
    explanation: '11세기 초 일본 궁정 여성 무라사키 시키부가 쓴 겐지 이야기가 최초의 장편소설로 자주 꼽힙니다.',
    source: 'https://en.wikipedia.org/wiki/The_Tale_of_Genji' },

  { id: 'o42', statement: '콜로세움에 물을 채워 모의 해전을 벌였다는 기록이 있다.',
    answer: true, difficulty: 3, category: 'culture', region: 'world',
    explanation: '고대 문헌에는 콜로세움 초기의 모의 해전(나우마키아) 기록이 있습니다. 로마인들은 인공 호수를 파서도 해전을 재현했습니다.',
    source: 'https://en.wikipedia.org/wiki/Naumachia' },

  { id: 'o43', statement: '이스터섬 모아이 석상 중에는 몸통이 땅속에 묻혀 있는 것들이 있다.',
    answer: true, difficulty: 2, category: 'culture', region: 'world',
    explanation: "'머리만 있는 석상'으로 알려진 모아이 상당수는 발굴 결과 땅속에 몸통이 이어져 있었습니다. 큰 것은 전체 높이가 10m에 달합니다.",
    source: 'https://en.wikipedia.org/wiki/Moai' },

  { id: 'o44', statement: '폼페이의 벽에는 로마 시민들이 쓴 일상 낙서가 그대로 남아 있다.',
    answer: true, difficulty: 3, category: 'life', region: 'world',
    explanation: '화산재에 봉인된 폼페이 벽에는 선거 홍보, 사랑 고백, 험담 같은 낙서 수천 건이 남아 로마 서민의 일상을 전해줍니다.',
    source: 'https://en.wikipedia.org/wiki/Pompeii' },

  { id: 'o45', statement: '1차 대전이 끝나갈 무렵, 전쟁 사망자보다 많은 목숨을 앗아간 독감이 유행했다.',
    answer: true, difficulty: 2, category: 'events', region: 'world',
    explanation: '1918년 유행한 스페인 독감의 사망자는 수천만 명으로 추정되며, 1차 대전 전사자 수를 훌쩍 넘습니다.',
    source: 'https://en.wikipedia.org/wiki/Spanish_flu' },

  { id: 'o46', statement: '하이힐은 원래 남성용 신발에서 출발했다.',
    answer: true, difficulty: 2, category: 'life', region: 'world',
    explanation: '하이힐은 페르시아 기병이 등자에 발을 고정하기 위해 신던 신발에서 유래해, 17세기 유럽 남성 귀족의 패션이 됐습니다.',
    source: 'https://en.wikipedia.org/wiki/High-heeled_shoe' },

  { id: 'o47', statement: '넥타이의 기원은 크로아티아 병사들의 목수건이다.',
    answer: true, difficulty: 3, category: 'life', region: 'world',
    explanation: "17세기 프랑스에 온 크로아티아 용병의 목수건이 유행하며 '크라바트'가 됐고, 이것이 넥타이의 기원입니다.",
    source: 'https://en.wikipedia.org/wiki/Necktie' },

  { id: 'o48', statement: '베토벤은 청력을 잃은 뒤에도 작곡을 계속했다.',
    answer: true, difficulty: 1, category: 'people', region: 'world',
    explanation: '베토벤은 청력이 악화된 후에도 작곡을 이어갔고, 대표작 교향곡 9번 합창은 거의 들리지 않는 상태에서 완성했습니다.',
    source: 'https://en.wikipedia.org/wiki/Ludwig_van_Beethoven' },

  { id: 'o49', statement: '마리 퀴리의 연구 노트는 지금도 방사능 때문에 특수 보관되어 있다.',
    answer: true, difficulty: 2, category: 'science', region: 'world',
    explanation: '퀴리의 노트와 유품은 라듐에 오염되어 납 상자에 보관되며, 열람하려면 보호 장비와 서약이 필요합니다.',
    source: 'https://en.wikipedia.org/wiki/Marie_Curie' },

  { id: 'o50', statement: '닌텐도는 조선 왕조가 아직 존재하던 시기에 창업한 회사다.',
    answer: true, difficulty: 2, category: 'science', region: 'world',
    explanation: '닌텐도는 1889년 교토에서 화투를 만드는 회사로 출발했습니다. 고종이 조선을 다스리던 때입니다.',
    source: 'https://en.wikipedia.org/wiki/Nintendo' },

  { id: 'o51', statement: '팩스의 원리는 전화보다 먼저 특허가 나왔다.',
    answer: true, difficulty: 3, category: 'science', region: 'world',
    explanation: '팩스의 원형은 1843년 특허를 받아, 벨의 전화(1876년)보다 30년 이상 앞섭니다.',
    source: 'https://en.wikipedia.org/wiki/Fax' },

  { id: 'o52', statement: '갈릴레이와 셰익스피어는 같은 해에 태어났다.',
    answer: true, difficulty: 3, category: 'people', region: 'world',
    explanation: '두 사람 모두 1564년생입니다. 근대 과학과 근대 문학의 거장이 같은 해에 태어났습니다.',
    source: 'https://en.wikipedia.org/wiki/Galileo_Galilei' },

  { id: 'o53', statement: '모나리자는 20세기 초 도난 사건을 계기로 세계적인 명성을 얻었다.',
    answer: true, difficulty: 3, category: 'culture', region: 'world',
    explanation: '1911년 루브르에서 도난당해 2년간 사라졌던 사건이 대서특필되면서, 모나리자는 세계에서 가장 유명한 그림이 됐습니다.',
    source: 'https://en.wikipedia.org/wiki/Mona_Lisa' },

  { id: 'o54', statement: '샌드위치라는 이름은 실존했던 샌드위치 백작에게서 나왔다.',
    answer: true, difficulty: 1, category: 'life', region: 'world',
    explanation: '18세기 영국의 4대 샌드위치 백작이 식사 시간을 아끼려 빵 사이에 고기를 끼워 먹은 데서 이름이 퍼진 것으로 전해집니다.',
    source: 'https://en.wikipedia.org/wiki/John_Montagu,_4th_Earl_of_Sandwich' },

  { id: 'o55', statement: '소련군은 2차 대전에서 폭탄을 두른 대전차견을 실제로 운용했다.',
    answer: true, difficulty: 3, category: 'war', region: 'world',
    explanation: '폭약을 지고 전차 밑으로 들어가도록 훈련된 개들이 실전 투입됐습니다. 아군 전차로 되돌아오는 등 문제가 많아 축소됐습니다.',
    source: 'https://en.wikipedia.org/wiki/Anti-tank_dog' },

  { id: 'o56', statement: '1876년 조선이 개항할 무렵, 런던에는 이미 지하철이 다니고 있었다.',
    answer: true, difficulty: 3, category: 'science', region: 'world',
    explanation: '런던 지하철은 1863년 개통으로 강화도조약(1876년)보다 13년 빠릅니다. 같은 시대라고 믿기 힘든 시차입니다.',
    source: 'https://en.wikipedia.org/wiki/London_Underground' },
];
