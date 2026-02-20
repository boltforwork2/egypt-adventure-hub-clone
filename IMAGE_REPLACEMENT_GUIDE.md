# Image Replacement Guide

## Quick Reference for New Tour Images

### Catamaran Trip Images

**Folder:** `/public/Images/catamaran/`

**Files needed (5 images):**
```
catamaran1.jpg
catamaran2.jpg
catamaran3.jpg
catamaran4.jpg
catamaran5.jpg
```

**Suggested photo content:**
1. Catamaran sailing in El Gouna waters
2. People relaxing on catamaran deck
3. Swimming/snorkeling from catamaran
4. El Gouna Marina view
5. Sunset or scenic catamaran shot

---

### Airport Transfer Images

**Folder:** `/public/Images/airport-transfer/`

**Files needed (5 images):**
```
transfer1.jpg
transfer2.jpg
transfer3.jpg
transfer4.jpg
transfer5.jpg
```

**Suggested photo content:**
1. Clean, comfortable transfer vehicle
2. Hurghada Airport exterior
3. Driver helping with luggage
4. Interior of transfer vehicle
5. Vehicle on road to resort/hotel

---

## Image Specifications

- **Format:** .jpg only
- **Resolution:** Maximum 1920px width recommended
- **File size:** Under 500KB for optimal loading
- **Aspect ratio:** 16:9 or 3:2 preferred
- **Quality:** High resolution, well-lit, professional

---

## How to Replace Images

### Option 1: Direct File Replacement
1. Navigate to the image folder
2. Delete the placeholder image
3. Add your new image with THE EXACT SAME NAME
4. Refresh browser - no code changes needed

### Option 2: Command Line (Mac/Linux)
```bash
cd /public/Images/catamaran/
# Replace each file with your images
cp /path/to/your/image1.jpg catamaran1.jpg
cp /path/to/your/image2.jpg catamaran2.jpg
# ... etc
```

### Option 3: Command Line (Windows PowerShell)
```powershell
cd public\Images\catamaran\
Copy-Item "C:\path\to\your\image1.jpg" -Destination "catamaran1.jpg"
Copy-Item "C:\path\to\your\image2.jpg" -Destination "catamaran2.jpg"
# ... etc
```

---

## IMPORTANT RULES

1. **File names MUST match exactly** (case-sensitive)
2. **All images must be .jpg format**
3. **Each folder needs exactly 5 images**
4. **Keep numbering 1-5** (not 0-4)
5. **Do NOT rename or reorganize folders**

---

## Testing After Replacement

1. Clear browser cache
2. Navigate to tour card on homepage
3. Verify image slider shows all 5 images
4. Click "View Details" to see detail page
5. Check gallery section displays correctly
6. Test lightbox (click on gallery images)

---

## Verification Checklist

**Catamaran Trip:**
- [ ] All 5 images present in folder
- [ ] Images load on tour card
- [ ] Slider animation works
- [ ] Detail page shows hero image
- [ ] Gallery displays all 5 images
- [ ] Lightbox preview works

**Airport Transfer:**
- [ ] All 5 images present in folder
- [ ] Images load on service card
- [ ] Slider animation works
- [ ] Detail page shows hero image
- [ ] Gallery displays all 5 images
- [ ] Lightbox preview works

---

## Current Status

**Placeholder images:** Currently using temporary images from glass-boat folder

**Action needed:** Replace with actual catamaran and transfer vehicle photos

**No code changes required** after image replacement
