import { qdaHonorStudents } from '../../data/mockData';

export default function HonorSection() {
  const getRankIcon = (index: number) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return '🏅';
  };

  return (
    <section className="section section-alt" id="honor">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">KẾT QUẢ THỰC TẾ &amp; THÀNH TÍCH</span>
          <h2 className="section-title">Bảng Vàng Vinh Danh Kỳ Thi ĐGNL Quân Đội (QDA)</h2>
          <p className="section-desc">
            Trong năm đầu tiên tổ chức kỳ thi ĐGNL Quân đội QDA, Hệ thống Giáo dục HSA Education 
            tự hào khi có <strong>2 học viên ghi danh Bảng vàng QDA 2026 với 24 điểm</strong> – 
            chỉ cách ngôi vị Thủ khoa QDA toàn quốc đúng 2 điểm!
          </p>
        </div>

        <div className="honor-list">
          {qdaHonorStudents.map((s, index) => (
            <div className="honor-row" key={s.name}>
              <div className="honor-rank">{getRankIcon(index)}</div>
              
              <div className="honor-info">
                <div className="honor-name">{s.name}</div>
                <div className="honor-school">🎯 {s.targetSchool}</div>
              </div>
              
              <div className="honor-achievements">
                {s.badge && <span className="honor-badge-inline">{s.badge}</span>}
                <p className="honor-note">{s.note}</p>
              </div>

              <div className="honor-score-col">
                <div className="honor-score-wrapper">
                  <span className="honor-score">{s.totalScore}</span>
                  <span className="honor-score-max">/{s.maxScore}</span>
                </div>
                <span className="honor-score-label">điểm QDA</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
