export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eaabbc6db0c25a583e8b24a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-y3saj1az',
                  apiId: 'abb58b4d-ad73-4522-b605-cee2bdc46b0d'
                },
                {
                  buildHookId: '5eaabbc6a6cc7651138d5fdc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bzk7m3kv',
                  apiId: '28f7a6df-f807-42f2-8c44-f1626d72d9dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eins23/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bzk7m3kv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
