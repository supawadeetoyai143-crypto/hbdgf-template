import { useState, useEffect } from "react";

export default function App() {
  const [page, setPage] = useState(1);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [typedText, setTypedText] = useState("");

  const correctPassword = "151225";

  const letterText = `A Month with You 🤍🐶

สุขสันต์วันครบรอบคับ มีคนจำได้ไหมน้าา
1 เดือนแยะเลย

เค้ามีไรจะสารภาพ
เค้าไม่ชอบหัวเกรียน 55555
เพราะชอบนอกใจง้ะ
แรกๆก็คิดมากแหละ
แต่เด่กทำให้เค้าสบายใจขึ้นเยอะเลย

เด่กเป็นแฟนที่ดีมากเลยนะ
แต่เค้าชอบคิดมาก
คิดไปเองแล้วเอามานอย
ขอโทษคับ 🥹

อีก 8 วันเด่กต้องไปฝึกแล้ว
คิดถึงมากๆแน่เลย
แต่ไม่ร้องหรอก
เดี๋ยวแฟนเป็นห่วง

ตั้งใจน้า สู้ๆ
ไม่ต้องเป็นห่วงเค้านะคับ
ขอบคุณที่เลือกเค้า
รักที่สุดเลยย 🫶🏻`;

  useEffect(() => {
    if (showLetter) {
      let i = 0;
      const timer = setInterval(() => {
        setTypedText(letterText.slice(0, i));
        i++;
        if (i > letterText.length) clearInterval(timer);
      }, 40);
      return () => clearInterval(timer);
    }
  }, [showLetter]);

  const checkPassword = () => {
    if (password === correctPassword) {
      new Audio(
        "https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3"
      ).play();
      setPage(2);
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div style={styles.app}>
      {/* หน้า 1 : ใส่รหัส */}
      {page === 1 && (
        <div style={styles.center}>
          <h2 style={styles.title}>ใบ้รหัส: วันครบรอบ 🤍</h2>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              ...styles.input,
              animation: error ? "shake 0.3s" : "none",
            }}
            placeholder="ใส่รหัสตรงนี้นะ"
          />

          {error && (
            <p style={styles.error}>รหัสยังไม่ถูกนะ 🤏🏻🥺</p>
          )}

          <button style={styles.button} onClick={checkPassword}>
            เข้าเว็บ
          </button>
        </div>
      )}

      {/* หน้า 2 : fade */}
      {page === 2 && (
        <div style={styles.fadePage} onClick={() => setPage(3)}>
          <h1 style={styles.fadeText}>เค้ามีอะไรจะบอก…</h1>
        </div>
      )}

      {/* หน้า 3 : เพลง */}
      {page === 3 && (
        <div style={styles.center}>
          <h3 style={styles.subtitle}>
            เพลงนี้…เค้าเลือกให้เด่ก
          </h3>

          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/mhIwoRk2K2E"
            allow="autoplay"
            style={styles.video}
          ></iframe>

          <p style={styles.smallText}>ฟังเพลงนี้ไปด้วยนะ 🤍</p>

          <button
            style={styles.button}
            onClick={() => setPage(4)}
          >
            เปิดจดหมาย 💌
          </button>
        </div>
      )}

      {/* หน้า 4 : จดหมาย */}
      {page === 4 && (
        <div style={styles.center}>
          {!showLetter && (
            <div
              style={styles.envelope}
              onClick={() => {
                new Audio(
                  "https://assets.mixkit.co/sfx/preview/mixkit-paper-slide-1530.mp3"
                ).play();
                setShowLetter(true);
              }}
            >
              ✉️
              <p style={styles.tapText}>กดเปิดจดหมาย</p>
            </div>
          )}

          {showLetter && (
            <div style={styles.paper}>
              <pre style={styles.letter}>{typedText}</pre>

              <button
                style={styles.button}
                onClick={() => setPage(5)}
              >
                ไปหน้าสุดท้าย 🌸
              </button>
            </div>
          )}
        </div>
      )}

      {/* หน้า 5 จะมาในโค้ดก้อนถัดไป */}

      <style>
        {`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
        `}
      </style>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "#FFE4E1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "cursive",
    textAlign: "center",
    padding: 20,
  },
  center: {
    maxWidth: 360,
  },
  title: {
    color: "#7a3b3b",
  },
  subtitle: {
    color: "#8b5c5c",
  },
  input: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderRadius: 12,
    border: "1px solid #d8b4b4",
    textAlign: "center",
  },
  button: {
    marginTop: 14,
    padding: "10px 18px",
    borderRadius: 20,
    border: "none",
    background: "#f4b6c2",
    color: "white",
    fontSize: 14,
    cursor: "pointer",
  },
  error: {
    color: "#b76e79",
    marginTop: 8,
  },
  fadePage: {
    animation: "fadeIn 1.5s",
    cursor: "pointer",
  },
  fadeText: {
    color: "#8b5c5c",
  },
  video: {
    borderRadius: 12,
    marginTop: 10,
  },
  smallText: {
    fontSize: 12,
    color: "#8b5c5c",
    marginTop: 6,
  },
  envelope: {
    fontSize: 64,
    cursor: "pointer",
  },
  tapText: {
    fontSize: 12,
    color: "#8b5c5c",
  },
  paper: {
    background: "#fdf5e6",
    padding: 20,
    borderRadius: 16,
  },
  letter: {
    color: "#800020",
    whiteSpace: "pre-wrap",
    fontSize: 14,
  },
};
