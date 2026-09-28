const reasons = [
  {
    icon: '🏆',
    title: 'Tiên phong & Duy nhất',
    desc: 'Đơn vị duy nhất triển khai đồng bộ giải pháp toàn diện cho kỳ thi ĐGNL & ĐGTD: Khóa học chuẩn mực – Học liệu độc quyền – Tư vấn tuyển sinh Quân đội miễn phí.',
  },
  {
    icon: '⭐',
    title: 'Thương hiệu Quốc gia & VTV5',
    desc: 'Đạt giải Sao vàng Thương hiệu Quốc gia 2024, Top 10 Thương hiệu dẫn đầu Việt Nam 2025. Được đài truyền hình quốc gia VTV5 phát sóng trong bản tin thời sự 20h ngày 03/02/2025.',
  },
  {
    icon: '🎖️',
    title: 'Thành tích Bảng vàng QDA',
    desc: 'Ngay năm đầu tiên kỳ thi ĐGNL Quân đội được tổ chức, HSA Education tự hào có 2 học viên ghi danh Bảng vàng QDA 2026 với 24 điểm – chỉ cách Thủ khoa toàn quốc 2 điểm.',
  },
  {
    icon: '👨‍🏫',
    title: 'Đội ngũ Thầy cô đầu ngành',
    desc: 'Quy tụ các chuyên gia, Tiến sĩ, Phó Giáo sư đầu ngành đến từ các Học viện, Trường Đại học Quân đội, ĐHQGHN và các trường THPT Chuyên hàng đầu tại Hà Nội.',
  },
  {
    icon: '💻',
    title: 'Hơn 379 buổi học & 52 bài thi thử',
    desc: 'Chương trình học đồ sộ nhất hiện nay với hơn 379 buổi học qua Classin và video, 8 bài thi đầu vào, 32 bài khảo sát tháng và 12 bài thi thử mô phỏng như thi thật.',
  },
  {
    icon: '🎁',
    title: 'Laptop 15 Triệu & Học bổng 100Tr',
    desc: 'Đặc quyền cho học viên khóa QDA03: Cơ hội nhận ngay 01 Laptop trị giá 15 triệu đồng dành cho Thủ khoa 2027 cùng quỹ học bổng khuyến học tổng trị giá 100 triệu.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="section section-alt" id="whyus">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">BẢO CHỨNG UY TÍN &amp; CHẤT LƯỢNG</span>
          <h2 className="section-title">Vì sao nên luyện thi ĐGNL Quân đội tại HSA Education?</h2>
          <p className="section-desc">
            Hệ thống giáo dục dẫn đầu trong đào tạo trực tuyến kỳ thi Đánh giá năng lực tại Việt Nam.
          </p>
        </div>

        <div className="grid-3">
          {reasons.map((r) => (
            <div className="card whyus-card" key={r.title}>
              <span className="benefit-icon">{r.icon}</span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{r.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.5 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
