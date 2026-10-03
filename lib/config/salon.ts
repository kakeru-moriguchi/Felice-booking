/**
 * サロンの基本情報（表示名・連絡先など）
 * ==================================================================
 * サロン名やロゴの文字、LINE 通知の署名、カレンダーの予定名など、
 * 「サロンによって変わる表示」はすべてこのファイルに集めています。
 *
 * ★ 秘密情報（パスワード・鍵）はここに書かないでください。
 *   このファイルは Git に登録され、ブラウザにも送られます。
 *   秘密情報は必ず .env（Vercel の Environment Variables）へ。
 *
 * ★ メニュー・料金・営業時間・休業日はここではありません。
 *   管理画面（/admin/settings）から変更します。
 */

export const salon = {
  /** サロン名（日本語） */
  name: "美容サロンFelice",
  /** ローマ字表記（識別子・Cookie 名の元になります。英小文字と数字のみ） */
  slug: "felice",
  /** ロゴの大きな文字（既存ホームページと同じ） */
  logoMark: "Felice",
  /** ロゴの小さな文字 */
  logoSub: "PRIVATE BEAUTY SALON",
  /** 英語表記（著作権表示など） */
  nameEn: "Felice",
  /** 予約トップに出すひとこと */
  tagline: "美容も、リフレッシュも、私らしく。",
  /** 所在地（予約完了画面に表示します） */
  address: "東京都豊島区北大塚2-12-3 ドルミ大塚702",
  /** 電話番号（表示用） */
  phone: "080-7531-1009",
  /** 電話番号（発信リンク用。ハイフンなし） */
  phoneHref: "tel:08075311009",
  /** 既存ホームページの URL（空ならリンクを出しません） */
  homepageUrl: "https://felice-otsuka-salon.vercel.app/",
  /** ブラウザのテーマカラー（スマートフォンのアドレスバーの色） */
  themeColor: "#514137",
} as const;

/** Google カレンダーの予定名。★ 個人情報は絶対に入れません */
export function calendarEventTitle(menuName: string): string {
  return `${salon.name}予約｜${menuName}`;
}
