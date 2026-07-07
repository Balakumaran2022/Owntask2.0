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
    ctx.moveTo(r, 0);
    ctx.lineTo(w - r, 0);
    ctx.quadraticCurveTo(w, 0, w, r);
    ctx.lineTo(w, h - r);
    ctx.quadraticCurveTo(w, h, w - r, h);
    ctx.lineTo(r, h);
    ctx.quadraticCurveTo(0, h, 0, h - r);
    ctx.lineTo(0, r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.closePath();
    ctx.clip();
    
    ctx.drawImage(img, 0, 0);
    
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
