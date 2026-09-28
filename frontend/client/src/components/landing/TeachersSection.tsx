import { advisors, teachers } from '../../data/mockData';

export default function TeachersSection() {
  return (
    <section className="section" id="teachers">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">PROFILE GIẢNG VIÊN &amp; BAN CỐ VẤN KHÓA QDA03</span>
          <h2 className="section-title">Đội ngũ Ban Cố vấn &amp; Giảng viên chuyên môn</h2>
          <p className="section-desc">
            Quy tụ đội ngũ các thầy cô đầu ngành đến từ các Học viện, trường Đại học khối ngành Quân đội, 
            ĐHQG Hà Nội và các trường THPT Chuyên tại Hà Nội.
          </p>
        </div>

        {/* Ban cố vấn */}
        <h3 className="teachers-subtitle">Ban cố vấn chuyên môn</h3>
        <div className="advisors-grid">
          {advisors.map((a) => (
            <div className="teacher-card" key={a.name}>
              <div className="card">
                <img src={a.image} alt={a.name} className="teacher-avatar" />
                <div className="teacher-name">{a.name}</div>
                <div className="teacher-role">{a.role}</div>
                <div className="teacher-title">{a.title}</div>
                <p className="teacher-desc">{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Đội ngũ giáo viên */}
        <h3 className="teachers-subtitle">Đội ngũ Giảng viên giảng dạy các môn học</h3>
        <div className="teachers-marquee">
          <div className="marquee-track">
            {/* Original list */}
            {teachers.map((t) => (
              <div className="teacher-card" key={t.name}>
                <div className="card">
                  <img src={t.image} alt={t.name} className="teacher-avatar" />
                  <div className="teacher-name">{t.name}</div>
                  <div className="teacher-role">{t.subject}</div>
                  <div className="teacher-title">{t.title}</div>
                  <p className="teacher-desc">{t.description}</p>
                </div>
              </div>
            ))}
            {/* Duplicated list for infinite scroll effect */}
            {teachers.map((t) => (
              <div className="teacher-card" key={t.name + '_dup'}>
                <div className="card">
                  <img src={t.image} alt={t.name} className="teacher-avatar" />
                  <div className="teacher-name">{t.name}</div>
                  <div className="teacher-role">{t.subject}</div>
                  <div className="teacher-title">{t.title}</div>
                  <p className="teacher-desc">{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
