// ==========================================================
// ค่าเชื่อมต่อ Firebase (ใส่ค่าจริงแล้ว)
// ==========================================================
const firebaseConfig = {
  apiKey: "AIzaSyA6yM-7OfxFonJvcxWitxmzee4sPoskgTs",
  authDomain: "my-record-app-816d0.firebaseapp.com",
  projectId: "my-record-app-816d0",
  storageBucket: "my-record-app-816d0.firebasestorage.app",
  messagingSenderId: "900070641664",
  appId: "1:900070641664:web:d9a9e99040439060a108e5"
};

// เริ่มใช้งาน Firebase (ไม่ต้องแก้บรรทัดล่างนี้)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ==========================================================
// ค่าเชื่อมต่อ Cloudinary (สำหรับเก็บไฟล์/รูปภาพ แทน Firebase Storage)
// ==========================================================
const CLOUDINARY_CLOUD_NAME = "ikxje5wz";
const CLOUDINARY_UPLOAD_PRESET = "record_app_upload";