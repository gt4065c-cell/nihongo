// 일본어 일상회화 핵심 75단어 · 75문장 (15개 생활회화 그룹)
// [group, word, reading, 한글발음, romaji, 한국어뜻, English, 예문, 예문 한글발음, 예문 romaji, 예문 한국어, 예문 English, 빈칸(예문 속 핵심어)]
window.GROUPS = [
  { ko: "인사와 반응", en: "Greetings & Responses", subKo: "어떤 대화에서도 쓰는 표현", subEn: "Phrases for any conversation", stage: 1 },
  { ko: "사람과 관계", en: "People & Relationships", subKo: "자신과 주변 사람 이야기", subEn: "Talking about yourself and others", stage: 1 },
  { ko: "질문하는 말", en: "Question Words", subKo: "대화를 이어주는 질문 5개", subEn: "Five questions that keep talk going", stage: 1 },
  { ko: "이것·저것·여기·거기", en: "This · That · Here · There", subKo: "손짓과 함께 말하기 좋은 단어", subEn: "Words to use while pointing", stage: 1 },
  { ko: "시간과 날짜", en: "Time & Days", subKo: "언제 무엇을 하는지 말하기", subEn: "Saying when you do things", stage: 1 },
  { ko: "기본 동사", en: "Core Verbs", subKo: "일본어 문장의 뼈대", subEn: "The backbone of a sentence", stage: 2 },
  { ko: "먹고·마시고·보고·듣고·말하기", en: "Eat · Drink · See · Hear · Speak", subKo: "일상생활의 대표 행동", subEn: "Everyday actions", stage: 2 },
  { ko: "하루 일과", en: "Daily Routine", subKo: "아침부터 밤까지 내 생활 설명하기", subEn: "Describing your day", stage: 2 },
  { ko: "감정과 기분", en: "Feelings & Moods", subKo: "내 마음과 상태 표현하기", subEn: "Expressing how you feel", stage: 2 },
  { ko: "좋고·크고·작고·어려운 것", en: "Good · Big · Small · Hard", subKo: "사물이나 상황 묘사하기", subEn: "Describing things and situations", stage: 2 },
  { ko: "장소", en: "Places", subKo: "어디에 있는지, 어디로 가는지", subEn: "Where you are, where you go", stage: 3 },
  { ko: "음식과 음료", en: "Food & Drinks", subKo: "식당과 카페에서 말하기", subEn: "At restaurants and cafés", stage: 3 },
  { ko: "정도와 진행 상태", en: "Degree & Progress", subKo: "짧지만 매우 자주 쓰는 부사", subEn: "Short, very frequent adverbs", stage: 3 },
  { ko: "이해·능력·요청", en: "Understanding · Ability · Requests", subKo: "일본어가 막힐 때 유용한 말", subEn: "Lifesavers when you get stuck", stage: 3 },
  { ko: "문장을 연결하는 조사", en: "Particles", subKo: "단어를 실제 문장으로 만드는 핵심", subEn: "Glue that turns words into sentences", stage: 3 },

  { ko: "빈도와 시간 표현", en: "Frequency & Time", subKo: "얼마나 자주, 언제 하는지 말하기", subEn: "Saying how often and when", stage: 4 },
  { ko: "약속과 일정", en: "Appointments & Schedules", subKo: "약속을 잡고 일정 이야기하기", subEn: "Making plans and talking about schedules", stage: 4 },
  { ko: "위치와 방향", en: "Location & Directions", subKo: "길 안내와 위치 설명하기", subEn: "Giving directions and describing locations", stage: 4 },
  { ko: "교통과 이동", en: "Transport & Movement", subKo: "기차·버스·택시 이용하기", subEn: "Using trains, buses, and taxis", stage: 4 },
  { ko: "만남과 연락", en: "Meeting & Contact", subKo: "사람들과 만나고 연락하기", subEn: "Meeting people and staying in touch", stage: 4 },

  { ko: "맞장구와 대화 반응", en: "Conversation Responses", subKo: "상대방 말에 자연스럽게 반응하기", subEn: "Responding naturally in conversation", stage: 5 },
  { ko: "생각과 의견 표현", en: "Thoughts & Opinions", subKo: "자신의 의견을 전달하기", subEn: "Sharing your thoughts and opinions", stage: 5 },
  { ko: "부탁과 확인", en: "Requests & Confirmation", subKo: "다른 사람에게 정중하게 요청하기", subEn: "Making polite requests", stage: 5 },
  { ko: "희망과 계획 표현", en: "Hopes & Plans", subKo: "하고 싶은 일과 앞으로의 계획", subEn: "Expressing wishes and future plans", stage: 5 },
  { ko: "허락·의무·가능 표현", en: "Permission · Obligation · Ability", subKo: "해도 되는 일과 해야 하는 일 말하기", subEn: "What's allowed, required, or possible", stage: 5 },

  { ko: "이유와 문장 연결", en: "Reasons & Connectors", subKo: "짧은 문장을 이어서 길게 말하기", subEn: "Linking short sentences together", stage: 6 },
  { ko: "비교와 선택", en: "Comparison & Choice", subKo: "두 가지를 비교하거나 선호도 말하기", subEn: "Comparing and expressing preferences", stage: 6 },
  { ko: "쇼핑과 결제", en: "Shopping & Payment", subKo: "일본 여행에서 바로 사용하기", subEn: "Ready-to-use phrases while shopping", stage: 6 },
  { ko: "식당과 카페", en: "Restaurants & Cafés", subKo: "주문부터 계산까지", subEn: "From ordering to paying the bill", stage: 6 },
  { ko: "대학·업무·회의 표현", en: "University · Work · Meeting", subKo: "교수 업무와 강의 상황에서 활용하기", subEn: "For academic and professional settings", stage: 6 }
];

