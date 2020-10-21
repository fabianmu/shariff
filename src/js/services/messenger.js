'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())

  var title = shariff.getTitle()

  return {
    popup: false,
    shareText: {
      'bg': 'cподеляне',
      'cs': 'sdílet',
      'da': 'del',
      'de': 'teilen',
      'en': 'share',
      'es': 'compartir',
      'fi': 'Jaa',
      'fr': 'partager',
      'hr': 'podijelite',
      'hu': 'megosztás',
      'it': 'condividi',
      'ja': '共有',
      'ko': '공유하기',
      'nl': 'delen',
      'no': 'del',
      'pl': 'udostępnij',
      'pt': 'compartilhar',
      'ro': 'partajează',
      'ru': 'поделиться',
      'sk': 'zdieľať',
      'sl': 'deli',
      'sr': 'podeli',
      'sv': 'dela',
      'tr': 'paylaş',
      'zh': '分享'
    },
    name: 'messenger',
    faPrefix: 'fab',
    faName: 'fa-messenger',
    title: {
      'bg': 'Сподели в Messenger',
      'cs': 'Sdílet na Messengeru',
      'da': 'Del på Messenger',
      'de': 'mit Messenger teilen',
      'en': 'Share on Messenger',
      'es': 'Compartir en Messenger',
      'fi': 'Jaa Messengerissä',
      'fr': 'Partager sur Messenger',
      'hr': 'Podijelite na Messenger',
      'hu': 'Megosztás Messengeren',
      'it': 'Condividi su Messenger',
      'ja': 'Messenger上で共有',
      'ko': 'Messenger에서 공유하기',
      'nl': 'Delen op Messenger',
      'no': 'Del på Messenger',
      'pl': 'Udostępnij przez Messenger',
      'pt': 'Compartilhar no Messenger',
      'ro': 'Partajează pe Messenger',
      'ru': 'Поделиться на Messenger',
      'sk': 'Zdieľať na Messenger',
      'sl': 'Deli na Messenger',
      'sr': 'Podeli na Messenger-u',
      'sv': 'Dela på Messenger',
      'tr': 'Messenger\'ta paylaş',
      'zh': 'Mmessenger上分享'
    },
    shareUrl: 'fb-messenger://share?link=' + url + shariff.getReferrerTrack()
  }
}
