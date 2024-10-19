
// Địn
// h nghĩa hàm myTrans
export const myTrans = (text) => {
    // Ở đây bạn có thể sử dụng logic dịch thuật, ví dụ: lấy text từ một file JSON hoặc từ API.
    // Hiện tại chỉ trả về chuỗi text gốc.
    return text;
};
// Function to save token to localStorage
export function saveToken(token) {
    if (typeof token === 'string') {
        localStorage.setItem('token', token);
    } else {
        console.error('Token should be a string.');
    }
}

// Function to get token from localStorage
export function getToken() {
    return localStorage.getItem('token');
}
