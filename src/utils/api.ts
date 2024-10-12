import { refreshAccessToken, getAccessToken, clearAccessToken, clearRefreshToken } from '@/utils/auth';

/**
 * 認証付きでAPIリクエストを行う関数
 * @param url リクエストを送信するURL
 * @returns APIからのレスポンスデータ
 * @throws リクエストが失敗した場合にエラーをスロー
 */
export const fetchWithAuth = async (url: string, method: string, body_data?: {}): Promise<any> => {
    try {
        let accessToken = getAccessToken();

        let fetchData: any = {
          method: method,
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + accessToken,
          },
          body: JSON.stringify(body_data),
        }
        if (body_data !== undefined) {
          fetchData['headers']['Content-Type'] = 'application/x-www-form-urlencoded';
          fetchData['body'] = new URLSearchParams(body_data);
        }

        let response: any = await fetch(url, fetchData);

        // アクセストークンが無効な場合
        if (response.status === 401) {
            // アクセストークンをリフレッシュ
            accessToken = await refreshAccessToken();

            // 再度リクエスト
            response = await fetchWithAuth(url, method, body_data);
        }

        if (!response.ok) {
            throw new Error('データの取得に失敗しました');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('エラー:', error);
        throw error;
    }
};