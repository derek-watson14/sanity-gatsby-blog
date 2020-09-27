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
                  buildHookId: '5f70fffe3aa9eefec86630d5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-q6s2dyv3',
                  apiId: 'ef39ec16-59f0-4917-a7a6-e60e596d0deb'
                },
                {
                  buildHookId: '5f70fffeadb59ee4b8ccba20',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wwt7ah2x',
                  apiId: 'd46f8060-7ac0-4779-a856-7947ab90df33'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/derek-watson14/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wwt7ah2x.netlify.app', category: 'apps' }
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
