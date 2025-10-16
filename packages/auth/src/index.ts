// 기본 인증 관련 타입들
export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// 기본 인증 함수들 (추후 개발)
export const createAuthProvider = () => {
  return {
    login: async (email: string, password: string) => {
      // TODO: 로그인 로직 구현
      console.log("Login attempt:", email);
    },
    logout: async () => {
      // TODO: 로그아웃 로직 구현
      console.log("Logout");
    },
    getCurrentUser: async () => {
      // TODO: 현재 사용자 정보 가져오기
      return null;
    },
  };
};

// 기본 export
export default {
  createAuthProvider,
};
