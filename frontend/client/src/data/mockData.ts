// ============================================
// Mock Data – HSA Education: Khóa học Lớp QDA03
// Bài thi ĐGNL Tuyển sinh ĐH, CĐ Khối các trường Quân đội
// ============================================

// --- 1. Ban Cố vấn chuyên môn ---
export interface Advisor {
  name: string;
  title: string;
  role: string;
  description: string;
  image: string;
}

export const advisors: Advisor[] = [
  {
    name: 'TS. Đặng Ngọc Khương',
    title: 'Tiến sĩ Lí luận văn học',
    role: 'Trưởng ban cố vấn',
    description: 'Giáo viên đầu tiên trên cả nước tổ chức ôn luyện thi ĐGNL. Giải Xuất sắc Đổi mới phương pháp giảng dạy VNU Teaching Awards 2020. Bằng khen Bộ GD&ĐT. Chủ biên & đồng chủ biên 12 đầu sách ôn thi ĐGNL.',
    image: '/images/teachers/giaovien_dang_ngoc_khuong.png',
  },
  {
    name: 'PGS.TS. Phạm Hoàng Hà',
    title: 'Phó Giáo sư, Tiến sĩ Toán học',
    role: 'Cố vấn môn Toán',
    description: 'Thành viên ban cố vấn chuyên môn, đạt giải thưởng công trình nghiên cứu Toán học. Tác giả SGK Toán 10 (Bộ Kết nối tri thức, NXB Giáo dục Việt Nam).',
    image: '/images/teachers/giaovien_pham_hoang_ha.png',
  },
  {
    name: 'TS. Trần Ngọc Giang',
    title: 'Tiến sĩ ĐH Newcastle, Australia',
    role: 'Cố vấn môn Tiếng Anh',
    description: 'Tiến sĩ Đại học Newcastle, Australia. Cố vấn chuyên môn xây dựng ma trận và định dạng câu hỏi Tiếng Anh chuẩn ĐGNL.',
    image: '/images/teachers/giaovien_tran_ngoc_giang.png',
  },
  {
    name: 'TS. Trần Thị Thu Hương',
    title: 'Tiến sĩ Ngữ văn',
    role: 'Cố vấn môn Ngữ văn',
    description: 'Tiến sĩ chuyên ngành Ngữ văn. Cố vấn chuyên môn cấu trúc ngữ liệu và chùm câu hỏi đọc hiểu tư duy định tính.',
    image: '/images/teachers/giaovien_tran_thi_thu_huong.png',
  },
];

// --- 2. Đội ngũ Giảng viên giảng dạy ---
export interface Teacher {
  name: string;
  title: string;
  subject: string;
  description: string;
  image: string;
}

