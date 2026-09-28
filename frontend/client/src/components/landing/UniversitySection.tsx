import { useState } from 'react';
import { militarySchools, examLocations } from '../../data/mockData';

const tabs = [
  { key: 'ALL', label: 'Tất cả 25 Trường Quân đội' },
  { key: 'ACADEMY', label: 'Học viện Quân đội' },
  { key: 'OFFICER', label: 'Trường Sĩ quan' },
  { key: 'COLLEGE', label: 'Trường Cao đẳng' },
  { key: 'EXAM_LOCATIONS', label: '📍 Địa điểm tổ chức thi' },
];

export default function UniversitySection() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredSchools =
    activeTab === 'ALL'
      ? militarySchools
      : militarySchools.filter((s) => s.type === activeTab);

  return (
    <section className="section" id="schools">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">MỤC TIÊU XÉT TUYỂN HỆ QUÂN SỰ</span>
          <h2 className="section-title">25 Học viện, Trường Sĩ quan Quân đội sử dụng kết quả QDA</h2>
          <p className="section-desc">
            Kết quả kỳ thi Đánh giá năng lực do Ban Tuyển sinh Quân sự Bộ Quốc phòng tổ chức được 
            <strong> 25 trường Quân đội</strong> sử dụng làm căn cứ phục vụ xét tuyển đại học, cao đẳng hệ Quân sự.
          </p>
        </div>

        {/* Highlight Stats */}
        <div className="uni-stats">
          <div className="card uni-stat-card">
            <span className="uni-stat-num">25</span>
            <span className="uni-stat-label">Học viện &amp; Trường Quân đội xét tuyển</span>
          </div>
          <div className="card uni-stat-card">
            <span className="uni-stat-num">03</span>
            <span className="uni-stat-label">Khu vực thi: Bắc – Trung – Nam</span>
          </div>
          <div className="card uni-stat-card">
            <span className="uni-stat-num">100%</span>
            <span className="uni-stat-label">Học viên quân sự được bao cấp học phí &amp; việc làm</span>
          </div>
          <div className="card uni-stat-card">
            <span className="uni-stat-num">01</span>
            <span className="uni-stat-label">Đợt thi chính thức (Tuần 3 tháng 6)</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="uni-tabs">
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`uni-tab ${activeTab === t.key ? 'active' : ''}`}
              onClick={() => setActiveTab(t.key)}
              type="button"
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content based on Active Tab */}
        {activeTab === 'EXAM_LOCATIONS' ? (
          <div>
            <div style={{ marginBottom: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>
              Danh sách các điểm thi chính thức do Ban TSQS Bộ Quốc phòng phối hợp tổ chức:
            </div>
            <table className="uni-table">
              <thead>
                <tr>
                  <th style={{ width: '120px' }}>Khu vực</th>
                  <th>Địa điểm thi</th>
                  <th>Địa chỉ chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {examLocations.map((loc) => (
                  <tr key={loc.school}>
                    <td style={{ fontWeight: 700, color: 'var(--primary)' }}>{loc.region}</td>
                    <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{loc.school}</td>
                    <td style={{ color: 'var(--text-body)' }}>{loc.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '14px', fontStyle: 'italic' }}>
              * Ghi chú: Bộ Quốc phòng duy trì tổ chức các điểm thi hằng năm và mở rộng quy mô khi cần thiết. 
              Lịch thi dự kiến diễn ra vào Tuần 3 tháng 6, sau Kỳ thi tốt nghiệp THPT.
            </p>
          </div>
        ) : (
          <table className="uni-table">
            <thead>
              <tr>
                <th style={{ width: '60px' }}>STT</th>
                <th>Tên Trường / Học viện Quân đội</th>
                <th style={{ width: '140px' }}>Phân loại</th>
                <th style={{ width: '130px' }}>Địa bàn</th>
                <th>Đặc điểm đào tạo nổi bật</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchools.map((s, idx) => (
                <tr key={s.id}>
                  <td style={{ fontWeight: 600, color: 'var(--text-muted)' }}>{idx + 1}</td>
                  <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{s.name}</td>
                  <td>
                    <span
                      style={{
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        background:
                          s.type === 'ACADEMY' ? 'var(--primary-bg)' : s.type === 'OFFICER' ? '#E3F2FD' : '#FFF3E0',
                        color:
                          s.type === 'ACADEMY' ? 'var(--primary)' : s.type === 'OFFICER' ? '#1565C0' : '#E65100',
                      }}
                    >
                      {s.typeName}
                    </span>
                  </td>
                  <td style={{ fontWeight: 500 }}>{s.location}</td>
                  <td style={{ color: 'var(--text-body)' }}>{s.highlight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
