//백엔드서버의 시작점이 되는 파일
const express = require("express"); //express를 받아와서
const app = express(); //함수로 app을 생성
const port = 5000; //포트번호 지정

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://admin:qwer1234@boilerplate.3n20yhr.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World 꺄앍"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
