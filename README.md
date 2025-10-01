# ビンゴゲーム (TypeScript + React + Storybook)

React 18とTypeScript、Atomic Designパターンで構築されたビンゴゲームアプリケーションです。

## デモプレイ
https://yunbow.github.io/react-game-bingo/demo/

## 主要機能

### ゲーム機能
- ビンゴカードの自動生成（5x5グリッド）
- 数字の抽選機能（1-75からランダム）
- 自動マーキング機能
- ビンゴ判定（横・縦・斜め）
- ゲームリセット機能

### 操作方法
- **新しいカードを作成**: 新しいビンゴカードを生成
- **数字を引く**: ランダムに数字を抽選し、該当セルを自動マーク
- **セルクリック**: 抽選済みの数字のマーク/解除を手動切り替え
- **ゲームをリセット**: ゲーム状態を初期化

## 技術スタック
- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── components/
│   ├── atoms/          # 基本コンポーネント
│   │   ├── Button/     # ボタンコンポーネント
│   │   ├── Cell/       # ビンゴセルコンポーネント
│   │   └── DrawnNumber/ # 抽選番号表示コンポーネント
│   ├── molecules/      # 機能単位コンポーネント
│   │   ├── BingoCard/  # ビンゴカード
│   │   ├── ControlButtons/ # 操作ボタン群
│   │   └── GameInfo/   # ゲーム情報表示
│   └── organisms/      # 画面領域コンポーネント
│       └── BingoGame/  # ビンゴゲーム全体
├── hooks/              # カスタムフック
│   └── useBingoGame.ts # ビンゴゲームロジック
├── stories/            # Storybook用ストーリー
├── types/              # TypeScript型定義
├── Config.ts           # 設定値
├── App.tsx             # メインアプリ
└── main.tsx            # エントリーポイント
```

## Atomic Design構成

### Atoms（基本コンポーネント）
- `Button` - 操作ボタン（primary, secondary, danger）
- `Cell` - ビンゴセル（通常/マーク済み/FREE）
- `DrawnNumber` - 抽選済み数字表示

### Molecules（機能単位）
- `BingoCard` - 5x5ビンゴカード
- `ControlButtons` - ゲーム操作ボタン群
- `GameInfo` - 抽選履歴・現在数字・ステータス表示

### Organisms（画面領域）
- `BingoGame` - ビンゴゲーム全体の統合

## カスタムフック

### `useBingoGame`
ビンゴゲームの状態管理とロジックを提供：
- カード生成
- 数字抽選
- セル操作
- ビンゴ判定
- ゲームリセット

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License