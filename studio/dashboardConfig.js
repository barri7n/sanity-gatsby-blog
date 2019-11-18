export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dd1fce72597f61e465d6502',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9i6rqo1a',
                  apiId: 'a62121a7-3023-4b09-8deb-0cd20e9100ac'
                },
                {
                  buildHookId: '5dd1fce7ae3e38e13819fe4b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gosfqs4k',
                  apiId: '0366283b-8285-47bf-b5e7-a9ba6a81cd37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/barri7n/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gosfqs4k.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
