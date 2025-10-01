# ビンゴゲーム (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたビンゴゲームアプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-game-bingo/demo/

## 主要機能

### 操作方法
- **新しいカードを作成**: 新しいビンゴカードを生成
- **数字を引く**: ランダムに数字を抽選し、該当セルを自動マーク
- **セルクリック**: 抽選済みの数字のマーク/解除を手動切り替え
- **ゲームをリセット**: ゲーム状態を初期化

### ゲーム機能
- ビンゴカードの自動生成（5x5グリッド）
- 数字の抽選機能（1-75からランダム）
- 自動マーキング機能
- ビンゴ判定（横・縦・斜め）
- ゲームリセット機能

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── bingo/                  # ビンゴゲーム機能
│       ├── components/         # ビンゴ専用コンポーネント
│       │   ├── BingoCard/      # ビンゴカード
│       │   ├── Cell/           # ビンゴセル
│       │   ├── ControlButtons/ # 操作ボタン群
│       │   ├── GameInfo/       # ゲーム情報表示
│       │   └── DrawnNumber/    # 抽選番号表示
│       ├── BingoGame/          # メインゲームコンポーネント
│       ├── useBingoGame.ts     # ビンゴロジックフック
│       └── types.ts            # ビンゴ関連型定義
├── components/                 # 共通UIコンポーネント
│   └── Button/                 # 汎用ボタン
├── stories/                    # Storybook用ストーリー
├── Config.ts                   # 設定値
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

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
