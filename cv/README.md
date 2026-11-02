# CV

Edit `Yogisha_Niraula_CV.html`, then regenerate the PDF from the repository root:

```sh
google-chrome --headless --no-sandbox --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$PWD/Yogisha_Niraula_CV.pdf" \
  "file://$PWD/cv/Yogisha_Niraula_CV.html"
```

The HTML contains the print layout, with an explicit break before earlier experience.
The generated PDF is at the repository root so static hosting can serve it directly.
Check that the PDF has two pages after changing content, and inspect both pages before publishing.
