interface ILoginUser {
  userName: string;
  password: string;
}

interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
}

async function loginUser({ userName, password }: ILoginUser): Promise<ILoginResponse> {
  const result = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: userName, password }),
  });

  const data = await result.json();
  if (!result.ok) {
    throw new Error(data?.message ?? 'Ошибка авторизации');
  }

  return data;
}

export default loginUser;