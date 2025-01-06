const getBaseUrl = () => {
    if (typeof window !== 'undefined') return ''; // ブラウザでは相対パスを使用
    if (process.env.VERCEL_URL) return `https://prime.howlrs.net`; // Vercel本番環境
    return `http://localhost:${process.env.PORT || 3000}`; // 開発環境
};

export default getBaseUrl;