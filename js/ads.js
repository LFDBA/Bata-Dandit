const ADSENSE_CLIENT_ID = "ca-pub-9120525787235360";

function loadAdsense() {
  if (!ADSENSE_CLIENT_ID || window.__bdAdsInitialized) {
    return;
  }

  window.__bdAdsInitialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
    ADSENSE_CLIENT_ID;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);

  window.addEventListener("load", function () {
    const slots = document.querySelectorAll(".adsbygoogle[data-ad-slot]");
    slots.forEach(function (slot) {
      if (!slot.dataset.adSlot) {
        return;
      }

      slot.dataset.adClient = ADSENSE_CLIENT_ID;
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
  });
}

loadAdsense();
