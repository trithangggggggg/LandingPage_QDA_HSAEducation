const scheduleCards = [
  {
    icon: '🌙',
    title: 'Khung giờ chính: 21h30 – 23h00',
    desc: 'Học online các tối trong tuần trên Classin, không trùng lịch học chính khóa trên trường.',
  },
  {
    icon: '💬',
    title: 'Tương tác hai chiều với giáo viên',
    desc: 'Bật mic, giơ tay tương tác trực tiếp với các thầy cô đầu ngành, được giải đáp tức thì mọi thắc mắc.',
  },
  {
    icon: '📼',
    title: 'Video Record lưu trữ trọn đời',
    desc: '100% buổi học được ghi lại sắc nét, xem lại và ôn tập bất cứ khi nào cần trên hệ thống.',
  },
  {
    icon: '🎁',
    title: 'Tặng 160 Video chữa đề TN THPT',
    desc: 'Được cập nhật trực tiếp trên tài khoản học từ tháng 11/2026, giúp con tự tin đạt điểm cao môn thi tốt nghiệp.',
  },
];

export default function ScheduleSection() {
  return (
    <section className="section" id="schedule">
      <div className="container">
        <div className="schedule-grid">
          <div className="schedule-info">
            <span className="section-badge">HÌNH THỨC &amp; THỜI GIAN HỌC</span>
            <h2>Học trực tuyến Classin – Tương tác 2 chiều đỉnh cao</h2>
            <p>
              Khóa học Lớp QDA03 tối ưu hóa 100% thời gian cho học sinh lớp 11 và 12. 
              Mỗi buổi học 90 phút được thiết kế cô đọng, chuyên sâu, kèm bài tập khảo sát và video xem lại trọn đời.
            </p>
            <div style={{ marginTop: '24px' }}>
              <a href="#pricing" className="btn btn-primary">
                Đăng ký nhận lịch học chi tiết
              </a>
            </div>
          </div>

          <div className="schedule-cards">
            {scheduleCards.map((c) => (
              <div className="schedule-card card" key={c.title}>
                <div className="schedule-card-icon">{c.icon}</div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>{c.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-body)' }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
