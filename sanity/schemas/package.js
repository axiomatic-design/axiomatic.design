export  default {
    name: 'package',
    title: 'Package',
    type: 'document',
    fields: [
        {
            name: "name",
            title: "name",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
              maxLength: 96,
            },
          },
          {
              name: 'description',
              title: 'Description',
              type: 'text'
          },
          {
              name: 'docsLink',
              title: 'Docs Link',
              type: 'url'
          },
          {
            name: 'githubLink',
            title: 'GitHub Link',
            type: 'url'
        }
    ]
}