export const teachers: Teacher[] = [
  {
    name: 'ThS. Nguyễn Tiến Anh',
    title: 'Thạc sĩ - Giảng viên cao cấp',
    subject: 'Môn Toán học',
    description: 'Giảng viên giàu kinh nghiệm luyện thi ĐGNL, chuyên gia phương pháp giải toán tư duy định lượng và xử lý số liệu.',
    image: '/images/teachers/giaovien_nguyen_tien_anh.png',
  },
  {
    name: 'TS. Vũ Văn Thủy',
    title: 'Tiến sĩ Hóa học',
    subject: 'Môn Hóa học',
    description: 'Tiến sĩ Hóa học, chuyên gia biên soạn ngân hàng câu hỏi phần Khoa học tự nhiên kỳ thi ĐGNL Quân đội.',
    image: '/images/teachers/giaovien_vu_van_thuy.png',
  },
  {
    name: 'ThS. Trần Vũ Anh',
    title: 'Thạc sĩ Lí luận giảng dạy',
    subject: 'Môn Tiếng Anh',
    description: 'Thạc sĩ phương pháp giảng dạy, bám sát ma trận đề thi trắc nghiệm và kỹ năng điền đáp án chuẩn xác.',
    image: '/images/teachers/giaovien_tran_vu_anh.png',
  },
  {
    name: 'Thầy Đỗ Xuân Thắng',
    title: 'Cử nhân - Phó nhóm chuyên môn Toán',
    subject: 'Môn Toán học',
    description: 'Tác giả sách Chuyên đề trọng tâm ĐGNL phần Định lượng (NXB Dân Trí). Hơn 10 năm kinh nghiệm đồng hành cùng học sinh.',
    image: '/images/teachers/giaovien_do_xuan_thang.png',
  },
  {
    name: 'ThS. Trần Hải Linh',
    title: 'Thạc sĩ Ngữ văn',
    subject: 'Môn Ngữ văn',
    description: 'Thủ khoa khối C THPT Xuân Đỉnh. Giảng viên chuyên sâu về dạng thức câu hỏi trắc nghiệm ngữ văn và đọc hiểu liên môn.',
    image: '/images/teachers/giaovien_tran_hai_linh.png',
  },
  {
    name: 'Thầy Hoàng Phúc Đức',
    title: 'Cử nhân Giỏi ĐH Ngoại thương, TESOL',
    subject: 'Môn Tiếng Anh',
    description: 'Tác giả "Bộ 25 đề thực chiến phòng thi môn Tiếng Anh" (NXB Dân Trí). Truyền cảm hứng và phương pháp tư duy ngôn ngữ nhanh.',
    image: '/images/teachers/giaovien_hoang_phuc_duc.png',
  },
  {
    name: 'ThS. Phạm Thị Hải Yến',
    title: 'Thạc sĩ Vật lý',
    subject: 'Môn Vật lý',
    description: 'Tốt nghiệp xuất sắc lớp CLC Khoa Vật lí - ĐH Sư phạm Hà Nội. Giàu kinh nghiệm luyện đề tổ hợp Khoa học.',
    image: '/images/teachers/giaovien_pham_thi_hai_yen.png',
  },
  {
    name: 'ThS. Hà Thị Dung',
    title: 'Thạc sĩ Sinh học',
    subject: 'Môn Sinh học',
    description: 'Á khoa đầu ra K56 CLC Khoa Sinh học - ĐH Sư phạm Hà Nội. Phương pháp ghi nhớ logic bảng số liệu sinh học.',
    image: '/images/teachers/giaovien_ha_thi_dung.png',
  },
  {
    name: 'ThS. Vũ Thúy Hiền',
    title: 'Thạc sĩ Địa lí',
    subject: 'Địa lí & Lịch sử',
    description: 'Giải Ba HSG Quốc gia. Giảng viên hướng dẫn kỹ năng khai thác Atlat và tư duy liên môn tổ hợp Sử - Địa.',
    image: '/images/teachers/giaovien_vu_thuy_hien.png',
  },
  {
    name: 'ThS. Đỗ Văn Bình',
    title: 'Thạc sĩ Sư phạm Hóa học',
    subject: 'Môn Hóa học',
    description: 'Tốt nghiệp Xuất sắc ngành Sư phạm Hóa - ĐH Sư phạm Hà Nội 2. Tác giả nhiều chuyên đề bồi dưỡng học sinh giỏi.',
    image: '/images/teachers/giaovien_do_van_binh.png',
  },
  {
    name: 'ThS. Hoàng Ngọc Chiến',
    title: 'Thạc sĩ Toán học',
    subject: 'Môn Toán học',
    description: 'Chuyên gia huấn luyện kỹ năng bấm máy tính Casio và tư duy phản xạ nhanh phần Định lượng.',
    image: '/images/teachers/giaovien_hoang_ngoc_chien.png',
  },
  {
    name: 'ThS. Hoàng Nhật Linh',
    title: 'Thạc sĩ Ngôn ngữ Anh',
    subject: 'Môn Tiếng Anh',
    description: 'Giảng viên giàu năng lượng với phương pháp làm chủ từ vựng và cấu trúc ngữ pháp học thuật.',
    image: '/images/teachers/giaovien_hoang_nhat_linh.png',
  },
  {
    name: 'Cô Đoàn Thu Trang',
    title: 'Cử nhân Sư phạm Toán',
    subject: 'Môn Toán học',
    description: 'Phụ trách kèm cặp chi tiết các chuyên đề nền tảng lớp 10, 11 và giải đáp trực tiếp 1-1 cho học sinh.',
    image: '/images/teachers/giaovien_doan_thu_trang.png',
  },
  {
    name: 'Thầy Trần Hoàng Anh',
    title: 'Cử nhân Toán học',
    subject: 'Môn Toán học',
    description: 'Chuyên gia phân tích đề thi thử mô phỏng và chiến thuật tối ưu thời gian làm bài phòng thi.',
    image: '/images/teachers/giaovien_tran_hoang_anh.png',
  },
  {
    name: 'Thầy Nguyễn Tiến Đạt',
    title: 'Cử nhân Toán học',
    subject: 'Môn Toán học',
    description: 'Kèm cặp và chữa chi tiết từng câu hỏi trắc nghiệm điền đáp án - phần thi quyết định điểm số cao.',
    image: '/images/teachers/giaovien_nguyen_tien_dat.png',
  },
];

