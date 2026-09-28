import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleScrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a
              href="#hero"
              onClick={handleScrollToTop}
              className="footer-brand"
              title="Cuộn lên đầu trang"
              style={{ textDecoration: 'none', display: 'inline-flex', cursor: 'pointer' }}
            >
              <img src="/images/teachers/logo_HSA.png" alt="HSA Education" />
              <span>HSA Education</span>
            </a>
            <p className="footer-desc">
              Hệ thống Giáo dục HSA Education – Đơn vị tiên phong và duy nhất triển khai đồng bộ giải pháp
              cho kỳ thi Đánh giá năng lực &amp; Đánh giá tư duy (Khóa học – Học liệu – Tư vấn miễn phí).
            </p>
            <div style={{ marginTop: '12px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>
              🏆 Sao vàng Thương hiệu Quốc gia 2024 | Top 10 Thương hiệu dẫn đầu VN 2025
            </div>
          </div>

          <div>
            <h4>Khóa học QDA03</h4>
            <ul className="footer-links">
              <li><a href="#benefits">Cấu trúc bài thi QDA</a></li>
              <li><a href="#timeline">Lộ trình hơn 379 buổi học</a></li>
              <li><a href="#schools">25 Trường Quân đội xét tuyển</a></li>
              <li><a href="#teachers">Ban Cố vấn &amp; Giảng viên</a></li>
              <li><a href="#pricing">Học phí &amp; Quà tặng Laptop</a></li>
            </ul>
          </div>

          <div>
            <h4>Tư vấn tuyển sinh QDA</h4>
            <ul className="footer-links">
              <li><a href="tel:0961167606" style={{ fontWeight: 700, color: 'var(--accent)' }}>Hotline: 0961.167.606</a></li>
              <li><a href="#contact">Đăng ký giữ suất lớp QDA03</a></li>
              <li><a href="#honor">Bảng vàng vinh danh 24 điểm</a></li>
              <li><Link to="/admin" style={{ color: 'var(--accent)', fontWeight: 600 }}>🔐 Trang Quản trị Tuyển sinh</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span>© 2026 HSA Education - Lớp QDA03 Luyện thi ĐGNL Quân đội – Vững bước tương lai cùng màu áo lính!</span>
            <Link to="/admin" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.82rem' }}>
              Dành cho Quản trị viên →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
