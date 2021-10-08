export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61607295f294de741ec066fd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ifuzp5gf',
                  apiId: '4e56982e-b8b1-4487-aeb1-77517b5ee8b8'
                },
                {
                  buildHookId: '61607296f294de6fd5c06d8b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ethkfhdt',
                  apiId: 'e93f2799-b747-4fc4-9791-c7d571cd9867'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FrenchBully/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ethkfhdt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
