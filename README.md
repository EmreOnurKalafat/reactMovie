## Project Overview / Proje Özeti

This repository is a learning project: a movie library web app built with React 19.2 on the frontend and Appwrite as the backend. The app demonstrates creating, reading, updating, and deleting movie entries, user authentication, and storing media/metadata with a modern full‑stack toolchain.

Bu depo, öğrenme amaçlı bir proje olarak hazırlanmıştır: ön yüzde React 19.2 ve arka planda Appwrite kullanılan bir film kütüphanesi web uygulaması. Uygulama, film kayıtları oluşturma, okuma, güncelleme, silme, kullanıcı kimlik doğrulama ve medya/metadata depolama gibi konuları modern bir full‑stack yığınla gösterir.

## Motivation / Neden

- Improve React skills and learn modern patterns (hooks, concurrent features, routing, state management).
- Practice building a full‑stack app end-to-end with a self‑hosted backend service.
- Create a portfolio project that shows both frontend and backend capabilities.

- React becerilerini geliştirmek ve modern yaklaşımları (hooks, concurrent özellikler, routing, state yönetimi) öğrenmek.
- Tam bir full‑stack uygulama inşa ederek pratik yapmak ve kendi kendine barındırılan bir backend servisini deneyimlemek.
- Hem frontend hem backend yeteneklerini gösteren bir portföy projesi oluşturmak.

## Key Features / Temel Özellikler

- Movie CRUD (Create, Read, Update, Delete)
- User auth (email/password, sessions)
- File uploads for posters/trailers via Appwrite storage
- Search, filtering, and basic pagination
- Responsive UI with accessibility considerations

- Film oluşturma, okuma, güncelleme, silme
- Kullanıcı kimlik doğrulama (email/parola, oturumlar)
- Poster/trailer yüklemeleri için Appwrite storage kullanımı
- Arama, filtreleme ve basit sayfalandırma
- Erişilebilirlik düşünülmüş, responsive arayüz

## Tech Stack / Teknoloji Yığını

- Frontend: React 19.2 + Vite
- Backend: Appwrite (Authentication, Database, Storage, Functions)
- Optional: TypeScript, ESLint, Prettier

- Ön uç: React 19.2 + Vite
- Arka uç: Appwrite (Authentication, Database, Storage, Functions)
- İsteğe bağlı: TypeScript, ESLint, Prettier

## Getting Started / Başlangıç

1. Clone the repo and install dependencies:
    - npm install

2. Start the dev server:
    - npm run dev

3. Configure Appwrite:
    - Create a project in your Appwrite console.
    - Add environment variables (endpoint, project ID, API key/session) to your .env file.
    - Create required collections/buckets and security rules.

4. Run and test authentication, uploads, and CRUD flows.

1. Depoyu klonlayın ve bağımlılıkları yükleyin:
    - npm install

2. Geliştirme sunucusunu başlatın:
    - npm run dev

3. Appwrite yapılandırması:
    - Appwrite konsolunda bir proje oluşturun.
    - .env dosyanıza Appwrite endpoint, project ID ve gerekli anahtar/oturum bilgilerini ekleyin.
    - Gerekli collection/bucket ve güvenlik kurallarını oluşturun.

4. Kimlik doğrulama, yüklemeler ve CRUD akışlarını test edin.

## Learning Goals / Öğrenme Hedefleri

- Master React fundamentals and new APIs in practice.
- Understand how to integrate a backend-as-a-service (Appwrite) for real‑world features.
- Improve debugging, testing, and deployment workflows.

- React temellerini ve yeni API'leri uygulamalı olarak öğrenmek.
- Gerçek dünya özellikleri için backend-as-a-service (Appwrite) entegrasyonunu anlamak.
- Hata ayıklama, test ve dağıtım iş akışlarını geliştirmek.

## Notes on Appwrite Usage / Appwrite Kullanımı Hakkında Notlar

- Use Appwrite SDKs on the client for authentication and uploads; protect admin actions via server functions or secure rules.
- Keep sensitive keys out of the client and use environment variables or Appwrite functions for privileged operations.

- Kimlik doğrulama ve yüklemeler için Appwrite SDK'larını istemci tarafında kullanın; yönetici işlemlerini server fonksiyonları veya güvenli kurallarla koruyun.
- Hassas anahtarları istemci dışında tutun; ayrıcalıklı işlemler için environment variable veya Appwrite fonksiyonları kullanın.

Contributions and feedback are welcome — this project is primarily a personal learning journey and may be iterated frequently.

Katkılar ve geri bildirimler memnuniyetle karşılanır — bu proje öncelikle kişisel bir öğrenme yolculuğudur ve sıkça güncellenebilir..