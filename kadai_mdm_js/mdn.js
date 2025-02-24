// 現在の日付と時刻を取得
const now = new Date();

// 年、月、日を取得
const year = now.getFullYear();
const month = now.getMonth() + 1; 
const day = now.getDate();

console.log(`${year}年${month}月${day}日`);