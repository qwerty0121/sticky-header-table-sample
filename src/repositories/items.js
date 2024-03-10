export const schema = {
  status: { name: "ステータス" },
  createDate: { name: "送受信日" },
  responseDate: { name: "回答希望日" },
  deadlineDate: { name: "締切日" },
  category: { name: "種別" },
  subject: { name: "件名" },
  memo: { name: "メモ" },
  customerName: { name: "お客様" },
  picName: { name: "営業担当" },
  agencyName: { name: "代理店担当" },
};

export const items = [...Array(100)].map((_, i) => ({
  status: "新規",
  createDate: "10/15",
  responseDate: "10/20",
  deadlineDate: "10/30",
  category: "火災",
  subject: `テスト件名 ${i + 1}`,
  memo: "テストメモ",
  customerName: "お客様",
  picName: "営業担当A",
  agencyName: "代理店B",
}));
