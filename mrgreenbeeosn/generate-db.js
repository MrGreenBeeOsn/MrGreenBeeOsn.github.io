// generate-db.js
import fs from 'fs';
import path from 'path';

function readJSONFile(filePath) {
  const absolutePath = path.join(process.cwd(), filePath);
  const data = fs.readFileSync(absolutePath, 'utf8');
  const parsed = JSON.parse(data);
  
  if (parsed.posts && Array.isArray(parsed.posts)) {
    return parsed.posts;
  }
  else if (Array.isArray(parsed)) {
    return parsed;
  }
  else {
    console.log('⚠️  Cấu trúc không xác định trong:', filePath);
    return [];
  }
}

function generateDB() {
  // Đọc db.json hiện tại để giữ views/likes
  let existingDB = { posts: [] };
  try {
    existingDB = JSON.parse(fs.readFileSync('./src/data/db.json', 'utf8'));
    console.log('📊 Đã tìm thấy db.json cũ với', existingDB.posts.length, 'bài viết');
  } catch (error) {
    console.log('🆕 Tạo db.json mới');
  }

  // Đọc files mới
  const MrBeeOsn = readJSONFile('./src/data/mrbeeosn/MrBeeOsn.json');
  const AccountingPosts = readJSONFile('./src/data/accounting/AccountingPosts.json');
  const TaxPosts = readJSONFile('./src/data/accounting/TaxPosts.json');
  const FinancialPosts = readJSONFile('./src/data/accounting/FinancialPosts.json');
  const LawPosts = readJSONFile('./src/data/accounting/LawPosts.json');
  const BusinessPosts = readJSONFile('./src/data/accounting/BusinessPosts.json');
  const InsurancePosts = readJSONFile('./src/data/accounting/InsurancePosts.json');

  const KeToanPosts = readJSONFile('./src/data/ketoan/KeToanPosts.json');
  const ThuePosts = readJSONFile('./src/data/ketoan/ThuePosts.json');
  const TaiChinhPosts = readJSONFile('./src/data/ketoan/TaiChinhPosts.json');
  const LuatPosts = readJSONFile('./src/data/ketoan/LuatPosts.json');
  const DoanhNghiepPosts = readJSONFile('./src/data/ketoan/DoanhNghiepPosts.json');
  const BaoHiemPosts = readJSONFile('./src/data/ketoan/BaoHiemPosts.json');

  // Combine posts mới
  const newPosts = [
    ...MrBeeOsn,
    ...AccountingPosts,
    ...TaxPosts,
    ...FinancialPosts,
    ...LawPosts,
    ...BusinessPosts,
    ...InsurancePosts,

    ...KeToanPosts,
    ...ThuePosts,
    ...TaiChinhPosts,
    ...LuatPosts,
    ...DoanhNghiepPosts,
    ...BaoHiemPosts
  ];

  // Merge: giữ views/likes cũ, thêm posts mới
  const mergedPosts = newPosts.map(newPost => {
    const existingPost = existingDB.posts.find(p => p.id === newPost.id);
    
    if (existingPost) {
      // Giữ nguyên views/likes từ post cũ
      return {
        ...newPost,           // Cập nhật content mới
        views: existingPost.views || 0,
        likes: existingPost.likes || 0
      };
    } else {
      // Post mới - thêm views/likes mặc định
      return {
        ...newPost,
        views: 0,
        likes: 0
      };
    }
  });

  // Create db.json
  const dbJson = { posts: mergedPosts };
  const outputPath = path.join(process.cwd(), 'src/data/db.json');
  
  fs.writeFileSync(outputPath, JSON.stringify(dbJson, null, 2));
  console.log('✅ Đã merge db.json với', mergedPosts.length, 'bài viết');
  console.log('💾 Giữ nguyên views/likes từ data cũ');
}

generateDB();