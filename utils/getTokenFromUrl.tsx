const getTokenFromUrl = (url:string) => {
    const ind = url.indexOf('&');
    return url.substring(14, ind)
}

export default getTokenFromUrl