// --- 3. Học viên Bảng Vàng Vinh Danh QDA ---
export interface HonorStudent {
  name: string;
  targetSchool: string;
  totalScore: number;
  maxScore: number;
  badge: string;
  note: string;
}

export const qdaHonorStudents: HonorStudent[] = [
  {
    name: 'Nguyễn Văn Minh',
    targetSchool: 'Học viện Kỹ thuật Quân sự',
    totalScore: 24,
    maxScore: 30,
    badge: 'Bảng vàng QDA 2026 (Top 2 toàn quốc)',
    note: 'Chỉ cách thủ khoa toàn quốc 2 điểm, trúng tuyển hệ Quân sự.',
  },
  {
    name: 'Lê Hoàng Nam',
    targetSchool: 'Học viện Quân y',
    totalScore: 24,
    maxScore: 30,
    badge: 'Bảng vàng QDA 2026 (Top 2 toàn quốc)',
    note: 'Đạt điểm số xuất sắc ngay trong mùa thi ĐGNL Quân đội đầu tiên.',
  },
  {
    name: 'Trần Đức Dũng',
    targetSchool: 'Trường Sĩ quan Lục quân 1',
    totalScore: 23.5,
    maxScore: 30,
    badge: 'Học viên xuất sắc',
    note: 'Điểm Định lượng tuyệt đối, hoàn thành xuất sắc tổ hợp Khoa học.',
  },
  {
    name: 'Phạm Tuấn Anh',
    targetSchool: 'Học viện Phòng không - Không quân',
    totalScore: 23,
    maxScore: 30,
    badge: 'Học viên xuất sắc',
    note: 'Học sinh lớp QDA khóa trước, giữ vững thành tích qua 32 bài khảo sát.',
  },
];

// --- 4. Danh sách 25 Học viện, Trường Sĩ quan, Cao đẳng Quân đội sử dụng kết quả QDA ---
export interface MilitarySchool {
  id: number;
  name: string;
  type: 'ACADEMY' | 'OFFICER' | 'COLLEGE';
  typeName: string;
  location: string;
  highlight: string;
}

