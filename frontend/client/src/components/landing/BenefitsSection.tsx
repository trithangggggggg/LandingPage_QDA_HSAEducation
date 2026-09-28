const examStructure = [
  {
    part: 'Phần 1',
    title: 'Toán học & Xử lí số liệu',
    sub: 'Tư duy định lượng',
    desc: '50 câu hỏi gồm 35 câu trắc nghiệm khách quan 4 lựa chọn và 15 câu hỏi điền đáp án ngắn. Đánh giá khả năng suy luận logic và tính toán nhanh.',
    badge: '50 câu hỏi',
  },
  {
    part: 'Phần 2',
    title: 'Văn học – Ngôn ngữ',
    sub: 'Tư duy định tính',
    desc: '50 câu trắc nghiệm gồm 25 câu hỏi đơn lẻ và 5 chùm câu hỏi ngữ cảnh chuyên sâu (mỗi chùm đi kèm 5 câu hỏi). Đánh giá năng lực đọc hiểu và cảm thụ.',
    badge: '50 câu hỏi',
  },
  {
    part: 'Phần 3 (Tùy chọn)',
    title: 'Khoa học hoặc Tiếng Anh',
    sub: 'Thí sinh chọn 1 trong 2',
    desc: '50 câu hỏi (trắc nghiệm và điền đáp án, thang điểm 50). Khoa học chọn 1 trong 4 tổ hợp: Lý-Hóa, Hóa-Sinh, Lý-Sinh, hoặc Sử-Địa.',
    badge: 'Thang điểm 50',
  },
];

const benefits = [
  {
    icon: '📚',
    title: 'Hệ thống hóa toàn diện 10 - 11 - 12',
    desc: 'Bao quát toàn bộ kiến thức nền tảng cả 4 phần thi, bám sát ma trận chương trình giáo dục phổ thông mới.',
  },
  {
    icon: '⚡',
    title: 'Kỹ năng & Chiến thuật phòng thi',
    desc: 'Phát triển phản xạ giải quyết vấn đề, phương pháp xử lý câu hỏi trắc nghiệm và câu hỏi điền đáp án không bị bẫy.',
  },
  {
    icon: '🎯',
    title: 'Website thi thử mô phỏng thi thật',
    desc: 'Làm quen áp lực phòng thi với 8 bài thi đầu vào, 32 bài khảo sát định kỳ hàng tháng và 12 bài thi thử chuẩn hóa.',
  },
  {
    icon: '🎖️',
    title: 'Hỗ trợ đắc lực Tốt nghiệp THPT 2027',
    desc: 'Học một được hai: Vừa tự tin chinh phục kỳ thi ĐGNL Quân đội QDA, vừa đạt điểm cao kỳ thi Tốt nghiệp THPT.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        {/* Exam structure highlight */}
        <div className="section-header">
          <span className="section-badge">CẤU TRÚC ĐỀ THI CHUẨN BAN TSQS BỘ QUỐC PHÒNG</span>
          <h2 className="section-title">Bài thi ĐGNL Quân đội (QDA) gồm những gì?</h2>
          <p className="section-desc">
            Bài thi ĐGNL phục vụ tuyển sinh đại học, cao đẳng khối các trường Quân đội do Ban TSQS Bộ Quốc phòng
            chủ trì, phối hợp cùng Viện Đào tạo số &amp; Khảo thí ĐHQG Hà Nội xây dựng ngân hàng câu hỏi.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: '48px' }}>
          {examStructure.map((item) => (
            <div
              key={item.part}
              className="card"
              style={{
                borderTop: '4px solid var(--primary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                    {item.part}
                  </span>
                  <span
                    style={{
                      background: 'var(--primary-bg)',
                      color: 'var(--primary)',
                      padding: '3px 8px',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '4px' }}>{item.title}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '12px' }}>
                  {item.sub}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Course Core Benefits */}
        <div className="section-header" style={{ marginTop: '24px' }}>
          <span className="section-badge">MỤC TIÊU KHÓA HỌC QDA03</span>
          <h2 className="section-title">Khóa học Lớp QDA03 mang lại giá trị gì cho học sinh 2K9?</h2>
          <p className="section-desc">
            Thiết kế tối ưu cho học sinh lớp 11 chuẩn bị lên lớp 12 trên toàn quốc mong muốn khoác lên mình màu áo xanh người lính.
          </p>
        </div>

        <div className="grid-4">
          {benefits.map((b) => (
            <div className="card benefit-card" key={b.title}>
              <span className="benefit-icon">{b.icon}</span>
              <h3 style={{ fontSize: '1.05rem' }}>{b.title}</h3>
              <p style={{ fontSize: '0.88rem' }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
