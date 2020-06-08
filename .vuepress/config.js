module.exports = {
    title: 'DataHub Docs',
    description: 'DataHub Documentation for Consumers and Producers',
    dest: '.build/docs',
    base: '/DataHub-Docs/',
    head: [
        ['link', { href: 'https://common.northwestern.edu/v8/icons/favicon-16.png', rel: 'icon', sizes: '16x16', type: 'image/png' }],
        ['link', { href: 'https://common.northwestern.edu/v8/icons/favicon-32.png', rel: 'icon', sizes: '32x32', type: 'image/png' }],
    ],

    themeConfig: {
        sidebarDepth: 0,
        repo: 'NIT-Administrative-Systems/DataHub-Docs',
        docsDir: '',
        docsBranch: 'master',
        editLinks: false,
        lastUpdated: true,

        sidebar: [
            {
                title: 'Introduction', 
                collapsable: false,
                children: [
                    'overview',
                    'quickstart'
                ].map(file => 'introduction/' + file),
            },
            {
                title: 'Consumers',
                collapsable: false,
                children: [
                    'request',
                    'services',
                ].map(file => 'consumers/' + file),
            },
            {
                title: 'Producers',
                collapsable: false,
                children: [
                    'checklist',
                    'queries',
                    'database',
                ].map(file => 'producers/' + file),
            },
        ],
    },
}