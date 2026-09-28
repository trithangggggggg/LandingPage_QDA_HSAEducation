import { useState, useEffect } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import StatsCards from '../components/admin/StatsCards';
import RegistrationTable from '../components/admin/RegistrationTable';
import { mockRegistrations, type Registration } from '../data/mockData';
import '../styles/admin.css';

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>(mockRegistrations);

  useEffect(() => {
    // Load persisted submissions from localStorage and merge with mock data
    try {
      const stored = localStorage.getItem('hsa_registrations');
      if (stored) {
        const localList: Registration[] = JSON.parse(stored);
        // Combine newest local submissions first, then mock registrations
        setRegistrations([...localList, ...mockRegistrations]);
      }
    } catch (e) {
      console.error('Failed to load registrations from localStorage:', e);
    }
  }, []);

  const [countdownDate, setCountdownDate] = useState(() => {
    return localStorage.getItem('hsa_countdown_target') || '2026-09-09T00:00';
  });

  const handleSaveCountdown = () => {
    const formatted = new Date(countdownDate).toISOString();
    localStorage.setItem('hsa_countdown_target', formatted);
    alert('Đã cập nhật thời gian đếm ngược thành công!');
  };

  const currentDate = new Date().toLocaleDateString('vi-VN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="admin-layout">
      <AdminSidebar activeItem="dashboard" />

      <main className="admin-main">
        <div className="admin-header">
          <div>
            <h1>Quản trị tuyển sinh Lớp QDA03 – ĐGNL Quân Đội</h1>
            <p className="admin-header-date">Hôm nay: {currentDate} | Mục tiêu: 25 Trường Quân đội</p>
          </div>
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '100px',
                background: 'var(--primary-bg)',
                color: 'var(--primary)',
                fontWeight: 600,
                fontSize: '0.82rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  display: 'inline-block',
                }}
              />
              Hệ thống hoạt động bình thường
            </span>
          </div>
        </div>

        <div style={{ marginBottom: '28px', background: 'var(--bg-white)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <h3 style={{ fontSize: '1rem', margin: 0 }}>Cài đặt đếm ngược:</h3>
          <input 
            type="datetime-local" 
            value={countdownDate.slice(0, 16)} 
            onChange={(e) => setCountdownDate(e.target.value)}
            style={{ padding: '8px', border: '1px solid var(--border)', borderRadius: '4px' }}
          />
          <button 
            className="btn btn-primary" 
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            onClick={handleSaveCountdown}
          >
            Lưu thay đổi
          </button>
        </div>

        <StatsCards registrations={registrations} />

        <RegistrationTable registrations={registrations} />
      </main>
    </div>
  );
}
