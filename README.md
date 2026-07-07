# 🌐 Yash Sonje Portfolio

A modern and responsive personal portfolio website showcasing my projects, technical skills, certifications, leadership experience, and achievements. The website is hosted on AWS with an automated CI/CD pipeline using GitHub Actions.

## 🚀 Live Website

🔗 https://www.yashcsonje.in

---

## ✨ Features

- Responsive and modern UI
- Project showcase
- Skills and certifications
- Leadership and event experience
- Contact section
- Fast global content delivery using Amazon CloudFront
- Secure HTTPS with SSL/TLS
- Automated deployment using GitHub Actions

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap

### Cloud & DevOps
- Amazon S3 (Static Website Hosting)
- Amazon CloudFront (CDN)
- AWS IAM
- AWS Certificate Manager (ACM)
- GitHub Actions (CI/CD)

### Version Control
- Git
- GitHub

---

## ☁️ AWS Architecture

```text
GitHub Repository
        │
        ▼
 GitHub Actions
  (CI/CD Pipeline)
        │
        ▼
 Amazon S3
 (Website Hosting)
        │
        ▼
 Amazon CloudFront
   (CDN + HTTPS)
        │
        ▼
www.yashcsonje.in
```

---

## 🔄 CI/CD Pipeline

### Continuous Integration (CI)
- Triggered on every push to the `main` branch
- Validates project changes before deployment

### Continuous Delivery (CD)
- Manual deployment using GitHub Actions
- Uploads updated files to Amazon S3
- Automatically invalidates CloudFront cache to serve the latest content

---

## 📂 Project Structure

```text
Portfolio/
│
├── assets/
├── css/
├── js/
├── images/
├── index.html
└── .github/
    └── workflows/
        ├── ci.yml
        └── deploy.yml
```

---

## 📌 Highlights

- AWS-hosted static website
- Global content delivery with CloudFront
- Secure HTTPS using ACM
- Automated deployment pipeline with GitHub Actions
- Production-ready cloud deployment

---

## 📫 Connect With Me

**Portfolio:** https://www.yashcsonje.in

**LinkedIn:** https://www.linkedin.com/in/yashcsonje

**GitHub:** https://github.com/yashcsonje

---

⭐ If you found this project interesting, consider giving it a star!