window.ITEMS_RAW = [
  [0,"はい","はい","하이","hai","네","yes","はい、そうです。","하이, 소-데스","Hai, sō desu.","네, 맞습니다.","Yes, that's right.","はい"],
  [0,"いいえ","いいえ","이이에","iie","아니요","no","いいえ、違います。","이이에, 치가이마스","Iie, chigaimasu.","아니요, 다릅니다.","No, that's not right.","いいえ"],
  [0,"ありがとう","ありがとう","아리가토-","arigatō","고마워","thank you","ありがとうございます。","아리가토- 고자이마스","Arigatō gozaimasu.","감사합니다.","Thank you very much.","ありがとう"],
  [0,"すみません","すみません","스미마센","sumimasen","실례합니다 / 죄송합니다","excuse me / sorry","すみません、ちょっといいですか。","스미마센, 촛토 이이데스카","Sumimasen, chotto ii desu ka?","실례합니다. 잠깐 괜찮으세요?","Excuse me, do you have a moment?","すみません"],
  [0,"お願いします","おねがいします","오네가이시마스","onegaishimasu","부탁합니다","please","よろしくお願いします。","요로시쿠 오네가이시마스","Yoroshiku onegaishimasu.","잘 부탁드립니다.","Nice to meet you. (I look forward to working with you.)","お願いします"],

  [1,"私","わたし","와타시","watashi","나 / 저","I / me","私は先生です。","와타시와 센세-데스","Watashi wa sensei desu.","저는 선생님입니다.","I am a teacher.","私"],
  [1,"友達","ともだち","토모다치","tomodachi","친구","friend","友達と走ります。","토모다치토 하시리마스","Tomodachi to hashirimasu.","친구와 달립니다.","I run with my friend.","友達"],
  [1,"家族","かぞく","카조쿠","kazoku","가족","family","家族は元気です。","카조쿠와 겐키데스","Kazoku wa genki desu.","가족은 잘 지냅니다.","My family is doing well.","家族"],
  [1,"先生","せんせい","센세-","sensei","선생님","teacher","先生、質問があります。","센세-, 시츠몬가 아리마스","Sensei, shitsumon ga arimasu.","선생님, 질문이 있습니다.","Teacher, I have a question.","先生"],
  [1,"みんな","みんな","민나","minna","모두","everyone","みんなで食べます。","민나데 타베마스","Minna de tabemasu.","모두 함께 먹습니다.","We all eat together.","みんな"],

  [2,"何","なに・なん","나니 / 난","nani / nan","무엇","what","これは何ですか。","코레와 난데스카","Kore wa nan desu ka?","이것은 무엇입니까?","What is this?","何"],
  [2,"誰","だれ","다레","dare","누구","who","あの人は誰ですか。","아노 히토와 다레데스카","Ano hito wa dare desu ka?","저 사람은 누구입니까?","Who is that person?","誰"],
  [2,"どこ","どこ","도코","doko","어디","where","トイレはどこですか。","토이레와 도코데스카","Toire wa doko desu ka?","화장실이 어디입니까?","Where is the restroom?","どこ"],
  [2,"いつ","いつ","이츠","itsu","언제","when","いつ行きますか。","이츠 이키마스카","Itsu ikimasu ka?","언제 갑니까?","When are you going?","いつ"],
  [2,"どう","どう","도-","dō","어떻게 / 어떠한가","how","これはどうですか。","코레와 도-데스카","Kore wa dō desu ka?","이것은 어떻습니까?","How about this?","どう"],

  [3,"これ","これ","코레","kore","이것","this (near me)","これが好きです。","코레가 스키데스","Kore ga suki desu.","이것이 좋습니다.","I like this.","これ"],
  [3,"それ","それ","소레","sore","그것","that (near you)","それはいいですね。","소레와 이이데스네","Sore wa ii desu ne.","그거 좋네요.","That's nice.","それ"],
  [3,"あれ","あれ","아레","are","저것","that (over there)","あれは学校です。","아레와 갓코-데스","Are wa gakkō desu.","저것은 학교입니다.","That over there is a school.","あれ"],
  [3,"ここ","ここ","코코","koko","여기","here","ここにいます。","코코니 이마스","Koko ni imasu.","여기에 있습니다.","I'm here.","ここ"],
  [3,"そこ","そこ","소코","soko","거기","there","そこにあります。","소코니 아리마스","Soko ni arimasu.","거기에 있습니다.","It's over there.","そこ"],

  [4,"今","いま","이마","ima","지금","now","今、勉強しています。","이마, 벤쿄-시테이마스","Ima, benkyō shite imasu.","지금 공부하고 있습니다.","I'm studying now.","今"],
  [4,"今日","きょう","쿄-","kyō","오늘","today","今日は忙しいです。","쿄-와 이소가시이데스","Kyō wa isogashii desu.","오늘은 바쁩니다.","I'm busy today.","今日"],
  [4,"明日","あした","아시타","ashita","내일","tomorrow","明日、行きます。","아시타, 이키마스","Ashita, ikimasu.","내일 갑니다.","I'll go tomorrow.","明日"],
  [4,"昨日","きのう","키노-","kinō","어제","yesterday","昨日、走りました。","키노-, 하시리마시타","Kinō, hashirimashita.","어제 달렸습니다.","I ran yesterday.","昨日"],
  [4,"毎日","まいにち","마이니치","mainichi","매일","every day","毎日、日本語を勉強します。","마이니치, 니혼고오 벤쿄-시마스","Mainichi, nihongo o benkyō shimasu.","매일 일본어를 공부합니다.","I study Japanese every day.","毎日"],

  [5,"する","する","스루","suru","하다","to do","仕事をします。","시고토오 시마스","Shigoto o shimasu.","일을 합니다.","I do my work.","します"],
  [5,"行く","いく","이쿠","iku","가다","to go","学校に行きます。","갓코-니 이키마스","Gakkō ni ikimasu.","학교에 갑니다.","I go to school.","行きます"],
  [5,"来る","くる","쿠루","kuru","오다","to come","友達が来ます。","토모다치가 키마스","Tomodachi ga kimasu.","친구가 옵니다.","My friend is coming.","来ます"],
  [5,"ある","ある","아루","aru","있다 (사물)","to exist (things)","時間があります。","지칸가 아리마스","Jikan ga arimasu.","시간이 있습니다.","I have time.","あります"],
  [5,"いる","いる","이루","iru","있다 (사람·동물)","to exist (people, animals)","先生がいます。","센세-가 이마스","Sensei ga imasu.","선생님이 계십니다.","The teacher is here.","います"],

  [6,"食べる","たべる","타베루","taberu","먹다","to eat","朝ごはんを食べます。","아사고한오 타베마스","Asagohan o tabemasu.","아침밥을 먹습니다.","I eat breakfast.","食べます"],
  [6,"飲む","のむ","노무","nomu","마시다","to drink","水を飲みます。","미즈오 노미마스","Mizu o nomimasu.","물을 마십니다.","I drink water.","飲みます"],
  [6,"見る","みる","미루","miru","보다","to see / to watch","映画を見ます。","에-가오 미마스","Eiga o mimasu.","영화를 봅니다.","I watch a movie.","見ます"],
  [6,"聞く","きく","키쿠","kiku","듣다 / 묻다","to listen / to ask","音楽を聞きます。","옹가쿠오 키키마스","Ongaku o kikimasu.","음악을 듣습니다.","I listen to music.","聞きます"],
  [6,"話す","はなす","하나스","hanasu","말하다","to speak","日本語を話します。","니혼고오 하나시마스","Nihongo o hanashimasu.","일본어를 말합니다.","I speak Japanese.","話します"],

  [7,"起きる","おきる","오키루","okiru","일어나다","to get up","六時に起きます。","로쿠지니 오키마스","Rokuji ni okimasu.","6시에 일어납니다.","I get up at six.","起きます"],
  [7,"寝る","ねる","네루","neru","자다","to sleep","十一時に寝ます。","주-이치지니 네마스","Jūichiji ni nemasu.","11시에 잡니다.","I go to bed at eleven.","寝ます"],
  [7,"働く","はたらく","하타라쿠","hataraku","일하다","to work","大学で働いています。","다이가쿠데 하타라이테이마스","Daigaku de hataraite imasu.","대학에서 일하고 있습니다.","I work at a university.","働いています"],
  [7,"休む","やすむ","야스무","yasumu","쉬다","to rest / take a day off","今日は休みます。","쿄-와 야스미마스","Kyō wa yasumimasu.","오늘은 쉽니다.","I'm taking today off.","休みます"],
  [7,"帰る","かえる","카에루","kaeru","돌아가다","to go home / return","家に帰ります。","이에니 카에리마스","Ie ni kaerimasu.","집으로 돌아갑니다.","I go home.","帰ります"],

  [8,"好き","すき","스키","suki","좋아함","to like","猫が好きです。","네코가 스키데스","Neko ga suki desu.","고양이를 좋아합니다.","I like cats.","好き"],
  [8,"楽しい","たのしい","타노시이","tanoshii","즐겁다","fun / enjoyable","今日は楽しいです。","쿄-와 타노시이데스","Kyō wa tanoshii desu.","오늘은 즐겁습니다.","Today is fun.","楽しい"],
  [8,"嬉しい","うれしい","우레시이","ureshii","기쁘다","happy / glad","とても嬉しいです。","토테모 우레시이데스","Totemo ureshii desu.","정말 기쁩니다.","I'm really happy.","嬉しい"],
  [8,"疲れる","つかれる","츠카레루","tsukareru","지치다","to get tired","ちょっと疲れました。","촛토 츠카레마시타","Chotto tsukaremashita.","조금 피곤해졌습니다.","I'm a little tired.","疲れました"],
  [8,"大丈夫","だいじょうぶ","다이조-부","daijōbu","괜찮음","okay / all right","大丈夫です。","다이조-부데스","Daijōbu desu.","괜찮습니다.","I'm okay.","大丈夫"],

  [9,"いい","いい","이이","ii","좋다","good","いいですね。","이이데스네","Ii desu ne.","좋네요.","That's good.","いい"],
  [9,"大きい","おおきい","오-키이","ōkii","크다","big","この家は大きいです。","코노 이에와 오-키이데스","Kono ie wa ōkii desu.","이 집은 큽니다.","This house is big.","大きい"],
  [9,"小さい","ちいさい","치이사이","chiisai","작다","small","このかばんは小さいです。","코노 카방와 치이사이데스","Kono kaban wa chiisai desu.","이 가방은 작습니다.","This bag is small.","小さい"],
  [9,"新しい","あたらしい","아타라시이","atarashii","새롭다","new","新しい車です。","아타라시이 쿠루마데스","Atarashii kuruma desu.","새 차입니다.","It's a new car.","新しい"],
  [9,"難しい","むずかしい","무즈카시이","muzukashii","어렵다","difficult","日本語は難しいです。","니혼고와 무즈카시이데스","Nihongo wa muzukashii desu.","일본어는 어렵습니다.","Japanese is difficult.","難しい"],

  [10,"家","いえ","이에","ie","집","house / home","家にいます。","이에니 이마스","Ie ni imasu.","집에 있습니다.","I'm at home.","家"],
  [10,"学校","がっこう","갓코-","gakkō","학교","school","学校に行きます。","갓코-니 이키마스","Gakkō ni ikimasu.","학교에 갑니다.","I go to school.","学校"],
  [10,"会社","かいしゃ","카이샤","kaisha","회사","company / office","会社で働きます。","카이샤데 하타라키마스","Kaisha de hatarakimasu.","회사에서 일합니다.","I work at a company.","会社"],
  [10,"駅","えき","에키","eki","역","station","駅はどこですか。","에키와 도코데스카","Eki wa doko desu ka?","역은 어디입니까?","Where is the station?","駅"],
  [10,"店","みせ","미세","mise","가게","shop / store","この店はいいですね。","코노 미세와 이이데스네","Kono mise wa ii desu ne.","이 가게 좋네요.","This shop is nice.","店"],

  [11,"水","みず","미즈","mizu","물","water","水をください。","미즈오 쿠다사이","Mizu o kudasai.","물 주세요.","Water, please.","水"],
  [11,"お茶","おちゃ","오차","ocha","차","tea","お茶を飲みます。","오차오 노미마스","Ocha o nomimasu.","차를 마십니다.","I drink tea.","お茶"],
  [11,"ご飯","ごはん","고한","gohan","밥 / 식사","rice / meal","ご飯を食べます。","고한오 타베마스","Gohan o tabemasu.","밥을 먹습니다.","I eat a meal.","ご飯"],
  [11,"パン","パン","팡","pan","빵","bread","パンが好きです。","팡가 스키데스","Pan ga suki desu.","빵을 좋아합니다.","I like bread.","パン"],
  [11,"コーヒー","コーヒー","코-히-","kōhī","커피","coffee","コーヒーをお願いします。","코-히-오 오네가이시마스","Kōhī o onegaishimasu.","커피 부탁합니다.","Coffee, please.","コーヒー"],

  [12,"ちょっと","ちょっと","촛토","chotto","조금 / 잠깐","a little / a moment","ちょっと待ってください。","촛토 맛테 쿠다사이","Chotto matte kudasai.","잠깐 기다려 주세요.","Please wait a moment.","ちょっと"],
  [12,"とても","とても","토테모","totemo","매우","very","とてもおいしいです。","토테모 오이시이데스","Totemo oishii desu.","아주 맛있습니다.","It's very delicious.","とても"],
  [12,"たくさん","たくさん","타쿠상","takusan","많이","a lot","たくさん食べました。","타쿠상 타베마시타","Takusan tabemashita.","많이 먹었습니다.","I ate a lot.","たくさん"],
  [12,"もう","もう","모-","mō","이미 / 다시 (문맥에 따라)","already / (one) more","もう一度お願いします。","모- 이치도 오네가이시마스","Mō ichido onegaishimasu.","한 번 더 부탁합니다.","One more time, please.","もう"],
  [12,"まだ","まだ","마다","mada","아직","not yet / still","まだわかりません。","마다 와카리마센","Mada wakarimasen.","아직 모르겠습니다.","I still don't understand.","まだ"],

  [13,"わかる","わかる","와카루","wakaru","알다 / 이해하다","to understand","よくわかりません。","요쿠 와카리마센","Yoku wakarimasen.","잘 모르겠습니다.","I don't really understand.","わかりません"],
  [13,"できる","できる","데키루","dekiru","할 수 있다","can do","日本語が少しできます。","니혼고가 스코시 데키마스","Nihongo ga sukoshi dekimasu.","일본어를 조금 할 수 있습니다.","I can speak a little Japanese.","できます"],
  [13,"欲しい","ほしい","호시이","hoshii","갖고 싶다","to want","時間が欲しいです。","지칸가 호시이데스","Jikan ga hoshii desu.","시간이 있었으면 좋겠습니다.","I wish I had more time.","欲しい"],
  [13,"ください","ください","쿠다사이","kudasai","주세요","please give me","それをください。","소레오 쿠다사이","Sore o kudasai.","그거 주세요.","That one, please.","ください"],
  [13,"ゆっくり","ゆっくり","윳쿠리","yukkuri","천천히","slowly","ゆっくり話してください。","윳쿠리 하나시테 쿠다사이","Yukkuri hanashite kudasai.","천천히 말씀해 주세요.","Please speak slowly.","ゆっくり"],

  [14,"は","は","와","wa","~은 / ~는 (주제)","topic marker (as for ~)","私は先生です。","와타시와 센세-데스","Watashi wa sensei desu.","저는 선생님입니다.","I am a teacher.","は"],
  [14,"が","が","가","ga","~이 / ~가","subject marker","猫が好きです。","네코가 스키데스","Neko ga suki desu.","고양이를 좋아합니다.","I like cats.","が"],
  [14,"を","を","오","o","~을 / ~를","object marker","水を飲みます。","미즈오 노미마스","Mizu o nomimasu.","물을 마십니다.","I drink water.","を"],
  [14,"に","に","니","ni","~에 / ~에게","at (time) / to (place, person)","七時に起きます。","시치지니 오키마스","Shichiji ni okimasu.","7시에 일어납니다.","I get up at seven.","に"],
  [14,"で","で","데","de","~에서 / ~으로","at / in (place of action), by","公園で走ります。","코-엔데 하시리마스","Kōen de hashirimasu.","공원에서 달립니다.","I run in the park.","で"],

  [15,"よく","よく","요쿠","yoku","자주","often","よく公園で走ります。","요쿠 코-엔데 하시리마스","Yoku kōen de hashirimasu.","공원에서 자주 달립니다.","I often run in the park.","よく"],
  [15,"ときどき","ときどき","토키도키","tokidoki","가끔","sometimes","ときどき映画を見ます。","토키도키 에이가오 미마스","Tokidoki eiga o mimasu.","가끔 영화를 봅니다.","I sometimes watch movies.","ときどき"],
  [15,"いつも","いつも","이츠모","itsumo","항상","always","いつも七時に起きます。","이츠모 시치지니 오키마스","Itsumo shichiji ni okimasu.","항상 7시에 일어납니다.","I always wake up at seven.","いつも"],
  [15,"さっき","さっき","삿키","sakki","아까","just now","さっき電話しました。","삿키 덴와 시마시타","Sakki denwa shimashita.","아까 전화했습니다.","I called just now.","さっき"],
  [15,"あとで","あとで","아토데","atode","나중에","later","あとで連絡します。","아토데 렌라쿠시마스","Atode renraku shimasu.","나중에 연락하겠습니다.","I'll contact you later.","あとで"],

  [16,"今週","こんしゅう","콘슈-","konshū","이번 주","this week","今週は忙しいです。","콘슈-와 이소가시이데스","Konshū wa isogashii desu.","이번 주는 바쁩니다.","I'm busy this week.","今週"],
  [16,"来週","らいしゅう","라이슈-","raishū","다음 주","next week","来週、会いましょう。","라이슈-, 아이마쇼-","Raishū, aimashō.","다음 주에 만납시다.","Let's meet next week.","来週"],
  [16,"週末","しゅうまつ","슈-마츠","shūmatsu","주말","weekend","週末は山に登ります。","슈-마츠와 야마니 노보리마스","Shūmatsu wa yama ni noborimasu.","주말에는 산에 오릅니다.","I climb mountains on weekends.","週末"],
  [16,"何時","なんじ","난지","nanji","몇 시","what time","何時に始まりますか。","난지니 하지마리마스카","Nanji ni hajimarimasu ka?","몇 시에 시작합니까?","What time does it start?","何時"],
  [16,"約束","やくそく","야쿠소쿠","yakusoku","약속","promise / appointment","約束を忘れません。","야쿠소쿠오 와스레마센","Yakusoku o wasuremasen.","약속을 잊지 않겠습니다.","I won't forget our appointment.","約束"],

  [17,"右","みぎ","미기","migi","오른쪽","right","右に曲がってください。","미기니 마갓테 쿠다사이","Migi ni magatte kudasai.","오른쪽으로 돌아주세요.","Please turn right.","右"],
  [17,"左","ひだり","히다리","hidari","왼쪽","left","左にあります。","히다리니 아리마스","Hidari ni arimasu.","왼쪽에 있습니다.","It's on the left.","左"],
  [17,"まっすぐ","まっすぐ","맛스구","massugu","똑바로","straight ahead","まっすぐ行ってください。","맛스구 잇테 쿠다사이","Massugu itte kudasai.","곧장 가주세요.","Please go straight.","まっすぐ"],
  [17,"近く","ちかく","치카쿠","chikaku","근처","nearby","駅の近くです。","에키노 치카쿠데스","Eki no chikaku desu.","역 근처입니다.","It's near the station.","近く"],
  [17,"向こう","むこう","무코-","mukō","건너편 / 저쪽","over there / across","道の向こうにあります。","미치노 무코-니 아리마스","Michi no mukō ni arimasu.","길 건너편에 있습니다.","It's across the street.","向こう"],

  [18,"乗り換える","のりかえる","노리카에루","norikaeru","갈아타다","to transfer","次の駅で乗り換えます。","츠기노 에키데 노리카에마스","Tsugi no eki de norikaemasu.","다음 역에서 갈아탑니다.","I transfer at the next station.","乗り換え"],
  [18,"降りる","おりる","오리루","oriru","내리다","to get off","ここで降ります。","코코데 오리마스","Koko de orimasu.","여기서 내립니다.","I get off here.","降り"],
  [18,"着く","つく","츠쿠","tsuku","도착하다","to arrive","三時に着きます。","산지니 츠키마스","Sanji ni tsukimasu.","3시에 도착합니다.","I'll arrive at three.","着き"],
  [18,"遅れる","おくれる","오쿠레루","okureru","늦다 / 지연되다","to be late","電車が遅れています。","덴샤가 오쿠레테이마스","Densha ga okurete imasu.","전철이 지연되고 있습니다.","The train is delayed.","遅れ"],
  [18,"間に合う","まにあう","마니아우","maniau","시간에 맞추다","to make it in time","会議に間に合います。","카이기니 마니아이마스","Kaigi ni maniau.","회의 시간에 맞출 수 있습니다.","I'll make it to the meeting in time.","間に合い"],

  [19,"会う","あう","아우","au","만나다","to meet","明日、友達に会います。","아시타, 토모다치니 아이마스","Ashita, tomodachi ni aimasu.","내일 친구를 만납니다.","I'll meet my friend tomorrow.","会い"],
  [19,"連絡する","れんらくする","렌라쿠스루","renraku suru","연락하다","to contact","あとで連絡してください。","아토데 렌라쿠시테 쿠다사이","Atode renraku shite kudasai.","나중에 연락해 주세요.","Please contact me later.","連絡"],
  [19,"電話する","でんわする","덴와스루","denwa suru","전화하다","to call","家族に電話します。","카조쿠니 덴와시마스","Kazoku ni denwa shimasu.","가족에게 전화합니다.","I call my family.","電話"],
  [19,"誘う","さそう","사소우","sasou","권하다 / 초대하다","to invite","友達を食事に誘います。","토모다치오 쇼쿠지니 사소이마스","Tomodachi o shokuji ni sasoimasu.","친구에게 식사하자고 제안합니다.","I invite my friend to dinner.","誘い"],
  [19,"待つ","まつ","마츠","matsu","기다리다","to wait","ここで待っています。","코코데 맛테이마스","Koko de matte imasu.","여기서 기다리고 있습니다.","I'm waiting here.","待っ"],

  [20,"お久しぶりです","おひさしぶりです","오히사시부리데스","ohisashiburi desu","오랜만입니다","long time no see","お久しぶりです。お元気ですか。","오히사시부리데스. 오겡키데스카","Ohisashiburi desu. Ogenki desu ka?","오랜만입니다. 잘 지내셨어요?","Long time no see. How have you been?","お久しぶり"],
  [20,"お元気ですか","おげんきですか","오겡키데스카","ogenki desu ka","잘 지내세요?","how are you?","はい、元気です。","하이, 겡키데스","Hai, genki desu.","네, 잘 지냅니다.","Yes, I'm doing well.","元気"],
  [20,"なるほど","なるほど","나루호도","naruhodo","그렇군요","I see / I understand","なるほど、わかりました。","나루호도, 와카리마시타","Naruhodo, wakarimashita.","그렇군요. 알겠습니다.","I see. I understand.","なるほど"],
  [20,"そうですね","そうですね","소-데스네","sō desu ne","그렇네요","that's right / indeed","そうですね。私もそう思います。","소-데스네. 와타시모 소- 오모이마스","Sō desu ne. Watashi mo sō omoimasu.","그렇네요. 저도 그렇게 생각합니다.","That's right. I think so too.","そうですね"],
  [20,"もちろん","もちろん","모치론","mochiron","물론","of course","もちろん、大丈夫です。","모치론, 다이죠-부데스","Mochiron, daijōbu desu.","물론이죠. 괜찮습니다.","Of course, it's fine.","もちろん"],

  [21,"思う","おもう","오모우","omou","생각하다","to think","いいと思います。","이-토 오모이마스","Ii to omoimasu.","좋다고 생각합니다.","I think it's good.","思い"],
  [21,"考える","かんがえる","캉가에루","kangaeru","생각해 보다","to consider","少し考えます。","스코시 캉가에마스","Sukoshi kangaemasu.","조금 생각해 보겠습니다.","I'll think about it a little.","考え"],
  [21,"賛成","さんせい","산세-","sansei","찬성","agree","その意見に賛成です。","소노 이켄니 산세-데스","Sono iken ni sansei desu.","그 의견에 찬성합니다.","I agree with that opinion.","賛成"],
  [21,"反対","はんたい","한타이","hantai","반대","disagree","私は反対です。","와타시와 한타이데스","Watashi wa hantai desu.","저는 반대합니다.","I disagree.","反対"],
  [21,"たぶん","たぶん","타분","tabun","아마","probably","たぶん大丈夫です。","타분 다이죠-부데스","Tabun daijōbu desu.","아마 괜찮을 겁니다.","It's probably fine.","たぶん"],

  [22,"手伝う","てつだう","테츠다우","tetsudau","돕다","to help","手伝ってください。","테츠닷테 쿠다사이","Tetsudatte kudasai.","도와주세요.","Please help me.","手伝っ"],
  [22,"教える","おしえる","오시에루","oshieru","가르치다 / 알려주다","to teach / to tell","もう一度教えてください。","모- 이치도 오시에테 쿠다사이","Mō ichido oshiete kudasai.","한 번 더 알려주세요.","Please tell me one more time.","教え"],
  [22,"見せる","みせる","미세루","miseru","보여주다","to show","これを見せてください。","코레오 미세테 쿠다사이","Kore o misete kudasai.","이것을 보여주세요.","Please show me this.","見せ"],
  [22,"説明する","せつめいする","세츠메-스루","setsumei suru","설명하다","to explain","ゆっくり説明してください。","윳쿠리 세츠메-시테 쿠다사이","Yukkuri setsumei shite kudasai.","천천히 설명해 주세요.","Please explain slowly.","説明"],
  [22,"確認する","かくにんする","카쿠닌스루","kakunin suru","확인하다","to confirm","予定を確認します。","요테-오 카쿠닌시마스","Yotei o kakunin shimasu.","일정을 확인하겠습니다.","I'll confirm the schedule.","確認"],

  [23,"～たいです","～たいです","타이데스","~tai desu","~하고 싶습니다","want to ~","日本に行きたいです。","니혼니 이키타이데스","Nihon ni ikitai desu.","일본에 가고 싶습니다.","I want to go to Japan.","たい"],
  [23,"～つもりです","～つもりです","츠모리데스","~tsumori desu","~할 생각입니다","intend to ~","来年、日本へ旅行するつもりです。","라이넨, 니혼에 료코-스루 츠모리데스","Rainen, Nihon e ryokō suru tsumori desu.","내년에 일본으로 여행할 생각입니다.","I intend to travel to Japan next year.","つもり"],
  [23,"～予定です","～よていです","요테-데스","~yotei desu","~할 예정입니다","plan to ~","明日、会議に出る予定です。","아시타, 카이기니 데루 요테-데스","Ashita, kaigi ni deru yotei desu.","내일 회의에 참석할 예정입니다.","I plan to attend the meeting tomorrow.","予定"],
  [23,"～てみたいです","～てみたいです","테미타이데스","~te mitai desu","~해 보고 싶습니다","want to try ~","日本料理を食べてみたいです。","니혼료-리오 타베테미타이데스","Nihon ryōri o tabete mitai desu.","일본 요리를 먹어보고 싶습니다.","I want to try Japanese cuisine.","てみたい"],
  [23,"～ことにしました","～ことにしました","코토니 시마시타","~koto ni shimashita","~하기로 했습니다","decided to ~","毎朝走ることにしました。","마이아사 하시루코토니 시마시타","Maiasa hashiru koto ni shimashita.","매일 아침 달리기로 했습니다.","I decided to run every morning.","ことにしました"],

  [24,"～てもいいですか","～てもいいですか","테모 이이데스카","~te mo ii desu ka","~해도 됩니까?","is it okay to ~?","ここに座ってもいいですか。","코코니 스왓테모 이이데스카","Koko ni suwatte mo ii desu ka?","여기에 앉아도 될까요?","Is it okay to sit here?","てもいい"],
  [24,"～てはいけません","～てはいけません","테와 이케마센","~te wa ikemasen","~하면 안 됩니다","must not ~","ここで写真を撮ってはいけません。","코코데 샤신오 톳테와 이케마센","Koko de shashin o totte wa ikemasen.","여기서 사진을 찍으면 안 됩니다.","You must not take photos here.","てはいけません"],
  [24,"～なくてもいいです","～なくてもいいです","나쿠테모 이이데스","~nakute mo ii desu","~안 해도 됩니다","don't have to ~","今日は来なくてもいいです。","쿄-와 코나쿠테모 이이데스","Kyō wa konakute mo ii desu.","오늘은 오지 않아도 됩니다.","You don't have to come today.","なくてもいい"],
  [24,"～なければなりません","～なければなりません","나케레바 나리마센","~nakereba narimasen","~해야 합니다","must ~","レポートを明日までに出さなければなりません。","레포-토오 아시타마데니 다사나케레바 나리마센","Repōto o ashita made ni dasanakereba narimasen.","보고서를 내일까지 제출해야 합니다.","I must submit the report by tomorrow.","なければなりません"],
  [24,"～ことができます","～ことができます","코토가 데키마스","~koto ga dekimasu","~할 수 있습니다","can ~ / be able to ~","日本語で説明することができます。","니혼고데 세츠메-스루 코토가 데키마스","Nihongo de setsumei suru koto ga dekimasu.","일본어로 설명할 수 있습니다.","I can explain in Japanese.","ことができます"],

  [25,"～から","～から","카라","~kara","~라서 / ~이므로","because ~ / so ~","今日は忙しいから、行けません。","쿄-와 이소가시이카라, 이케마센","Kyō wa isogashii kara, ikemasen.","오늘은 바빠서 갈 수 없습니다.","I can't go because I'm busy today.","から"],
  [25,"～ので","～ので","노데","~node","~이므로 / ~해서","since ~ / as ~","雨が降っているので、家にいます。","아메가 훗테이루노데, 이에니 이마스","Ame ga futte iru node, ie ni imasu.","비가 오고 있어서 집에 있습니다.","I'm home since it's raining.","ので"],
  [25,"～けど","～けど","케도","~kedo","~지만","but ~ / though ~","日本語は難しいけど、楽しいです。","니혼고와 무즈카시이케도, 타노시이데스","Nihongo wa muzukashii kedo, tanoshii desu.","일본어는 어렵지만 재미있습니다.","Japanese is hard but fun.","けど"],
  [25,"～し","～し","시","~shi","~기도 하고","and also ~ (listing reasons)","この店は安いし、おいしいです。","코노 미세와 야스이시, 오이시이데스","Kono mise wa yasui shi, oishii desu.","이 가게는 저렴하고 맛도 좋습니다.","This shop is cheap and also delicious.","し"],
  [25,"それで","それで","소레데","sorede","그래서","so / therefore","電車が遅れました。それで、遅刻しました。","덴샤가 오쿠레마시타. 소레데, 치코쿠시마시타","Densha ga okuremashita. Sorede, chikoku shimashita.","전철이 늦었습니다. 그래서 지각했습니다.","The train was late. So I was tardy.","それで"],

  [26,"どちら","どちら","도치라","dochira","어느 쪽","which one (of two)","どちらがいいですか。","도치라가 이이데스카","Dochira ga ii desu ka?","어느 쪽이 좋습니까?","Which one is better?","どちら"],
  [26,"～のほうが","～のほうが","노 호-가","~no hō ga","~쪽이 더","~ is more ~","こっちのほうが安いです。","콧치노 호-가 야스이데스","Kocchi no hō ga yasui desu.","이쪽이 더 저렴합니다.","This one is cheaper.","のほう"],
  [26,"いちばん","いちばん","이치방","ichiban","가장 / 제일","the most / number one","これがいちばん好きです。","코레가 이치방 스키데스","Kore ga ichiban suki desu.","이것을 가장 좋아합니다.","I like this one the most.","いちばん"],
  [26,"同じ","おなじ","오나지","onaji","같음","same","私も同じです。","와타시모 오나지데스","Watashi mo onaji desu.","저도 같습니다.","I'm the same.","同じ"],
  [26,"違い","ちがい","치가이","chigai","차이","difference","この二つの違いは何ですか。","코노 후타츠노 치가이와 난데스카","Kono futatsu no chigai wa nan desu ka?","이 두 가지의 차이는 무엇입니까?","What is the difference between these two?","違い"],

  [27,"値段","ねだん","네단","nedan","가격","price","この商品の値段を教えてください。","코노 쇼-힝노 네단오 오시에테 쿠다사이","Kono shōhin no nedan o oshiete kudasai.","이 상품의 가격을 알려주세요.","Please tell me the price of this item.","値段"],
  [27,"いくら","いくら","이쿠라","ikura","얼마","how much","これはいくらですか。","코레와 이쿠라데스카","Kore wa ikura desu ka?","이것은 얼마입니까?","How much is this?","いくら"],
  [27,"現金","げんきん","겐킨","genkin","현금","cash","現金で払います。","겐킨데 하라이마스","Genkin de haraimasu.","현금으로 계산하겠습니다.","I'll pay in cash.","現金"],
  [27,"カード","カード","카-도","kādo","카드","card","カードで払えますか。","카-도데 하라에마스카","Kādo de haraemasu ka?","카드로 계산할 수 있습니까?","Can I pay by card?","カード"],
  [27,"試着","しちゃく","시차쿠","shichaku","입어보기","trying on clothes","試着してもいいですか。","시차쿠시테모 이이데스카","Shichaku shite mo ii desu ka?","입어봐도 될까요?","May I try this on?","試着"],

  [28,"メニュー","メニュー","메뉴-","menyū","메뉴","menu","メニューを見せてください。","메뉴-오 미세테 쿠다사이","Menyū o misete kudasai.","메뉴를 보여주세요.","Please show me the menu.","メニュー"],
  [28,"おすすめ","おすすめ","오스스메","osusume","추천","recommendation","おすすめは何ですか。","오스스메와 난데스카","Osusume wa nan desu ka?","추천 메뉴는 무엇입니까?","What do you recommend?","おすすめ"],
  [28,"注文","ちゅうもん","츄-몬","chūmon","주문","order","これを注文します。","코레오 츄-몬시마스","Kore o chūmon shimasu.","이것을 주문하겠습니다.","I'll order this.","注文"],
  [28,"おかわり","おかわり","오카와리","okawari","추가 한 잔 / 리필","refill","お水のおかわりをお願いします。","오미즈노 오카와리오 오네가이시마스","Omizu no okawari o onegaishimasu.","물 한 잔 더 부탁합니다.","Please refill my water.","おかわり"],
  [28,"お会計","おかいけい","오카이케-","okaikei","계산","bill / check","お会計をお願いします。","오카이케-오 오네가이시마스","Okaikei o onegaishimasu.","계산 부탁드립니다.","Check, please.","お会計"],

  [29,"会議","かいぎ","카이기","kaigi","회의","meeting","会議は三時からです。","카이기와 산지카라데스","Kaigi wa sanji kara desu.","회의는 3시부터입니다.","The meeting starts at three.","会議"],
  [29,"資料","しりょう","시료-","shiryō","자료","materials / documents","資料を送ります。","시료-오 오쿠리마스","Shiryō o okurimasu.","자료를 보내겠습니다.","I'll send the materials.","資料"],
  [29,"締め切り","しめきり","시메키리","shimekiri","마감","deadline","締め切りは金曜日です。","시메키리와 킨요-비데스","Shimekiri wa kin'yōbi desu.","마감은 금요일입니다.","The deadline is Friday.","締め切り"],
  [29,"質問","しつもん","시츠몬","shitsumon","질문","question","質問してもいいですか。","시츠몬시테모 이이데스카","Shitsumon shite mo ii desu ka?","질문해도 될까요?","May I ask a question?","質問"],
  [29,"提出","ていしゅつ","테-슈츠","teishutsu","제출","submission","レポートを提出しました。","레포-토오 테-슈츠 시마시타","Repōto o teishutsu shimashita.","보고서를 제출했습니다.","I submitted the report.","提出"]
];

window.ITEMS = window.ITEMS_RAW.map((r, i) => ({
  id: "w" + String(i + 1).padStart(2, "0"), no: i + 1,
  g: r[0], word: r[1], reading: r[2], kp: r[3], rm: r[4], ko: r[5], en: r[6],
  s: r[7], skp: r[8], srm: r[9], sko: r[10], sen: r[11], blank: r[12]
}));
