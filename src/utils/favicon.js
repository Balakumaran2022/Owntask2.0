export function setRoundedFavicon(src, radiusRatio = 0.25) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = img.width || 64;
    canvas.height = img.height || 64;
    const ctx = canvas.getContext('2d');
    
    const w = canvas.width;
    const h = canvas.height;
    const r = w * radiusRatio;
    
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, Math.min(w, h) / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    
    // Scale up the image slightly to make the logo appear larger in the tab
    const scale = 1.15;
    const drawW = w * scale;
    const drawH = h * scale;
    const offsetX = -(drawW - w) / 2;
    const offsetY = -(drawH - h) / 2;
    
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    
    const dataUrl = canvas.toDataURL('image/png');
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = dataUrl;
  };
  img.src = src;
}
