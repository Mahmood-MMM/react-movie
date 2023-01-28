const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0d64c1605d3802c424609cfddc4aa643',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;