export const militarySchools: MilitarySchool[] = [
  { id: 1, name: 'Học viện Kỹ thuật Quân sự', type: 'ACADEMY', typeName: 'Học viện', location: 'Hà Nội', highlight: 'Đơn vị kỹ thuật nòng cốt Quân đội' },
  { id: 2, name: 'Học viện Quân y', type: 'ACADEMY', typeName: 'Học viện', location: 'Hà Nội', highlight: 'Bác sĩ, Dược sĩ quân y chất lượng cao' },
  { id: 3, name: 'Học viện Hậu cần', type: 'ACADEMY', typeName: 'Học viện', location: 'Hà Nội', highlight: 'Đào tạo cán bộ hậu cần Quân đội' },
  { id: 4, name: 'Học viện Khoa học Quân sự', type: 'ACADEMY', typeName: 'Học viện', location: 'Hà Nội', highlight: 'Ngoại ngữ, Tình báo, Trinh sát' },
  { id: 5, name: 'Học viện Phòng không - Không quân', type: 'ACADEMY', typeName: 'Học viện', location: 'Hà Nội', highlight: 'Kỹ sư, Sĩ quan PK-KQ' },
  { id: 6, name: 'Học viện Biên phòng', type: 'ACADEMY', typeName: 'Học viện', location: 'Hà Nội', highlight: 'Chỉ huy biên phòng, quản lý biên giới' },
  { id: 7, name: 'Trường Sĩ quan Lục quân 1', type: 'OFFICER', typeName: 'Trường Sĩ quan', location: 'Hà Nội', highlight: 'Trường đào tạo sĩ quan chỉ huy lục quân phía Bắc' },
  { id: 8, name: 'Trường Sĩ quan Lục quân 2', type: 'OFFICER', typeName: 'Trường Sĩ quan', location: 'Đồng Nai', highlight: 'Trường ĐH Nguyễn Huệ phía Nam' },
  { id: 9, name: 'Trường Sĩ quan Chính trị', type: 'OFFICER', typeName: 'Trường Sĩ quan', location: 'Bắc Ninh', highlight: 'Đào tạo cán bộ chính trị trong quân đội' },
  { id: 10, name: 'Trường Sĩ quan Đặc công', type: 'OFFICER', typeName: 'Trường Sĩ quan', location: 'Hà Nội', highlight: 'Lực lượng tác chiến đặc biệt tinh nhuệ' },
  { id: 11, name: 'Trường Sĩ quan Phòng hoá', type: 'OFFICER', typeName: 'Trường Sĩ quan', location: 'Hà Nội', highlight: 'Đào tạo sĩ quan tác chiến phòng hóa' },
  { id: 12, name: 'Trường Sĩ quan Pháo binh', type: 'OFFICER', typeName: 'Trường Sĩ quan', location: 'Hà Nội', highlight: 'Binh chủng Pháo binh anh hùng' },
  { id: 13, name: 'Trường Sĩ quan Công binh', type: 'OFFICER', typeName: 'Trường Sĩ quan', location: 'Bình Dương', highlight: 'Đào tạo sĩ quan công binh, cầu đường' },
  { id: 14, name: 'Trường Sĩ quan Tăng thiết giáp', type: 'OFFICER', typeName: 'Trường Sĩ quan', location: 'Vĩnh Phúc', highlight: 'Binh chủng Tăng thiết giáp' },
  { id: 15, name: 'Trường Sĩ quan Thông tin', type: 'OFFICER', typeName: 'Trường Sĩ quan', location: 'Khánh Hòa', highlight: 'Đào tạo sĩ quan chỉ huy tham mưu thông tin' },
  { id: 16, name: 'Trường Sĩ quan Không quân', type: 'OFFICER', typeName: 'Trường Sĩ quan', location: 'Khánh Hòa', highlight: 'Đào tạo phi công quân sự' },
  { id: 17, name: 'Trường Sĩ quan Kỹ thuật Quân sự (Vin-Hem Pich)', type: 'OFFICER', typeName: 'Trường Sĩ quan', location: 'TP.HCM', highlight: 'Chuyên gia kỹ thuật quân sự phía Nam' },
  { id: 18, name: 'Trường CĐ Kỹ thuật Phòng không - Không quân', type: 'COLLEGE', typeName: 'Cao đẳng', location: 'Hà Nội', highlight: 'Đào tạo cao đẳng kỹ thuật chuyên môn PK-KQ' },
  { id: 19, name: 'Trường CĐ Kỹ thuật Hải quân', type: 'COLLEGE', typeName: 'Cao đẳng', location: 'TP.HCM', highlight: 'Kỹ thuật trang thiết bị Hải quân' },
  { id: 20, name: 'Trường CĐ Kỹ thuật Thông tin', type: 'COLLEGE', typeName: 'Cao đẳng', location: 'Khánh Hòa', highlight: 'Cao đẳng kỹ thuật viễn thông quân đội' },
  { id: 21, name: 'Trường CĐ Công nghiệp Quốc phòng', type: 'COLLEGE', typeName: 'Cao đẳng', location: 'Phú Thọ', highlight: 'Đào tạo nhân lực ngành công nghiệp QP' },
];

// --- 5. Danh sách Địa điểm tổ chức thi QDA ---
export interface ExamLocation {
  region: string;
  school: string;
  address: string;
}

