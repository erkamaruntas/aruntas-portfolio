// www.aruntas.com'a gelen istekleri kalıcı olarak aruntas.com'a yönlendirir;
// diğer tüm istekler public/ altındaki statik dosyalardan cevaplanır.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.aruntas.com') {
      url.hostname = 'aruntas.com';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
