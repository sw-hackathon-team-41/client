import React, { useState, useEffect } from "react";
import { NavLink } from "../components/navElements";

let tea = [
    {name: "mint", score: 0},
    {name: "chamomile", score: 0},
    {name: "rosemary", score: 0},
    {name: "lavender", score: 0},
];

let maxScoreTea = {name: null, score: null};

export default function Survey() {
    const [currentStep, setCurrentStep] = useState(0);
    const [clicked, setClicked] = useState(false);
    
    const question = [
        "당신은 어떤 맛을 선호하시나요? (시원한 / 달콤한 / 산뜻한 / 고소한)",
        "음료에 특별한 효능이 있다면 어떤 효능이 가장 중요하다고 생각하시나요? (면역력 증진 / 피로 회복 / 소화 개선 / 진정 효과)",
        "일상적으로 어떤 목적으로 음료를 섭취하시나요? (리프레시 / 집중력 향상 / 스트레스 완화 / 다이어트 지원)",
        "음료를 마실 때 어떤 분위기가 가장 편안하다고 느끼시나요? (조용한 공간 / 자연의 풍경 / 북적이는 카페 / 아늑한 실내)",
        "음료를 마시면서 느끼고 싶은 감정은 무엇인가요? (평온함 / 기분 전환 / 에너지 충전 / 로맨틱한 분위기)",
    ];
    //     // (민트 / 카모마일 / 로즈마리 / 라벤더)]

    
    function check(i) {
        setCurrentStep((currentStep) => currentStep + 1);
        setClicked(true);
        if (currentStep <= 4) {
            tea[i].score = tea[i].score + 1;
        }
        
        if (currentStep === 4) {
            let maxScore = Math.max.apply(null, tea.map(item => item.score));
            maxScoreTea = tea.find(item => item.score === maxScore);
            console.log(maxScoreTea.name)
            document.getElementById("questionBoard").classList.add("hidden");
            document.getElementById("resultBoard").classList.remove("hidden");
            document.getElementById("under").classList.remove("hidden");
        }
    }

      useEffect(() => {
        setClicked(!clicked); // currentStep이 업데이트될 때 클릭 상태 초기화
        }, [currentStep]);
      


    
    
    return (
        <>
        <div className="grid gap-4 gird-rows-2 mt-1 overflow-x-auto mb-10 relative h-full" style={{backgroundColor: "#ece6db"}}>
            <div className="banner-container w-auto" >
                <div className="flex flex-row place-content-center flex-auto">
                <input type="range" min={0} max={100} value={(currentStep * 20)} className="range range-success w-1/3 mt-5" />
                </div>
                <div>
                    <p className="text-center font-bold text-xl mt-3 mb-3">{question[currentStep]}</p>
                    <div className="flex flex-row place-content-center flex-auto h-1/4 w-1/2 space-x-4 mx-auto mb-10" id="questionBoard">
                        <QuestionBoard stepNo={(currentStep)}/>    
                    </div>
                    {/* <div className="flex flex-row place-content-center flex-auto w-1/4 h-1/4 space-x-4 mx-32 hidden" id="resultBoard"> */}
                    <div className="flex flex-row place-content-center flex-auto h-1/4 w-1/6 space-x-4 mx-auto hidden" id="resultBoard">
                        <ResultCard value={maxScoreTea.name}/>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="flex flex-row flex-auto place-content-center gap-2 hidden" id="under">
            <NavLink to='/survey' className="btn font-bold text-xl">다시하기</NavLink>
            <NavLink to='/home' className="btn font-bold text-xl">돌아가기</NavLink>
        </div>
        </>
    );



    function QuestionCard({ handleClick, src, value}) {
        return (
          <div className="image-full flex-auto" onClick={handleClick}>
            <img src={src} alt="Shoes" />
            <p className="text-center font-bold text-xl">{value}</p>
          </div>
        );
    }
    
    function QuestionBoard({ stepNo }) {
        const value = [
            "시원한", "달콤한", "산뜻한", "고소한",
            "면역령 증진", "피로 회복", "소화 개선", "진정효과",
            "라프레시", "집중력 향상", "스트레스 완화", "다이어트 지원",
            "조용한 공간", "자연의 풍경", "북적이는 카페", "아늑한 실내",
            "평온함", "기분 전환", "에너지 충전", "로맨틱한 분위기",
        ];
        let src1 = "images/survey/" + (stepNo + (3 * (stepNo)) + 1).toString() + ".png";    
        let src2 = "images/survey/" + (stepNo + 1 + (3 * (stepNo)) + 1).toString() + ".png";        
        let src3 = "images/survey/" + (stepNo + 2 + (3 * (stepNo)) + 1).toString() + ".png";        
        let src4 = "images/survey/" + (stepNo + 3 + (3 * (stepNo)) + 1).toString() + ".png";
        let value1 = value[stepNo + (3 * (stepNo))];
        let value2 = value[stepNo + 1 + (3 * (stepNo))];
        let value3 = value[stepNo + 2 + (3 * (stepNo))];
        let value4 = value[stepNo + 3 + (3 * (stepNo))];
        return (
            <>
                <QuestionCard handleClick={() => check(0)} src={src1} value={value1}/>
                <QuestionCard handleClick={() => check(1)} src={src2} value={value2}/>
                <QuestionCard handleClick={() => check(2)} src={src3} value={value3}/>
                <QuestionCard handleClick={() => check(3)} src={src4} value={value4}/>
                        
            </>
        )
    }
    
    function ResultCard({ value }) {
        return (
            <>
            <div className="image-full flex-auto">
                <img src="/images/test_hub.png" alt="Shoes" />
                <p className="text-center font-bold text-xl">{value}</p>
            </div>
            
            </>
        
        );
      }
}






