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
    correct: '鳥山明',
    explanation: `
    ✖-西尾維新: 小説家でドラクエとは無関係。
    ◯-鳥山明: ドラゴンボール作者でドラクエモンスターデザインも。
    ✖-小畑健: 漫画家でドラクエとは無関係。
    ✖-岡崎武士: ゲームデザイナーでドラクエとは無関係。`
  },
  {
    question: 'ドラクエシリーズのゲームBGMを担当している作曲家といえば？',
    answers: [
      '浜渦正志',
      '崎元仁',
      '植松伸夫',
      'すぎやまこういち'
    ],
    correct: 'すぎやまこういち',
    explanation: `
    ✖-浜渦正志:ファイナルファンタジーシリーズの作曲家で、ドラクエとは異なる。
    ✖-崎元仁:モンスターハンターシリーズの作曲家で、ドラクエとは無関係。
    ✖-植松伸夫:ファイナルファンタジーシリーズの作曲家で、ドラクエとは異なる。
    ◯-すぎやまこういち:ドラクエシリーズの生みの親で、数々の名曲の作曲家。`
  },
  {
    question: 'ドラクエ,FF,ポケモンの共通するゲームのジャンルといえば？',
    answers: [
      'アクションゲーム',
      'シューティングゲーム',
      'シミュレーションゲーム',
      'ロールプレイングゲーム'
    ],
    correct: 'ロールプレイングゲーム',
    explanation: `
    ✖-アクションゲーム:プレイヤーの反射神経が重要なゲーム。
    ✖-シューティングゲーム:敵を撃破することが主要な要素。
    ✖-シミュレーションゲーム:戦略やシミュレーションが要素。
    ◯-ロールプレイングゲーム:物語に沿って主人公を成長させるゲーム。`
  },
  {
    question: 'ドラクエ世界のお金の単位は？',
    answers: [
      'シルバー',
      'G(ゴールド)',
      'ルピー',
      'グリーン',
    ],
    correct: 'G(ゴールド)',
    explanation: `
    ✖-シルバー:ドラクエでは使用されていないお金の単位。
    ◯-G(ゴールド):ドラクエでの通貨単位。冒険者が獲得するお金の単位。
    ✖-ルピー:ゼルダの伝説シリーズの通貨単位で、ドラクエとは異なる。
    ✖-グリーン:ドラクエでは使用されていないお金の単位。`
  },
  {
    question: '宿屋に泊まるとどうなるか？',
    answers: [
      'ステータスが上昇する',
      '呪いが回復する',
      '死亡したキャラクターが復活する',
      'HPとMPが全回復する'
    ],
    correct: 'HPとMPが全回復する',
    explanation: `
    ✖-ステータスが上昇する:宿屋ではステータスの上昇は行われない。
    ✖-呪いが回復する:宿屋では呪いの回復は行われない。
    ✖-死亡したキャラクターが復活する:宿屋では死亡したキャラの復活は行われない。
    ◯-HPとMPが全回復する:宿屋に泊まることでHPとMPが完全に回復する。`
  },
  {
    question: '2003年までアメリカでは商標上の問題でドラゴンクエストではなく何としてリリースしていたか？',
    answers: [
      'Mystic Quest',
      'Fantasy Adventure',
      'Dragon Warrior',
      'Monster Quest'
    ],
    correct: 'Dragon Warrior',
    explanation: `
      ✖-Mystic Quest:アメリカでは使用されていない別のゲームのタイトル。
      ✖-Fantasy Adventure:アメリカでは使用されていない別のゲームのタイトル。
      ◯-Dragon Warrior:アメリカでのドラゴンクエストの旧称。商標上の問題により変更。
      ✖-Monster Quest:アメリカでは使用されていない別のゲームのタイトル。`
  },
  {
    question: 'ドラクエシリーズでおなじみの旅の仲間がいる酒場といえば？',
    answers: [
      'ルイーダの酒場',
      'カジノ・モナコ',
      'ロイヤル・カンパニー',
      'カルトガーデン'
    ],
    correct: 'ルイーダの酒場',
    explanation: `
    ◯-ルイーダの酒場:ドラクエシリーズで冒険者が出会う酒場で、仲間を募る場所。
    ✖-カジノ・モナコ:ドラクエにおいてはカジノが登場するが、仲間募集はない。
    ✖-ロイヤル・カンパニー:ドラクエにおいては存在しない場所。
    ✖-カルトガーデン:ドラクエにおいては存在しない場所。`
  },
  {
    question: 'ドラクエシリーズでおなじみの転職をすることができる神殿といえば？',
    answers: [
      'ハローワーク神殿',
      'セレスティア神殿',
      'ダーマ神殿',
      'グラム神殿'
    ],
    correct: 'ダーマ神殿',
    explanation: `
    ✖-ハローワーク神殿:ドラクエにおいては存在しない場所。
    ✖-セレスティア神殿:ドラクエにおいては存在しない場所。
    ◯-ダーマ神殿:ドラクエで転職を行う神殿。冒険者が新しい職業に転職できる。
    ✖-グラム神殿:ドラクエにおいては存在しない場所。`
  },
  {
    question: 'ドラクエ1,2,3をまとめて何シリーズと呼んでいるか？',
    answers: [
      '勇者シリーズ',
      '剣と魔法の冒険シリーズ',
      'エルフとの約束シリーズ',
      'ロトシリーズ'
    ],
    correct: 'ロトシリーズ',
    explanation: `
    ✖-勇者シリーズ:ドラクエにおいては使用されていない別の呼び名。
    ✖-剣と魔法の冒険シリーズ:ドラクエにおいては使用されていない別の呼び名。
    ✖-エルフとの約束シリーズ:ドラクエにおいては使用されていない別の呼び名。
    ◯-ロトシリーズ:ドラクエ1,2,3などを含む、主人公の名前「ロト」に因む呼び名。`
  },
  {
    question: 'ドラクエ4,5,6をまとめて何シリーズと呼んでいるか？',
    answers: [
      '幻獣シリーズ',
      '神話シリーズ',
      '天空シリーズ',
      '魔法の系譜シリーズ'
    ],
    correct: '天空シリーズ',
    explanation: `
  ✖-幻獣シリーズ:ドラクエにおいては使用されていない別の呼び名。
  ✖-神話シリーズ:ドラクエにおいては使用されていない別の呼び名。
  ◯-天空シリーズ:ドラクエ4,5,6などを含む、空をテーマにした呼び
  ✖-魔法の系譜シリーズ:ドラクエにおいては使用されていない別の呼び名。`
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
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    score++;
    quizIndex++;
    window.alert('正解！\n 全' + quizLength + '問題中' + score + '問正解しています。残りあと' + [quizLength - quizIndex] + '問あります。' + quiz[quizIndex - 1].explanation);
  } else {
    quizIndex++;
    window.alert('不正解！\n 全' + quizLength + '問題中' + score + '問正解しています。残りあと' + [quizLength - quizIndex] + '問あります。' + quiz[quizIndex - 1].explanation);
  }


  if (quizIndex < quizLength) {
    // 問題数がまだあるればこちら実行
    setupQuiz();
  } else {
    // 問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！下記のアンケートにご協力ください');

    const accuracyRate = (score / quizLength) * 100;
    let comment = "";

    if (accuracyRate >= 0 && accuracyRate <= 25) {
      comment = "残念ながら正解率が低いですね。焦らず問題を注意深く確認し、理解を深めましょう。頑張ってください！";
    } else if (accuracyRate <= 50) {
      comment = "まだまだ向上の余地がありますね。正解となるポイントをしっかり押さえ、次回に期待しましょう。";
    } else if (accuracyRate <= 75) {
      comment = "良いスタートですね！もっと問題に慣れて、正解率を一層高めていきましょう。頑張り続けてください！";
    } else if (accuracyRate <= 99) {
      comment = "素晴らしい！正解率が高いですね。これからも同じ調子で問題に取り組んで、さらなる向上を目指しましょう。";
    } else if (accuracyRate === 100) {
      comment = "おめでとうございます！完璧な正解率ですね。これからも難易度を上げながら挑戦し、知識を深めていきましょう。素晴らしい成績です！";
    } else {
      comment = "正解率が正しくありません。";
    }


    document.getElementById('js-question').textContent = 'あなたの正解数は' + score + '/' + quizLength + 'です！' + comment;
    document.getElementById('survey-form').style.display = 'block';
    document.getElementById('select_btn').classList.add('d-none');

  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}