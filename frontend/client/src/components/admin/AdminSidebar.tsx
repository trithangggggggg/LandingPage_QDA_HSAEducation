import { Link } from 'react-router-dom';

interface Props {
  activeItem: string;
}

export default function AdminSidebar({ activeItem }: Props) {
  const navItems = [
    { key: 'dashboard', icon: '📊', label: 'Dashboard' },
    { key: 'registrations', icon: '📋', label: 'Danh sách đăng ký' },
    { key: 'export', icon: '📥', label: 'Export Excel', disabled: true },
  ];

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <img src="/images/teachers/logo_HSA.png" alt="HSA" />
        <div className="sidebar-header-text">
          <span>HSA Admin</span>
          <span>Quản trị hệ thống</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div
            key={item.key}
            className={`sidebar-nav-item ${activeItem === item.key ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link to="/" className="sidebar-back-link">
          <span>← </span>
          <span>Về trang Landing</span>
        </Link>
      </div>
    </aside>
  );
}
