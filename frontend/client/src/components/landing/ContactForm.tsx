import { useState } from 'react';
import type { FormEvent } from 'react';

interface FormData {
  studentName: string;
  parentPhone: string;
  registrationType: string;
  targetSchool: string;
  province: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    parentPhone: '',
    registrationType: 'Cá nhân',
    targetSchool: '',
    province: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('hsa_registrations') || '[]');
    existing.unshift({
      ...formData,
      id: Date.now(),
      createdAt: new Date().toLocaleString('vi-VN'),
    });
    localStorage.setItem('hsa_registrations', JSON.stringify(existing));
    setSubmitted(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.15)',
                color: '#fff',
                padding: '4px 12px',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: 600,
                marginBottom: '12px',
              }}
            >
              TUYỂN SINH LỚP QDA03 (2K9)
            </span>
            <h2>Đăng ký nhận tư vấn lộ trình &amp; Giữ suất ưu đãi</h2>
            <p>
              Khóa học <strong>Lớp QDA03</strong> – Khai giảng: <strong>09/08/2026</strong>. 
              Chuyên sâu kỳ thi ĐGNL Tuyển sinh Đại học, Cao đẳng khối các trường Quân đội.
            </p>
            <p style={{ marginTop: '12px' }}>
              📞 Hotline tuyển sinh trực tiếp: <strong style={{ color: 'var(--accent)' }}>0961.167.606</strong>
            </p>
            <p style={{ fontSize: '0.88rem', opacity: 0.85, marginTop: '8px' }}>
              ✓ Cam kết bảo mật thông tin học sinh &amp; phụ huynh.
            </p>
          </div>

          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <span className="form-success-icon">✅</span>
                <h3>Đăng ký thành công!</h3>
                <p>Cảm ơn bạn! Ban tuyển sinh HSA Education sẽ liên hệ tư vấn chi tiết trong 24h.</p>
                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ marginTop: '16px', borderColor: 'var(--primary)', color: 'var(--primary)' }}
                  onClick={() => setSubmitted(false)}
                >
                  Đăng ký thêm học sinh khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="studentName">
                    Họ và tên học sinh <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input
                    id="studentName"
                    className="form-input"
                    type="text"
                    placeholder="VD: Nguyễn Văn An"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="parentPhone">
                    Số điện thoại phụ huynh / học sinh <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input
                    id="parentPhone"
                    className="form-input"
                    type="tel"
                    placeholder="Số điện thoại nhận tư vấn khóa học"
                    required
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="targetSchool">
                    Học viện / Trường Sĩ quan Quân đội mục tiêu
                  </label>
                  <input
                    id="targetSchool"
                    className="form-input"
                    type="text"
                    placeholder="VD: Học viện Kỹ thuật Quân sự, Sĩ quan Lục quân 1..."
                    value={formData.targetSchool}
                    onChange={(e) => setFormData({ ...formData, targetSchool: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="registrationType">
                    Hình thức đăng ký <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <select
                    id="registrationType"
                    className="form-input form-select"
                    required
                    value={formData.registrationType}
                    onChange={(e) => setFormData({ ...formData, registrationType: e.target.value })}
                  >
                    <option value="Cá nhân">Cá nhân (Ưu đãi 3.600.000đ)</option>
                    <option value="Nhóm 2-3">Nhóm 2–3 bạn</option>
                    <option value="Nhóm 4-9">Nhóm 4–9 bạn</option>
                    <option value="Nhóm 10+">Nhóm 10+ bạn</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="province">
                    Tỉnh / Thành phố hiện tại
                  </label>
                  <input
                    id="province"
                    className="form-input"
                    type="text"
                    placeholder="VD: Hà Nội, Nghệ An, Hải Phòng..."
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Giữ suất Lớp QDA03 (3.600.000đ)
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
