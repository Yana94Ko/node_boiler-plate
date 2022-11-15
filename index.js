//백엔드서버의 시작점이 되는 파일
const express = require("express"); //express를 받아와서
const app = express(); //함수로 app을 생성
const port = 5000; //포트번호 지정
const config = require("./config/key");

//5) 클라이언트로부터 정보를 받아오기 위해 body-parser을 가져옴
const bodyParser = require("body-parser");
//3) User model 가져오기
const { User } = require("./models/User");

//6) body-parser에 옵션 부여
//6-1) application/x-www-from-urlencoded로 된 데이터를 분석해서 가져오게,
app.use(bodyParser.urlencoded({ extended: true }));
//6-3) application/json로 된 데이터를 분석해서 가져오게,
app.use(bodyParser.json());
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World 새복많!!!!!꾫꾫"));

app.post("/register", (req, res) => {
  //1) 회원가입시 필요한 정보들을 클라이언트에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.
  //2) 그러기 위해서는 Usermodel을 가져와야 함.

  //4) body-parser를 통해 클라이언트에서 받은 정보를 이용해User 생성
  const user = new User(req.body);
  //5) mongoDB의 save 메서드를 이용해 user 모델에 저장후 콜백함수 실행
  user.save((err, userInfo) => {
    //만약 에러가 발생했다면 json형태로 에러메시지를 전달.
    if (err) return res.json({ success: false, err });
    //만약 성공했다면 성공했다고 200상태를 전달하고 아래 정보를 json형태로 전달해.
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
