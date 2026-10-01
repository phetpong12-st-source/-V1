// แก้ไขข้อมูลในส่วนนี้ได้เลย
// url สามารถเป็นลิงก์ Google Looker Studio, Power BI, Tableau,
// Google Sheets หรือ Dashboard ของหน่วยงานอื่นได้
const DASHBOARDS = [
  {
    department: "งานผู้ป่วยใน",
    title: "Dashboard A-MED Homeward +",
    category: "ผลลัพธ์การดูแลผู้ป่วยในโดยรวม",
    description: "แพลตฟอร์มดูแลรักษาผู้ป่วยในที่บ้าน ",
    icon: "🧑‍⚕️",
    url: "https://homeward.dms.go.th/?redirect=%2Fmember%2Fdashboard"
  },
  {
    department: "งานผู้ป่วยนอก",
    title: "Dashboard OPD",
    category: "บริการ",
    description: "กำลังอนู่ในช่วงของการพัฒนา",
    icon: "🏥",
    url: "https://photos.app.goo.gl/g5onaCHbSGFVS3F77"
  },
  {
    department: "ศูนย์รับเรื่องร้องทุกข์",
    title: "Dashboard เรื่องร้องทุกข์",
    category: "คุณภาพ",
    description: "กำลังอยู่ในช่วงของการพัฒนา",
    icon: "📝",
    url: "https://photos.app.goo.gl/g5onaCHbSGFVS3F77"
  },
  {
    department: "งานศูนย์คุณภาพ",
    title: "Dashboard ตัวชี้วัดองค์กร",
    category: "ยุทธศาสตร์",
    description: "ติดตามตัวชี้วัดและผลการดำเนินงานขององค์กร",
    icon: "📈",
    url: "https://docs.google.com/spreadsheets/d/1wyc_wKjcKn8hyShRpXnEAqPEX1X-ZdgdpyxOh4QiZm8/edit?pli=1&gid=1787171275#gid=1787171275"
  },
  {
    department: "งานประกันสุขภาพยุทธศาสตร์",
    title: "Dashboard รายงานผลงานกองทุน / ยอดชดเชย",
    category: "งานประกัน",
    description: "ข้อมูลรายงานผลงานกองทุน / ยอดชดเชย",
    icon: "👥",
    url: "https://chaiyo-report.web.app/"
  },
  {
    department: "งานการพยาบาลป้องกันควบคุมการติดเชื้อและหน่วยจ่ายกลาง",
    title: "Dashboard CSSD EXECUTIVE",
    category: "งานจ่ายกลาง",
    description: "ข้อมูลและตัวชี้วัดระบบบริหารจัดการและรายงานผลงานจ่ายกลาง",
    icon: "🚛",
    url: "https://script.google.com/a/macros/rmutsb.ac.th/s/AKfycbwoqsMVyo6klD7iLkkJhG7hFjTMGE9h0K8zX9KkUSjcUuArxLxpUfA4KJ1woF1J5TK9iQ/exec"
  },
  {
    department: "งานการเงิน",
    title: "Dashboard บริหารจัดการงานการเงินและบัญชี",
    category: "กลุ่มงานบริหารงานทั่วไป",
    description: "กำลังอยู่ในช่วงพัฒนา",
    icon: "👨‍⚕️",
    url: "ปิดปรับปรุง.png"
  },
  {
    department: "งานบุคลากร",
    title: "Dashboard จัดสรรบุคลาการในองค์กร",
    category: "งานบริหารจัดการทั่วไป",
    description: "อยู่ในช่วงของการพัฒนา",
    icon: "👬",
    url: "ปิดปรับปรุง.png"
  }
];
