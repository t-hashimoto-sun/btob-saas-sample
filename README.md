# btob-saas-sample

BtoBのSaaSに必要な基本要素を実装したアプリを作成する

# 主要技術
- BE
  - Rails(API mode)
- FE
  - Next.js(CSR)
- Infra
  - AWS
  - Terraform
  - Ansible
- その他
  - モノレポ


# ディレクトリ構成
- Repository Root
  - apps
    - backend # Railsアプリケーション
      - app   
      - config
      - db
      - lib
      - Gemfile
      - Gemfile.lock
    - frontend # Next.jsアプリケーション
      - src 
      - public
      - package.json
      - next.config.js
  - infrastructure
    - terraform # AWSリソース定義
      - modules
      - environments
        - dev
        - staging
        - production
    - ansible # サーバー構成管理
      - playbooks
      - roles
      - inventories
  - ops
    - backend
      - Dockerfile
      - docker-compose.yml
    - frontend
      - Dockerfile
  - scripts # デプロイスクリプトやユーティリティ
  - docker-compose.yml
  - docs # プロジェクトドキュメント
  - docs # プロジェクトドキュメント
    - architecture # アーキテクチャドキュメント
      - system_overview.md # システム概要図
      - backend_architecture.md # バックエンド設計
      - frontend_architecture.md # フロントエンド設計
      - infrastructure.md # インフラ構成図
    - api # API仕様書
      - openapi.yaml # OpenAPI仕様
      - endpoints # エンドポイント詳細説明
    - development # 開発ガイド
      - setup.md # 環境構築手順
      - workflow.md # 開発ワークフロー
      - coding_standards.md # コーディング規約
    - operations # 運用ドキュメント
      - deployment.md # デプロイ手順
      - monitoring.md # 監視設定
      - backup.md # バックアップ/リストア手順
    - requirements # 要件定義
      - user_stories.md # ユーザーストーリー
      - functional_requirements.md # 機能要件
      - non_functional_requirements.md # 非機能要件
    - meetings # 会議議事録
      - sprint_planning # スプリント計画
      - retrospectives # ふりかえり
    - diagrams # 図表類
      - er # ER図
      - sequence # シーケンス図
      - usecase # ユースケース図