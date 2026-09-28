import type { MouseEvent } from 'react';
import { Mascot } from 'page-mascot';

export default function Header() {
  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header" id="header">
      <div className="header-inner">
        <a href="#hero" onClick={handleLogoClick} className="header-logo" title="Cuộn lên đầu trang">
          <img src="/images/teachers/logo_HSA.png" alt="HSA Education" />
          <div className="header-logo-text">
            <span>HSA Education</span>
            <span>Chuyên luyện thi ĐGNL Quân đội (QDA)</span>
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div 
            className="header-mascot-box"
            title="Bấm vào tôi để xem phản ứng!"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Mascot
              directions="/mascots/fox-directions.webp"
              reactions="/mascots/fox-reactions.webp"
              size={48}
              label="HSA Mascot"
            />
          </div>

          <a
            href="tel:0961167606"
            style={{
              color: '#ffaa00',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            📞 0961.167.606
          </a>
          <a href="#contact" className="btn btn-primary header-cta">
            Đăng ký Lớp QDA03
          </a>
        </div>
      </div>
    </header>
  );
}

