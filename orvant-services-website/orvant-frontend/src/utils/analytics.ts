
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
    hj?: (...args: any[]) => void
  }
}

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
  
  if (import.meta.env.DEV) {
    console.log('[Analytics Event]', eventName, eventParams)
  }
}

export const trackCTAClick = (ctaLocation: string, ctaText: string) => {
  trackEvent('cta_click', {
    location: ctaLocation,
    text: ctaText,
  })
}

export const trackContactSubmit = (formType: string) => {
  trackEvent('contact_submit', {
    form_type: formType,
  })
}

export const trackNewsletterSubscribe = (source: string) => {
  trackEvent('newsletter_subscribe', {
    source: source,
  })
}

export const trackMenuOpen = (menuName: string) => {
  trackEvent('menu_open', {
    menu_name: menuName,
  })
}

export const trackMenuItemClick = (menuName: string, itemName: string) => {
  trackEvent('menu_item_click', {
    menu_name: menuName,
    item_name: itemName,
  })
}

export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  })
}

export const trackInsightView = (insightTitle: string, insightCategory: string) => {
  trackEvent('insight_view', {
    title: insightTitle,
    category: insightCategory,
  })
}

export const trackTombstoneFilter = (filterType: string, filterValue: string) => {
  trackEvent('tombstone_filter', {
    filter_type: filterType,
    filter_value: filterValue,
  })
}
