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
  { ko: "문장을 연결하는 조사", en: "Particles", subKo: "단어를 실제 문장으로 만드는 핵심", subEn: "Glue that turns words into sentences", stage: 3 }
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
  [14,"で","で","데","de","~에서 / ~으로","at / in (place of action), by","公園で走ります。","코-엔데 하시리마스","Kōen de hashirimasu.","공원에서 달립니다.","I run in the park.","で"]
];

window.ITEMS = window.ITEMS_RAW.map((r, i) => ({
  id: "w" + String(i + 1).padStart(2, "0"), no: i + 1,
  g: r[0], word: r[1], reading: r[2], kp: r[3], rm: r[4], ko: r[5], en: r[6],
  s: r[7], skp: r[8], srm: r[9], sko: r[10], sen: r[11], blank: r[12]
}));
