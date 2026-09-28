import { useState, useEffect } from 'react';

export default function HeroSection() {
  // Target date for promotion / opening
  const [targetDate, setTargetDate] = useState(() => {
    const saved = localStorage.getItem('hsa_countdown_target');
    return saved ? new Date(saved).getTime() : new Date('2026-09-09T00:00:00').getTime();
  });

  const calcTimeLeft = () => {
    const diff = targetDate - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('hsa_countdown_target');
      if (saved) setTargetDate(new Date(saved).getTime());
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <>
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Left content */}
            <div>
              <div className="hero-badge">
                <span>DÀNH CHO 2K9 TOÀN QUỐC</span> | LỚP QDA03 - KHAI GIẢNG 09/08/2026
              </div>

              <h1>Luyện thi Đánh giá năng lực Khối các trường Quân đội (QDA)</h1>

              <p className="hero-desc">
                Khóa học toàn diện hơn <strong>379 buổi học</strong> chất lượng cao qua Classin và video bài giảng,
                bám sát chuẩn cấu trúc đề thi do <strong>Ban Tuyển sinh Quân sự Bộ Quốc phòng</strong> phối hợp 
                cùng <strong>Viện Đào tạo số và Khảo thí ĐHQGHN</strong> xây dựng. Tự tin bước vào cánh cổng 25 trường Quân đội hàng đầu!
              </p>

              <div className="hero-buttons">
                <a href="#pricing" className="btn btn-primary">
                  Giữ suất ưu đãi 50% (3.600.000đ)
                </a>
                <a href="#schools" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
                  25 Trường Quân đội xét tuyển
                </a>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-num">25</span>
                  <span className="hero-stat-label">Học viện &amp; Sĩ quan QĐ</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-num">379+</span>
                  <span className="hero-stat-label">buổi Classin &amp; video</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-num">24/30</span>
                  <span className="hero-stat-label">điểm Bảng vàng QDA</span>
                </div>
              </div>
            </div>

            {/* Offer box */}
            <div className="offer-box">
              <div className="offer-title">🔥 Ưu đãi Lớp QDA03 – Giảm 50%</div>
              <span className="offer-price-old">Học phí gốc: 7.200.000đ (Trọn gói 4 phần thi)</span>
              <span className="offer-price-new">3.600.000đ</span>

              <ul className="offer-perks">
                <li>
                  <span className="check">✔</span>
                  <span>Trọn gói 4 phần: Định lượng, Định tính, Tiếng Anh và Khoa học</span>
                </li>
                <li>
                  <span className="check">✔</span>
                  <span>Hơn 379 buổi học tương tác 2 chiều trên Classin + Record trọn đời</span>
                </li>
                <li>
                  <span className="check">✔</span>
                  <span>Tặng 160 video chữa đề Tốt nghiệp THPT (cập nhật từ 11/2026)</span>
                </li>
                <li>
                  <span className="check">✔</span>
                  <span>Cơ hội nhận <strong>Laptop 15 triệu</strong> (Thủ khoa 2027) &amp; Học bổng 100tr</span>
                </li>
              </ul>

              <div className="countdown">
                <div className="countdown-item">
                  <span className="countdown-num">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="countdown-label">Ngày</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-num">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="countdown-label">Giờ</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="countdown-label">Phút</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="countdown-label">Giây</span>
                </div>
              </div>

              <a href="#contact" className="btn btn-primary">
                Đăng ký giữ suất QDA03 ngay
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Bar */}
      <div className="achievement-bar">
        <div className="container">
          <div className="achievement-list">
            <div className="achievement-item">
              <span className="achievement-icon">🏆</span>
              Sao vàng Thương hiệu Quốc gia 2024
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">📺</span>
              VTV5 đưa tin mục thời sự 20h (03/02/2025)
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">⭐</span>
              Top 10 Thương hiệu dẫn đầu VN 2025
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🎖️</span>
              2 Học viên đạt 24 điểm Bảng vàng QDA 2026
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
