# PCF-StarRatingView
モデル駆動型アプリとキャンバスアプリで利用できる、評価を星(★★★★☆)で表示するPCFコントロールです。

### モデル駆動型アプリでの表示例
![image](https://github.com/user-attachments/assets/9f15354f-50da-4f4e-8051-acaf020bd738)

### キャンバスアプリでの表示例
![image](https://github.com/user-attachments/assets/7c5006a0-6a4f-469d-9fe6-c1742f3b1b21)

> [!Note]
> ただ、キャンバスアプリに関しては標準コントロールとして評価コントロールがあるので、こちらを使ったほうがシンプルかと思います。主にモデル駆動型アプリでの需要を想定しています。
> ![image](https://github.com/user-attachments/assets/6179fd47-1be4-4088-a583-4b96cf4fe295)

## 設定
### モデル駆動型アプリの設定
コードコンポーネントは以下のように追加します。
![image](https://github.com/user-attachments/assets/f96fb8d4-ccce-47a1-9df0-608e7b77f932)

対象のコンポーネントを追加します。
![image](https://github.com/user-attachments/assets/7f1b14d5-a042-4102-9a35-6fa9101d99d8)

追加することができました。
![image](https://github.com/user-attachments/assets/a09650bb-8ff2-4f98-974d-3f00cd4ef5b8)

色の設定は番号で行います。
![image](https://github.com/user-attachments/assets/ece6b499-f8bc-4f4e-bf68-1e02b8a0b9f0)

> [!Note]
> どの番号が何色を意味しているかは、アイコンから確認できます。
> ![image](https://github.com/user-attachments/assets/cbcafc4f-4dff-463e-9b7b-9b9d4763cc76)

今回はColor を `2` にしてみます。
![image](https://github.com/user-attachments/assets/0956eae8-0ab9-498c-ab79-881eb432e566)

このように追加することができます。モデル駆動型アプリを再生するとこのような色で表現されました。
![image](https://github.com/user-attachments/assets/45d7fd10-ff25-4626-85cc-ed276aed4151)


### キャンバスアプリでの設定

コンポーネントから追加します。
![image](https://github.com/user-attachments/assets/5bae90df-096b-45c6-8b9b-015706e85e10)

挿入から追加します。
![image](https://github.com/user-attachments/assets/01d847e0-86b9-440b-811d-f5cf4ecf57ff)

Rating とColor を変更して、好きな値に、好きな色で表示することができます。

![image](https://github.com/user-attachments/assets/3afdb83d-5798-4552-b1fa-eb657ad66cd4)

以上

