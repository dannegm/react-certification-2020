import { compare } from 'bcryptjs';

import { AUTH_ERROR_USER, AUTH_ERROR_PASS } from '@/shared/utils/constants';

const mokedUsers = [
    {
        uid: '8k9jMxJCfKTH',
        username: 'wizeline',
        password:
            '$2y$12$6oskeDZYl1iVhKcVouVEEeUSAD4V96Y8NTldDfSP5LtXLefLVNC2O',
        displayName: 'Wizeline',
        avatarUrl:
            'https://pbs.twimg.com/profile_images/748203430246637569/gtJ1AOD4_400x400.jpg',
    },
    {
        uid: 'knLA720toMhm',
        username: 'dannegm',
        password:
            '$2y$12$GZRUQIhqrbweKHKXKdqineBxEiSEuxmRiFCS0u4Ul0cnVJbawBoUi',
        displayName: 'Daniel García',
        avatarUrl:
            'https://pbs.twimg.com/profile_images/1256819494770675713/ZGmQkmIJ_400x400.jpg',
    },
];

const requestLogin = async ({ username, password }) => {
    const user = mokedUsers.find((u) => {
        return u.username === username;
    });

    if (!user) {
        throw new Error(AUTH_ERROR_USER);
    }

    const matchCredentials = await compare(password, user.password);

    if (matchCredentials) {
        return user;
    }

    throw new Error(AUTH_ERROR_PASS);
};

export { requestLogin };
