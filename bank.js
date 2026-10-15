const questionBank = [
    {
        id: "M05-01",
        question: "1. What are the basic elements for 'Classic T' format?",
        options: [
            "A. Direction, altitude and height.",
            "B. Airspeed, pitch and roll.",
            "C. Airspeed, attitude, altitude and direction."
        ],
        answer: "C",
        explanation: "Classic T 的四大基本儀表核心元素為：Airspeed (空速)、Attitude (姿態)、Altitude (高度) 與 Direction (方向)。"
    },
    {
        id: "M05-02",
        question: "2. Typical displays on an EHSI are.",
        options: [
            "A. Engine indications.",
            "B. VOR, Map, Plan and weather radar.",
            "C. VOR, Plan, Map and Attitude."
        ],
        answer: "B",
        explanation: "EHSI 典型顯示包含 VOR、Map、Plan 及氣象雷達 (weather radar)。"
    },
    {
        id: "M05-03",
        question: "3. An EADI display showing a moving runway moves down during the final stages of an approach. The aircraft must.",
        options: [
            "A. fly down.",
            "B. fly up.",
            "C. hold descent path."
        ],
        answer: "A",
        explanation: "在進場最後階段上升跑道會向上移直到觸及飛機符號。若上升跑道開始向下移，代表飛機正在爬升，因此必須向下飛行。"
    },
    {
        id: "M05-04",
        question: "4. During an instrument approach, the glideslope pointer reflects below the glideslope centre mark. This means the aircraft is positioned.",
        options: [
            "A. above the glideslope.",
            "B. below the glideslope.",
            "C. to the left of the localiser."
        ],
        answer: "A",
        explanation: "指針在中心標記下方，代表滑道在飛機下方，也就是飛機位於滑道上方。"
    },
    {
        id: "M05-05",
        question: "5. Engine parameters are displayed on.",
        options: [
            "A. ECAM.",
            "B. EHSI.",
            "C. FMSCDU."
        ],
        answer: "A",
        explanation: "引擎參數可以透過選取 Engine 頁面顯示在 ECAM 上。"
    },
    {
        id: "M05-06",
        question: "6. What is the fixed feature of an ADI?",
        options: [
            "A. The glideslope pointer.",
            "B. The aircraft symbol.",
            "C. The lateral deviation bar."
        ],
        answer: "B",
        explanation: "ADI 儀表正中央繪製的小飛機符號為固定特徵。"
    },
    {
        id: "M05-07",
        question: "7. On an EADI, the Flight Director command bars show.",
        options: [
            "A. the path with respect to the horizon.",
            "B. the required path with respect to the actual path.",
            "C. the actual path with respect to the required path."
        ],
        answer: "B",
        explanation: "飛行導引指令桿顯示的是相對於實際飛行路徑的需求路徑。"
    },
    {
        id: "M05-08",
        question: "8. What instrument includes a display of a rising runway?",
        options: [
            "A. ECAM.",
            "B. EHSI.",
            "C. EADI."
        ],
        answer: "C",
        explanation: "上升跑道顯示於 EADI（電子姿態儀指示器）上。"
    },
    {
        id: "M05-09",
        question: "9. What functions are available on the EHSI?",
        options: [
            "A. Full arc and Wx only.",
            "B. Full arc, Wx and Map Mode.",
            "C. Full Arc only."
        ],
        answer: "B",
        explanation: "EHSI 提供 Full arc、Wx 及 Map Mode 等顯示功能。"
    },
    {
        id: "M05-10",
        question: "10. With radio coupled autopilot, what are the inputs?",
        options: [
            "A. ADF and VOR.",
            "B. ILS and VOR.",
            "C. ADF and ILS."
        ],
        answer: "B",
        explanation: "無線電耦合自動駕駛儀主要接收 ILS 與 VOR 訊號輸入。"
    },
    {
        id: "M05-11",
        question: "11. An EADI display of flight director commands are coloured.",
        options: [
            "A. cyan.",
            "B. magenta.",
            "C. red."
        ],
        answer: "B",
        explanation: "EADI 飛行導引指令桿顏色為洋紅色 (magenta)。"
    },
    {
        id: "M05-12",
        question: "12. EFIS systems have two control panels, their purpose is.",
        options: [
            "A. one to control the type of EFIS display and the other to select the source of the information being displayed.",
            "B. one for the EADI display and one for the EHSI display.",
            "C. to provide display control by one control panel whilst the other provides a standby."
        ],
        answer: "A",
        explanation: "一個控制面板控制顯示類型，另一個選擇資訊來源。"
    },
    {
        id: "M05-13",
        question: "13. What would you expect to see displayed on an EADI display?",
        options: [
            "A. Compass heading, selected heading and VOR.",
            "B. Course information, weather radar, way point alert and bearing pointers.",
            "C. Flight director command bars, slip indicator, rate to altitude & autoland."
        ],
        answer: "C",
        explanation: "EADI 顯示飛行導引指令桿、側滑指示器、高度速率及自動降落等資訊。"
    },
    {
        id: "M05-14",
        question: "14. An EFIS ADI display will show along with pitch and roll.",
        options: [
            "A. flight director bars, autoland, compass rose, altitude.",
            "B. decision height, autoland, rad alt , altitude.",
            "C. flight director bars, autoland, altitude, range to altitude, decision height."
        ],
        answer: "B",
        explanation: "EFIS ADI 除俯仰與滾轉外，還會顯示決斷高度、自動降落、無線電高度與高度。"
    },
    {
        id: "M05-15",
        question: "15. If the glideslope pointer is below the centre mark the aircraft is.",
        options: [
            "A. below the glideslope.",
            "B. on the glideslope.",
            "C. above the glideslope."
        ],
        answer: "C",
