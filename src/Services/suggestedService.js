import * as request from '~/utils/httpRequest';

export const getSuggested = async (page = 1, per_page = 5) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page,
            },
        });
        const hasNextPage = Boolean(res.meta?.pagination?.links?.next);
        return { data: res.data || [], hasMore: hasNextPage };
    } catch (error) {
        console.error('lỗi lấy danh sách users: ', error);
        return { data: [], hasMore: false };
    }
};
