# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# 全体共通ルール
- 全てのリクエストには日本語で回答すること

# プロジェクト概要
このプロジェクトはbtob-saas-sampleという名前のB2B SaaSアプリケーションです。モノレポ構成で以下の技術スタックを使用しています：
- Backend: Rails API (apps/backend/)
- Frontend: Next.js with TypeScript (apps/frontend/)
- Database: PostgreSQL
- Infrastructure: AWS (予定)
- IaC: Terraform
- Configuration Management: Ansible
- Containerization: Docker

# モノレポ構成
```
Repository Root
├── apps/
│   ├── backend/          # Rails APIアプリケーション
│   └── frontend/         # Next.jsアプリケーション
├── infrastructure/
│   ├── terraform/        # AWSリソース定義
│   └── ansible/          # サーバー構成管理
├── ops/                  # Docker設定
│   ├── backend/
│   └── frontend/
├── scripts/              # デプロイスクリプトやユーティリティ
├── docs/                 # プロジェクトドキュメント
└── docker-compose.yml    # 開発環境用
```

# 主要コマンド
## 開発環境起動
```bash
# 全体の開発環境を起動
docker-compose up

# バックエンドのみ起動
cd apps/backend && bundle install && rails server

# フロントエンドのみ起動
cd apps/frontend && npm install && npm run dev
```

## テスト実行
```bash
# Rails テスト
cd apps/backend && bundle exec rails test

# Next.js テスト
cd apps/frontend && npm test
```

## データベース操作
```bash
# Rails マイグレーション
cd apps/backend && bundle exec rails db:migrate

# データベースシード
cd apps/backend && bundle exec rails db:seed
```

