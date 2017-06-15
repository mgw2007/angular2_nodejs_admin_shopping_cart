let localApiUrl = 'http://localhost:3000/admin';
let localSiteUrl = 'http://localhost:3000/';

if (process.env.NODE_ENV == 'production') {
    localApiUrl = '/admin';
    localSiteUrl = '/';

}
export { localApiUrl, localSiteUrl } 