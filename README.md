# Attested Image-Editing Stack

**Version:** MVP  
**Author:** Anyanwu Amanze  
**Date:** 27/2/2025  

---

## Table of Contents
1. [Introduction](#introduction)
   - [Overview](#overview)
   - [Problem Statement](#problem-statement)
   - [Key Benefits](#key-benefits)
2. [Core Features](#core-features)
3. [Technical Architecture](#technical-architecture)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Project](#running-the-project)
5. [Configuration](#configuration)
6. [User Flow](#user-flow)
7. [Competitive Advantage](#competitive-advantage)
8. [Deployment & Roadmap](#deployment--roadmap)
9. [Contributing](#contributing)
10. [License](#license)

---

## Introduction

### Overview
The **Attested Image-Editing Stack** is a Zero-Knowledge (ZK)-powered image provenance solution that tracks and verifies every modification made to an image. It ensures authenticity without exposing sensitive data and helps combat forgeries, deepfakes, and AI-generated forgeries.

### Problem Statement
Manipulated and AI-generated images are eroding trust in digital content. Existing solutions either expose personal metadata or lack cryptographic verification. Our stack provides a privacy-preserving, tamper-proof way to verify image authenticity.

### Key Benefits
- ✅ **Privacy-Preserving** – Uses succinct SP1 ZK proofs to verify authenticity without revealing unnecessary details.  
- ✅ **Tamper-Proof** – Hashes proofs on Celestia’s blockchain, with metadata stored on IPFS Pinata.  
- ✅ **Comprehensive AI Detection** – Flags deepfakes, AI-generated images, and all possible image manipulations.  
- ✅ **Seamless User & Developer Experience** – Available as an npm library and browser extension.

---

## Core Features
- **Edit Tracking & Cryptographic Proofs**: Tracks every image edit and generates cryptographic proofs.
- **ZK Verification**: Uses SP1 zkVM for privacy-preserving authenticity verification.
- **AI-Powered Detection**: Flags deepfakes, AI-generated images, and manipulations.
- **Tamper-Proof Storage**: Stores metadata on IPFS Pinata and proofs on Celestia.
- **Seamless Integration**: Available as an npm library and browser extension.

---

## Technical Architecture
### Components
1. **Frontend (Web Dashboard & Browser Extension)** – User-friendly interface for verification.  
2. **Backend & ZK (SP1 succinct) Processing** – Runs proof generation and cryptographic tracking.  
3. **Storage & Blockchain Layer** – Metadata stored on IPFS Pinata, proofs on Celestia.

### Tech Stack
| **Component**                     | **Technology Used**               |
|-----------------------------------|-----------------------------------|
| Frontend                          | React (Web UI), Chrome Extension APIs |
| ZK (SP1 succinct) Proofs          | Succinct SP1 zkVM                 |
| Storage                           | IPFS Pinata                       |
| Blockchain                        | Celestia                          |
| AI Detection                      | Third-party AI image detection API |
| API                               | Node.js, Express                  |
| User Onboarding                   | Privy for authentication          |

---

## Getting Started

### Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/attested-image-editing-stack.git
   cd attested-image-editing-stack
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     VITE_PRIVY_APP_ID=your_privy_app_id
     VITE_CELESTIA_NODE_URL=your_celestia_node_url
     VITE_IPFS_PINATA_API_KEY=your_ipfs_pinata_api_key
     VITE_IPFS_PINATA_SECRET_KEY=your_ipfs_pinata_secret_key
     VITE_AI_DETECTION_API_KEY=your_ai_detection_api_key
     ```

### Running the Project
1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Configuration
### Frontend
- **Path Aliases**: Configured in `tsconfig.json`:
  ```json
  {
    "compilerOptions": {
      "baseUrl": "./src",
      "paths": {
        "@/*": ["./*"]
      }
    }
  }
  ```

### Backend
- **API Endpoints**: Defined in `src/services/api.ts`.
- **ZK Proof Generation**: Configured in `src/services/zkProofs.ts`.

### Environment Variables
- **Required Variables**:
  - `VITE_PRIVY_APP_ID`: Privy authentication app ID.
  - `VITE_CELESTIA_NODE_URL`: Celestia blockchain node URL.
  - `VITE_IPFS_PINATA_API_KEY`: IPFS Pinata API key.
  - `VITE_IPFS_PINATA_SECRET_KEY`: IPFS Pinata secret key.
  - `VITE_AI_DETECTION_API_KEY`: AI detection API key.

---

## User Flow [MVP Focus: ZK (SP1 succinct) Verification]
1. **Upload Image**  
   - Users upload an image via the web dashboard or browser extension.  
   - System checks for file format & size limits.  

2. **Check for Existing Proof**  
   - System searches Celestia’s blockchain and IPFS Pinata for existing proofs.  
   - If found, retrieves edit history & verification status before processing further.  

3. **Generate ZK Proof**  
   - Extracts metadata (timestamp, device, geolocation).  
   - Runs SP1 ZKVM proof generation for authenticity.  

4. **AI-Powered Image Manipulation & Deepfake Detection**  
   - Calls AI detection API to flag:  
     - AI-generated images.  
     - Deepfakes.  
     - Other manipulations.  

5. **View Verification Status**  
   - Displays one of three verification results:  
     - ✅ **Verified Authentic**  
     - ⚠️ **Modified with Proofs**  
     - ❌ **AI-Generated/Manipulated**  
   - Provides a detailed proof page with:  
     - Cryptographic proof hash.  
     - Edit history.  
     - "View on Celestia Explorer" link.  

6. **Share Verified Proof**  
   - Users can:  
     - Copy proof link for verification.  
     - Download proof metadata.  
     - Embed proof badge in websites.  

---

## Competitive Advantage
| **Feature**                        | **Attested Image-Editing Stack** | **Alternatives**               |
|------------------------------------|----------------------------------|--------------------------------|
| Succinct SP1 ZK-Powered Security   | ✅ Yes (privacy-preserving proofs) | ❌ No                          |
| On-Chain Verification              | ✅ Yes (Celestia Blockchain)     | ⚠️ Limited                    |
| Tamper-Proof Storage               | ✅ Yes (IPFS + On-Chain)         | ❌ No                          |
| AI Deepfake & Tampering Detection  | ✅ Yes (via API provider)        | ⚠️ Some Tools                 |
| Smart User Onboarding              | ✅ Yes (Privy Authentication)    | ❌ No                          |
| Duplicate Proof Checking           | ✅ Yes (Pre-check before re-verifying) | ❌ No                          |

---

## Deployment & Roadmap
### ✅ **Phase 1: MVP Release (Everything integrated)**
- Image verification (SP1 ZK proofs, AI deepfake detection, tampering detection).  
- Authentication via Privy.  
- Browser extension + npm package.  

### 🚀 **Future Expansion: Video Attestation**
- Placeholder for future development.

---

## Contributing
We welcome contributions! Here’s how you can help:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Support
For questions or issues, please open an issue on [GitHub](https://github.com/your-username/attested-image-editing-stack/issues).

---
