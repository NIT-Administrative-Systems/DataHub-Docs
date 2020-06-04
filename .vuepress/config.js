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
        repo: 'NIT-Administrative-Systems/ado-DataHub',
        docsDir: '',
        docsBranch: 'stable',
        editLinks: false,
        lastUpdated: true,

        sidebar: [{
                title: 'Introduction',
                collapsable: false,
                children: [
                    ['/', 'Overview'],
                    ['quickstart', 'Quick Start']
                ],
            },
            {
                title: 'Consumers',
                collapsable: false,
                children: [
                    'overview',
                    'services',
                ].map(file => 'consumers/' + file),
            },
            {
                title: 'Producers',
                collapsable: false,
                children: [
                    'checklist',
                ].map(file => 'producers/' + file),
            },
        ],
    },
}