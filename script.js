document.getElementById('survey-form').style.display = 'none';
const quiz = [
  {
    question: 'ドラゴンボールの作者でもあるドラクエシリーズのキャラクター、モンスターデザインを担当している人物は？',
    answers: [
      '西尾維新',
      '鳥山明',
      '小畑健',
      '岡崎武士'
    ],
    correct: '鳥山明'
  },
  {
    question: 'ドラクエシリーズのゲームBGMを担当している作曲家といえば？',
    answers: [
      '浜渦正志',
      '崎元仁',
      '植松伸夫',
      'すぎやまこういち'
    ],
    correct: 'すぎやまこういち'
  },
  {
    question: 'ドラクエ,FF,ポケモンの共通するゲームのジャンルといえば？',
    answers: [
      'アクションゲーム',
      'シューティングゲーム',
      'シミュレーションゲーム',
      'ロールプレイングゲーム'
    ],
    correct: 'ロールプレイングゲーム'
  },
  {
    question: 'ドラクエ世界のお金の単位は？',
    answers: [
      'シルバー',
      'G(ゴールド)',
      'ルピー',
      'グリーン'
    ],
    correct: 'G(ゴールド)'
  },
  {
    question: '宿屋に泊まるとどうなるか？',
    answers: [
      'ステータスが上昇する',
      '呪いが回復する',
      '死亡したキャラクターが復活する',
      'HPとMPが全回復する'
    ],
    correct: 'HPとMPが全回復する'
  },
  {
    question: '2003年までアメリカでは商標上の問題でドラゴンクエストではなく何としてリリースしていたか？',
    answers: [
      'Mystic Quest',
      'Fantasy Adventure',
      'Dragon Warrior',
      'Monster Quest'
    ],
    correct: 'Dragon Warrior'
  },
  {
    question: 'ドラクエシリーズでおなじみの旅の仲間がいる酒場といえば？',
    answers: [
      'ルイーダの酒場',
      'カジノ・モナコ',
      'ロイヤル・カンパニー',
      'カルトガーデン'
    ],
    correct: 'ルイーダの酒場'
  },
  {
    question: 'ドラクエシリーズでおなじみの転職をすることができる神殿といえば？',
    answers: [
      'アーク神殿',
      'セレスティア神殿',
      'ダーマ神殿',
      'グラム神殿'
    ],
    correct: 'ダーマ神殿'
  },
  {
    question: 'ドラクエ1,2,3をまとめて何シリーズと呼んでいるか？',
    answers: [
      '勇者シリーズ',
      '剣と魔法の冒険シリーズ',
      'エルフとの約束シリーズ',
      'ロトシリーズ'
    ],
    correct: 'ロトシリーズ'
  },
  {
    question: 'ドラクエ4,5,6をまとめて何シリーズと呼んでいるか？',
    answers: [
      '幻獣シリーズ',
      '神話シリーズ',
      '天空シリーズ',
      '魔法の系譜シリーズ'
    ],
    correct: '天空シリーズ'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByClassName('quiz-button');
const buttonLength = $button.length;

//  クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  quizIndex++;
  
  if (quizIndex < quizLength) {
    // 問題数がまだあるればこちら実行
    setupQuiz();
  } else {
    // 問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！下記のアンケートにご協力ください');
    document.getElementById('survey-form').style.display = 'block';
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}