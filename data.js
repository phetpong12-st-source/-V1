// แก้ไขข้อมูลในส่วนนี้ได้เลย
// url สามารถเป็นลิงก์ Google Looker Studio, Power BI, Tableau,
// Google Sheets หรือ Dashboard ของหน่วยงานอื่นได้
const DASHBOARDS = [
  {
    department: "IV-1 ผลด้านการดูแลสุขภาพ",
    title: "Dashboard  ผลลัพธ์การดูแลผู้ป่วยโดยรวม [IV-1, III] ** (การเสียชีวิต การส่งต่อ การกลับมารักษาหรือการนอน รพ.ซ้ำ) ที่สะท้อนคุณภาพการดูแลรักษา",
    category: "ผลลัพธ์การดูแลผู้ป่วยโดยรวม [IV-1, III]",
    description: "ผลลัพธ์การดูแลผู้ป่วยโดยรวม [IV-1, III]",
    icon: "🧑‍⚕️",
    url: "https://docs.google.com/spreadsheets/d/1wyc_wKjcKn8hyShRpXnEAqPEX1X-ZdgdpyxOh4QiZm8/edit?gid=0#gid=0"
  },
  {
    department: "งานผู้ป่วยนอก",
    title: "Dashboard OPD",
    category: "บริการ",
    description: "ข้อมูลผู้รับบริการและตัวชี้วัดงานผู้ป่วยนอก",
    icon: "🏥",
    url: "https://example.com/dashboard-opd"
  },
  {
    department: "ศูนย์รับเรื่องร้องทุกข์",
    title: "Dashboard เรื่องร้องทุกข์",
    category: "คุณภาพ",
    description: "ติดตามจำนวน สถานะ และผลการดำเนินงานเรื่องร้องทุกข์",
    icon: "📝",
    url: "https://example.com/dashboard-complaints"
  },
  {
    department: "งานยุทธศาสตร์",
    title: "Dashboard ตัวชี้วัดองค์กร",
    category: "ยุทธศาสตร์",
    description: "ติดตามตัวชี้วัดและผลการดำเนินงานขององค์กร",
    icon: "📈",
    url: "https://docs.google.com/spreadsheets/d/1wyc_wKjcKn8hyShRpXnEAqPEX1X-ZdgdpyxOh4QiZm8/edit?pli=1&gid=1787171275#gid=1787171275"
  },
  {
    department: "กลุ่มงานประกันสุขภาพยุทธศาสตร์",
    title: "Dashboard รายงานผลงานกองทุน / ยอดชดเชย",
    category: "งานประกัน",
    description: "ข้อมูลรายงานผลงานกองทุน / ยอดชดเชย",
    icon: "👥",
    url: "https://chaiyo-report.web.app/"
  },
  {
    department: "กลุ่มงานงานการพยาบาลป้องกันควบคุมการติดเชื้อและหน่วยจ่ายกลาง",
    title: "Dashboard CSSD EXECUTIVE",
    category: "งานจ่ายกลาง",
    description: "ข้อมูลและตัวชี้วัดระบบบริหารจัดการและรายงานผลงานจ่ายกลาง",
    icon: "💰",
    url: "https://script.google.com/a/macros/rmutsb.ac.th/s/AKfycbwoqsMVyo6klD7iLkkJhG7hFjTMGE9h0K8zX9KkUSjcUuArxLxpUfA4KJ1woF1J5TK9iQ/exec"
  },
  {
    department: "กลุ่มงานงานการพยาบาลป้องกันควบคุมการติดเชื้อและหน่วยจ่ายกลาง",
    title: "Dashboard CSSD EXECUTIVE",
    category: "งานจ่ายกลาง",
    description: "ข้อมูลและตัวชี้วัดระบบบริหารจัดการและรายงานผลงานจ่ายกลาง",
    icon: "💰",
    url: "https://script.google.com/a/macros/rmutsb.ac.th/s/AKfycbwoqsMVyo6klD7iLkkJhG7hFjTMGE9h0K8zX9KkUSjcUuArxLxpUfA4KJ1woF1J5TK9iQ/exec"
  },
  {
    department: "กลุ่มงานงานการพยาบาลป้องกันควบคุมการติดเชื้อและหน่วยจ่ายกลาง",
    title: "Dashboard CSSD EXECUTIVE",
    category: "งานจ่ายกลาง",
    description: "ข้อมูลและตัวชี้วัดระบบบริหารจัดการและรายงานผลงานจ่ายกลาง",
    icon: "💰",
    url: "https://script.google.com/a/macros/rmutsb.ac.th/s/AKfycbwoqsMVyo6klD7iLkkJhG7hFjTMGE9h0K8zX9KkUSjcUuArxLxpUfA4KJ1woF1J5TK9iQ/exec"
  }
];
