# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - heading "Kesalahan Autentikasi" [level=3] [ref=e7]:
          - img [ref=e8]
          - text: Kesalahan Autentikasi
        - paragraph [ref=e10]: Kami mengalami masalah saat mencoba mengautentikasi Anda.
      - generic [ref=e12]:
        - paragraph [ref=e13]: Kredensial tidak valid.
        - paragraph [ref=e14]: Periksa username dan password Anda.
      - link "Kembali ke Halaman Masuk" [ref=e16] [cursor=pointer]:
        - /url: /sign-in
    - contentinfo [ref=e17]:
      - generic [ref=e18]:
        - paragraph [ref=e19]: © 2026 BGN Head Office Support System. All rights reserved.
        - generic [ref=e20]:
          - link "Terms of Service" [ref=e21] [cursor=pointer]:
            - /url: /terms-of-service
          - link "Privacy Policy" [ref=e22] [cursor=pointer]:
            - /url: /privacy-policy
    - region "Notifications (F8)":
      - list
    - generic [ref=e23]:
      - button "Hide support label" [ref=e24] [cursor=pointer]:
        - img "WhatsApp Support Label" [ref=e25]
      - link "Contact WhatsApp support" [ref=e26] [cursor=pointer]:
        - /url: https://wa.me/6281110008008
        - img "WhatsApp Support" [ref=e27]
  - alert [ref=e28]
```