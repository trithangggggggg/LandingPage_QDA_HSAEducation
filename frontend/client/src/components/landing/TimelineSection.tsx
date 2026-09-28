import { useState } from 'react';
import { courseCurriculum, qdaPhases } from '../../data/mockData';

const tabLabels = ['📐 Toán', '📖 Ngữ văn', '🌐 Tiếng Anh', '🔬 Khoa học', '🎯 Thi thử'];

export default function TimelineSection() {
  const [activeTab, setActiveTab] = useState(0);
  const active = courseCurriculum[activeTab];
  const sessionsByTab = [120, 75, 75, 185, 102];

  return (
    <section className="section section-alt" id="timeline">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">LỘ TRÌNH ĐÀO TẠO TOÀN DIỆN</span>
          <h2 className="section-title">Hơn 379 buổi học chất lượng cao qua Classin &amp; Video</h2>
          <p className="section-desc">
            Chương trình đào tạo chuyên sâu được xây dựng riêng cho kỳ thi ĐGNL Quân đội QDA, 
            tối ưu hóa điểm số qua từng chuyên đề và rèn luyện kỹ năng thực chiến phòng thi.
          </p>
        </div>

        {/* Pill Selector */}
        <div className="cur-pills">
          {tabLabels.map((label, i) => (
            <button
              key={label}
              className={`cur-pill ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="cur-panel" key={activeTab}>
          <div className="cur-panel-header">
            <div className="cur-panel-icon">{active.icon}</div>
            <div>
              <h3 className="cur-panel-title">{active.subject}</h3>
              <p className="cur-panel-desc">{active.desc}</p>
            </div>
          </div>

          <div className="cur-panel-stats">
            <div className="cur-stat-card">
              <span className="cur-stat-num">{sessionsByTab[activeTab]}+</span>
              <span className="cur-stat-label">Tổng buổi học</span>
            </div>
            <div className="cur-stat-card classin">
              <span className="cur-stat-emoji">⚡</span>
              <div>
                <span className="cur-stat-tag">Classin trực tiếp</span>
                <span className="cur-stat-detail">{active.classin}</span>
              </div>
            </div>
            <div className="cur-stat-card video">
              <span className="cur-stat-emoji">🎬</span>
              <div>
                <span className="cur-stat-tag">Video bổ trợ</span>
                <span className="cur-stat-detail">{active.video}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Phases Roadmap */}
        <div className="section-header" style={{ marginTop: '56px' }}>
          <span className="section-badge">TIẾN TRÌNH HỌC TẬP KHÓA QDA03</span>
          <h2 className="section-title">3 Giai đoạn bứt phá từ mất gốc đến điểm 24+ QDA</h2>
        </div>

        <div className="timeline-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {qdaPhases.map((p) => (
            <div className="timeline-card" key={p.num}>
              <div className="timeline-number">{p.num}</div>
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="timeline-dates">{p.dates}</div>
                <h3 style={{ fontSize: '1.15rem', margin: '8px 0 10px' }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', flex: 1 }}>{p.desc}</p>
                <div
                  style={{
                    marginTop: '16px',
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    background: 'var(--primary-bg)',
                    color: 'var(--primary)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}
                >
                  ✓ {p.badge}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-commitment" style={{ marginTop: '40px' }}>
          ✅ <strong>Lịch thi dự kiến:</strong> Năm 2026 - 2027 tổ chức vào <strong>Tuần 3 tháng 6</strong>, ngay sau Kỳ thi tốt nghiệp THPT. HSA Education đồng hành cùng học sinh xuyên suốt đến ngày thi!
        </div>
      </div>
    </section>
  );
}