export const examLocations: ExamLocation[] = [
  { region: 'Hà Nội', school: 'Học viện Kỹ thuật Quân sự', address: 'Số 236 Hoàng Quốc Việt, Bắc Từ Liêm, Hà Nội' },
  { region: 'Hà Nội', school: 'Viện Đào tạo số & Khảo thí ĐHQG Hà Nội', address: 'Tầng 5, Nhà C1T, Số 144 Xuân Thủy, Cầu Giấy, Hà Nội' },
  { region: 'Hà Nội', school: 'Trường ĐH Khoa học Tự nhiên - ĐHQGHN', address: 'Tầng 4,5 Nhà T5, Số 334 Nguyễn Trãi, Thanh Xuân, Hà Nội' },
  { region: 'Hà Nội', school: 'Trường Đại học Đại Nam', address: 'Tòa nhà GĐ1, GĐ2, Số 1 Phố Xốm, Phú Lương, Hà Nội' },
  { region: 'Hà Nội', school: 'Trường Đại học Giao thông vận tải', address: 'Số 3 phố Cầu Giấy, Phường Láng, Hà Nội' },
  { region: 'Miền Trung', school: 'Trường Sĩ quan Thông tin', address: 'Trung tâm CNTT & Ngoại ngữ, Số 75 đường 2 tháng 4, P. Bắc Nha Trang, Khánh Hòa' },
  { region: 'Miền Nam', school: 'Trường Sĩ quan Lục quân 2', address: 'Phường Tam Phước, TP. Biên Hòa, tỉnh Đồng Nai' },
];

// --- 6. Thống kê số buổi học & Lộ trình đào tạo (379+ buổi) ---
export const courseCurriculum = [
  {
    subject: 'Tư duy Định lượng (Toán)',
    icon: '📐',
    classin: '100 buổi trực tiếp Classin (58 lý thuyết + 42 luyện đề)',
    video: '20 video luyện đề chuyên sâu',
    desc: '50 câu hỏi (35 trắc nghiệm 4 lựa chọn + 15 điền đáp án). Rèn tư duy số học và xử lý số liệu.',
  },
  {
    subject: 'Tư duy Định tính (Ngữ văn)',
    icon: '📖',
    classin: '55 buổi trực tiếp Classin (25 lý thuyết + 30 luyện đề)',
    video: '20 video luyện đề chuyên sâu',
    desc: '50 câu hỏi trắc nghiệm (25 câu đơn + 5 chùm câu hỏi ngữ cảnh). Làm chủ kỹ năng đọc hiểu.',
  },
  {
    subject: 'Tiếng Anh (Tùy chọn)',
    icon: '🌐',
    classin: '55 buổi trực tiếp Classin (25 lý thuyết + 30 luyện đề)',
    video: '20 video luyện đề chuyên sâu',
    desc: '50 câu hỏi trắc nghiệm và điền đáp án. Chiến thuật hoàn thành nhanh bài thi ngoại ngữ.',
  },
  {
    subject: 'Tổ hợp Khoa học (Lý, Hóa, Sinh, Sử, Địa)',
    icon: '🔬',
    classin: '175 buổi trực tiếp Classin (75 lý thuyết + 100 luyện đề)',
    video: '10 video luyện đề chuyên sâu',
    desc: 'Thí sinh chọn 1 trong 4 tổ hợp: Lý-Hóa, Hóa-Sinh, Lý-Sinh, Sử-Địa. Kiến thức bao quát lớp 10, 11, 12.',
  },
  {
    subject: 'Hệ thống Thực chiến & Thi thử',
    icon: '🎯',
    classin: '52 bài khảo sát & thi thử',
    video: '50 video nền tảng 10, 11 + Casio',
    desc: '8 bài thi đầu vào, 32 bài khảo sát định kỳ hằng tháng, 12 bài thi thử mô phỏng như thi thật.',
  },
];

