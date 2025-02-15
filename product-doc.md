# Attested Image-Editing Stack

**Version:** MVP  
**Author:** Anyanwu Amanze  
**Date:** 27/2/2025  

---

## 1. Introduction

### 1.1 Overview
The **Attested Image-Editing Stack** is a Zero-Knowledge (ZK)-powered image provenance solution that tracks and verifies every modification made to an image. It ensures authenticity without exposing sensitive data and helps combat forgeries, deepfakes, and AI-generated forgeries.

### 1.2 Problem Statement
Manipulated and AI-generated images are eroding trust in digital content. Existing solutions either expose personal metadata or lack cryptographic verification. Our stack provides a privacy-preserving, tamper-proof way to verify image authenticity.

### 1.3 Key Benefits
- ✅ **Privacy-Preserving** – Uses succinct SP1 ZK proofs to verify authenticity without revealing unnecessary details.  
- ✅ **Tamper-Proof** – Hashes proofs on Celestia’s blockchain, with metadata stored on IPFS Pinata.  
- ✅ **Comprehensive AI Detection** – Flags deepfakes, AI-generated images, and all possible image manipulations.  
- ✅ **Seamless User & Developer Experience** – Available as an npm library and browser extension.

---

## 2. Core Features

### 2.1 Edit Tracking & Cryptographic Proofs
- Every image edit (crop, filter, retouch) generates a cryptographic proof.  
- Proofs are hashed and stored on Celestia’s blockchain.  
- System checks if an image already has a proof before reprocessing verification.

### 2.2 ZK Verification for Authenticity
- Uses succinct SP1 zkVM to verify authenticity without exposing image details.  
- Generates a hash link to on-chain data, readable in the UI and verifiable on Celestia’s blockchain explorer.

### 2.3 AI-Powered Image Manipulation & Deepfake Detection
- Uses an AI image detection API provider to analyze images.  
- Identifies all possible tampering methods, including:  
  - ✅ AI-generated images.  
  - ✅ Deepfakes.  
  - ✅ Edited or manipulated content.  
- System flags images as:  
  - ✅ **Verified Authentic** – Original, no major edits.  
  - ⚠️ **Modified with Proofs** – Edit history available.  
  - ❌ **AI-Generated/Manipulated** – Possible deepfake detected.

### 2.4 Tamper-Proof Storage (Hybrid On-Chain + Off-Chain)
- Metadata & Proofs stored on IPFS Pinata.  
- Hash of the proof stored on Celestia’s blockchain.  
- Option to retrieve proof history before running another verification.

### 2.5 Authentication & Onboarding via Privy
- Uses Privy for user authentication.  
- Allows wallet-based login and social sign-ins.  
- Supports account-based proof history tracking (optional).

### 2.6 Seamless Developer & User Integration
- **npm Library** – Developers can integrate the verification stack into apps like Photoshop or Figma.  
- **Browser Extension** – Enables instant verification of images on the web (e.g., news articles, social media).

---

## 3. Technical Architecture

### 3.1 High-Level System Design
**Components:**  
1. **Frontend (Web Dashboard & Browser Extension)** – User-friendly interface for verification.  
2. **Backend & ZK (SP1 succinct) Processing** – Runs proof generation and cryptographic tracking.  
3. **Storage & Blockchain Layer** – Metadata stored on IPFS Pinata, proofs on Celestia.

### 3.2 Tech Stack
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

## 4. User Flow [MVP Focus: ZK (SP1 succinct) Verification]

### 4.1 High-Level Steps
1. Upload Image → 2. Check for Existing Proof → 3. Generate ZK Proof → 4. Run AI Tampering Detection → 5. View Verification Status → 6. Share Verified Proof

### 4.2 Step-by-Step Breakdown
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

## 5. Competitive Advantage

| **Feature**                        | **Attested Image-Editing Stack** | **Alternatives**               |
|------------------------------------|----------------------------------|--------------------------------|
| Succinct SP1 ZK-Powered Security   | ✅ Yes (privacy-preserving proofs) | ❌ No                          |
| On-Chain Verification              | ✅ Yes (Celestia Blockchain)     | ⚠️ Limited                    |
| Tamper-Proof Storage               | ✅ Yes (IPFS + On-Chain)         | ❌ No                          |
| AI Deepfake & Tampering Detection  | ✅ Yes (via API provider)        | �️ Some Tools                 |
| Smart User Onboarding              | ✅ Yes (Privy Authentication)    | ❌ No                          |
| Duplicate Proof Checking           | ✅ Yes (Pre-check before re-verifying) | ❌ No                          |

---

## 6. Deployment & Roadmap

### ✅ **Phase 1: MVP Release (Everything integrated)**
- Image verification (SP1 ZK proofs, AI deepfake detection, tampering detection).  
- Authentication via Privy.  
- Browser extension + npm package.  

### 🚀 **Future Expansion: Video Attestation**
- Placeholder for future development.

---

## 7. Open Questions & Future Considerations
- Should verification be tied to user accounts or fully anonymous?  
- Should we allow premium features (e.g., priority verification, advanced AI scans)?  
- Would a marketplace for verified images add value?  
- How do we optimize proof generation speed for large-scale adoption?  

---
