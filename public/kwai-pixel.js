// Kwai Pixel SDK Loader
(function(w, d, id) {
  w.KwaiAnalyticsObject = 'kwaiq';
  var kwaiq = w.kwaiq = w.kwaiq || [];
  kwaiq.methods = ['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie'];
  
  function factory(method) {
    return function() {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(method);
      kwaiq.push(args);
      return kwaiq;
    };
  }
  
  for (var i = 0; i < kwaiq.methods.length; i++) {
    var method = kwaiq.methods[i];
    kwaiq[method] = factory(method);
  }
  
  kwaiq.instance = function(id) {
    var inst = (kwaiq._i && kwaiq._i[id]) || [];
    for (var j = 0; j < kwaiq.methods.length; j++) {
      var m = kwaiq.methods[j];
      inst[m] = factory(m);
    }
    return inst;
  };
  
  kwaiq.load = function(pixelId, opts) {
    var sdkUrl = 'https://s21-def.ap4r.com/kos/s101/nlav112572/pixel/events.js';
    kwaiq._i = kwaiq._i || {};
    kwaiq._i[pixelId] = [];
    kwaiq._i[pixelId]._u = sdkUrl;
    kwaiq._t = kwaiq._t || {};
    kwaiq._t[pixelId] = +new Date();
    kwaiq._o = kwaiq._o || {};
    kwaiq._o[pixelId] = opts || {};
    
    var query = '?sdkid=' + pixelId + '&lib=kwaiq';
    var fallbackUrl = 'https://s21-def.ks-la.net/kos/s101/nlav112572/pixel/events.js' + query;
    
    var script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = sdkUrl + query;
    script.onerror = function() {
      var fb = d.createElement('script');
      fb.type = 'text/javascript';
      fb.async = true;
      fb.src = fallbackUrl;
      var first = d.getElementsByTagName('script')[0];
      first.parentNode.insertBefore(fb, first);
    };
    var first = d.getElementsByTagName('script')[0];
    first.parentNode.insertBefore(script, first);
  };
  
  kwaiq.load(id);
  kwaiq.page();
})(window, document, '303705578656312');
