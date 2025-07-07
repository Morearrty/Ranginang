# Struktur CSS Website Ranginang-Rangining

## File CSS yang Telah Dipisah

### 1. `css/variables.css`
- **Berisi**: CSS Variables (warna, font, spacing, dll), CSS Reset, utility classes
- **Digunakan di**: Semua halaman (harus dimuat pertama)
- **Tujuan**: Centralized styling variables untuk konsistensi

### 2. `css/common.css`
- **Berisi**: Header dan Footer styles yang digunakan di semua halaman
- **Digunakan di**: Semua halaman
- **Tujuan**: Shared components

### 3. `css/index.css`
- **Berisi**: Styles khusus untuk halaman Beranda (index.html)
- **Includes**: 
  - `.beranda-hero` - Hero section beranda
  - `.beranda-content` - Content section beranda
  - `.product-preview-grid` - Preview produk
  - `.beranda-quotes` - Quote sections
- **Digunakan di**: index.html

### 4. `css/profil.css`
- **Berisi**: Styles khusus untuk halaman Profil (profil.html)
- **Includes**:
  - `.profil-hero` - Hero section profil
  - `.profil-container` - Container profil
  - `.profil-title`, `.profil-subtitle` - Typography profil
  - `.profil-text-content` - Content text profil
- **Digunakan di**: profil.html

### 5. `css/produk.css`
- **Berisi**: Styles khusus untuk halaman Produk (produk.html)
- **Includes**:
  - `.produk-hero-new` - Hero section produk
  - `.products-horizontal` - Product grid
  - `.product-card-new` - Product cards
  - `.product-price` - Price tags
- **Digunakan di**: produk.html

### 6. `css/kontak.css`
- **Berisi**: Styles khusus untuk halaman Kontak (kontak.html)
- **Includes**:
  - `.kontak-hero` - Hero section kontak
  - `.floating-social` - Floating social buttons
  - `.footer-kontak` - Footer khusus kontak
- **Digunakan di**: kontak.html

## Urutan Import CSS di HTML

Setiap halaman HTML harus mengimport CSS dalam urutan berikut:

```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/[page-specific].css">
```

## Manfaat Pemisahan CSS

1. **Maintenance Easier**: Edit satu halaman tidak mempengaruhi halaman lain
2. **Load Performance**: Hanya load CSS yang dibutuhkan
3. **No Overwrite Risk**: CSS terpisah mengurangi risiko perubahan tidak diinginkan
4. **Better Organization**: Setiap file CSS fokus pada functionality tertentu
5. **Reusable Components**: Common.css bisa digunakan untuk halaman baru

## File Backup

- `styles-backup.css` - Backup dari file styles.css original
- `styles.css` - Masih ada (dikurangi, berisi CSS yang belum dipindahkan)

## Status Migration

✅ **SELESAI**: 
- Variables & utilities → variables.css
- Header & Footer → common.css  
- Beranda styles → index.css
- Profil styles → profil.css
- Produk styles → produk.css
- Kontak styles → kontak.css
- Semua HTML files sudah diupdate

⚠️ **TERSISA di styles.css**: 
- CSS untuk tentang/about section (jika ada halaman tentang.html)
- CSS umum lainnya yang belum dikategorikan

## Cara Edit

1. **Edit Beranda**: Edit `css/index.css`
2. **Edit Profil**: Edit `css/profil.css` 
3. **Edit Produk**: Edit `css/produk.css`
4. **Edit Kontak**: Edit `css/kontak.css`
5. **Edit Header/Footer**: Edit `css/common.css`
6. **Edit Colors/Variables**: Edit `css/variables.css`
