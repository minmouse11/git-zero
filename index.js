// ① Express 불러오기
const express = require('express');

// ② 앱 객체 생성
const app = express();

// ③ 서버가 사용할 포트 설정 (환경변수 없으면 기본 3000)
const PORT = process.env.PORT || 3000;

// ④ 기본 경로(/health)로 요청이 오면 JSON 응답
app.get('/health', (req, res) => {
  res.json({ ok: true });
});

// ⑤ 다른 경로(/api/hello)로 요청이 오면 또 다른 응답
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello API' });
});

// ⑥ 서버 실행
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
