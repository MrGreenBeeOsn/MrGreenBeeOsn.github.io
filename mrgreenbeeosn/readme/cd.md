PS

cd D:\GitHub\Black\MrBlackBeeOsn.github.io\mrblackbeeosn
cd D:\GitHub\Blue\MrBlueBeeOsn.github.io\mrbluebeeosn
cd D:\GitHub\Black\MrBlackBeeOsn.github.io\mrblackbeeosn


Mở Command Palette:
Ctrl + Shift + P (Windows/Linux)
Cmd + Shift + P (macOS)
Gõ >Terminal: Select Default Profile

git add .
git commit -m "Nội dung commit"
git push origin main

🏆 Workflow hoàn chỉnh:

Lần đầu: npm run db:generate (tạo db.json)

Khi có bài mới: npm run db:generate (merge, giữ stats cũ)

Khi cần thêm field: npm run db:update-views hoặc npm run db:update-likes

node generate-db.js
node update-likes.js

npm install -g json-server
npm run db:server
json-server --watch src/data/db.json --port 3001

Lần đầu setup:
bash
cd repo-1
npm install          # 👈 CÀI DEPENDENCIES
npm run db:generate  # Tạo db.json
npm run db:server    # Start JSON Server (port 3001)
npm start           # Start React app
Lần sau:
bash
cd repo-1
npm run db:server    # Start JSON Server
npm start           # Start React app

Bash
cd /D/Github/Black/MrBlackBeeOsn.github.io/mrblackbeeosn
cd /D/Github/Blue/MrBlueBeeOsn.github.io/mrbluebeeosn
cd /D/Github/Green/MrGreenBeeOsn.github.io/mrgreenbeeosn

npm run install
npm install react-scripts --save
npm run dev

npm run db:generate
npm run db:update-views
npm run db:update-likes

npm run build
npm run deploy
