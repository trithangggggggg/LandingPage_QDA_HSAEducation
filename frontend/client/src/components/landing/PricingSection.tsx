export default function PricingSection() {
  return (
    <section className="section section-alt" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">CHÍNH SÁCH HỌC PHÍ &amp; ƯU ĐÃI KHÓA QDA03</span>
          <h2 className="section-title">Học phí trọn gói 4 phần thi – Giảm 50%</h2>
          <p className="section-desc">
            Áp dụng cho học sinh đăng ký sớm Lớp QDA03 trước ngày khai giảng 09/08/2026.
          </p>
        </div>

        <div className="pricing-main">
          {/* Gói chính */}
          <div className="card pricing-highlight">
            <div style={{ display: 'inline-block', background: 'var(--accent)', color: '#fff', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '12px' }}>
              TIẾT KIỆM 3.600.000đ
            </div>
            <h3>Ưu Đãi Đặc Biệt – Giảm 50%</h3>
            <span className="pricing-label">Học phí gốc (Trọn gói 4 phần thi hơn 379 buổi)</span>
            <span className="pricing-old">7.200.000đ</span>
            <span className="pricing-new">3.600.000đ</span>
            <span className="pricing-duration">/ trọn gói toàn bộ khóa học đến ngày thi</span>

            <a href="#contact" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
              Đăng ký giữ suất ưu đãi 3.600.000đ
            </a>
          </div>

          {/* Ưu đãi nhóm */}
          <div className="card">
            <h3>Chính sách Đăng ký theo Nhóm</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
              Cùng đồng đội ôn luyện, chinh phục ước mơ Học viện, Sĩ quan Quân đội với chi phí tối ưu nhất:
            </p>
            <table className="group-table">
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600 }}>Cá nhân đăng ký sớm</td>
                  <td style={{ color: 'var(--accent)', fontWeight: 700 }}>3.600.000đ / HS</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Nhóm 2 – 3 bạn</td>
                  <td style={{ color: 'var(--primary)', fontWeight: 700 }}>Ưu đãi thêm cho mỗi bạn</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Nhóm 4 – 9 bạn</td>
                  <td style={{ color: 'var(--primary)', fontWeight: 700 }}>Mức học phí ưu đãi cao nhất</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '12px' }}>
              * Liên hệ trực tiếp Hotline: <strong>0961.167.606</strong> để nhận mã ưu đãi nhóm ngay hôm nay.
            </p>
          </div>
        </div>

        {/* Học bổng & Quà tặng */}
        <div className="pricing-extras">
          <div className="card pricing-extra-card">
            <span className="pricing-extra-icon">💻</span>
            <h3>Laptop 15 Triệu &amp; Học bổng 100Tr</h3>
            <p>
              Cơ hội nhận <strong>01 Laptop trị giá 15 triệu đồng</strong> dành cho Thủ khoa QDA 2027 và quỹ học bổng khuyến học tổng trị giá 100.000.000đ.
            </p>
          </div>

          <div className="card pricing-extra-card">
            <span className="pricing-extra-icon">🎬</span>
            <h3>Tặng 160 Video chữa đề TN THPT</h3>
            <p>
              Được cập nhật trên tài khoản học từ tháng 11/2026, hỗ trợ tối đa cho học sinh bứt phá điểm số thi Tốt nghiệp THPT 2027.
            </p>
          </div>

          <div className="card pricing-extra-card">
            <span className="pricing-extra-icon">🎯</span>
            <h3>52 Bài thi thử &amp; Khảo sát thực chiến</h3>
            <p>
              8 bài thi phân loại đầu vào, 32 bài khảo sát định kỳ hàng tháng và 12 bài thi thử mô phỏng như thi thật trên hệ thống số hóa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
