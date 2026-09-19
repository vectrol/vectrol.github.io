export const SITE_CONFIG = {
  github: {
    owner: 'vectrol',
    repo: 'vectrol.github.io',
    branch: 'main',
    postsPath: 'src/content/posts',
  },
  admin: {
    password: import.meta.env.ADMIN_PASSWORD || 'blog2024',
  },
  site: {
    title: 'MyBlog',
    description: '记录生活，分享思考。一个关于技术、生活与成长的个人博客。',
  },
};

// GitHub API 工具函数
export const githubApi = {
  headers(token: string) {
    return {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    };
  },

  contentsUrl() {
    return `https://api.github.com/repos/${SITE_CONFIG.github.owner}/${SITE_CONFIG.github.repo}/contents`;
  },
};
