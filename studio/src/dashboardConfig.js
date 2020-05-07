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
                  buildHookId: '5eb360df4bdf81fc7d93bc51',
                  title: 'Sanity Studio',
                  name: 'blog-studio-a1wpytvn',
                  apiId: '4d38b043-fd91-4167-a315-20409b30d421'
                },
                {
                  buildHookId: '5eb360df53d2dffef6e2cde5',
                  title: 'Blog Website',
                  name: 'blog-web-eykdmn1s',
                  apiId: '841c759c-c8c0-4de7-ae07-64669bb12be6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dkclauson003/blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-web-eykdmn1s.netlify.app', category: 'apps' }
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
