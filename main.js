// テキストアニメーション
const moveTexts = document.querySelectorAll(".js-movetext");
// console.log(moveTexts); 一文字づつ表示させたい要素の取得
for (let i = 0; i < moveTexts.length; i++){
  const content = moveTexts[i];
  //console.log(content);中身を一つづつ取得
  textContents = content.textContent;
  //console.log(textContents);各要素の中身の文字だけを変数に格納
  textContentsArray = []; //文字だけの配列を定義しておく
  content.textContent = ""; //contentの中身を""=消す
 //console.log(textContents.split("")); //""で一文字づつ区切った配列を作る
  for (let j = 0; j < textContents.split("").length; j++){
    textContentsArray.push('<span style="animation-delay: '+ (j*0.2) + 's;">' + textContents.split("")[j]+'</span>')
  }
  //console.log(textContentsArray); 一文字づつspanで囲まれているか
  for (let k = 0; k < textContentsArray.length; k++){
    content.innerHTML += textContentsArray[k];
  }
}

// 背景画像スライド
//背景画像の配列
const slideBgArray = ['./スライドスタート.JPG', './スライド①.JPG', './スライド②.JPG',];
//BGのノードを変数に格納
const slideBg = document.querySelector('.js-slideBg');

//初期値として0(配列のインデックスとして使う)を代入した変数を定義
let BgNum = 0;
//インデックスを使って背景画像を切り替える処理
function changeBg()
{
    if(BgNum === slideBgArray.length) {
      BgNum = 0;
    };
    slideBg.style.backgroundImage = 'url(' + slideBgArray[BgNum] + ')';
    BgNum++;
}


// インターバルで3秒毎にchangeBgメソッドを呼び出す
window.setInterval(changeBg, 3000);