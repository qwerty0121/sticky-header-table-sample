export const schema = {
  status: { name: "ステータス" },
  createDate: { name: "登録日" },
  responseDate: { name: "対応希望日" },
  deadlineDate: { name: "期限日" },
  category: { name: "カテゴリ" },
  subject: { name: "タイトル" },
  memo: { name: "メモ" },
  customerName: { name: "顧客名" },
  picName: { name: "本社担当" },
  branchPicName: { name: "支店担当" },
};

export const items = [...Array(100)].map((_, i) => ({
  status: "新規",
  createDate: "10/15",
  responseDate: "10/20",
  deadlineDate: "10/30",
  category: "購入",
  subject: `テストタイトル ${i + 1}`,
  memo: "テストメモ",
  customerName: "顧客名",
  picName: "本社担当A",
  branchPicName: "支店担当B",
}));
