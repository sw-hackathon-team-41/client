import React from "react";
import { useEffect, useState } from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

//import signup 메소드;
function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            email: email,
            password: password,
            country: country
        };

        try {
            const response = await fetch("http://52.78.155.175/user/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const jsonData = await response.json();
            console.log("데이터 요청 성공:", jsonData);
            // 응답 데이터를 처리합니다.

            alert("회원가입 완료");
        } catch (error) {
            console.error("데이터 요청 중 오류:", error);
            // 에러를 처리합니다.
        }
    };
    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: "2%", marginBottom: "5%" }}>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            회원가입
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="email"
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="아이디"
                            autoFocus
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
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="country"
                            label="국가"
                            id="country"
                            value={country}
                            onChange={handleCountryChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            가입
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/login" variant="body2">
                            이미 계정이 있다면 로그인 화면으로
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
export default SignUp;