import React from "react";
import { useEffect,useState } from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";

//import signin 메서드
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const data = {
        email: email,
        password: password
      };
  
      try {
        const response = await fetch("http://52.78.155.175/user/sign-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        console.log(data);
        const jsonData = await response.json();
        console.log("데이터 요청 성공:", jsonData);
        
        localStorage.setItem("userId", jsonData);
      } catch (error) {
        console.error("데이터 요청 중 오류:", error);
        // 에러를 처리합니다.
      }
    };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "2%",marginBottom: "10%"}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={handleSubmit}>
        {" "}
        {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="이메일"
              name="email"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              로그인
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default Login;