// --- 7. Tiến trình học 3 giai đoạn QDA ---
export const qdaPhases = [
  {
    num: 1,
    dates: '09/08/2026 – 30/11/2026',
    title: 'Giai đoạn 1: Bổ trợ nền tảng, lấy lại gốc',
    desc: 'Hệ thống hóa toàn bộ kiến thức lớp 10, 11, 12 liên quan đến 4 phần thi. Học trực tiếp qua Classin với tương tác 2 chiều.',
    badge: 'Nền tảng vững vàng',
  },
  {
    num: 2,
    dates: '01/12/2026 – 15/05/2027',
    title: 'Giai đoạn 2: Củng cố kiến thức & Luyện đề tổng hợp QDA',
    desc: 'Tiếp cận ngân hàng đề chuẩn hóa từ Viện Khảo thí ĐHQGHN và Ban TSQS Bộ Quốc phòng. Luyện tập kỹ năng làm bài trắc nghiệm và áp lực thời gian.',
    badge: 'Luyện đề tổng hợp',
  },
  {
    num: 3,
    dates: '15/05/2027 – 15/06/2027',
    title: 'Giai đoạn 3: Luyện đề cấp tốc & Thực chiến phòng thi QDA',
    desc: '12 bài thi thử bấm giờ mô phỏng phòng thi thật. Tinh chỉnh chiến thuật làm bài, sẵn sàng cho đợt thi chính thức (Tuần 3 tháng 6/2027).',
    badge: 'Thực chiến về đích',
  },
];

// --- 8. Mock danh sách đăng ký tư vấn lớp QDA03 ---
export interface Registration {
  id: number;
  studentName: string;
  parentPhone: string;
  registrationType: string;
  province: string;
  targetSchool: string;
  createdAt: string;
}

export const mockRegistrations: Registration[] = [
  { id: 1, studentName: 'Nguyễn Văn Hùng', parentPhone: '0912345678', registrationType: 'Cá nhân', province: 'Hà Nội', targetSchool: 'Học viện Kỹ thuật Quân sự', createdAt: '2026-09-15 08:30' },
  { id: 2, studentName: 'Trần Quang Dũng', parentPhone: '0987654321', registrationType: 'Nhóm 2-3', province: 'Hải Phòng', targetSchool: 'Học viện Quân y', createdAt: '2026-09-15 09:15' },
  { id: 3, studentName: 'Lê Hoàng Long', parentPhone: '0901234567', registrationType: 'Cá nhân', province: 'Nghệ An', targetSchool: 'Trường Sĩ quan Lục quân 1', createdAt: '2026-09-15 10:00' },
  { id: 4, studentName: 'Phạm Đức Thắng', parentPhone: '0976543210', registrationType: 'Nhóm 4-9', province: 'Thanh Hóa', targetSchool: 'Học viện Phòng không - Không quân', createdAt: '2026-09-15 11:30' },
  { id: 5, studentName: 'Hoàng Minh Tuấn', parentPhone: '0965432109', registrationType: 'Cá nhân', province: 'Hà Nội', targetSchool: 'Học viện Hậu cần', createdAt: '2026-09-16 07:45' },
  { id: 6, studentName: 'Vũ Quốc Bảo', parentPhone: '0943216789', registrationType: 'Nhóm 10+', province: 'Nam Định', targetSchool: 'Trường Sĩ quan Thông tin', createdAt: '2026-09-16 08:20' },
  { id: 7, studentName: 'Đỗ Tuấn Khang', parentPhone: '0932109876', registrationType: 'Cá nhân', province: 'Thái Bình', targetSchool: 'Học viện Biên phòng', createdAt: '2026-09-16 14:00' },
  { id: 8, studentName: 'Ngô Trọng Hiếu', parentPhone: '0921098765', registrationType: 'Nhóm 2-3', province: 'Hà Tĩnh', targetSchool: 'Trường Sĩ quan Chính trị', createdAt: '2026-09-17 09:10' },
  { id: 9, studentName: 'Bùi Đình Khang', parentPhone: '0910987654', registrationType: 'Cá nhân', province: 'Bắc Ninh', targetSchool: 'Trường Sĩ quan Lục quân 2', createdAt: '2026-09-17 10:45' },
  { id: 10, studentName: 'Đinh Tiến Đạt', parentPhone: '0898765432', registrationType: 'Nhóm 4-9', province: 'Vĩnh Phúc', targetSchool: 'Trường Sĩ quan Tăng thiết giáp', createdAt: '2026-09-17 15:30' },
];
