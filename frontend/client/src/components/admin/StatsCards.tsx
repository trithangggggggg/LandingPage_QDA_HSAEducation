import type { Registration } from '../../data/mockData';

interface Props {
  registrations: Registration[];
}

export default function StatsCards({ registrations }: Props) {
  const total = registrations.length;
  const individualCount = registrations.filter((r) => r.registrationType === 'Cá nhân').length;
  const groupCount = registrations.filter((r) => r.registrationType.includes('Nhóm')).length;
  
  // Calculate unique provinces
  const provinces = new Set(registrations.map((r) => r.province).filter(Boolean));

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon green">📊</div>
        <div className="stat-info">
          <div className="stat-value">{total}</div>
          <div className="stat-label">Tổng số đăng ký</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon blue">👤</div>
        <div className="stat-info">
          <div className="stat-value">{individualCount}</div>
          <div className="stat-label">Đăng ký cá nhân</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon orange">👥</div>
        <div className="stat-info">
          <div className="stat-value">{groupCount}</div>
          <div className="stat-label">Đăng ký theo nhóm</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon purple">📍</div>
        <div className="stat-info">
          <div className="stat-value">{provinces.size}</div>
          <div className="stat-label">Tỉnh / Thành phố</div>
        </div>
      </div>
    </div>
  );
}
