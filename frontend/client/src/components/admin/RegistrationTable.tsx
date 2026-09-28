import { useState } from 'react';
import type { Registration } from '../../data/mockData';

interface Props {
  registrations: Registration[];
}

export default function RegistrationTable({ registrations }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('ALL');

  const filteredRegistrations = registrations.filter((reg) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      reg.studentName.toLowerCase().includes(term) ||
      reg.parentPhone.includes(term) ||
      (reg.province && reg.province.toLowerCase().includes(term)) ||
      (reg.targetSchool && reg.targetSchool.toLowerCase().includes(term));

    const matchesType =
      selectedType === 'ALL' ||
      (selectedType === 'INDIVIDUAL' && reg.registrationType === 'Cá nhân') ||
      (selectedType === 'GROUP' && reg.registrationType.includes('Nhóm'));

    return matchesSearch && matchesType;
  });

  const getBadgeClass = (type: string) => {
    if (type === 'Cá nhân') return 'individual';
    if (type.includes('2-3')) return 'group-small';
    if (type.includes('4-9')) return 'group-medium';
    if (type.includes('10+')) return 'group-large';
    return 'individual';
  };

  const exportToCSV = () => {
    const headers = ['STT', 'Họ và tên', 'SĐT Phụ huynh', 'Hình thức', 'Mục tiêu Trường QĐ', 'Tỉnh/Thành', 'Thời gian'];
    const rows = filteredRegistrations.map((r, i) => [
      i + 1,
      `"${r.studentName}"`,
      `"${r.parentPhone}"`,
      `"${r.registrationType}"`,
      `"${r.targetSchool || ''}"`,
      `"${r.province || ''}"`,
      `"${r.createdAt}"`,
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Dang_Ky_QDA03_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="table-card">
      <div className="table-header">
        <h2>Danh sách học viên đăng ký Lớp QDA03 ({filteredRegistrations.length})</h2>
        <div className="table-actions">
          <select
            className="search-input"
            style={{ width: '160px' }}
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="ALL">Tất cả hình thức</option>
            <option value="INDIVIDUAL">Cá nhân</option>
            <option value="GROUP">Theo nhóm</option>
          </select>

          <input
            type="text"
            className="search-input"
            placeholder="Tìm theo tên, SĐT, trường QĐ, tỉnh..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            type="button"
            className="btn btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            onClick={exportToCSV}
            title="Xuất file CSV"
          >
            📥 Xuất CSV
          </button>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th style={{ width: '50px' }}>STT</th>
              <th>Họ và tên học sinh</th>
              <th>SĐT phụ huynh</th>
              <th>Hình thức đăng ký</th>
              <th>Mục tiêu Trường QĐ</th>
              <th>Tỉnh / Thành</th>
              <th>Thời gian gửi</th>
            </tr>
          </thead>
          <tbody>
            {filteredRegistrations.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '36px', color: 'var(--text-muted)' }}>
                  Không tìm thấy đăng ký nào phù hợp với tìm kiếm.
                </td>
              </tr>
            ) : (
              filteredRegistrations.map((item, index) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: 600, color: 'var(--text-muted)' }}>{index + 1}</td>
                  <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.studentName}</td>
                  <td>
                    <a href={`tel:${item.parentPhone}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
                      {item.parentPhone}
                    </a>
                  </td>
                  <td>
                    <span className={`type-badge ${getBadgeClass(item.registrationType)}`}>
                      {item.registrationType}
                    </span>
                  </td>
                  <td style={{ color: 'var(--primary)', fontWeight: 500 }}>
                    {item.targetSchool || 'Chưa chọn trường'}
                  </td>
                  <td>{item.province || 'Chưa cập nhật'}</td>
                  <td style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{item.createdAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <span>
          Đang hiển thị {filteredRegistrations.length} / {registrations.length} đăng ký
        </span>
        <span>Dữ liệu cập nhật theo thời gian thực (Lớp QDA03)</span>
      </div>
    </div>
  );
}
